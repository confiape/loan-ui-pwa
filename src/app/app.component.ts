import {Component} from '@angular/core';
import {EditClient} from './components/loan/loan-card.component.models';
import {SimpleLoanDtoAndPayments} from './core/services/openapi';
import {EditClientComponent} from './components/client/edit-client/edit-client.component';

@Component({
  selector: 'app-root',
  imports: [
    EditClientComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'confiape-loans-ui';
  clientData: EditClient = {
    name: 'warren',
    alias: 'aroni',
    dni: '4772445',
    cellphone: '937373210',
    tags: ["wa"]
  };
  selectedLoan: SimpleLoanDtoAndPayments = {
    id: "loan123",
    amount: 10000,
    interest: 0.12,
    dateTime: "2024-12-01T10:00:00Z",
    numberDate: 30,
    borrowerClientId: "client456",
    totalAmount: 11200, // Amount + 12% interest
    totalPayment: 8500,
    payments: [
      {
        id: "payment1",
        dateTime: "2024-12-05T10:00:00Z",
        amount: 2000,
      },
      {
        id: "payment2",
        dateTime: "2024-12-12T10:00:00Z",
        amount: 3000,
      },
      {
        id: "payment3",
        dateTime: "2024-12-19T10:00:00Z",
        amount: 3500,
      },
      {
        id: "payment4",
        dateTime: "2024-12-26T10:00:00Z",
        amount: 200, // Payment not yet made
      },
      {
        id: "payment5",
        dateTime: "2025-01-02T10:00:00Z",
        amount: 0, // Payment not yet made
      },
      {
        id: "payment5",
        dateTime: "2025-01-02T10:00:00Z",
        amount: 0, // Payment not yet made
      },
      {
        id: "payment5",
        dateTime: "2025-01-02T10:00:00Z",
        amount: 0, // Payment not yet made
      },
      {
        id: "payment5",
        dateTime: "2025-01-02T10:00:00Z",
        amount: 0, // Payment not yet made
      },
      {
        id: "payment5",
        dateTime: "2025-01-02T10:00:00Z",
        amount: 0, // Payment not yet made
      },
      {
        id: "payment5",
        dateTime: "2025-01-02T10:00:00Z",
        amount: 0, // Payment not yet made
      },
      {
        id: "payment5",
        dateTime: "2025-01-02T10:00:00Z",
        amount: 0, // Payment not yet made
      },
      {
        id: "payment5",
        dateTime: "2025-01-02T10:00:00Z",
        amount: 0, // Payment not yet made
      },
      {
        id: "payment5",
        dateTime: "2025-01-02T10:00:00Z",
        amount: 0, // Payment not yet made
      },
      {
        id: "payment5",
        dateTime: "2025-01-02T10:00:00Z",
        amount: 10, // Payment not yet made
      },
      {
        id: "payment5",
        dateTime: "2025-01-02T10:00:00Z",
        amount: 10, // Payment not yet made
      },
      {
        id: "payment5",
        dateTime: "2025-01-02T10:00:00Z",
        amount: 10, // Payment not yet made
      },
      {
        id: "payment5",
        dateTime: "2025-01-02T10:00:00Z",
        amount: 10, // Payment not yet made
      },
      {
        id: "payment5",
        dateTime: "2025-01-02T10:00:00Z",
        amount: 10, // Payment not yet made
      },
      {
        id: "payment5",
        dateTime: "2025-01-02T10:00:00Z",
        amount: 10, // Payment not yet made
      },
      {
        id: "payment5",
        dateTime: "2025-01-02T10:00:00Z",
        amount: 10, // Payment not yet made
      },
    ],
  };

}
