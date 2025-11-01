import { WalletIcon } from "lucide-react";
import React, { useState } from "react";

const PatientWalletsSwitch = ({ onWalletChange }) => {
  const [activeWallet, setActiveWallet] = useState("general");

  const handleClick = (walletType) => {
    setActiveWallet(walletType);
    // Notify the parent
    if (onWalletChange) {
      onWalletChange(walletType);
    }
  };

  return (
    <div>
      {/* Wallet Selection */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div
          className={`p-4 rounded-xl shadow-sm cursor-pointer ${
            activeWallet === "pharmacy"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-800"
          }`}
          onClick={() => handleClick("pharmacy")}
        >
          <div className="flex items-center justify-between mb-2">
            <WalletIcon size={18} />
            <span className="text-xs opacity-70">MM India Pharmacy</span>
          </div>
          <p
            className={`text-xs ${
              activeWallet === "pharmacy" ? "text-blue-100" : "text-gray-500"
            }`}
          >
            Available Balance
          </p>
          <p className="text-xl font-semibold mt-1">250</p>
        </div>

        <div
          className={`p-4 rounded-xl shadow-sm cursor-pointer ${
            activeWallet === "general"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-800"
          }`}
          onClick={() => handleClick("general")}
        >
          <div className="flex items-center justify-between mb-2">
            <WalletIcon size={18} />
            <span className="text-xs opacity-70">SMC-General</span>
          </div>
          <p
            className={`text-xs ${
              activeWallet === "general" ? "text-blue-100" : "text-gray-500"
            }`}
          >
            Available Balance
          </p>
          <p className="text-xl font-semibold mt-1">300</p>
        </div>
      </div>
    </div>
  );
};

export default PatientWalletsSwitch;
