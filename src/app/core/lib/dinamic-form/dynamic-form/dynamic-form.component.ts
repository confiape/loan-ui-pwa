import {Component, EventEmitter, Input, Output} from '@angular/core';
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
  @Input() fields: Field[] = [];
  @Input() value: Record<string, any> = {};
  @Input() isModal: boolean = false;

  @Output() formSubmit = new EventEmitter<Record<string, any>>();
  @Output() formCancel = new EventEmitter<void>();

  constructor(private dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(DynamicFormBodyComponent, {
      width: '500px',
      data: { fields: this.fields, value: this.value },
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
