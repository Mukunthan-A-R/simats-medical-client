import { ChevronLeftIcon, Plus } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientWalletsSwitch from "../../components/patient/PatientWalletsSwitch";
import PatientTransactionHistory from "../patient/PatientTransactionHistory";

const PatientWallet = () => {
  const navigate = useNavigate();
  const [selectedWallet, setSelectedWallet] = useState("general");

  const handleWalletChange = (walletType) => {
    setSelectedWallet(walletType);
  };

  return (
    <div className="flex flex-col min-h-screen w-full p-4 md:px-8">
      <div className="flex items-center mb-4">
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
        <h2 className="text-xl text-blue-900 font-medium">My Wallets</h2>
      </div>
      <PatientWalletsSwitch onWalletChange={handleWalletChange} />
      <div className="text-blue-700 font-medium flex flex-row gap-2 items-center justify-center py-2 border border-blue-100 hover:bg-blue-50 shadow-sm rounded-xl bg-white">
        <Plus size={18} /> Add Funds
      </div>
      <PatientTransactionHistory
        selectedWallet={selectedWallet}
      ></PatientTransactionHistory>
    </div>
  );
};

export default PatientWallet;
