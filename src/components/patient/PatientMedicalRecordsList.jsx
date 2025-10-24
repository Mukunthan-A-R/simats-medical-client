import PatientMedicalRecordsRow from "./PatientMedicalRecordsRow";

const PatientMedicalRecordsList = ({ records }) => {
  const openImageModal = (image) => {
    console.log("Open image modal for:", image);
  };

  const openReportModal = (recordId) => {
    console.log("Open report modal for record:", recordId);
  };

  if (!records || records.length === 0) {
    return (
      <div className="text-center py-6">
        <p className="text-gray-500">
          No records found matching your search criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="hidden md:block overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date & Time
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type & Description
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Entered by / Approved by
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {records.map((record) => (
            <PatientMedicalRecordsRow key={record.id} record={record} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientMedicalRecordsList;
