import {Component, input, output} from '@angular/core';
import {DynamicFormBodyComponent} from '../dynamic-form-body/dynamic-form-body.component';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {Field} from '../dynamic-form-body/field.model';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-dynamic-form',
  imports: [
    DynamicFormBodyComponent,
    NgIf,
    MatButtonModule
  ],
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent {

  fields = input.required<Field[]>();
  value = input<Record<string, any>>();
  isModal = input<boolean>(false);
  title = input<string>("");


  formSubmit = output<Record<string, any>>();
  formCancel = output();

  constructor(private dialog: MatDialog) {
  }

  openModal(): void {
    console.log(this.fields())
    console.log(this.title())
    const dialogRef = this.dialog.open(DynamicFormBodyComponent, {
      data: { fields: this.fields(), value: this.value() ,title: this.title() },
      height: '90vh',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.formSubmit.emit(result);
      } else {
        this.formCancel.emit();
      }
    });
  }

  onFormSubmit(value: Record<string, any>): void {
    this.formSubmit.emit(value);
  }

  onFormCancel(): void {
    this.formCancel.emit();
  }
}
