'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card, { CardContent, CardHeader } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { transactions } from '@/lib/mock-data';
import { formatCurrency, formatDateTime } from '@/lib/utils';
import {
  ArrowUpRight,
  ArrowDownLeft,
  Search,
  Filter,
  Download,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const categories = ['All', 'Deposit', 'Airtime', 'Data', 'Scratch Card', 'Cable TV', 'Electricity', 'Internet'];

export default function TransactionsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'credit' | 'debit'>('all');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterStatus, setFilterStatus] = useState<'all' | 'success' | 'pending' | 'failed'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const itemsPerPage = 8;

  const filteredTransactions = transactions.filter((tx) => {
    if (filterType !== 'all' && tx.type !== filterType) return false;
    if (filterCategory !== 'All' && tx.category !== filterCategory) return false;
    if (filterStatus !== 'all' && tx.status !== filterStatus) return false;
    if (searchQuery && !tx.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalCredit = transactions.filter(t => t.type === 'credit').reduce((sum, t) => sum + t.amount, 0);
  const totalDebit = transactions.filter(t => t.type === 'debit').reduce((sum, t) => sum + t.amount, 0);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Transaction History
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              View and manage all your transactions
            </p>
          </div>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          <Card className="p-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Transactions</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
              {transactions.length}
            </p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Credit</p>
            <p className="text-2xl font-bold text-green-600 mt-1">
              +{formatCurrency(totalCredit)}
            </p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Debit</p>
            <p className="text-2xl font-bold text-red-600 mt-1">
              -{formatCurrency(totalDebit)}
            </p>
          </Card>
        </div>

        {/* Transactions Table */}
        <Card>
          <CardHeader className="flex flex-col gap-4">
            {/* Search and Filter Toggle */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search transactions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Filters */}
            {showFilters && (
              <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                {/* Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Type
                  </label>
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value as typeof filterType)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  >
                    <option value="all">All Types</option>
                    <option value="credit">Credit</option>
                    <option value="debit">Debit</option>
                  </select>
                </div>

                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Status Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Status
                  </label>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value as typeof filterStatus)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  >
                    <option value="all">All Status</option>
                    <option value="success">Success</option>
                    <option value="pending">Pending</option>
                    <option value="failed">Failed</option>
                  </select>
                </div>
              </div>
            )}
          </CardHeader>
          <CardContent className="p-0">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Transaction
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {paginatedTransactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
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
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {tx.reference}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant="default">{tx.category}</Badge>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-900 dark:text-white">
                          {formatDateTime(tx.date)}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <p className={`text-sm font-semibold ${
                          tx.type === 'credit' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {tx.type === 'credit' ? '+' : '-'}{formatCurrency(tx.amount)}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <Badge
                          variant={tx.status === 'success' ? 'success' : tx.status === 'pending' ? 'warning' : 'error'}
                        >
                          {tx.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile List */}
            <div className="md:hidden divide-y divide-gray-100 dark:divide-gray-700">
              {paginatedTransactions.map((tx) => (
                <div key={tx.id} className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
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
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {formatDateTime(tx.date)}
                        </p>
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
                </div>
              ))}
            </div>

            {/* Empty State */}
            {paginatedTransactions.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">No transactions found</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
                  {Math.min(currentPage * itemsPerPage, filteredTransactions.length)} of{' '}
                  {filteredTransactions.length} transactions
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
