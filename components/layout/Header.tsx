'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Moon, Sun, Wallet } from 'lucide-react';
import Button from '@/components/ui/Button';

interface HeaderProps {
  showAuthButtons?: boolean;
}

export default function Header({ showAuthButtons = true }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-wallet-gradient rounded-xl flex items-center justify-center">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Pay<span className="text-primary">Nest</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
              Demo
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Auth Buttons - Desktop */}
            {showAuthButtons && (
              <div className="hidden md:flex items-center gap-3">
                <Link href="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link href="/register">
                  <Button variant="primary">Get Started</Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-gray-600 hover:text-primary dark:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-primary dark:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/dashboard" className="text-gray-600 hover:text-primary dark:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                Demo
              </Link>
              {showAuthButtons && (
                <div className="flex flex-col gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full">Login</Button>
                  </Link>
                  <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="primary" className="w-full">Get Started</Button>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
