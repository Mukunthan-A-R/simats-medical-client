import { useQuery } from "@tanstack/react-query";
import { fetchDocumentTypesForDropdown } from "../../../services/documentTypeDropdown";

const DocumentTypesList = () => {
  const {
    data: fileTypes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["departments"],
    queryFn: fetchDocumentTypesForDropdown,
  });

  if (isLoading) return <div>Loading departments...</div>;
  if (error) return <div>Error loading departments</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6 text-gray-900">
        Available Departments
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                Department ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                Department Name
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fileTypes.map((dept, idx) => (
              <tr
                key={dept.type_id}
                className="hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {dept.type_id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-medium">
                  {dept.type_name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentTypesList;
