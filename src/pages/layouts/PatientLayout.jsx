import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import PatientSidebar from "../../components/patient/PatientSidebar";
import { userData, userLoginAtom } from "../../context/userAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useQuery } from "@tanstack/react-query";
import { fetchPatientById } from "../../services/patientService";

export default function PatientLayout() {
  const navigate = useNavigate();
  const userLogin = useRecoilValue(userLoginAtom);
  // Track window size for responsiveness
  const [isSideOpen, setIsSideOpen] = useState(!(window.innerWidth < 768));
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [userDataVal, setUserDataVal] = useRecoilState(userData);

  const patientId = userLogin?.userId || null;
  // console.log("userLogin");
  // console.log(userLogin);

  const {
    data: patient,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["patient", patientId],
    queryFn: () => fetchPatientById(patientId),
    enabled: !!patientId,
  });
  console.log("patient");
  console.log(patient);

  useEffect(() => {
    if (patient) {
      const patientData = patient?.data || patient;
      setUserDataVal(patientData);
    }
  }, [patientId, patient, setUserDataVal]);

  // console.log(patientId);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNav = (path) => {
    navigate(path);
    if (isMobile) {
      setIsSideOpen(false);
    } else {
      setIsSideOpen(true);
    }
  };

  const handleMenuIconClick = () => {
    setIsSideOpen(!isSideOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top NavBar */}
      <NavBar onNavigate={() => {}} menuIconClick={handleMenuIconClick} />

      <div className="flex flex-row">
        {/* Sidebar */}
        {isSideOpen && (
          <PatientSidebar
            isOpen={isSideOpen}
            onClose={() => setIsSideOpen(false)}
            onNavigate={handleNav}
            notificationCount={3}
          />
        )}

        {/* Main Content */}
        <div
          className="flex-1 min-h-screen"
          style={{
            backgroundImage: `
        repeating-linear-gradient(
          0deg,
          rgba(180, 190, 210, 0.2),
          rgba(180, 190, 210, 0.2) 1px,
          rgba(210, 220, 230, 0.4) 1px,
          rgba(210, 220, 230, 0.4) 2px
        )
      `,
            backgroundColor: "#e0e5eb",
            boxShadow: "inset 0 0 100px rgba(180, 190, 210, 0.3)",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
