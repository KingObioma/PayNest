import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PayNest - Modern Bill Payment Platform',
  description: 'Pay bills, buy airtime, data bundles, and exam scratch cards with ease. A portfolio demonstration of a fintech application.',
  keywords: ['paynest', 'fintech', 'nigeria', 'payments', 'airtime', 'scratch cards'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
