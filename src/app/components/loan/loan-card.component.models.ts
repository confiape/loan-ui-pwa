export interface Client {
  id: number,
  name: string,
  loans: Loan[]
}

export interface Loan {
  id: number;
  amount: number;
  interestRate: number;
  duration: number;
  monthlyPayment: number;
  status: 'active' | 'overdue' | 'paid';
  progressPercentage: number;
  date: Date;
}

export interface NewLoan {
  amount: number;
  interestRate: number;
  duration: number;
  loanType: string;
}

export interface EditClient {
  name: string;
  alias: string;
  dni: string;
  cellphone: string;
  tags: string[]
}
