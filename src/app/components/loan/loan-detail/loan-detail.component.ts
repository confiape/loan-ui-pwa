import {Component, input} from '@angular/core';
import {SimpleLoanDtoAndPayments} from '../../../core/services/openapi';
import {CurrencyPipe, DatePipe, NgClass, NgForOf, PercentPipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-loan-detail',
  imports: [
    CurrencyPipe,
    PercentPipe,
    DatePipe,
    NgClass,
    NgForOf,
    FormsModule
  ],
  templateUrl: './loan-detail.component.html'
})
export class LoanDetailComponent {
  loanDetails = input.required<SimpleLoanDtoAndPayments>();
  // Variables para el nuevo pago
  paymentAmount: number  = 0;
  isYape: boolean = false;

  // Método para registrar un pago
  onSubmitPayment(): void {
    // if (this.paymentAmount && this.loanDetails) {
    //   const newPayment = {
    //     id: `payment${this.loanDetails().payments?.length + 1 || 1}`,
    //     dateTime: new Date().toISOString(),
    //     amount: this.paymentAmount,
    //   };
    //
    //   // Agregar el pago a la lista
    //   this.loanDetails.payments = [...(this.loanDetails.payments || []), newPayment];
    //
    //   // Actualizar el total pagado
    //   this.loanDetails.totalPayment = (this.loanDetails.totalPayment || 0) + this.paymentAmount;
    //
    //   // Resetear el formulario
    //   this.paymentAmount = null;
    //   this.isYape = false;
    //
    //   // Simular lógica para Yape (puedes reemplazarlo con una lógica real)
    //   if (this.isYape) {
    //     console.log('Pago registrado como Yape.');
    //   }
    // } else {
    //   console.error('El monto del pago es requerido.');
    // }
  }
}
