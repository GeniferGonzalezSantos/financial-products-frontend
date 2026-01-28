export interface FinancialProduct {
  id: string;
  name: string;
  type: 'credit_card' | 'loan' | 'investment';
  status: 'active' | 'inactive';
  description: string;
  interestRate?: number;
  createdAt: string;
}
