import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import ScrollToTop from "./components/ScrollToTop";

// MIAS module 1 commit

// Student Routes
import StudentLayout from "./pages/layouts/StudentLayout";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentProfile from "./pages/student/StudentProfile";
import StudentNotificationsScreen from "./pages/student/StudentNotificationsScreen";
import StudentAcademicsSection from "./components/students/dashboard/academics/StudentAcademicsSection";

// Patient Routes
import PatientLayout from "./pages/layouts/PatientLayout";
import PatientDashboard from "./pages/patient/PatientDashboard";
import PatientProfile from "./components/patient/PatientProfile";
import PatientNotifications from "./pages/patient/PatientNotifications";
import PatientHealthRecords from "./pages/patient/PatientHealthRecords";
import PatientPrescription from "./pages/patient/PatientPrescription";
import PatientVitals from "./pages/patient/PatientVitals";
import PatientWallet from "./pages/student/PatientWallet";
import PatientAdmissionRecords from "./pages/patient/PatientAdmissionRecords";
import PatientReport from "./pages/patient/PatientReport";
import { PatientHospitalWallet } from "./pages/patient/PatientHospitalWallet";
import { PatientPharmacyWallet } from "./pages/patient/PatientPharmacyWallet";

// Faculty Routes
import FacultyLayout from "./pages/layouts/FacultyLayout";
import FacultyDashboard from "./pages/faculty/FacultyDashboard";
import FacultyProfile from "./pages/faculty/FacultyProfile";
import FacultyPrescriptionApprovals from "./pages/faculty/FacultyPrescriptionApprovals";
import FacultyAdmissionApprovals from "./pages/faculty/FacultyAdmissionApprovals";
import FacultyPatientsData from "./pages/faculty/FacultyPatientsData";
import FacultyDischargeApproval from "./pages/faculty/FacultyDischargeApproval";
import FacultyCaseApproval from "./pages/faculty/FacultyCaseApproval";

import UnderConstruction from "./components/UnderConstruction";
import PatientDetails from "./pages/student/PatientDetails";
import { Toaster } from "react-hot-toast";
import AdminLayout from "./pages/layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminDepartments from "./pages/admin/AdminDepartments";
import AdminDepartmentProcedures from "./pages/admin/AdminDepartmentProcedures";
import AdminProceduresForm from "./pages/admin/AdminProceduresForm";
import AdminViewProceduresForm from "./pages/admin/AdminViewProceduresForm";
import AdminCreateFileType from "./pages/admin/AdminCreateFileType";
import FacultyCaseApprovalSwipe from "./components/faculty/case-record-swipe/FacultyCaseApprovalSwipe";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/about" element={<About />} />

          {/* Admin routes*/}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard/:adminId" element={<AdminDashboard />} />
            <Route
              path="/admin/department/:adminId"
              element={<AdminDepartments />}
            />
            <Route
              path="/admin/department/procedures/:adminId"
              element={<AdminDepartmentProcedures />}
            />
            <Route
              path="/admin/create/procedure-form/:adminId"
              element={<AdminProceduresForm />}
            />
            <Route
              path="/admin/view/procedure-form/:adminId"
              element={<AdminViewProceduresForm />}
            />
            <Route
              path="/admin/create-file-type/:adminId"
              element={<AdminCreateFileType />}
            />
            {/* <Route path="profile/:studentId" element={<StudentProfile />} />
            <Route
              path="academics/:studentId"
              element={<StudentAcademicsSection />}
            />
            <Route
              path="notifications/:studentId"
              element={<StudentNotificationsScreen />}
            />
            <Route
              path=":studentId/patient/:patientId"
              element={<PatientDetails />}
            /> */}
          </Route>

          {/* Student routes*/}
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
            <Route
              path=":studentId/patient/:patientId"
              element={<PatientDetails />}
            />
          </Route>

          {/* Teachers route*/}
          <Route path="/faculty" element={<FacultyLayout />}>
            <Route path="dashboard/:facultyId" element={<FacultyDashboard />} />
            <Route path="profile/:facultyId" element={<FacultyProfile />} />
            {/* <Route
              path="case-record-approvals/:facultyId"
              element={<FacultyCaseApproval />}
            /> */}
            <Route
              path="case-record-approvals/:facultyId"
              element={<FacultyCaseApprovalSwipe />}
            />
            <Route
              path=":studentId/patient/:patientId"
              element={<PatientDetails />}
            />
            <Route
              path="discharge-summary-approvals/:facultyId"
              element={<FacultyDischargeApproval />}
            />
            <Route
              path="admission-approvals/:facultyId"
              element={<FacultyAdmissionApprovals />}
            />
            <Route
              path="prescription-approvals/:facultyId"
              element={<FacultyPrescriptionApprovals />}
            />
            <Route
              path="my-patient/:facultyId"
              element={<FacultyPatientsData />}
            />
          </Route>

          {/* Patient route*/}
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
            <Route path="report/:patientId" element={<PatientReport />} />
            <Route path="vitals/:patientId" element={<PatientVitals />} />
          </Route>
          <Route path="*" element={<UnderConstruction />} />
        </Routes>
        <Toaster position="top-right" reverseOrder={false} />
      </BrowserRouter>
    </>
  );
}

export default App;
