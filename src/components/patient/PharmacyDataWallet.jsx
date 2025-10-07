import {
  BuildingIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ClockIcon,
  CreditCardIcon,
  DownloadIcon,
  FileTextIcon,
  MinusIcon,
  PlusIcon,
  PrinterIcon,
  XIcon,
} from "lucide-react";
import React, { useState } from "react";

const PharmacyDataWallet = ({ PharmacyDataWallet: transactions }) => {
  const [expandedTransactionId, setExpandedTransactionId] = useState(null);

  const toggleTransactionDetails = (transactionId) => {
    if (expandedTransactionId === transactionId) {
      setExpandedTransactionId(null);
    } else {
      setExpandedTransactionId(transactionId);
    }
  };

  const handlePrintInvoice = () => {
    window.print();
  };
  const handleDownloadInvoice = () => {
    alert("Invoice download started");
  };

  return (
    <div>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
        <div className="divide-y divide-gray-100">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex flex-col">
              <div
                className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                onClick={() => toggleTransactionDetails(transaction.id)}
              >
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      transaction.type === "credit"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {transaction.type === "credit" ? (
                      <PlusIcon size={16} />
                    ) : (
                      <MinusIcon size={16} />
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
                  {expandedTransactionId === transaction.id ? (
                    <ChevronUpIcon size={16} className="text-gray-400" />
                  ) : (
                    <ChevronDownIcon size={16} className="text-gray-400" />
                  )}
                </div>
              </div>
              {/* Expanded Invoice Template */}
              {expandedTransactionId === transaction.id && (
                <div className="bg-white p-6 border-t border-gray-100 print:p-8 print:shadow-none print:border-0">
                  {/* Invoice Header with Close and Action Buttons */}
                  <div className="flex items-center justify-between mb-6 print:hidden">
                    <h3 className="font-medium text-gray-800">
                      Transaction Receipt
                    </h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={handlePrintInvoice}
                        className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                      >
                        <PrinterIcon size={18} />
                      </button>
                      <button
                        onClick={handleDownloadInvoice}
                        className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                      >
                        <DownloadIcon size={18} />
                      </button>
                      <button
                        onClick={() => setExpandedTransactionId(null)}
                        className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <XIcon size={18} />
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
                          <p className="text-blue-100 text-sm">
                            Saveetha Nagar, Thandalam
                          </p>
                          <p className="text-blue-100 text-sm">
                            Chennai 600077
                          </p>
                          <p className="text-blue-100 text-sm">
                            Tel: (044) 2680-1050
                          </p>
                        </div>
                        <div className="text-right">
                          <h3 className="text-lg font-semibold">
                            {transaction.type === "debit"
                              ? "INVOICE"
                              : "RECEIPT"}
                          </h3>
                          <p className="text-blue-100 text-sm">
                            #{transaction.invoiceNumber}
                          </p>
                          <p className="text-blue-100 text-sm">
                            Date: {transaction.date}
                          </p>
                          <p className="text-blue-100 text-sm">
                            Time: {transaction.time}
                          </p>
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
                          <p className="text-sm text-gray-600">
                            Patient ID: SMC-2023-0042
                          </p>
                          <p className="text-sm text-gray-600">
                            Email: john.doe@example.com
                          </p>
                          <p className="text-sm text-gray-600">
                            Phone: (555) 987-6543
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700 mb-2">
                            Service Information
                          </h4>
                          <div className="flex items-start mb-1">
                            <BuildingIcon
                              size={14}
                              className="text-gray-400 mt-0.5 mr-2"
                            />
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
                            <FileTextIcon
                              size={14}
                              className="text-gray-400 mt-0.5 mr-2"
                            />
                            <div>
                              <p className="text-sm text-gray-600">
                                Reference: {transaction.referenceNumber}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <ClockIcon
                              size={14}
                              className="text-gray-400 mt-0.5 mr-2"
                            />
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
                              <th className="py-2 px-3 text-left font-medium text-gray-700">
                                Description
                              </th>
                              <th className="py-2 px-3 text-center font-medium text-gray-700">
                                Quantity
                              </th>
                              <th className="py-2 px-3 text-right font-medium text-gray-700">
                                Unit Price
                              </th>
                              <th className="py-2 px-3 text-right font-medium text-gray-700">
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
                              <span className="text-gray-600">
                                Insurance Coverage
                              </span>
                              <span className="font-medium text-green-600">
                                -{transaction.insuranceCoverage}
                              </span>
                            </div>
                          )}
                          <div className="flex justify-between py-2 mt-1 border-t border-gray-200">
                            <span className="font-medium text-gray-700">
                              Total
                            </span>
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
                            <p>
                              Coverage Amount: {transaction.insuranceCoverage}
                            </p>
                          </div>
                        </div>
                      )}
                    {/* Notes */}
                    <div className="p-6 border-t border-gray-200">
                      <h4 className="font-medium text-gray-700 mb-2">Notes</h4>
                      <p className="text-sm text-gray-600">
                        {transaction.notes}
                      </p>
                    </div>
                    {/* Footer */}
                    <div className="p-6 bg-gray-50 border-t border-gray-200 text-center">
                      <p className="text-xs text-gray-500 mb-1">
                        This is an official receipt from Saveetha Medical
                        College Hospital.
                      </p>
                      <p className="text-xs text-gray-500">
                        For any inquiries, please contact our billing department
                        at billing@saveethamedical.com
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PharmacyDataWallet;
