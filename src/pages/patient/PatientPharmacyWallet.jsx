import React, { useState } from "react";
import {
  WalletIcon,
  PlusIcon,
  MinusIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowRightIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// -------------------- Reusable Components --------------------

// Wallet balance card
const WalletCard = ({ balance }) => (
  <div
    className="px-4 py-3 rounded-xl mb-4 text-white"
    style={{
      background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
      boxShadow:
        "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4), 0 0 0 1px rgba(0,0,0,0.1)",
      border: "1px solid rgba(0,0,0,0.2)",
    }}
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
          style={{
            background: "rgba(255,255,255,0.2)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4)",
            border: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <WalletIcon size={20} className="text-white" />
        </div>
        <div>
          <p className="text-xs text-blue-100">Available Balance</p>
          <p className="text-xl font-semibold">{balance}</p>
        </div>
      </div>
      <div
        className="px-2.5 py-1.5 rounded-lg"
        style={{
          background: "rgba(0,0,0,0.2)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
          border: "1px solid rgba(0,0,0,0.3)",
        }}
      >
        <span className="text-sm font-medium text-white">MM India</span>
      </div>
    </div>
  </div>
);

// Quick actions
const QuickActions = () => (
  <div className="grid grid-cols-2 gap-3 mb-4">
    <button className="p-3 rounded-xl flex items-center justify-center bg-gradient-to-b from-white to-[#f0f4fa] border border-gray-200">
      <PlusIcon size={16} className="mr-2 text-blue-600" />
      <span className="font-medium text-blue-600 text-sm">Add Funds</span>
    </button>
    <button className="p-3 rounded-xl flex items-center justify-center bg-gradient-to-b from-white to-[#f0f4fa] border border-gray-200">
      <ArrowRightIcon size={16} className="mr-2 text-blue-600" />
      <span className="font-medium text-blue-600 text-sm">Transfer</span>
    </button>
  </div>
);

// Transaction row (collapsed)
const TransactionRow = ({ transaction, expanded, onToggle }) => (
  <div
    className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
    onClick={onToggle}
    style={{
      backgroundImage: expanded
        ? "linear-gradient(to bottom, #e8f0ff, #d8e6ff)"
        : "linear-gradient(to bottom, #ffffff, #f8f9fa)",
    }}
  >
    <div className="flex items-center">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
        style={{
          background:
            transaction.type === "credit"
              ? "linear-gradient(to bottom, #4ade80, #22c55e)"
              : "linear-gradient(to bottom, #f87171, #ef4444)",
          boxShadow:
            "0 1px 2px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.4)",
        }}
      >
        {transaction.type === "credit" ? (
          <PlusIcon size={16} className="text-white" />
        ) : (
          <MinusIcon size={16} className="text-white" />
        )}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-800">
          {transaction.description}
        </p>
        <p className="text-xs text-gray-500">{transaction.date}</p>
      </div>
    </div>
    <div className="flex items-center">
      <p
        className={`font-medium mr-2 ${
          transaction.type === "credit" ? "text-green-600" : "text-red-600"
        }`}
      >
        {transaction.type === "credit" ? "+" : "-"}
        {transaction.amount}
      </p>
      <div className="w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-b from-[#f0f4fa] to-[#d5dde8] border border-gray-200">
        {expanded ? (
          <ChevronUpIcon size={12} className="text-blue-700" />
        ) : (
          <ChevronDownIcon size={12} className="text-blue-700" />
        )}
      </div>
    </div>
  </div>
);

// -------------------- Main Screen --------------------
export function PatientPharmacyWallet() {
  const [expandedTransactionId, setExpandedTransactionId] = useState(null);
  const navigate = useNavigate();

  const walletData = {
    balance: "$125.50",
    transactions: [
      {
        id: "tx1",
        date: "20 May 2023",
        time: "14:30",
        description: "Prescription Payment",
        amount: "$45.00",
        type: "debit",
        paymentMethod: "Wallet Balance",
        referenceNumber: "RX-2023-0542",
        invoiceNumber: "INV-PH-23542",
        department: "Pharmacy",
        provider: "SMC Pharmacy Services",
        items: [
          {
            description: "Amoxicillin 500mg (30 tablets)",
            quantity: 1,
            unitPrice: "$25.00",
            amount: "$25.00",
          },
          {
            description: "Ibuprofen 200mg (20 tablets)",
            quantity: 1,
            unitPrice: "$15.00",
            amount: "$15.00",
          },
        ],
        subtotal: "$45.00",
        tax: "$0.00",
        notes: "Prescription filled as per Dr. Miller's instructions",
      },
      // add more transactions here
    ],
  };

  const toggleTransaction = (id) => {
    setExpandedTransactionId(expandedTransactionId === id ? null : id);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="px-4 py-6 flex-1"
        style={{
          backgroundColor: "#e0e5eb",
          boxShadow: "inset 0 0 100px rgba(180, 190, 210, 0.3)",
        }}
      >
        <div className="max-w-md mx-auto">
          {/* Header with Back */}
          <div className="mb-4 flex items-center">
            <button
              className="mr-2 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-b from-[#f0f4fa] to-[#d5dde8]"
              onClick={() => {
                navigate(-1);
              }}
              style={{
                background: "linear-gradient(to bottom, #f0f4fa, #d5dde8)",
                border: "1px solid rgba(0,0,0,0.2)",
                boxShadow:
                  "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
              }}
            >
              <ChevronLeftIcon size={18} className="text-blue-700" />
            </button>
            <h1 className="text-xl font-semibold text-blue-900">
              Pharmacy Wallet
            </h1>
          </div>

          {/* Wallet Info */}
          <WalletCard balance={walletData.balance} />

          {/* Actions */}
          <QuickActions />

          {/* Transaction List */}
          <div className="rounded-xl overflow-hidden mb-6 bg-white shadow">
            <div className="p-4 border-b border-gray-100 bg-gradient-to-b from-[#f8f9fa] to-[#edf0f5]">
              <h2 className="font-medium text-gray-800">Transaction History</h2>
              <p className="text-xs text-gray-500 mt-1">Pharmacy Wallet</p>
            </div>
            <div className="divide-y divide-gray-100">
              {walletData.transactions.map((tx) => (
                <React.Fragment key={tx.id}>
                  <TransactionRow
                    transaction={tx}
                    expanded={expandedTransactionId === tx.id}
                    onToggle={() => toggleTransaction(tx.id)}
                  />
                  {expandedTransactionId === tx.id && (
                    <div className="p-6 border-t bg-white">
                      <p className="text-sm text-gray-600">
                        Invoice #{tx.invoiceNumber}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Provider: {tx.provider}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Payment Method: {tx.paymentMethod}
                      </p>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
