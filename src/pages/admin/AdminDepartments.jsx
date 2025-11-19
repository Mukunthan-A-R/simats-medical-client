import React, { useState } from "react";
import AvaliableDepartments from "../../components/admin/AvaliableDepartments";
import { useNavigate } from "react-router-dom";
import { aquaButtonStyle, aquaGlossEffect } from "../../utils/constants";
import { ArrowLeft } from "lucide-react";

const AdminDepartments = () => {
  const navigate = useNavigate();
  const [departmentName, setDepartmentName] = useState("");

  const handleAddDepartment = () => {
    if (!departmentName.trim()) return;

    console.log("New Department:", departmentName);

    setDepartmentName(""); // clear input
  };

  return (
    <div className="min-h-screen px-2 sm:px-4 py-4 sm:py-6 max-w-4xl mx-auto">
      {/* Title */}
      <div className="flex flex-row items-center mb-4">
        <button onClick={() => navigate(-1)}>
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full mr-2 ${aquaButtonStyle} ${aquaGlossEffect}`}
            style={{
              background: "linear-gradient(to bottom, #4d90fe, #0066cc)",
              border: "1px solid rgba(0,0,0,0.2)",
              boxShadow:
                "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.4)",
            }}
          >
            <ArrowLeft className="h-5 w-5 text-white" />
          </div>
        </button>
        <h1
          className="text-lg md:text-xl font-semibold text-blue-900 leading-tight"
          style={{ textShadow: "0 1px 0 rgba(255,255,255,0.7)" }}
        >
          Medical Records
        </h1>
      </div>

      {/* Card Container */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6">
        {/* Add Department Form */}
        <h2 className="text-lg font-medium mb-3">Add New Department</h2>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
            placeholder="Enter department name"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleAddDepartment}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>
      </div>

      <AvaliableDepartments></AvaliableDepartments>
    </div>
  );
};

export default AdminDepartments;
