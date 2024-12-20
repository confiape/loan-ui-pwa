import {Component, input, OnInit} from '@angular/core';
import {ReactiveFormsModule, Validators} from '@angular/forms';
import {Field} from '../../../core/lib/dinamic-form/dynamic-form-body/field.model';
import {DynamicFormComponent} from '../../../core/lib/dinamic-form/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-create-loan',
  imports: [
    ReactiveFormsModule,
    DynamicFormComponent
  ],
  templateUrl: './create-loan.component.html'
})
export class CreateLoanComponent implements OnInit {

  name = input.required<string>();
  title = input.required<string>();
  borrowerClientId = input.required<string>();

  ngOnInit(): void {

  }

  fields: Field[] = [
    {
      name: 'amount',
      type: 'number',
      displayName: 'Monto',
      validators: [Validators.required, Validators.min(0), Validators.max(10000)]
    },
    {
      name: 'interest',
      type: 'number',
      displayName: 'Interes',
      validators: [Validators.required, Validators.min(0), Validators.max(100)]
    },
    {
      name: 'numberDate',
      type: 'number',
      displayName: 'Numero de dias',
      validators: [Validators.required, Validators.min(0), Validators.max(32)]
    },
    {
      name: 'type',
      type: 'radio',
      displayName: 'LoanType',
      options: [
        {
          value: 'Dayli',
          displayName: 'Diario',
        },
        {
          value: 'Weekly',
          displayName: 'Semanal',
        },
        {
          value: 'Monthly',
          displayName: 'Mensual',
        },
      ],
      validators: [Validators.required, Validators.min(0), Validators.max(32)]
    }
  ];


}
