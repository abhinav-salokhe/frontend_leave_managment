import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import Dashboard from "./pages/Dashboard";
import AddEmployeePage from "./pages/AddEmployeePage";
import EmployeeListPage from "./pages/EmployeeListPage";
import ApplyLeavePage from "./pages/ApplyLeavePage";
import LeaveRequestsPage from "./pages/LeaveRequestsPage";
import ViewLeaveBalancePage from "./pages/ViewLeaveBalancePage";
import { getToken } from "./utils/auth";
import NavBar from "./components/NavBar";

function AppWrapper() {
  const isAuth = !!getToken();
  const location = useLocation();

  // Hide navbar on signin & signup pages
  const hideNavBar = ["/signin", "/signup"].includes(location.pathname);

  return (
    <>
      {!hideNavBar && <NavBar />}
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />

        {/* Private Routes */}
        {isAuth && (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-employee" element={<AddEmployeePage />} />
            <Route path="/employees" element={<EmployeeListPage />} />
            <Route path="/apply-leave" element={<ApplyLeavePage />} />
            <Route path="/leave-requests" element={<LeaveRequestsPage />} />
            <Route path="/leave-balance" element={<ViewLeaveBalancePage />} />
          </>
        )}

        {/* Redirect unauthenticated */}
        {!isAuth && <Route path="*" element={<Navigate to="/signin" />} />}
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
