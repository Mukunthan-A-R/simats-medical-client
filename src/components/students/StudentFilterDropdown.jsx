import React from 'react';
import { ChevronDownIcon } from 'lucide-react';

export function StudentFilterDropdown({
  filterOptions,
  activeFilter,
  toggleDropdown,
  dropdownOpen,
  handleFilterSelect,
  aquaButtonStyle,
  aquaGlossEffect,
}) {
  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`w-full px-4 py-2.5 rounded-lg flex items-center justify-between text-sm font-medium text-gray-700 ${aquaButtonStyle} ${aquaGlossEffect}`}
        style={{
          background: 'linear-gradient(to bottom, #ffffff, #f0f6ff)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.9)',
          border: '1px solid rgba(0,0,0,0.1)',
        }}
      >
        <span>{filterOptions.find((f) => f.id === activeFilter)?.label}</span>
        <ChevronDownIcon size={16} className={`text-blue-600 transition-transform ${dropdownOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {dropdownOpen && (
        <div
          className="absolute z-50 mt-1 w-full rounded-lg py-1 animate-dropdownFadeIn"
          style={{
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
            border: '1px solid rgba(255,255,255,0.8)',
          }}
        >
          {filterOptions.map((option) => (
            <button
              key={option.id}
              className={`w-full px-4 py-2.5 text-left text-sm flex items-center transition-colors ${
                activeFilter === option.id ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => handleFilterSelect(option.id)}
              style={{
                background: activeFilter === option.id ? 'linear-gradient(to bottom, #e6f0ff, #d1e3ff)' : 'transparent',
                boxShadow: activeFilter === option.id ? 'inset 0 1px 3px rgba(0,0,0,0.05)' : 'none',
              }}
            >
              {option.icon}
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
