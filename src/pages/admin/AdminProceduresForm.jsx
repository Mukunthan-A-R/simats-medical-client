import React from "react";
import FormBuilder from "../../components/admin/form/FormBuilder";
import { aquaButtonStyle, aquaGlossEffect } from "../../utils/constants";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminProceduresForm = () => {
  const navigate = useNavigate();

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
          Admin Procedure Form
        </h1>
      </div>
      <FormBuilder></FormBuilder>
    </div>
  );
};

export default AdminProceduresForm;
