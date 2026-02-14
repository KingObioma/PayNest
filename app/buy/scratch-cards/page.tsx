'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card, { CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Modal from '@/components/ui/Modal';
import { scratchCards, wallet } from '@/lib/mock-data';
import { formatCurrency } from '@/lib/utils';
import { Check, CreditCard, ShoppingCart, CheckCircle } from 'lucide-react';

export default function ScratchCardsPage() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const selectedCardData = scratchCards.find((c) => c.id === selectedCard);
  const totalAmount = selectedCardData ? selectedCardData.price * quantity : 0;

  const handlePurchase = () => {
    setIsConfirmModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  const handleCloseSuccess = () => {
    setIsSuccessModalOpen(false);
    setSelectedCard(null);
    setQuantity(1);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Exam Scratch Cards
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Purchase result checker PINs for various examination bodies
          </p>
        </div>

        {/* Wallet Balance */}
        <Card className="p-4 bg-primary-50 dark:bg-primary-900/30 border-primary-200 dark:border-primary-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-primary-700 dark:text-primary-300">Wallet Balance</p>
              <p className="text-2xl font-bold text-primary-900 dark:text-primary-100">
                {formatCurrency(wallet.balance, wallet.symbol)}
              </p>
            </div>
            <CreditCard className="w-10 h-10 text-primary-400" />
          </div>
        </Card>

        {/* Card Selection */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {scratchCards.map((card) => (
            <Card
              key={card.id}
              className={`p-6 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedCard === card.id
                  ? 'ring-2 ring-primary border-primary'
                  : 'hover:border-primary-200'
              }`}
              onClick={() => setSelectedCard(card.id)}
            >
              <div className="relative">
                {selectedCard === card.id && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4"
                  style={{ backgroundColor: card.color }}
                >
                  {card.name}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {card.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  {card.fullName}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {card.description}
                </p>
                <p className="text-xl font-bold text-primary">
                  {formatCurrency(card.price)}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Purchase Form */}
        {selectedCard && selectedCardData && (
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Purchase {selectedCardData.name} Scratch Card
              </h3>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Selected Card
                    </label>
                    <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: selectedCardData.color }}
                      >
                        {selectedCardData.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {selectedCardData.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {formatCurrency(selectedCardData.price)} per card
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Quantity
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                        className="w-20 text-center py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                      <button
                        onClick={() => setQuantity(Math.min(10, quantity + 1))}
                        className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Maximum 10 cards per purchase
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Order Summary
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Card Type</span>
                      <span className="text-gray-900 dark:text-white">{selectedCardData.name}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Unit Price</span>
                      <span className="text-gray-900 dark:text-white">{formatCurrency(selectedCardData.price)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Quantity</span>
                      <span className="text-gray-900 dark:text-white">{quantity}</span>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-600 pt-3">
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-900 dark:text-white">Total</span>
                        <span className="font-bold text-xl text-primary">{formatCurrency(totalAmount)}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="w-full mt-6"
                    onClick={() => setIsConfirmModalOpen(true)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Buy Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Confirmation Modal */}
      <Modal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        title="Confirm Purchase"
      >
        {selectedCardData && (
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: selectedCardData.color }}
                >
                  {selectedCardData.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {selectedCardData.name} Scratch Card
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {quantity} x {formatCurrency(selectedCardData.price)}
                  </p>
                </div>
              </div>
              <div className="flex justify-between border-t border-gray-200 dark:border-gray-600 pt-3">
                <span className="font-semibold text-gray-900 dark:text-white">Total Amount</span>
                <span className="font-bold text-primary">{formatCurrency(totalAmount)}</span>
              </div>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
              <p className="text-sm text-yellow-700 dark:text-yellow-300 text-center">
                This is a demo. No actual purchase will be made.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={() => setIsConfirmModalOpen(false)}>
                Cancel
              </Button>
              <Button className="flex-1" onClick={handlePurchase}>
                Confirm Purchase
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* Success Modal */}
      <Modal
        isOpen={isSuccessModalOpen}
        onClose={handleCloseSuccess}
        title=""
      >
        <div className="text-center py-6">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Purchase Successful!
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Your {selectedCardData?.name} scratch card PIN has been sent to your email.
          </p>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Demo PIN</p>
            <p className="text-lg font-mono font-bold text-gray-900 dark:text-white">
              1234-5678-9012-3456
            </p>
          </div>
          <Button onClick={handleCloseSuccess} className="w-full">
            Done
          </Button>
        </div>
      </Modal>
    </DashboardLayout>
  );
}
