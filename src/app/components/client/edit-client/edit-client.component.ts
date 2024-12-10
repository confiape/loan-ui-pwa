import {Component, input, OnInit, output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {EditClient} from '../../loan/loan-card.component.models';
import {NgForOf, NgIf} from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-edit-client',
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './edit-client.component.html',


})
export class EditClientComponent implements OnInit {
  clientData = input.required<EditClient>();
  availableTags = input.required<string[]>();

  editedClient = output<EditClient>();
  canceledEdit = output();
  editClientForm!: FormGroup;


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.editClientForm = this.fb.group({
      name: [this.clientData().name || '', [Validators.required]],
      alias: [this.clientData().alias || ''],
      dni: [this.clientData().dni || '', [Validators.required]],
      cellphone: [this.clientData().cellphone || ''],
      tags: [this.clientData().tags || [], Validators.required],
    });
  }

  onSubmit() {
    if (this.editClientForm.valid) {
      this.editedClient.emit(this.editClientForm.value);
    }
  }

  onCancel() {
    this.canceledEdit.emit();
  }
}
