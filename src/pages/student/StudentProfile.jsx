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
{/* Personal Information - Mac OS X Aqua style */}
        <div className="rounded-xl overflow-hidden shadow-md mb-6" style={{
        backgroundColor: 'white',
        boxShadow: '0 2px 6px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.2)',
        border: '1px solid rgba(0,0,0,0.1)'
      }}>
          <div className="px-4 py-3 border-b flex items-center" style={{
          backgroundImage: 'linear-gradient(to bottom, #f8f9fb, #d9e1ea)',
          boxShadow: '0 1px 0 rgba(255,255,255,0.8) inset, 0 1px 0 rgba(0,0,0,0.1)',
          borderBottom: '1px solid rgba(0,0,0,0.1)'
        }}>
            <ShieldIcon size={16} className="text-blue-600 mr-2" />
            <h3 className="font-medium text-gray-800" style={{
            textShadow: '0 1px 0 rgba(255,255,255,0.5)'
          }}>
              Personal Information
            </h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Aadhaar ID</span>
              <div className="flex items-center mt-1">
                <span className="text-gray-800 font-medium">
                  XXXX XXXX 4567
                </span>
                <div className="ml-2 px-2 py-0.5 rounded text-xs font-medium" style={{
                background: 'linear-gradient(to bottom, #a7f3d0, #6ee7b7)',
                boxShadow: '0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)',
                border: '1px solid rgba(16,185,129,0.3)',
                color: '#065f46'
              }}>
                  Verified
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">ABHA ID</span>
              <div className="flex items-center mt-1">
                <span className="text-gray-800 font-medium">
                  12-3456-7890-1234
                </span>
                <div className="ml-2 px-2 py-0.5 rounded text-xs font-medium" style={{
                background: 'linear-gradient(to bottom, #a7f3d0, #6ee7b7)',
                boxShadow: '0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)',
                border: '1px solid rgba(16,185,129,0.3)',
                color: '#065f46'
              }}>
                  Verified
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Date of Birth</span>
              <div className="flex items-center mt-1">
                <CalendarIcon size={14} className="text-blue-600 mr-2" />
                <span className="text-gray-800">15 May 1985</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Gender</span>
              <div className="flex items-center mt-1">
                <UserIcon size={14} className="text-blue-600 mr-2" />
                <span className="text-gray-800">Male</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Blood Group</span>
              <div className="flex items-center mt-1">
                <DropletIcon size={14} className="text-red-600 mr-2" />
                <span className="text-gray-800">O+</span>
              </div>
            </div>
          </div>
        </div>



 {/* Contact Information - Mac OS X Aqua style */}
        <div className="rounded-xl overflow-hidden shadow-md mb-6" style={{
        backgroundColor: 'white',
        boxShadow: '0 2px 6px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.2)',
        border: '1px solid rgba(0,0,0,0.1)'
      }}>
          <div className="px-4 py-3 border-b flex items-center" style={{
          backgroundImage: 'linear-gradient(to bottom, #f8f9fb, #d9e1ea)',
          boxShadow: '0 1px 0 rgba(255,255,255,0.8) inset, 0 1px 0 rgba(0,0,0,0.1)',
          borderBottom: '1px solid rgba(0,0,0,0.1)'
        }}>
            <PhoneIcon size={16} className="text-blue-600 mr-2" />
            <h3 className="font-medium text-gray-800" style={{
            textShadow: '0 1px 0 rgba(255,255,255,0.5)'
          }}>
              Contact Information
            </h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex items-start p-3 rounded-lg" style={{
            backgroundColor: 'rgba(249,250,251,0.7)',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)',
            border: '1px solid rgba(0,0,0,0.1)'
          }}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${aquaButtonStyle} ${aquaGlossEffect}`} style={{
              background: 'linear-gradient(to bottom, #4d90fe, #0066cc)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)',
              border: '1px solid rgba(0,0,0,0.2)'
            }}>
                <PhoneIcon size={14} className="text-white" />
              </div>
              <div>
                <span className="text-gray-800 font-medium">
                  +91 98765 43210
                </span>
                <p className="text-xs text-gray-500">Primary</p>
              </div>
            </div>
            <div className="flex items-start p-3 rounded-lg" style={{
            backgroundColor: 'rgba(249,250,251,0.7)',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)',
            border: '1px solid rgba(0,0,0,0.1)'
          }}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${aquaButtonStyle} ${aquaGlossEffect}`} style={{
              background: 'linear-gradient(to bottom, #4d90fe, #0066cc)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)',
              border: '1px solid rgba(0,0,0,0.2)'
            }}>
                <MailIcon size={14} className="text-white" />
              </div>
              <div>
                <span className="text-gray-800 font-medium">
                  johndoe@example.com
                </span>
                <p className="text-xs text-gray-500">Email</p>
              </div>
            </div>
            <div className="flex items-start p-3 rounded-lg" style={{
            backgroundColor: 'rgba(249,250,251,0.7)',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)',
            border: '1px solid rgba(0,0,0,0.1)'
          }}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${aquaButtonStyle} ${aquaGlossEffect}`} style={{
              background: 'linear-gradient(to bottom, #4d90fe, #0066cc)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)',
              border: '1px solid rgba(0,0,0,0.2)'
            }}>
                <MapPinIcon size={14} className="text-white" />
              </div>
              <div>
                <span className="text-gray-800 font-medium">
                  123 Main Street, Anna Nagar
                </span>
                <p className="text-xs text-gray-500">
                  Chennai, Tamil Nadu - 600040
                </p>
              </div>
            </div>
          </div>
        </div>



         {/* Emergency Contact - Mac OS X Aqua style */}
        <div className="rounded-xl overflow-hidden shadow-md mb-6" style={{
        backgroundColor: 'white',
        boxShadow: '0 2px 6px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.2)',
        border: '1px solid rgba(0,0,0,0.1)'
      }}>
          <div className="px-4 py-3 border-b flex items-center" style={{
          backgroundImage: 'linear-gradient(to bottom, #f8f9fb, #d9e1ea)',
          boxShadow: '0 1px 0 rgba(255,255,255,0.8) inset, 0 1px 0 rgba(0,0,0,0.1)',
          borderBottom: '1px solid rgba(0,0,0,0.1)'
        }}>
            <AlertCircleIcon size={16} className="text-red-600 mr-2" />
            <h3 className="font-medium text-gray-800" style={{
            textShadow: '0 1px 0 rgba(255,255,255,0.5)'
          }}>
              Emergency Contact
            </h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="p-3 rounded-lg" style={{
            backgroundColor: 'rgba(254,242,242,0.4)',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)',
            border: '1px solid rgba(252,165,165,0.3)'
          }}>
              <div className="flex items-start mb-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${aquaButtonStyle} ${aquaGlossEffect}`} style={{
                background: 'linear-gradient(to bottom, #f87171, #dc2626)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)',
                border: '1px solid rgba(0,0,0,0.2)'
              }}>
                  <UserIcon size={14} className="text-white" />
                </div>
                <div>
                  <span className="text-gray-800 font-medium">Jane Doe</span>
                  <p className="text-xs text-gray-500">Spouse</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${aquaButtonStyle} ${aquaGlossEffect}`} style={{
                background: 'linear-gradient(to bottom, #f87171, #dc2626)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)',
                border: '1px solid rgba(0,0,0,0.2)'
              }}>
                  <PhoneIcon size={14} className="text-white" />
                </div>
                <div>
                  <span className="text-gray-800 font-medium">
                    +91 87654 32109
                  </span>
                  <p className="text-xs text-gray-500">Mobile</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button className={`px-3 py-1.5 rounded-md text-sm flex items-center ${aquaButtonStyle} ${aquaGlossEffect}`} style={{
              background: 'linear-gradient(to bottom, #f0f4fa, #d5dde8)',
              border: '1px solid rgba(0,0,0,0.2)',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)'
            }}>
                <PencilIcon size={14} className="mr-1.5 text-blue-700" />
                <span className="text-blue-700 font-medium">Edit</span>
              </button>
            </div>
          </div>
        </div>

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
