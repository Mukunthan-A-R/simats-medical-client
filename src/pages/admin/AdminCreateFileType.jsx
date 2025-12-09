import React from "react";
import PageHeader from "../../components/header/PageHeader";
import DocumentTypesList from "../../components/admin/file-types/DocumentTypesList";

const AdminCreateFileType = () => {
  return (
    <div className="min-h-screen px-2 sm:px-4 py-4 sm:py-6 max-w-4xl mx-auto">
      <PageHeader title={"Admin Create File Type"} />
      AdminCreateFileType
      <DocumentTypesList></DocumentTypesList>
    </div>
  );
};

export default AdminCreateFileType;
