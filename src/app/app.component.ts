import {Component} from '@angular/core';
import {EditClient} from './components/loan/loan-card.component.models';
import {SimpleLoanDtoAndPayments} from './core/services/openapi';

import {Validators} from '@angular/forms';
import {Field} from './core/lib/dinamic-form/dynamic-form-body/field.model';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
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
  fields: Field[] = [
    {name: 'username', type: 'text', displayName: 'Username', validators: [Validators.required]},
    {
      name: 'password',
      type: 'text',
      displayName: 'Password',
      validators: [Validators.required, Validators.minLength(8)]
    },
    {
      name: 'role', type: 'select', displayName: 'Role', options: [
        {value: 'admin', displayName: 'Admin'},
        {value: 'user', displayName: 'User'},
        {value: 'guest', displayName: 'Guest'},
      ]
    },
    {
      name: 'preferences', type: 'multi-select', displayName: 'Preferences', options: [
        {value: 'notifications', displayName: 'Notifications'},
        {value: 'dark_mode', displayName: 'Dark Mode'},
      ]
    },
    {
      name: 'gender', type: 'radio', displayName: 'Gender', options: [
        {value: 'male', displayName: 'Male'},
        {value: 'female', displayName: 'Female'},
      ]
    },
    {
      name: 'features', type: 'multi-radio', displayName: 'Features', options: [
        {value: 'reports', displayName: 'Reports'},
        {value: 'analytics', displayName: 'Analytics'},
      ]
    },
    {
      name: 'theme', type: 'button-toggle', displayName: 'Theme', options: [
        {value: 'dark', displayName: 'Dark'},
        {value: 'light', displayName: 'Light'},
      ]
    },
    {
      name: 'modules', type: 'multi-button-toggle', displayName: 'Modules', options: [
        {value: 'dashboard', displayName: 'Dashboard'},
        {value: 'settings', displayName: 'Settings'},
      ]
    },
  ];

  value = {
    username: 'John Doe',
    password: 'ware'
  };

  onFormSubmit(value: Record<string, any>): void {
    console.log('Form Submitted:', value);
  }

  onFormCancel(): void {
    console.log('Form Canceled');
  }
}
