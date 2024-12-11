import {Component, inject, input, OnInit, output} from '@angular/core';
import {CurrencyPipe, DatePipe, NgClass} from '@angular/common';
import {BorrowerClientDtoWithActiveLoans, LoanDtoAndPayments} from '../../../core/services/openapi';
import {MatDialog} from '@angular/material/dialog';
import {CreateLoanComponent} from '../create-loan/create-loan.component';
import {BorrowersStateService} from '../../../services/borrowers-state.service';
import {LoanDetailComponent} from '../loan-detail/loan-detail.component';


@Component({
  selector: 'app-loan-card',
  imports: [
    NgClass,
    CurrencyPipe,
    DatePipe,
    CreateLoanComponent
  ],
  templateUrl: './loan-card.component.html'
})
export class LoanCardComponent implements OnInit {
  readonly dialog = inject(MatDialog);


  ngOnInit(): void {
    this._borrowersStateService.setBorrowerClient(this.client());
  }

  client = input.required<BorrowerClientDtoWithActiveLoans>();

  readonly _dialog = inject(MatDialog);
  readonly _borrowersStateService = inject(BorrowersStateService);

  editedBorrowerClient = output<BorrowerClientDtoWithActiveLoans>()

  createdLoan = output()

  getStatusClass(): string {
    const statusClasses = {
      'active': 'bg-green-100 text-green-800',
      'overdue': 'bg-red-100 text-red-800',
      'paid': 'bg-gray-100 text-gray-800'
    };
    return statusClasses['paid'] || '';
  }


  editClient() {
    this.editedBorrowerClient.emit(this.client())
  }

  viewLoanDetails(loan: LoanDtoAndPayments) {
    const dialogRef = this.dialog.open(LoanDetailComponent, {
      data: {
        loan: loan,
        name: this.client().name,
      },
    });
  }
}

