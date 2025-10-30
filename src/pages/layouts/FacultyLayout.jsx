import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import FacultySidebar from "../../components/faculty/FacultySidebar";
import { fetchDoctorById } from "../../services/doctorService";
import { useQuery } from "@tanstack/react-query";
import { userData, userLoginAtom } from "../../context/userAtom";
import { useRecoilState, useRecoilValue } from "recoil";

export default function FacultyLayout() {
  const navigate = useNavigate();
  const userLogin = useRecoilValue(userLoginAtom);
  // Track window size for responsiveness
  const [isSideOpen, setIsSideOpen] = useState(!(window.innerWidth < 768));
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [userDataVal, setUserDataVal] = useRecoilState(userData);

  const doctorId = userLogin?.userId || null;

  const {
    data: doctor,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["doctor", doctorId],
    queryFn: () => fetchDoctorById(doctorId),
    enabled: !!doctorId,
  });

  useEffect(() => {
    if (doctor) {
      const doctorData = doctor?.data || doctor;
      setUserDataVal(doctorData);
    }
  }, [doctorId, doctor]);

  console.log("dcotor");
  console.log(doctor);
  console.log(doctorId);

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
          <FacultySidebar
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
