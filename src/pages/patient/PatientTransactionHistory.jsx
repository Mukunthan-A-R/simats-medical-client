import React from "react";
import GeneralDataWallet from "../../components/GeneralDataWallet";
import PharmacyDataWallet from "../../components/patient/PharmacyDataWallet";

const PatientTransactionHistory = ({ selectedWallet }) => {
  const pharmacyData = {
    type: "Pharmacy Wallet",
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
          {
            description: "Prescription Processing Fee",
            quantity: 1,
            unitPrice: "$5.00",
            amount: "$5.00",
          },
        ],
        subtotal: "$45.00",
        tax: "$0.00",
        insuranceCoverage: "$0.00",
        insuranceProvider: "N/A",
        policyNumber: "N/A",
        claimNumber: "N/A",
        notes: "Prescription filled as per Dr. Miller's instructions",
      },
      {
        id: "tx2",
        date: "15 May 2023",
        time: "10:15",
        description: "Wallet Top-up",
        amount: "$100.00",
        type: "credit",
        paymentMethod: "Credit Card",
        referenceNumber: "DEP-2023-1287",
        invoiceNumber: "INV-DEP-23128",
        department: "Finance",
        provider: "SMC Payment Services",
        items: [
          {
            description: "Wallet Deposit",
            quantity: 1,
            unitPrice: "$100.00",
            amount: "$100.00",
          },
        ],
        subtotal: "$100.00",
        tax: "$0.00",
        notes: "Monthly deposit to pharmacy wallet",
      },
      {
        id: "tx3",
        date: "10 May 2023",
        time: "16:45",
        description: "Medication Purchase",
        amount: "$29.50",
        type: "debit",
        paymentMethod: "Wallet Balance",
        referenceNumber: "PUR-2023-0367",
        invoiceNumber: "INV-PH-23367",
        department: "Pharmacy",
        provider: "SMC Pharmacy Services",
        items: [
          {
            description: "Acetaminophen 500mg (50 tablets)",
            quantity: 1,
            unitPrice: "$12.50",
            amount: "$12.50",
          },
          {
            description: "Allergy Relief Tablets (30 tablets)",
            quantity: 1,
            unitPrice: "$17.00",
            amount: "$17.00",
          },
        ],
        subtotal: "$29.50",
        tax: "$0.00",
        notes: "Over-the-counter medication purchase",
      },
      {
        id: "tx4",
        date: "5 May 2023",
        time: "09:00",
        description: "Free Credit Bonus",
        amount: "$25.00",
        type: "credit",
        paymentMethod: "System",
        referenceNumber: "BON-2023-0128",
        invoiceNumber: "INV-BON-23128",
        department: "Customer Relations",
        provider: "SMC Loyalty Program",
        items: [
          {
            description: "Loyalty Program Credit",
            quantity: 1,
            unitPrice: "$25.00",
            amount: "$25.00",
          },
        ],
        subtotal: "$25.00",
        tax: "$0.00",
        notes: "Loyalty program bonus credit for being a member for 1 year",
      },
    ],
  };

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
        {selectedWallet == "general" ? (
          <GeneralDataWallet GeneralDataWallet={generalData.transactions} />
        ) : (
          <PharmacyDataWallet PharmacyDataWallet={pharmacyData.transactions} />
        )}
      </div>
    </div>
  );
};

export default PatientTransactionHistory;
