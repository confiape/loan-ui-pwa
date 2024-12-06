import {Component, input, OnInit, output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {NewLoan} from '../loan-card.component.models';

@Component({
  selector: 'app-create-loan',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './create-loan.component.html'
})
export class CreateLoanComponent implements OnInit {
  loanForm!: FormGroup;
  clientName = input.required<string>();
  clientId = input.required<string>();

  onLoanCreate = output<{ loan: NewLoan, id: string }>()

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.loanForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(0)]],
      date: ['', Validators.required],
      duration: ['27', [Validators.required, Validators.min(1)]],
      interestRate: ['8.4', [Validators.required, Validators.min(0), Validators.max(100)]],
      loanType: ['daily', Validators.required],
    });
  }

  onSubmit() {
    if (this.loanForm.valid) {
      this.onLoanCreate.emit({
        id: this.clientId(),
        loan: this.loanForm.value
      })
    }
  }

  onCancel() {

  }
}
