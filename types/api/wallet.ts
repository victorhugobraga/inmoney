export enum TransactionType {
  EXPENSE = 1,
  REVENUE = 2,
}

enum PaymentType {
  DEBIT_CARD = 1,
  CREDIT_CARD = 2,
  MONEY = 3,
  PIX = 4,
  BANK_SLIP = 5,
  TRANSFER = 6,
  OTHER = 7,
}

interface Transaction {
  amount: number;
  description: string;
  transaction_type: TransactionType;
}

interface Tags {
  name: string;
  description: string;
}

export interface Payment {
  description: string;
  payment_type_id: PaymentType;
  installments?: number;
  bank_account_id?: number | null;
  tags?: Tags[];
  transactions: Transaction[];
}
