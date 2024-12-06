import type { Meta, StoryObj } from '@storybook/angular';
import {LoanCardComponent, User} from './loan-card.component';

const meta: Meta<LoanCardComponent> = {
  title: 'Loan/LoanCard',
  component: LoanCardComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    user: {
      control: 'object',
      description: 'Información del usuario con préstamos',
    },
    paymentClick: {
      action: 'paymentClick',
      description: 'Evento emitido al hacer clic en un pago',
    },
    viewDetailsClick: {
      action: 'viewDetailsClick',
      description: 'Evento emitido al ver detalles de un préstamo',
    },
  },
};

export default meta;
type Story = StoryObj<LoanCardComponent>;

const defaultUser:User = {
  id: 1,
  name: 'Warren',
  loans: [
    {
      id: 1,
      amount: 10000,
      interestRate: 5.5,
      duration: 12,
      monthlyPayment: 856.75,
      status: 'active',
      progressPercentage: 65,
      date: new Date(),
    },
  ],
};

export const ActiveLoanCard: Story = {
  args: {
    user: {
      ...defaultUser,
      loans: [
        ...defaultUser.loans,
        {
          id: 2,
          amount: 5000,
          interestRate: 3.5,
          duration: 6,
          monthlyPayment: 856.75,
          status: 'active',
          progressPercentage: 45,
          date: new Date(),
        },
      ],
    },
  },
};

export const OverdueLoanCard: Story = {
  args: {
    user: {
      ...defaultUser,
      loans: [
        {
          id: 1,
          amount: 15000,
          interestRate: 6.5,
          duration: 18,
          monthlyPayment: 950.25,
          status: 'overdue',
          progressPercentage: 85,
          date: new Date(),
        },
      ],
    },
  },
};

export const PaidLoanCard: Story = {
  args: {
    user: {
      ...defaultUser,
      loans: [
        {
          id: 3,
          amount: 7000,
          interestRate: 4.5,
          duration: 9,
          monthlyPayment: 675.50,
          status: 'paid',
          progressPercentage: 100,
          date: new Date(),
        },
      ],
    },
  },
};

export const MultipleLoans: Story = {
  args: {
    user: {
      ...defaultUser,
      loans: [
        {
          id: 1,
          amount: 10000,
          interestRate: 5.5,
          duration: 12,
          monthlyPayment: 856.75,
          status: 'active',
          progressPercentage: 65,
          date: new Date(),
        },
        {
          id: 2,
          amount: 15000,
          interestRate: 6.5,
          duration: 18,
          monthlyPayment: 950.25,
          status: 'overdue',
          progressPercentage: 85,
          date: new Date(),
        },
        {
          id: 3,
          amount: 7000,
          interestRate: 4.5,
          duration: 9,
          monthlyPayment: 675.50,
          status: 'paid',
          progressPercentage: 100,
          date: new Date(),
        },
      ],
    },
  },
};
