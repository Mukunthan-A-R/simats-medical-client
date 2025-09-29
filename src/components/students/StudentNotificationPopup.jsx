import React from 'react';
import { XIcon } from 'lucide-react';

export function StudentNotificationPopup({ notification, onClose }) {
  if (!notification) return null;


    const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    };


  return (
    <div className="fixed inset-0  bg-opacity-1 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div
        className="max-w-md w-full max-h-[90vh] overflow-auto animate-slideUp rounded-xl"
        style={{
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.05)',
          border: '1px solid rgba(255,255,255,0.8)',
        }}
      >
        {/* Modal Header */}
        <div
          className="sticky top-0 border-b border-gray-200 p-4 flex items-center justify-between z-10"
          style={{
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
            borderBottom: '1px solid rgba(0,0,0,0.1)',
          }}
        >
          <h2 className="text-lg font-semibold text-gray-800">{notification.title}</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full transition-colors"
            style={{
              background: 'linear-gradient(to bottom, #f8f9fa, #e2e6ea)',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)',
              border: '1px solid rgba(0,0,0,0.1)',
            }}
          >
            <XIcon size={16} className="text-gray-600" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <p className="text-gray-800">{notification.description}</p>
          <p className="mt-2 text-sm text-gray-500">
            {formatDate(notification.date)} at {notification.time}
          </p>
        </div>
      </div>
    </div>
  );
}
