// import type {Meta, StoryObj} from '@storybook/angular';
// import {moduleMetadata} from '@storybook/angular';
// import {CreateLoanComponent} from './create-loan.component';
// import {ReactiveFormsModule} from '@angular/forms';
//
// import {userEvent, within} from '@storybook/test';
//
// const meta: Meta<CreateLoanComponent> = {
//   title: 'Loan/CreateLoan',
//   component: CreateLoanComponent,
//   decorators: [
//     moduleMetadata({
//       imports: [ReactiveFormsModule],
//     }),
//   ],
//   tags: ['autodocs'],
//   parameters: {
//     layout: 'centered',
//   },
//   argTypes: {
//     onSubmit: {
//       action: 'onSubmit',
//       description: 'Event emitted when the form is submitted',
//     },
//   },
// };
//
// export default meta;
// type Story = StoryObj<CreateLoanComponent>;
//
// // Historia por defecto
// export const DefaultCreateLoan: Story = {
//   args: {
//     clientName: "warren",
//     clientId:"1"
//   },
// };
//
// // Historia para un formulario válido
// export const ValidLoanForm: Story = {
//   args: {
//     clientName: "warren",
//     clientId:"1"
//   },
//   play: async ({canvasElement}) => {
//     const canvas = within(canvasElement);
//     await userEvent.type(canvas.getByTestId('loan-amount-input'), '15000');
//     await userEvent.type(canvas.getByTestId('loan-date-input'), '2024-12-01');
//     await userEvent.type(canvas.getByTestId('loan-duration-input'), '12');
//     await userEvent.type(canvas.getByTestId('loan-interest-rate-input'), '5.5');
//     await userEvent.click(canvas.getByTestId('create-loan-button'));
//   },
// };
//
// // Historia para un formulario inválido
// export const InvalidLoanForm: Story = {
//   args: {
//     clientName: "warren",
//     clientId:"1"
//   },
//   play: async ({canvasElement}) => {
//     const canvas = within(canvasElement);
//     await userEvent.type(canvas.getByTestId('loan-amount-input'), '-5000');
//     await userEvent.click(canvas.getByTestId('create-loan-button'));
//   },
// };
//
// // Historia para probar el formulario en vista responsiva
// export const ResponsiveLoanForm: Story = {
//   args: {
//     clientName: "warren",
//     clientId:"1"
//   },
//   parameters: {
//     viewport: {
//       defaultViewport: 'responsive',
//     },
//   },
// };
//
// // Historia para un préstamo con alto interés
// export const HighInterestLoan: Story = {
//   args: {},
//   play: async ({canvasElement}) => {
//     const canvas = within(canvasElement);
//     await userEvent.type(canvas.getByTestId('loan-amount-input'), '20000');
//     await userEvent.type(canvas.getByTestId('loan-date-input'), '2024-12-01');
//     await userEvent.type(canvas.getByTestId('loan-duration-input'), '24');
//     await userEvent.type(canvas.getByTestId('loan-interest-rate-input'), '15');
//     await userEvent.click(canvas.getByTestId('create-loan-button'));
//   },
// };
//
// // Historia para un formulario vacío
// export const EmptyStateLoanForm: Story = {
//   args: {
//     clientName: "warren",
//     clientId:"1"
//   },
//   play: async ({canvasElement}) => {
//     const canvas = within(canvasElement);
//     await userEvent.click(canvas.getByTestId('create-loan-button'));
//   },
// };
