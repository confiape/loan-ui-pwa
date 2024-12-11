import {Component, OnInit} from '@angular/core';
import {BorrowersStateService} from '../../services/borrowers-state.service';
import {Observable} from 'rxjs';
import {BorrowerClientDtoWithActiveLoans, TagDto} from '../../core/services/openapi';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {LoanCardComponent} from '../../components/loan/loan-card/loan-card.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-loan',
  imports: [
    NgIf,
    NgForOf,
    AsyncPipe,
    LoanCardComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatButtonToggleModule
  ],
  templateUrl: './loan.component.html'
})
export class LoanComponent implements OnInit {
  searchText: string = "";
  borrowers$: Observable<BorrowerClientDtoWithActiveLoans[]> = new Observable<BorrowerClientDtoWithActiveLoans[]>();
  tags$: Observable<TagDto[]> = new Observable<TagDto[]>();

  constructor(private _borrowersStateService: BorrowersStateService) {
  }

  ngOnInit(): void {
    this.borrowers$ = this._borrowersStateService.getBorrowerClients();
    this.tags$ = this._borrowersStateService.getTags();
  }

  trackById(index: number, client: BorrowerClientDtoWithActiveLoans): string | undefined {
    return client.id;
  }

  onSearch() {
    this._borrowersStateService.setQueryFilter(this.searchText)
  }

  onTagChange($event: MatButtonToggleChange) {
    this._borrowersStateService.setTagFilter($event.value)
  }
}
