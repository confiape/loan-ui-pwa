import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DynamicFormBodyComponent } from './dynamic-form-body.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Field } from './field.model';
import {userEvent, within} from '@storybook/test';

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
      { name: 'name', type: 'text', displayName: 'Name' },
      { name: 'age', type: 'number', displayName: 'Age' },
      { name: 'birthday', type: 'date', displayName: 'Birthday' },
      { name: 'isActive', type: 'boolean', displayName: 'Active' },
    ] as Field[],
    value: {},
  },
};

// Form with Select Field
export const FormWithSelect: Story = {
  args: {
    fields: [
      {
        name: 'country',
        type: 'select',
        displayName: 'Country',
        options: [
          { value: 'usa', displayName: 'United States' },
          { value: 'canada', displayName: 'Canada' },
          { value: 'mexico', displayName: 'Mexico' },
        ],
      },
    ] as Field[],
    value: {},
  },
};

// Valid Form
export const ValidForm: Story = {
  args: {
    fields: [
      { name: 'name', type: 'text', displayName: 'Name', validators: [] },
      { name: 'age', type: 'number', displayName: 'Age', validators: [] },
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
      { name: 'name', type: 'text', displayName: 'Name', validators: [] },
      { name: 'age', type: 'number', displayName: 'Age', validators: [] },
    ] as Field[],
    value: {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId('name-input'), '');
    await userEvent.type(canvas.getByTestId('age-input'), '-10');
    await userEvent.click(canvas.getByTestId('submit-button'));
  },
};

// Form with Multi-Select
export const FormWithMultiSelect: Story = {
  args: {
    fields: [
      {
        name: 'skills',
        type: 'multi-select',
        displayName: 'Skills',
        options: [
          { value: 'js', displayName: 'JavaScript' },
          { value: 'ts', displayName: 'TypeScript' },
          { value: 'css', displayName: 'CSS' },
        ],
      },
    ] as Field[],
    value: { skills: ['js'] },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('skills-option-ts'));
    await userEvent.click(canvas.getByTestId('skills-option-css'));
    await userEvent.click(canvas.getByTestId('submit-button'));
  },
};

// Responsive View
export const ResponsiveForm: Story = {
  args: {
    fields: [
      { name: 'name', type: 'text', displayName: 'Name' },
      { name: 'age', type: 'number', displayName: 'Age' },
    ] as Field[],
    value: {},
  },
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};
