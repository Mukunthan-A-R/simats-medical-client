import React, { useState } from "react";
import { ChevronDownIcon, SearchIcon } from "lucide-react";

const PatientMedicalRecords = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filterDepartment, setFilterDepartment] = useState("All");

  const departments = ["All", "cardiology", "dermatology", "radiology"];

  // ✅ Reusable shared styles
  const selectClasses =
    "w-full pl-2 pr-6 py-1.5 text-sm border border-gray-300 rounded-md appearance-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white";
  const wrapperClasses =
    "p-3 mb-4 bg-white rounded-lg shadow-sm border border-gray-200 print:hidden";
  const iconClasses =
    "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none";

  return (
    <div>
      {/* Search & Filter Section */}
      <div className={wrapperClasses}>
        <div className="flex flex-col sm:flex-row gap-2">
          {/* Search Box */}
          <div className="relative flex-1">
            <SearchIcon
              size={14}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search records..."
              className="w-full pl-7 pr-2 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="flex gap-2 w-full sm:w-auto">
            {/* Type Filter */}
            <div className="relative flex-1 sm:w-36">
              <select
                className={selectClasses}
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="All">All Types</option>
                <option value="Consultation">Consultations</option>
                <option value="Laboratory">Laboratory Tests</option>
                <option value="Procedure">Procedures</option>
                <option value="Medication">Medications</option>
              </select>
              <ChevronDownIcon size={14} className={iconClasses} />
            </div>

            {/* Department Filter */}
            <div className="relative flex-1 sm:w-36">
              <select
                className={selectClasses}
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
              >
                {departments.map((department) => (
                  <option key={department} value={department}>
                    {department === "All"
                      ? "All Departments"
                      : department.charAt(0).toUpperCase() +
                        department.slice(1)}
                  </option>
                ))}
              </select>
              <ChevronDownIcon size={14} className={iconClasses} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientMedicalRecords;
