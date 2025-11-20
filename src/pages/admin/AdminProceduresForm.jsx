import FormBuilder from "../../components/admin/form/FormBuilder";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/header/PageHeader";
import AdminProcedureFormPage from "../../components/admin/form/AdminProcedureFormPage";

const AdminProceduresForm = () => {
  return (
    <div className="min-h-screen px-2 sm:px-4 py-4 sm:py-6 max-w-4xl mx-auto">
      <PageHeader title={"Admin Procedure Form"} />

      <AdminProcedureFormPage />

      {/* <FormBuilder></FormBuilder> */}
    </div>
  );
};

export default AdminProceduresForm;
