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
import PatientLayout from "./pages/layouts/PatientLayout";
import PatientDashboard from "./pages/patient/PatientDashboard";
import PatientProfile from "./components/patient/PatientProfile";
import PatientHealthRecords from "./pages/patient/PatientHealthRecords";
import { PatientHospitalWallet } from "./pages/patient/PatientHospitalWallet";
import { PatientPharmacyWallet } from "./pages/patient/PatientPharmacyWallet";
import PatientPrescription from "./pages/patient/PatientPrescription";
import PatientVitals from "./pages/patient/PatientVitals";
import PatientNotifications from "./pages/patient/PatientNotifications";
import PatientWallet from "./pages/student/PatientWallet";
import FacultyPrescriptionApprovals from "./pages/faculty/FacultyPrescriptionApprovals";
import FacultyAdmissionApprovals from "./pages/faculty/FacultyAdmissionApprovals";
import UnderConstruction from "./components/UnderConstruction";
import FacultyProfile from "./pages/faculty/FacultyProfile";
import StudentAcademicsSection from "./components/students/StudentAcademicsSection";
import PatientAdmissionRecords from "./pages/patient/PatientAdmissionRecords";

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
            <Route path="dashboard/:studentId" element={<StudentDashboard />} />
            <Route path="profile/:studentId" element={<StudentProfile />} />
            <Route
              path="academics/:studentId"
              element={<StudentAcademicsSection />}
            />
            <Route
              path="notifications/:studentId"
              element={<StudentNotificationsScreen />}
            />
          </Route>

          {/* Teachers route wrapped in layout*/}
          <Route path="/faculty" element={<FacultyLayout />}>
            <Route path="dashboard/:facultyId" element={<FacultyDashboard />} />
            <Route path="profile/:facultyId" element={<FacultyProfile />} />
            <Route
              path="case-record-approvals/:facultyId"
              element={<UnderConstruction />}
            />
            <Route
              path="discharge-summary-approvals/:facultyId"
              element={<UnderConstruction />}
            />
            <Route
              path="admission-approvals/:facultyId"
              element={<FacultyAdmissionApprovals />}
            />
            <Route
              path="prescription-approvals/:facultyId"
              element={<FacultyPrescriptionApprovals />}
            />
          </Route>

          {/* Patient route wrapped in layout*/}
          <Route path="/patient" element={<PatientLayout />}>
            <Route path="dashboard/:patientId" element={<PatientDashboard />} />
            <Route path="profile/:patientId" element={<PatientProfile />} />
            <Route
              path="notifications/:patientId"
              element={<PatientNotifications />}
            />
            <Route
              path="health-records/:patientId"
              element={<PatientHealthRecords />}
            />
            <Route
              path="admission-records/:patientId"
              element={<PatientAdmissionRecords />}
            />
            <Route path="wallet/:patientId" element={<PatientWallet />} />
            <Route
              path="hospital-wallet/:patientId"
              element={<PatientHospitalWallet />}
            />
            <Route
              path="pharmacy-wallet/:patientId"
              element={<PatientPharmacyWallet />}
            />
            <Route
              path="prescriptions/:patientId"
              element={<PatientPrescription />}
            />
            <Route path="vitals/:patientId" element={<PatientVitals />} />
          </Route>
          <Route path="*" element={<UnderConstruction />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
