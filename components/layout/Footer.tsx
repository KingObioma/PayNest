'use client';

import Link from 'next/link';
import { Wallet, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-wallet-gradient rounded-xl flex items-center justify-center">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Pay<span className="text-primary-400">Nest</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              A modern bill payment platform for Nigeria. Pay bills, buy airtime,
              data bundles, and exam scratch cards with ease.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">About</Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-primary-400 transition-colors">Dashboard</Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-primary-400 transition-colors">Login</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard" className="hover:text-primary-400 transition-colors">Airtime</Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-primary-400 transition-colors">Data Bundles</Link>
              </li>
              <li>
                <Link href="/buy/scratch-cards" className="hover:text-primary-400 transition-colors">Scratch Cards</Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-primary-400 transition-colors">Bill Payment</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-4 mb-6">
            <p className="text-yellow-300 text-sm text-center">
              <strong>Important Notice:</strong> This is a front-end personal project. It is a prototype for UI/UX demonstration. It is not connected to any backend or live services. No transactions or purchases are possible.
            </p>
          </div>
          <p className="text-gray-500 text-sm text-center">
            &copy; {currentYear} PayNest Demo. Built for portfolio showcase purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
