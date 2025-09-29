import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import StudentDashboard from "./pages/student/StudentDashboard";
import FacultyDashboard from "./pages/faculty/FacultyDashboard";
import StudentLayout from "./pages/layouts/StudentLayout";
import StudentProfile from "./pages/student/StudentProfile";
import { StudentNotificationsScreen } from "./pages/student/StudentNotificationsScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />

          {/* Student routes wrapped in layout */}
          <Route path="/student" element={<StudentLayout />}>
            <Route path="dashboard" element={<StudentDashboard />} />
            <Route path="profile" element={<StudentProfile />} />
            <Route path="notifications" element={<StudentNotificationsScreen />} />
          </Route>

          <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
