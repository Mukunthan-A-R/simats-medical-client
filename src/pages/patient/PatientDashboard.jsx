import React from "react";
import PatientDashboardProfile from "../../components/patient/PatientDashboardProfile";
import { useParams } from "react-router-dom";

const PatientDashboard = () => {
  const { patientId } = useParams();
  console.log("patientId : " + patientId);

  return (
    <div className="px-4 py-5 max-w-6xl mx-auto w-full">
      <PatientDashboardProfile></PatientDashboardProfile>
    </div>
  );
};

export default PatientDashboard;
