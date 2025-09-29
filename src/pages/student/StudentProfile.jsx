import React, { useState } from 'react';
import {
  ArrowLeftIcon,
  PhoneIcon,
  MapPinIcon,
  MailIcon,
  UserIcon,
  PlusIcon,
  AlertCircleIcon,
  CreditCardIcon,
  PencilIcon,
  TrashIcon,
  ShieldIcon,
  CalendarIcon,
  DropletIcon,
  Activity,
} from 'lucide-react';
import StudentProfileHeader from '../../components/StudentProfileHeader';
import StudentPersonalInformation from '../../components/StudentPersonalInformation';
import StudentContactInfo from '../../components/StudentContactInfo';
import StudentEmergencyContactInfo from '../../components/StudentEmergencyContactInfo';

export default function StudentProfileScreen({ onNavigate }) {
  const [insuranceIds, setInsuranceIds] = useState([
    {
      id: 1,
      provider: 'Apollo Health Insurance',
      policyNumber: 'APL-2023-78945',
      validUntil: '31 Dec 2024',
    },
    {
      id: 2,
      provider: 'Star Health Insurance',
      policyNumber: 'SHI-5678-9012',
      validUntil: '15 Mar 2025',
    },
  ]);

  const [showAddInsurance, setShowAddInsurance] = useState(false);
  const [newInsurance, setNewInsurance] = useState({
    provider: '',
    policyNumber: '',
    validUntil: '',
  });

  const handleAddInsurance = () => {
    if (
      newInsurance.provider &&
      newInsurance.policyNumber &&
      newInsurance.validUntil
    ) {
      setInsuranceIds([
        ...insuranceIds,
        {
          id: Date.now(),
          provider: newInsurance.provider,
          policyNumber: newInsurance.policyNumber,
          validUntil: newInsurance.validUntil,
        },
      ]);
      setNewInsurance({
        provider: '',
        policyNumber: '',
        validUntil: '',
      });
      setShowAddInsurance(false);
    }
  };

  const handleDeleteInsurance = (id) => {
    setInsuranceIds(insuranceIds.filter((insurance) => insurance.id !== id));
  };

  // Aqua button style classes
  const aquaButtonStyle =
    'relative overflow-hidden transition-all active:translate-y-0.5 active:shadow-inner';
  const aquaGlossEffect =
    'before:absolute before:inset-0 before:bg-gradient-to-b before:from-white before:via-transparent before:to-transparent before:opacity-50';

  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-4 pb-16">
        
        <StudentProfileHeader/>
        {/* Personal Information */}
        <StudentPersonalInformation/>

        {/* Contact Information */}
        <StudentContactInfo/>

         {/* Emergency Contact */}
        <StudentEmergencyContactInfo/>

        <style jsx global>{`
          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }
          .animate-pulse {
            animation: pulse 2s infinite;
          }
        `}</style>
      </div>
    </div>
  );
}
