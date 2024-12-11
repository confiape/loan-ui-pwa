import {ResolveFn} from '@angular/router';
import {BorrowersStateService} from '../../services/borrowers-state.service';
import {inject} from '@angular/core';
import {Observable} from 'rxjs';
import {BorrowerClientDtoWithActiveLoans} from '../../core/services/openapi';

export const loanResolver: ResolveFn<BorrowerClientDtoWithActiveLoans[]> = (route, state):Observable<BorrowerClientDtoWithActiveLoans[]> => {
  let borrowersStateService = inject(BorrowersStateService);
  return borrowersStateService.updateBorrowers()
};

