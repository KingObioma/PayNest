'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card, { CardContent, CardHeader } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import Input from '@/components/ui/Input';
import { wallet, transactions } from '@/lib/mock-data';
import { formatCurrency, formatDateTime } from '@/lib/utils';
import {
  Plus,
  Download,
  ArrowUpRight,
  ArrowDownLeft,
  TrendingUp,
  TrendingDown,
  Clock,
  Filter,
  Search,
} from 'lucide-react';

export default function WalletPage() {
  const [isAddFundModalOpen, setIsAddFundModalOpen] = useState(false);
  const [filterType, setFilterType] = useState<'all' | 'credit' | 'debit'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTransactions = transactions.filter((tx) => {
    if (filterType !== 'all' && tx.type !== filterType) return false;
    if (searchQuery && !tx.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const walletStats = [
    {
      label: 'Total Credited',
      value: wallet.totalCredited,
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900',
    },
    {
      label: 'Total Debited',
      value: wallet.totalDebited,
      icon: TrendingDown,
      color: 'text-red-600',
      bgColor: 'bg-red-100 dark:bg-red-900',
    },
    {
      label: 'Pending',
      value: wallet.pending,
      icon: Clock,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900',
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Wallet Balance Card */}
        <Card variant="wallet" className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-white/80 text-sm mb-2">Available Balance</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {formatCurrency(wallet.balance, wallet.symbol)}
              </h1>
              <p className="text-white/60 text-sm mt-3">
                Wallet ID: BPW-001234567
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => setIsAddFundModalOpen(true)}
                className="bg-white text-primary hover:bg-white/90"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Fund
              </Button>
              <Button className="bg-white/20 hover:bg-white/30 text-white border-0">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </Card>

        {/* Wallet Stats */}
        <div className="grid sm:grid-cols-3 gap-4">
          {walletStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="p-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                      {formatCurrency(stat.value, wallet.symbol)}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Transaction History */}
        <Card>
          <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Transaction History</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search transactions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              {/* Filter */}
              <div className="flex gap-2">
                {(['all', 'credit', 'debit'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      filterType === type
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {filteredTransactions.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">No transactions found</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100 dark:divide-gray-700">
                {filteredTransactions.map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        tx.type === 'credit'
                          ? 'bg-green-100 dark:bg-green-900'
                          : 'bg-red-100 dark:bg-red-900'
                      }`}>
                        {tx.type === 'credit' ? (
                          <ArrowDownLeft className="w-5 h-5 text-green-600" />
                        ) : (
                          <ArrowUpRight className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {tx.description}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {formatDateTime(tx.date)}
                          </span>
                          <span className="text-xs text-gray-400">|</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {tx.reference}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-semibold ${
                        tx.type === 'credit' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {tx.type === 'credit' ? '+' : '-'}{formatCurrency(tx.amount)}
                      </p>
                      <Badge
                        variant={tx.status === 'success' ? 'success' : tx.status === 'pending' ? 'warning' : 'error'}
                        className="mt-1"
                      >
                        {tx.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Add Fund Modal */}
      <Modal
        isOpen={isAddFundModalOpen}
        onClose={() => setIsAddFundModalOpen(false)}
        title="Add Funds to Wallet"
      >
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">Current Balance</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatCurrency(wallet.balance, wallet.symbol)}
            </p>
          </div>
          <Input
            label="Amount"
            type="number"
            placeholder="Enter amount"
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Payment Method
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-4 border-2 border-primary rounded-lg text-center">
                <span className="text-sm font-medium text-primary">Card Payment</span>
              </button>
              <button className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg text-center hover:border-primary transition-colors">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Bank Transfer</span>
              </button>
            </div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
            <p className="text-sm text-yellow-700 dark:text-yellow-300 text-center">
              This is a demo. No actual payment will be processed.
            </p>
          </div>
          <Button className="w-full" onClick={() => setIsAddFundModalOpen(false)}>
            Proceed to Pay
          </Button>
        </div>
      </Modal>
    </DashboardLayout>
  );
}
