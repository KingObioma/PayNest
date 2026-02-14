'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import {
  Smartphone,
  Wifi,
  Zap,
  Tv,
  CreditCard,
  Globe,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Wallet,
} from 'lucide-react';

const services = [
  { icon: Smartphone, name: 'Airtime', description: 'Buy airtime for all networks instantly' },
  { icon: Wifi, name: 'Data Bundles', description: 'Purchase data bundles at best rates' },
  { icon: Zap, name: 'Electricity', description: 'Pay electricity bills seamlessly' },
  { icon: Tv, name: 'Cable TV', description: 'Subscribe to DSTV, GOTV, Startimes' },
  { icon: CreditCard, name: 'Scratch Cards', description: 'WAEC, NECO, NABTEB pins' },
  { icon: Globe, name: 'Internet', description: 'Pay internet subscriptions' },
];

const features = [
  { icon: Shield, title: 'Secure Payments', description: 'Bank-level encryption protects all your transactions' },
  { icon: Clock, title: 'Instant Delivery', description: 'Get your airtime, data, and pins delivered instantly' },
  { icon: CheckCircle, title: 'Reliable Service', description: '99.9% uptime with 24/7 customer support' },
];

const steps = [
  { number: '01', title: 'Create Account', description: 'Sign up in less than 2 minutes' },
  { number: '02', title: 'Fund Wallet', description: 'Add money via card or bank transfer' },
  { number: '03', title: 'Pay Bills', description: 'Select service and make payment instantly' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Portfolio Demo
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Pay Bills & Buy{' '}
                <span className="text-primary">Scratch Cards</span>{' '}
                Instantly
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                The simplest way to pay bills, buy airtime, data bundles, and exam scratch cards
                in Nigeria. Fast, secure, and reliable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard">
                  <Button size="lg" className="w-full sm:w-auto">
                    Try Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                {/* Mock Phone */}
                <div className="w-72 h-[580px] mx-auto bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="h-8 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                      <div className="w-20 h-5 bg-gray-900 rounded-full" />
                    </div>
                    {/* App Content */}
                    <div className="p-4">
                      {/* Wallet Card */}
                      <div className="bg-wallet-gradient rounded-2xl p-4 text-white mb-4">
                        <p className="text-sm opacity-80">Wallet Balance</p>
                        <p className="text-2xl font-bold">₦125,750.00</p>
                        <div className="flex gap-2 mt-4">
                          <button className="flex-1 bg-white/20 rounded-lg py-2 text-xs">Add Fund</button>
                          <button className="flex-1 bg-white/20 rounded-lg py-2 text-xs">Transfer</button>
                        </div>
                      </div>
                      {/* Quick Actions */}
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Quick Actions</p>
                      <div className="grid grid-cols-4 gap-2">
                        {['Airtime', 'Data', 'TV', 'Power'].map((item) => (
                          <div key={item} className="flex flex-col items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-xl">
                            <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-lg mb-1" />
                            <span className="text-xs text-gray-600 dark:text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to manage your bills and purchases in one place
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.name} className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose PayNest?
              </h2>
              <div className="space-y-6">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.title} className="flex gap-4">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-primary-700 rounded-3xl p-8 text-white">
                <Wallet className="w-16 h-16 mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">Digital Wallet</h3>
                <p className="opacity-80 mb-6">
                  Fund your wallet once and pay for all services instantly. No more multiple payments.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Instant top-up via card or bank</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Track all transactions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Secure and encrypted</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Get started in three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white text-2xl font-bold rounded-2xl mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-gray-300 dark:border-gray-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Experience the demo and see how PayNest makes bill payments effortless.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg">
                Try Demo Dashboard
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="outline" size="lg">
                View Registration
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
