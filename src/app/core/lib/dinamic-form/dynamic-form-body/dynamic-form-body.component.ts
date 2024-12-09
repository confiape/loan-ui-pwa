import {Component, Inject, input, OnInit, Optional, output,} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NgForOf, NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {Field} from './field.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dynamic-form-body',
  imports: [
    ReactiveFormsModule,
    NgSwitch,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    NgForOf,
    NgSwitchCase,
    NgIf,
    MatDatepickerModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonToggleModule,
  ],
  templateUrl: './dynamic-form-body.component.html',
  providers: [provideNativeDateAdapter()]
})
export class DynamicFormBodyComponent implements OnInit {
  fieldsInput = input<Field[]>();
  valueInput = input<Record<string, any>>();
  titleInput = input<string>();

  fields: Field[] = [];
  value: Record<string, any> = {};
  title = ""

  formSubmit = output<Record<string, any>>();
  formCancel = output();

  form!: FormGroup;
  isModal: boolean = false;

  constructor(
    private fb: FormBuilder,
    @Optional() private dialogRef?: MatDialogRef<DynamicFormBodyComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data?: { fields: Field[]; value: any }
  ) {

  }

  ngOnInit(): void {
    this.isModal = !!this.dialogRef;

    if (this.isModal && this.data) {
      this.fields = this.data?.fields;
      this.value = this.data?.value;
    }
    if (!this.isModal) {
      this.fields = this.fieldsInput() ?? [];
      this.value = this.valueInput() ?? {};
      this.title = this.titleInput() ?? ""
    }
    this.buildForm();

  }

  buildForm(): void {
    const controls: Record<string, any> = {};

    this.fields?.forEach((field) => {
      let val = this.value;
      controls[field.name] = [
        val && val[field.name] || (field.type === 'multi-radio' || field.type === 'multi-select' ? [] : ''),
        field.validators || [],
      ];
    });

    this.form = this.fb.group(controls);
  }

  toggleMultiToggleValue(fieldName: string, value: any, checked: boolean): void {
    const control = this.form.get(fieldName);
    if (control) {
      let currentValue = control.value || [];
      if (!Array.isArray(currentValue)) {
        currentValue = [];
      }

      if (checked) {
        control.setValue([...currentValue, value]);
      } else {
        control.setValue(currentValue.filter((v: any) => v !== value));
      }
    }
  }

  isOptionChecked(fieldName: string, value: any): boolean {
    const control = this.form.get(fieldName);
    const currentValue = control?.value;

    return Array.isArray(currentValue) && currentValue.includes(value);
  }

  onSubmit(): void {
    if (this.form.valid) {
      if (this.isModal) {
        this.dialogRef?.close(this.form.value);
      } else {
        this.formSubmit.emit(this.form.value);
      }
    }
  }

  onCancel(): void {
    if (this.isModal) {
      this.dialogRef?.close();
    } else {
      this.formCancel.emit();
    }
  }

  trackByFn(index: number, field: Field): string {
    return field.name;
  }
}

