import FormBuilder from "../../components/admin/form/FormBuilder";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/header/PageHeader";

const AdminProceduresForm = () => {
  return (
    <div className="min-h-screen px-2 sm:px-4 py-4 sm:py-6 max-w-4xl mx-auto">
      <PageHeader title={"Admin Procedure Form"} />

      <FormBuilder></FormBuilder>
    </div>
  );
};

export default AdminProceduresForm;
