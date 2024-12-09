import {ValidatorFn} from '@angular/forms';

export interface Option {
  value: string | number;
  displayName: string;
}

export interface Field {
  name: string;
  type: 'text' | 'number' | 'date' | 'boolean' | 'select' | 'radio' | 'multi-select' | 'multi-radio' | 'button-toggle' | 'multi-button-toggle';
  displayName: string;
  validators?: ValidatorFn[];
  options?: Option[];
}
