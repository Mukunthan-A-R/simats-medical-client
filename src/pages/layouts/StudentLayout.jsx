import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import StudentSidebar from "../../components/students/StudentSidebar";

import { useRecoilState, useRecoilValue } from "recoil";
import { userData, userLoginAtom } from "../../context/userAtom";

import { useQuery } from "@tanstack/react-query";
import { fetchCurrentUser } from "../../services/me";

export default function StudentLayout() {
  const navigate = useNavigate();
  const userLogin = useRecoilValue(userLoginAtom);
  const [userDataVal, setUserDataVal] = useRecoilState(userData);

  // Track window size for responsiveness
  const [isSideOpen, setIsSideOpen] = useState(!(window.innerWidth < 768));
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Fetch user data on refresh if atom is empty
  const { isLoading } = useQuery({
    queryKey: ["currentUser"],
    queryFn: fetchCurrentUser,
    enabled: !!userLogin?.userId && !userDataVal?.name,
    onSuccess: (data) => {
      console.log("Here amigo");
      console.log(data);

      setUserDataVal(data);
    },
    onError: () => {
      localStorage.removeItem("authToken");
      navigate("/login");
    },
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNav = (path) => {
    navigate(path);
    if (isMobile) setIsSideOpen(false);
  };

  const handleMenuIconClick = () => setIsSideOpen(!isSideOpen);

  if (isLoading) return <p>Loading ...</p>;

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
