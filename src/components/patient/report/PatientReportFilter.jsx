import {
  CalendarIcon,
  ChevronDownIcon,
  FilterIcon,
  SearchIcon,
} from "lucide-react";
import React from "react";

const PatientReportFilter = () => {
  return (
    <div
      className="rounded-xl mb-4 overflow-hidden"
      style={{
        boxShadow:
          "0 2px 5px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.8)",
        border: "1px solid rgba(0,0,0,0.15)",
        backgroundColor: "rgba(255,255,255,0.85)",
      }}
    >
      {/* Header Bar */}
      <div
        className="px-3 py-2 flex items-center"
        style={{
          background: "linear-gradient(to bottom, #e9f0fa, #d0ddf0)",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
        }}
      >
        <SearchIcon size={15} className="text-blue-700 mr-1.5" />
        <h3 className="text-sm font-medium text-blue-900">Search & Filter</h3>
      </div>

      {/* Content Area */}
      <div className="p-4">
        {/* Search Bar */}
        <div className="relative mb-3">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon size={16} className="text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search by report name, ID, or department..."
            className="block w-full pl-10 pr-3 py-2.5 leading-5 placeholder-gray-500 focus:outline-none text-sm rounded-lg"
            style={{
              backgroundColor: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow:
                "inset 0 1px 2px rgba(0,0,0,0.05), 0 1px 2px rgba(255,255,255,0.8)",
            }}
          />
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Report Type Filter */}
          <div className="relative">
            <label
              htmlFor="type-filter"
              className="block text-xs font-medium text-gray-700 mb-1"
              style={{ textShadow: "0 1px 0 rgba(255,255,255,0.7)" }}
            >
              Report Type
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FilterIcon size={15} className="text-gray-500" />
              </div>
              <select
                id="type-filter"
                className="block w-full pl-9 pr-8 py-2 text-sm rounded-lg appearance-none"
                style={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  backgroundImage:
                    "linear-gradient(to bottom, #ffffff, #f5f5f5)",
                  border: "1px solid rgba(0,0,0,0.1)",
                  boxShadow:
                    "inset 0 1px 2px rgba(0,0,0,0.05), 0 1px 2px rgba(255,255,255,0.8)",
                }}
              >
                <option>All Types</option>
                <option>Laboratory</option>
                <option>Radiology</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDownIcon size={16} className="text-gray-500" />
              </div>
            </div>
          </div>

          {/* Date Filter */}
          <div className="relative">
            <label
              htmlFor="date-filter"
              className="block text-xs font-medium text-gray-700 mb-1"
              style={{ textShadow: "0 1px 0 rgba(255,255,255,0.7)" }}
            >
              Time Period
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CalendarIcon size={15} className="text-gray-500" />
              </div>
              <select
                id="date-filter"
                className="block w-full pl-9 pr-8 py-2 text-sm rounded-lg appearance-none"
                style={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  backgroundImage:
                    "linear-gradient(to bottom, #ffffff, #f5f5f5)",
                  border: "1px solid rgba(0,0,0,0.1)",
                  boxShadow:
                    "inset 0 1px 2px rgba(0,0,0,0.05), 0 1px 2px rgba(255,255,255,0.8)",
                }}
              >
                <option>All Time</option>
                <option>Last 30 Days</option>
                <option>Last 90 Days</option>
                <option>Last 6 Months</option>
                <option>Last Year</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDownIcon size={16} className="text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientReportFilter;
