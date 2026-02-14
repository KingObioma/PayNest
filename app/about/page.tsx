'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import {
  Wallet,
  Smartphone,
  Wifi,
  Zap,
  Tv,
  CreditCard,
  Globe,
  Shield,
  Clock,
  Users,
  Code,
  Layers,
  AlertTriangle,
} from 'lucide-react';

const features = [
  { icon: Smartphone, name: 'Airtime Purchase', description: 'Buy airtime for all Nigerian networks' },
  { icon: Wifi, name: 'Data Bundles', description: 'Purchase data at competitive rates' },
  { icon: Zap, name: 'Electricity Bills', description: 'Pay electricity bills instantly' },
  { icon: Tv, name: 'Cable TV', description: 'Subscribe to DSTV, GOTV, Startimes' },
  { icon: CreditCard, name: 'Scratch Cards', description: 'WAEC, NECO, NABTEB, NBAIS pins' },
  { icon: Globe, name: 'Internet Bills', description: 'Pay internet subscriptions' },
];

const techStack = [
  { name: 'Next.js 14', description: 'React framework with App Router' },
  { name: 'TypeScript', description: 'Type-safe development' },
  { name: 'Tailwind CSS', description: 'Utility-first styling' },
  { name: 'Lucide Icons', description: 'Beautiful SVG icons' },
];

const stats = [
  { value: '50K+', label: 'Transactions Processed' },
  { value: '10K+', label: 'Happy Customers' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-16 h-16 bg-wallet-gradient rounded-2xl flex items-center justify-center">
                <Wallet className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About PayNest
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A modern bill payment platform designed to make paying bills, buying airtime,
              and purchasing exam scratch cards simple and convenient for Nigerians.
            </p>
          </div>
        </section>

        {/* Disclaimer Banner */}
        <section className="bg-yellow-50 dark:bg-yellow-900/30 border-y border-yellow-200 dark:border-yellow-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <AlertTriangle className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                  Important Notice
                </h3>
                <p className="text-yellow-700 dark:text-yellow-300">
                  This is a front-end personal project. It is a prototype for UI/UX demonstration. It is not connected to any backend or live services. No transactions or purchases are possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Features Demonstrated
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                This prototype showcases the following bill payment services
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.name} className="p-6">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Platform Statistics
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Sample metrics from the original platform
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <Card key={stat.label} className="p-6 text-center">
                  <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Built with Modern Technology
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  This portfolio demo is built using the latest web technologies to showcase
                  modern frontend development skills and best practices.
                </p>
                <div className="space-y-4">
                  {techStack.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                        <Code className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{tech.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Card className="p-8 bg-gradient-to-br from-primary to-primary-700 text-white">
                  <Layers className="w-16 h-16 mb-6 opacity-80" />
                  <h3 className="text-2xl font-bold mb-4">Portfolio Project</h3>
                  <p className="opacity-80 mb-6">
                    This demo represents a complete fintech application with:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      <span>Modern UI/UX Design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>Responsive Layout</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      <span>Dark Mode Support</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Original Project Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    About the Original Project
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    PayNest was originally developed as a full-stack Laravel application
                    providing real bill payment services in Nigeria. The platform integrated
                    with multiple payment gateways and service providers to offer:
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Real-time airtime and data purchases
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Electricity bill payments (prepaid & postpaid)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Cable TV subscriptions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Exam scratch card sales
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Digital wallet management
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Original Tech Stack
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-600 rounded-lg">
                      <span className="text-gray-700 dark:text-gray-200">Backend</span>
                      <span className="font-medium text-gray-900 dark:text-white">Laravel 12</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-600 rounded-lg">
                      <span className="text-gray-700 dark:text-gray-200">Database</span>
                      <span className="font-medium text-gray-900 dark:text-white">MySQL</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-600 rounded-lg">
                      <span className="text-gray-700 dark:text-gray-200">Frontend</span>
                      <span className="font-medium text-gray-900 dark:text-white">Blade + Bootstrap</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-600 rounded-lg">
                      <span className="text-gray-700 dark:text-gray-200">Payments</span>
                      <span className="font-medium text-gray-900 dark:text-white">Paystack, Flutterwave</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Final Disclaimer */}
        <section className="py-12 bg-red-50 dark:bg-red-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-red-800 dark:text-red-200 mb-4">
              Important Notice
            </h2>
            <p className="text-red-700 dark:text-red-300 text-lg">
              This is a front-end personal project. It is a prototype for UI/UX demonstration. It is not connected to any backend or live services. No transactions or purchases are possible.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
