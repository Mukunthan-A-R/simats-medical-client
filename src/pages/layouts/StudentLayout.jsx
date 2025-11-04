import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import StudentSidebar from "../../components/students/StudentSidebar";
import { useRecoilState, useRecoilValue } from "recoil";
import { userLoginAtom, userData } from "../../context/userAtom";
import { useQuery } from "@tanstack/react-query";
import { fetchStudentById } from "../../services/studentService";

export default function StudentLayout() {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useRecoilState(userLoginAtom);

  // Track window size for responsiveness
  const [isSideOpen, setIsSideOpen] = useState(!(window.innerWidth < 768));
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [userDataVal, setUserDataVal] = useRecoilState(userData);

  const {
    data: student,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["student", userLogin?.userId],
    queryFn: () => fetchStudentById(userLogin?.userId),
    enabled: !!userLogin?.userId,
  });

  console.log("student");
  console.log(student);

  useEffect(() => {
    if (student) {
      const studentData = student?.data || student;
      setUserDataVal(studentData);
    }
  }, [student, setUserDataVal]);

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

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top NavBar */}
      <NavBar onNavigate={() => {}} menuIconClick={handleMenuIconClick} />

      <div className="flex flex-row">
        {/* Sidebar */}
        {isSideOpen && (
          <StudentSidebar
            isOpen={isSideOpen}
            onClose={() => setIsSideOpen(false)}
            onNavigate={handleNav}
            notificationCount={3}
          />
        )}

        {/* Main Content */}
        <div
          className="flex-1"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              rgba(180, 190, 210, 0.2),
              rgba(180, 190, 210, 0.2) 1px,
              rgba(210, 220, 230, 0.4) 1px,
              rgba(210, 220, 230, 0.4) 2px
            )`,
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
