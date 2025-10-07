import React from "react";
import GeneralDataWallet from "../../components/GeneralDataWallet";

const PatientTransactionHistory = ({ selectedWallet }) => {
  const generalData = {
    type: "General Wallet",
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

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden my-5">
      <div className="p-4 border-b border-gray-100">
        <h2 className="font-medium text-gray-800">Transaction History</h2>
        <p className="text-xs text-gray-500 mt-1">{selectedWallet}</p>
        <p className="text-xs text-gray-500 mt-1">{generalData.type}</p>
        <GeneralDataWallet GeneralDataWallet={generalData.transactions} />
      </div>
    </div>
  );
};

export default PatientTransactionHistory;
