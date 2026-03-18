export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  joined: string;
  verified: boolean;
}

export interface Wallet {
  balance: number;
  currency: string;
  symbol: string;
  totalCredited: number;
  totalDebited: number;
  pending: number;
}

export interface Transaction {
  id: string;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  category: string;
  date: string;
  status: 'success' | 'pending' | 'failed';
  reference: string;
}

export interface ScratchCard {
  id: string;
  name: string;
  fullName: string;
  price: number;
  description: string;
  color: string;
}

export interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
  href: string;
}

export interface QuickStat {
  label: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: string;
}
