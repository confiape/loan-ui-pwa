import type { Meta, StoryObj } from '@storybook/angular';
import { LoanCardComponent } from './loan-card.component';
import { Client } from '../loan-card.component.models';

const meta: Meta<LoanCardComponent> = {
  title: 'Loan/LoanCard',
  component: LoanCardComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    client: {
      control: 'object',
      description: 'Client information including loans',
    },
    onEditClient: {
      action: 'editClient',
      description: 'Event emitted when editing client information',
    },
    onViewLoanDetails: {
      action: 'viewLoanDetails',
      description: 'Event emitted when viewing loan details',
    },
    onCreateLoan: {
      action: 'createLoan',
      description: 'Event emitted when creating a new loan',
    },
  },
};

export default meta;
type Story = StoryObj<LoanCardComponent>;

const defaultClient: Client = {
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
    client: {
      ...defaultClient,
      loans: [
        ...defaultClient.loans,
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
    client: {
      ...defaultClient,
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
    client: {
      ...defaultClient,
      loans: [
        {
          id: 3,
          amount: 7000,
          interestRate: 4.5,
          duration: 9,
          monthlyPayment: 675.5,
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
    client: {
      ...defaultClient,
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
          monthlyPayment: 675.5,
          status: 'paid',
          progressPercentage: 100,
          date: new Date(),
        },
      ],
    },
  },
};

export const ResponsiveLoanCard: Story = {
  args: {
    client: {
      ...defaultClient,
      loans: [
        {
          id: 1,
          amount: 20000,
          interestRate: 4.2,
          duration: 24,
          monthlyPayment: 950.0,
          status: 'active',
          progressPercentage: 30,
          date: new Date(),
        },
        {
          id: 2,
          amount: 12000,
          interestRate: 3.5,
          duration: 12,
          monthlyPayment: 856.75,
          status: 'overdue',
          progressPercentage: 50,
          date: new Date(),
        },
      ],
    },
  },
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};

export const HighLoanAmountCard: Story = {
  args: {
    client: {
      ...defaultClient,
      loans: [
        {
          id: 1,
          amount: 1000000,
          interestRate: 7.0,
          duration: 120,
          monthlyPayment: 12000.0,
          status: 'active',
          progressPercentage: 40,
          date: new Date(),
        },
      ],
    },
  },
};

export const NoLoansCard: Story = {
  args: {
    client: {
      ...defaultClient,
      loans: [],
    },
  },
  argTypes: {
    client: {
      description: 'Client with no loans. Useful for testing empty states.'
    }
  }
};

export const MixedStatusLoansCard: Story = {
  args: {
    client: {
      ...defaultClient,
      loans: [
        {
          id: 1,
          amount: 5000,
          interestRate: 4.0,
          duration: 6,
          monthlyPayment: 800.0,
          status: 'paid',
          progressPercentage: 100,
          date: new Date(),
        },
        {
          id: 2,
          amount: 8000,
          interestRate: 5.0,
          duration: 12,
          monthlyPayment: 850.0,
          status: 'overdue',
          progressPercentage: 90,
          date: new Date(),
        },
        {
          id: 3,
          amount: 15000,
          interestRate: 6.0,
          duration: 18,
          monthlyPayment: 1000.0,
          status: 'active',
          progressPercentage: 20,
          date: new Date(),
        },
      ],
    },
  },
};
