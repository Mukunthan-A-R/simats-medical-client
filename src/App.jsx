import { useState } from "react";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import StudentDashboard from "./pages/student/StudentDashboard";
import FacultyDashboard from "./pages/faculty/FacultyDashboard";
import StudentLayout from "./pages/layouts/StudentLayout";
import StudentProfile from "./pages/student/StudentProfile";
import { StudentNotificationsScreen } from "./pages/student/StudentNotificationsScreen";
import FacultyLayout from "./pages/layouts/FacultyLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/about" element={<About />} />

          {/* Student routes wrapped in layout */}
          <Route path="/student" element={<StudentLayout />}>
            <Route path="dashboard" element={<StudentDashboard />} />
            <Route path="profile" element={<StudentProfile />} />
            <Route
              path="notifications"
              element={<StudentNotificationsScreen />}
            />
          </Route>

          <Route path="/faculty" element={<FacultyLayout />}>
            <Route path="dashboard" element={<FacultyDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
