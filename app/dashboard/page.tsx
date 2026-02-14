'use client';

import Link from 'next/link';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card, { CardContent, CardHeader } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { wallet, transactions, quickStats, services, recentActivity } from '@/lib/mock-data';
import { formatCurrency, formatDate, getStatusColor } from '@/lib/utils';
import {
  Plus,
  Send,
  ArrowUpRight,
  ArrowDownLeft,
  TrendingUp,
  Calendar,
  CreditCard,
  PiggyBank,
  Smartphone,
  Wifi,
  Zap,
  Tv,
  Globe,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Calendar,
  CreditCard,
  PiggyBank,
  Smartphone,
  Wifi,
  Zap,
  Tv,
  Globe,
};

export default function DashboardPage() {
  const recentTransactions = transactions.slice(0, 5);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Wallet Card */}
        <Card variant="wallet" className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-white/80 text-sm mb-1">Wallet Balance</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {formatCurrency(wallet.balance, wallet.symbol)}
              </h2>
              <p className="text-white/60 text-sm mt-2">
                Available for spending
              </p>
            </div>
            <div className="flex gap-3">
              <Button className="bg-white/20 hover:bg-white/30 text-white border-0">
                <Plus className="w-4 h-4 mr-2" />
                Add Fund
              </Button>
              <Button className="bg-white/20 hover:bg-white/30 text-white border-0">
                <Send className="w-4 h-4 mr-2" />
                Transfer
              </Button>
            </div>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {quickStats.map((stat, index) => {
            const Icon = iconMap[stat.icon] || TrendingUp;
            return (
              <Card key={index} className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                      {stat.value}
                    </p>
                    {stat.change && (
                      <p className={`text-xs mt-1 ${
                        stat.changeType === 'positive' ? 'text-green-600' :
                        stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-500'
                      }`}>
                        {stat.change}
                      </p>
                    )}
                  </div>
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Actions</h3>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {services.map((service) => {
                const Icon = iconMap[service.icon] || CreditCard;
                return (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center mb-2 group-hover:bg-primary transition-colors">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {service.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Transactions */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Transactions</h3>
              <Link href="/transactions" className="text-sm text-primary hover:underline">
                View All
              </Link>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-gray-100 dark:divide-gray-700">
                {recentTransactions.map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        tx.type === 'credit'
                          ? 'bg-green-100 dark:bg-green-900'
                          : 'bg-red-100 dark:bg-red-900'
                      }`}>
                        {tx.type === 'credit' ? (
                          <ArrowDownLeft className={`w-5 h-5 ${
                            tx.type === 'credit' ? 'text-green-600' : 'text-red-600'
                          }`} />
                        ) : (
                          <ArrowUpRight className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {tx.description}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {formatDate(tx.date)}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-semibold ${
                        tx.type === 'credit' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {tx.type === 'credit' ? '+' : '-'}{formatCurrency(tx.amount)}
                      </p>
                      <Badge variant={tx.status === 'success' ? 'success' : 'warning'}>
                        {tx.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-gray-100 dark:divide-gray-700">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <div>
                        <p className="text-sm text-gray-900 dark:text-white">{activity.action}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {activity.amount}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
