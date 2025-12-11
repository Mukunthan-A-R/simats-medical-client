import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import AvaliableDepartments from "../../components/admin/AvaliableDepartments";
import PageHeader from "../../components/header/PageHeader";
import { createDepartment } from "../../services/departmentServices";
import toast from "react-hot-toast";

const AdminDepartments = () => {
  const [departmentName, setDepartmentName] = useState("");
  const queryClient = useQueryClient();

  // Mutation for creating a department
  const { mutate: addDepartment, isLoading } = useMutation({
    mutationFn: createDepartment,
    onSuccess: () => {
      setDepartmentName("");
      queryClient.invalidateQueries({ queryKey: ["departments"] });
      toast.success("New Department Created");
    },
    onError: (err) => {
      console.error("Failed to add department:", err);
      toast.error(err.response?.data?.error || "Failed to create department");
    },
  });

  const handleAddDepartment = () => {
    if (!departmentName.trim()) return;
    addDepartment({ name: departmentName.trim() });
  };

  return (
    <div className="min-h-screen px-2 sm:px-4 py-4 sm:py-6 max-w-4xl mx-auto">
      <PageHeader title={"Medical Records"} />

      {/* Card Container */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6">
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
            disabled={isLoading}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            {isLoading ? "Adding..." : "Add"}
          </button>
        </div>
      </div>

      <AvaliableDepartments />
    </div>
  );
};

export default AdminDepartments;
