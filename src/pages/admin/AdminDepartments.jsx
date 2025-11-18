import React, { useState } from "react";
import AvaliableDepartments from "../../components/admin/AvaliableDepartments";

const AdminDepartments = () => {
  const [departmentName, setDepartmentName] = useState("");

  const handleAddDepartment = () => {
    if (!departmentName.trim()) return;

    console.log("New Department:", departmentName);

    setDepartmentName(""); // clear input
  };

  return (
    <div className="min-h-screen px-2 sm:px-4 py-4 sm:py-6 max-w-4xl mx-auto">
      {/* Title */}
      <h1 className="text-xl font-semibold mb-4">Manage Departments</h1>

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
