import React, { useState } from "react";
import {
  WalletIcon,
  PlusIcon,
  MinusIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  PrinterIcon,
  DownloadIcon,
  XIcon,
  ClockIcon,
  BuildingIcon,
  CreditCardIcon,
  FileTextIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { aquaButtonStyle, aquaGlossEffect } from "../../utils/constants";

// Wallet Balance Card
const WalletCard = ({ balance }) => {
  const aquaButtonStyle =
    "relative overflow-hidden transition-all active:translate-y-0.5 active:shadow-inner";
  const aquaGlossEffect =
    "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white before:via-transparent before:to-transparent before:opacity-50";

  return (
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
            className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${aquaButtonStyle} ${aquaGlossEffect}`}
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
          className={`px-2.5 py-1.5 rounded-lg ${aquaButtonStyle} ${aquaGlossEffect}`}
          style={{
            background: "rgba(0,0,0,0.2)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
            border: "1px solid rgba(0,0,0,0.3)",
          }}
        >
          <span className="text-sm font-medium text-white">SMC-General</span>
        </div>
      </div>
    </div>
  );
};

// Add Funds Button
const AddFundsButton = () => {
  const aquaButtonStyle =
    "relative overflow-hidden transition-all active:translate-y-0.5 active:shadow-inner";
  const aquaGlossEffect =
    "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white before:via-transparent before:to-transparent before:opacity-50";

  return (
    <button
      className={`w-full flex items-center justify-center p-3 rounded-xl mb-5 ${aquaButtonStyle} ${aquaGlossEffect}`}
      style={{
        background: "linear-gradient(to bottom, #ffffff, #f0f4fa)",
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,1), 0 0 0 1px rgba(59,130,246,0.2)",
        border: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <PlusIcon size={18} className="mr-2 text-blue-600" />
      <span className="font-medium text-blue-600">Add Funds</span>
    </button>
  );
};

// Transaction Details Component
const TransactionDetails = ({ transaction, onClose, onPrint, onDownload }) => {
  const aquaButtonStyle =
    "relative overflow-hidden transition-all active:translate-y-0.5 active:shadow-inner";
  const aquaGlossEffect =
    "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white before:via-transparent before:to-transparent before:opacity-50";

  return (
    <div className="bg-white p-6 border-t border-gray-100 print:p-8 print:shadow-none print:border-0">
      <div className="flex items-center justify-between mb-6 print:hidden">
        <h3 className="font-medium text-gray-800">Transaction Receipt</h3>
        <div className="flex space-x-2">
          <button
            onClick={onPrint}
            className={`p-2 rounded-full ${aquaButtonStyle} ${aquaGlossEffect}`}
          >
            <PrinterIcon size={16} className="text-blue-700" />
          </button>
          <button
            onClick={onDownload}
            className={`p-2 rounded-full ${aquaButtonStyle} ${aquaGlossEffect}`}
          >
            <DownloadIcon size={16} className="text-blue-700" />
          </button>
          <button
            onClick={onClose}
            className={`p-2 rounded-full ${aquaButtonStyle} ${aquaGlossEffect}`}
            style={{
              background: "linear-gradient(to bottom, #fee2e2, #fecaca)",
            }}
          >
            <XIcon size={16} className="text-red-600" />
          </button>
        </div>
      </div>

      {/* Invoice Content */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        {/* Invoice Header */}
        <div className="bg-blue-600 text-white p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold">
                Saveetha Medical College Hospital
              </h2>
              <p className="text-blue-100 text-sm">Saveetha Nagar, Thandalam</p>
              <p className="text-blue-100 text-sm">Chennai 600077</p>
              <p className="text-blue-100 text-sm">Tel: (044) 2680-1050</p>
            </div>
            <div className="text-right">
              <h3 className="text-lg font-semibold">
                {transaction.type === "debit" ? "INVOICE" : "RECEIPT"}
              </h3>
              <p className="text-blue-100 text-sm">
                #{transaction.invoiceNumber}
              </p>
              <p className="text-blue-100 text-sm">Date: {transaction.date}</p>
              <p className="text-blue-100 text-sm">Time: {transaction.time}</p>
            </div>
          </div>
        </div>
        {/* Patient and Service Information */}
        <div className="p-6 bg-gray-50 border-b border-gray-200">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">
                Patient Information
              </h4>
              <p className="text-sm text-gray-600">John Doe</p>
              <p className="text-sm text-gray-600">Patient ID: SMC-2023-0042</p>
              <p className="text-sm text-gray-600">
                Email: john.doe@example.com
              </p>
              <p className="text-sm text-gray-600">Phone: (555) 987-6543</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">
                Service Information
              </h4>
              <div className="flex items-start mb-1">
                <BuildingIcon size={14} className="text-gray-400 mt-0.5 mr-2" />
                <div>
                  <p className="text-sm text-gray-600">
                    Department: {transaction.department}
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-1">
                <CreditCardIcon
                  size={14}
                  className="text-gray-400 mt-0.5 mr-2"
                />
                <div>
                  <p className="text-sm text-gray-600">
                    Payment Method: {transaction.paymentMethod}
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-1">
                <FileTextIcon size={14} className="text-gray-400 mt-0.5 mr-2" />
                <div>
                  <p className="text-sm text-gray-600">
                    Reference: {transaction.referenceNumber}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <ClockIcon size={14} className="text-gray-400 mt-0.5 mr-2" />
                <div>
                  <p className="text-sm text-gray-600">
                    Provider: {transaction.provider}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Line Items */}
        <div className="p-6 border-b border-gray-200">
          <h4 className="font-medium text-gray-700 mb-3">
            Transaction Details
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th
                    scope="col"
                    className="py-2 px-3 text-left text-xs font-medium text-gray-700"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="py-2 px-3 text-center text-xs font-medium text-gray-700"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="py-2 px-3 text-right text-xs font-medium text-gray-700"
                  >
                    Unit Price
                  </th>
                  <th
                    scope="col"
                    className="py-2 px-3 text-right text-xs font-medium text-gray-700"
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {transaction.items.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-3 text-gray-600">
                      {item.description}
                    </td>
                    <td className="py-3 px-3 text-center text-gray-600">
                      {item.quantity}
                    </td>
                    <td className="py-3 px-3 text-right text-gray-600">
                      {item.unitPrice}
                    </td>
                    <td className="py-3 px-3 text-right font-medium text-gray-700">
                      {item.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Summary */}
        <div className="p-6 bg-gray-50">
          <div className="flex justify-end">
            <div className="w-64">
              <div className="flex justify-between py-1 text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium text-gray-700">
                  {transaction.subtotal}
                </span>
              </div>
              <div className="flex justify-between py-1 text-sm">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium text-gray-700">
                  {transaction.tax}
                </span>
              </div>
              {transaction.insuranceCoverage && (
                <div className="flex justify-between py-1 text-sm">
                  <span className="text-gray-600">Insurance Coverage</span>
                  <span className="font-medium text-green-600">
                    -{transaction.insuranceCoverage}
                  </span>
                </div>
              )}
              <div className="flex justify-between py-2 mt-1 border-t border-gray-200">
                <span className="font-medium text-gray-700">Total</span>
                <span className="font-bold text-gray-800">
                  {transaction.amount}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Insurance Information */}
        {transaction.insuranceProvider &&
          transaction.insuranceProvider !== "N/A" && (
            <div className="p-6 border-t border-gray-200">
              <h4 className="font-medium text-gray-700 mb-2">
                Insurance Information
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <p>Provider: {transaction.insuranceProvider}</p>
                <p>Policy Number: {transaction.policyNumber}</p>
                <p>Claim Number: {transaction.claimNumber}</p>
                <p>Coverage Amount: {transaction.insuranceCoverage}</p>
              </div>
            </div>
          )}
        {/* Notes */}
        <div className="p-6 border-t border-gray-200">
          <h4 className="font-medium text-gray-700 mb-2">Notes</h4>
          <p className="text-sm text-gray-600">{transaction.notes}</p>
        </div>
        {/* Footer */}
        <div className="p-6 bg-gray-50 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500 mb-1">
            This is an official receipt from Saveetha Medical College Hospital.
          </p>
          <p className="text-xs text-gray-500">
            For any inquiries, please contact our billing department at
            billing@saveethamedical.com
          </p>
        </div>
      </div>
    </div>
  );
};

// Transaction History
const TransactionHistory = ({
  transactions,
  expandedTransactionId,
  toggleTransaction,
  onPrint,
  onDownload,
  closeTransaction,
}) => {
  return (
    <div
      className="rounded-xl overflow-hidden mb-6"
      style={{
        backgroundColor: "white",
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24), 0 0 0 1px rgba(0,0,0,0.05), inset 0 -5px 10px rgba(0,0,0,0.03)",
        border: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <div
        className="p-4 border-b border-gray-100"
        style={{
          backgroundImage: "linear-gradient(to bottom, #f8f9fa, #edf0f5)",
        }}
      >
        <h2 className="font-medium text-gray-800">Transaction History</h2>
        <p className="text-xs text-gray-500 mt-1">Hospital Wallet</p>
      </div>
      <div className="divide-y divide-gray-100">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex flex-col">
            <div
              className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
              onClick={() => toggleTransaction(transaction.id)}
            >
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${aquaButtonStyle} ${aquaGlossEffect}`}
                  style={{
                    background:
                      transaction.type === "credit"
                        ? "linear-gradient(to bottom, #4ade80, #22c55e)"
                        : "linear-gradient(to bottom, #f87171, #ef4444)",
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
                    transaction.type === "credit"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {transaction.type === "credit" ? "+" : "-"}
                  {transaction.amount}
                </p>
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center ${aquaButtonStyle} ${aquaGlossEffect}`}
                >
                  {expandedTransactionId === transaction.id ? (
                    <ChevronUpIcon size={12} className="text-blue-700" />
                  ) : (
                    <ChevronDownIcon size={12} className="text-blue-700" />
                  )}
                </div>
              </div>
            </div>

            {expandedTransactionId === transaction.id && (
              <TransactionDetails
                transaction={transaction}
                onClose={closeTransaction}
                onPrint={onPrint}
                onDownload={onDownload}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export function PatientHospitalWallet({ onNavigate }) {
  const [expandedTransactionId, setExpandedTransactionId] = useState(null);

  const toggleTransactionDetails = (id) => {
    setExpandedTransactionId(expandedTransactionId === id ? null : id);
  };

  const handlePrintInvoice = () => window.print();
  const handleDownloadInvoice = () => alert("Invoice download started");

  // Wallet mock data
  const walletData = {
    balance: "$350.75",
    transactions: [
      {
        id: "tx5",
        date: "22 May 2023",
        time: "11:30",
        description: "Consultation Fee",
        amount: "$75.00",
        type: "debit",
        paymentMethod: "Wallet Balance",
        referenceNumber: "CON-2023-0823",
        invoiceNumber: "INV-MED-23823",
        department: "Cardiology",
        provider: "Dr. Sarah Johnson",
        items: [
          {
            description: "Specialist Consultation (30 minutes)",
            quantity: 1,
            unitPrice: "$75.00",
            amount: "$75.00",
          },
        ],
        subtotal: "$75.00",
        tax: "$0.00",
        insuranceCoverage: "$50.00",
        insuranceProvider: "MediCare Plus",
        policyNumber: "MP-2023-4567",
        claimNumber: "CL-2023-7823",
        notes: "Regular follow-up consultation",
      },
      {
        id: "tx6",
        date: "18 May 2023",
        time: "13:20",
        description: "Insurance Reimbursement",
        amount: "$150.00",
        type: "credit",
        paymentMethod: "Insurance",
        referenceNumber: "INS-2023-1456",
        invoiceNumber: "INV-INS-23456",
        department: "Insurance Claims",
        provider: "MediCare Plus",
        items: [
          {
            description: "Reimbursement for Lab Tests",
            quantity: 1,
            unitPrice: "$150.00",
            amount: "$150.00",
          },
        ],
        subtotal: "$150.00",
        tax: "$0.00",
        insuranceProvider: "MediCare Plus",
        policyNumber: "MP-2023-4567",
        claimNumber: "CL-2023-6543",
        notes: "Reimbursement for previous lab tests",
      },
      {
        id: "tx7",
        date: "12 May 2023",
        time: "08:45",
        description: "Lab Test Payment",
        amount: "$125.00",
        type: "debit",
        paymentMethod: "Wallet Balance",
        referenceNumber: "LAB-2023-0629",
        invoiceNumber: "INV-LAB-23629",
        department: "Laboratory",
        provider: "SMC Diagnostic Services",
        items: [
          {
            description: "Complete Blood Count",
            quantity: 1,
            unitPrice: "$45.00",
            amount: "$45.00",
          },
          {
            description: "Lipid Profile",
            quantity: 1,
            unitPrice: "$55.00",
            amount: "$55.00",
          },
          {
            description: "Thyroid Function Test",
            quantity: 1,
            unitPrice: "$25.00",
            amount: "$25.00",
          },
        ],
        subtotal: "$125.00",
        tax: "$0.00",
        insuranceCoverage: "$85.00",
        insuranceProvider: "MediCare Plus",
        policyNumber: "MP-2023-4567",
        claimNumber: "CL-2023-6789",
        notes: "Annual health check-up lab tests",
      },
      {
        id: "tx8",
        date: "8 May 2023",
        time: "16:10",
        description: "Wallet Top-up",
        amount: "$200.00",
        type: "credit",
        paymentMethod: "Bank Transfer",
        referenceNumber: "DEP-2023-1342",
        invoiceNumber: "INV-DEP-23342",
        department: "Finance",
        provider: "SMC Payment Services",
        items: [
          {
            description: "Wallet Deposit",
            quantity: 1,
            unitPrice: "$200.00",
            amount: "$200.00",
          },
        ],
        subtotal: "$200.00",
        tax: "$0.00",
        notes: "Fund transfer from bank account",
      },
    ],
  };

  const navigate = useNavigate();

  return (
    // <div className="px-4 py-5 max-w-4xl mx-auto w-full bg-red-400">
    <div className="flex flex-col min-h-screen">
      <div
        className="px-4 py-6 flex-1"
        style={{
          backgroundColor: "#e0e5eb",
          boxShadow: "inset 0 0 100px rgba(180, 190, 210, 0.3)",
        }}
      >
        <div className="max-w-md mx-auto">
          <div className="mb-4 flex items-center">
            <button
              className={`mr-2 w-8 h-8 flex items-center justify-center rounded-full       `}
              onClick={() => navigate(-1)}
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
              Hospital Wallet
            </h1>
          </div>

          <WalletCard balance={walletData.balance} />
          <AddFundsButton />

          <TransactionHistory
            transactions={walletData.transactions}
            expandedTransactionId={expandedTransactionId}
            toggleTransaction={toggleTransactionDetails}
            onPrint={handlePrintInvoice}
            onDownload={handleDownloadInvoice}
            closeTransaction={() => setExpandedTransactionId(null)}
          />
        </div>
      </div>
    </div>
  );
}
