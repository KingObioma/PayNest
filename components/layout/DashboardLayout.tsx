'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Wallet,
  CreditCard,
  Receipt,
  User,
  LogOut,
  Menu,
  X,
  Moon,
  Sun,
  Bell,
} from 'lucide-react';
import { user } from '@/lib/mock-data';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/wallet', label: 'Wallet', icon: Wallet },
  { href: '/buy/scratch-cards', label: 'Scratch Cards', icon: CreditCard },
  { href: '/transactions', label: 'Transactions', icon: Receipt },
  { href: '/profile', label: 'Profile', icon: User },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 z-40 flex items-center justify-between px-4">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          <Menu className="w-6 h-6" />
        </button>
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-wallet-gradient rounded-lg flex items-center justify-center">
            <Wallet className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            Pay<span className="text-primary">Nest</span>
          </span>
        </Link>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 h-full bg-white dark:bg-gray-800 border-r border-gray-100 dark:border-gray-700 z-50 transition-transform duration-300 w-64',
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-100 dark:border-gray-700">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-wallet-gradient rounded-xl flex items-center justify-center">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Pay<span className="text-primary">Nest</span>
            </span>
          </Link>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsSidebarOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                )}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Info */}
        <div className="absolute bottom-20 left-0 right-0 px-4">
          <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
              {user.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {user.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {user.email}
              </p>
            </div>
          </div>
        </div>

        {/* Logout */}
        <div className="absolute bottom-4 left-0 right-0 px-4">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 dark:text-gray-300 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-all duration-200"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            <span className="font-medium">Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Desktop Header */}
        <header className="hidden lg:flex h-16 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 items-center justify-between px-6">
          <div>
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
              Welcome back, {user.name.split(' ')[0]}!
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
              {user.name.charAt(0)}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-6 mt-16 lg:mt-0 min-h-[calc(100vh-4rem)]">
          {children}
        </main>

        {/* Footer Disclaimer */}
        <footer className="px-4 lg:px-6 py-4 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            This is a front-end personal project. It is a prototype for UI/UX demonstration. It is not connected to any backend or live services. No transactions or purchases are possible.
          </p>
        </footer>
      </div>
    </div>
  );
}
