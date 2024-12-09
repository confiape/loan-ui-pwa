import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DynamicFormBodyComponent } from './dynamic-form-body.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Field } from './field.model';
import { userEvent, within } from '@storybook/test';

const meta: Meta<DynamicFormBodyComponent> = {
  title: 'Dynamic Form/DynamicFormBody',
  component: DynamicFormBodyComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatSelectModule,
        MatRadioModule,
        MatButtonToggleModule,
      ],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    formSubmit: {
      action: 'formSubmit',
      description: 'Event emitted when the form is submitted',
    },
    formCancel: {
      action: 'formCancel',
      description: 'Event emitted when the form is canceled',
    },
  },
};

export default meta;
type Story = StoryObj<DynamicFormBodyComponent>;

// Default Form Story
export const DefaultForm: Story = {
  args: {
    fields: [
      { name: 'name', type: 'text', displayName: 'Name', validators: [Validators.required] },
      { name: 'age', type: 'number', displayName: 'Age', validators: [Validators.min(1), Validators.max(100)] },
      { name: 'birthday', type: 'date', displayName: 'Birthday', validators: [Validators.required] },
      { name: 'isActive', type: 'boolean', displayName: 'Active', validators: [] },
    ] as Field[],
    value: {},
  },
};

// Form with All Field Types
export const AllFieldTypes: Story = {
  args: {
    fields: [
      { name: 'username', type: 'text', displayName: 'Username', validators: [Validators.required] },
      { name: 'password', type: 'text', displayName: 'Password', validators: [Validators.required, Validators.minLength(8)] },
      { name: 'role', type: 'select', displayName: 'Role', options: [
          { value: 'admin', displayName: 'Admin' },
          { value: 'user', displayName: 'User' },
          { value: 'guest', displayName: 'Guest' },
        ] },
      { name: 'preferences', type: 'multi-select', displayName: 'Preferences', options: [
          { value: 'notifications', displayName: 'Notifications' },
          { value: 'dark_mode', displayName: 'Dark Mode' },
        ] },
      { name: 'gender', type: 'radio', displayName: 'Gender', options: [
          { value: 'male', displayName: 'Male' },
          { value: 'female', displayName: 'Female' },
        ] },
      { name: 'features', type: 'multi-radio', displayName: 'Features', options: [
          { value: 'reports', displayName: 'Reports' },
          { value: 'analytics', displayName: 'Analytics' },
        ] },
      { name: 'theme', type: 'button-toggle', displayName: 'Theme', options: [
          { value: 'dark', displayName: 'Dark' },
          { value: 'light', displayName: 'Light' },
        ] },
      { name: 'modules', type: 'multi-button-toggle', displayName: 'Modules', options: [
          { value: 'dashboard', displayName: 'Dashboard' },
          { value: 'settings', displayName: 'Settings' },
        ] },
    ] as Field[],
    value: {},
  },
};

// Valid Form
export const ValidForm: Story = {
  args: {
    fields: [
      { name: 'name', type: 'text', displayName: 'Name', validators: [Validators.required] },
      { name: 'age', type: 'number', displayName: 'Age', validators: [Validators.required, Validators.min(18)] },
    ] as Field[],
    value: {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId('name-input'), 'John Doe');
    await userEvent.type(canvas.getByTestId('age-input'), '30');
    await userEvent.click(canvas.getByTestId('submit-button'));
  },
};

// Invalid Form
export const InvalidForm: Story = {
  args: {
    fields: [
      { name: 'name', type: 'text', displayName: 'Name', validators: [Validators.required] },
      { name: 'age', type: 'number', displayName: 'Age', validators: [Validators.required, Validators.min(18)] },
    ] as Field[],
    value: {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId('name-input'), '');
    await userEvent.type(canvas.getByTestId('age-input'), '17'); // Invalid: below minimum age
    await userEvent.click(canvas.getByTestId('submit-button'));
  },
};

// Form with Select and Toggle
export const SelectAndToggleForm: Story = {
  args: {
    fields: [
      { name: 'role', type: 'select', displayName: 'Role', options: [
          { value: 'admin', displayName: 'Admin' },
          { value: 'user', displayName: 'User' },
        ] },
      { name: 'theme', type: 'button-toggle', displayName: 'Theme', options: [
          { value: 'dark', displayName: 'Dark' },
          { value: 'light', displayName: 'Light' },
        ] },
    ] as Field[],
    value: {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('role-option-admin'));
    await userEvent.click(canvas.getByTestId('theme-button-toggle-dark'));
    await userEvent.click(canvas.getByTestId('submit-button'));
  },
};

// Responsive View
export const ResponsiveForm: Story = {
  args: {
    fields: [
      { name: 'username', type: 'text', displayName: 'Username', validators: [Validators.required] },
      { name: 'email', type: 'text', displayName: 'Email', validators: [Validators.required, Validators.email] },
    ] as Field[],
    value: {},
  },
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};
