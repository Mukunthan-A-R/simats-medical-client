import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import StudentSidebar from "../../components/students/StudentSidebar";

export default function StudentLayout() {
  const [isSideOpen, setIsSideOpen] = useState(true);
  const navigate = useNavigate();

  // Track window size for responsiveness
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
