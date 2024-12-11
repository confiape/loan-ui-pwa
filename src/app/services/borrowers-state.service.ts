import {Injectable} from '@angular/core';
import {
  BorrowerClientDtoWithActiveLoans,
  BorrowerService,
  LoanDtoAndPayments,
  TagDto,
  TagService
} from '../core/services/openapi';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BorrowersStateService {
  private borrowerClients$: BehaviorSubject<BorrowerClientDtoWithActiveLoans[]> = new BehaviorSubject<BorrowerClientDtoWithActiveLoans[]>([]);
  private borrowerClient$: BehaviorSubject<BorrowerClientDtoWithActiveLoans | null> = new BehaviorSubject<BorrowerClientDtoWithActiveLoans | null>(null);
  private currentLoan$: BehaviorSubject<LoanDtoAndPayments | null> = new BehaviorSubject<LoanDtoAndPayments | null>(null);
  private tags$: BehaviorSubject<TagDto[]> = new BehaviorSubject<TagDto[]>([]);

  private queryFilter$: BehaviorSubject<string> = new BehaviorSubject("");
  private tagFilter$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor(private borrowerService: BorrowerService, private tagService: TagService) {
  }

  setQueryFilter(query: string) {
    this.queryFilter$.next(query)
  }

  setTagFilter(tags: string[]) {

    this.tagFilter$.next(tags)
  }
  getTags():Observable<TagDto[]>{
    return this.tags$.asObservable()
  }
  getBorrowerClients(): Observable<BorrowerClientDtoWithActiveLoans[]> {
    return this.borrowerClients$.pipe(
      switchMap(borrowers => this.tagFilter$.pipe(
        map(tags => {
          if (tags.length == 0)
            return borrowers;
          return borrowers.filter(borrower => borrower.tags?.some(bt => tags.some(t => t == bt.id)))
        })
      )),
      switchMap(borrower => this.queryFilter$.pipe(
        map(query => {
          return borrower.filter(b => (b.name ?? "" + b.title ?? "" + b.dni ?? "").toLowerCase().includes(query.toLowerCase()))
        })
      ))
    )

  }

  getBorrowerClient(): Observable<BorrowerClientDtoWithActiveLoans | null> {
    return this.borrowerClient$.asObservable()
  }

  getCurrentLoan(): Observable<LoanDtoAndPayments | null> {
    return this.currentLoan$.asObservable()
  }


  selectLoan(currentLoan: LoanDtoAndPayments): void {
    this.currentLoan$.next(currentLoan)
  }

  updateBorrowers(): Observable<BorrowerClientDtoWithActiveLoans[]> {
    return this.borrowerService.apiBorrowerGetAllWithActiveLoansGet()
      .pipe(
        tap(e => this.borrowerClients$.next(e))
      );
  }

  updateTags(): Observable<TagDto[] | null | undefined> {
    return this.tagService.apiTagGet().pipe(
      map(e => e.result),
      tap(e => this.tags$.next(e ?? []))
    )
  }

  setBorrowerClient(currentBorrowerClientDto: BorrowerClientDtoWithActiveLoans): void {
    this.borrowerClient$.next(currentBorrowerClientDto)
  }

  updateByBorrowerClientId(borrowerClientId: string): void {
    this.borrowerService.apiBorrowerGetAByIdWithActiveLoansGet(borrowerClientId)
      .subscribe({
        next: newBorrower => {
          const currentBorrowers = this.borrowerClients$.value;

          const index = currentBorrowers.findIndex(persona => persona.id === newBorrower.id);
          if (index !== -1) {
            currentBorrowers[index] = newBorrower;
          } else {
            currentBorrowers.unshift(newBorrower);
          }
          this.borrowerClients$.next(currentBorrowers)
        }
      })
  }


}
