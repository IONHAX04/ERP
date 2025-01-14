import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/00-Header/Header";
import OverallDashboard from "./components/21-OverallDashboard/OverallDashboard";
import UserNotes from "./components/02-UserNotes/UserNotes";
import Attendance from "./components/03-Attendance/Attendance";
import Profile from "./components/04-Profile/Profile";
import Payment from "./components/05-Payment/Payment";
import Branch from "./components/06-Branch/Branch";
import Support from "./components/07-Support/Support";
import UsersDir from "./components/33-UsersDir/UsersDir";
import Users from "./components/22-Users/Users";
import RegisteredUsers from "./components/32-RegisteredUsers/RegisteredUsers";
import Feedback from "./components/23-Feedback/Feedback";
import Transactions from "./components/24-Transactions/Transactions";
import Payroll from "./components/25-Payroll/Payroll";
import Staff from "./components/26-Staff/Staff";
import Reports from "./components/27-Reports/Reports";
import Blogs from "./components/28-Blogs/Blogs";
import EditNotes from "./components/29-EditNotes/EditNotes";
import Restrictions from "./components/30-Restrictions/Restrictions";
import OverallSettings from "./components/31-OverallSettings/OverallSettings";

import "./App.css";
import StaffData from "./components/34-StaffData/StaffData";
import Organization from "./components/35-Organization/Organization";
import Therapist from "./components/36-Therapist/Therapist";

function App() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("JWTtoken");
    const refUtId = urlParams.get("refUtId");
    console.log("token", token);

    if (token && refUtId) {
      localStorage.setItem("JWTtoken", token);
      localStorage.setItem("refUtId", refUtId);

      const storedToken = localStorage.getItem("JWTtoken");
      const storedRefUtId = localStorage.getItem("refUtId");
      console.log("Stored JWTtoken:", storedToken);
      console.log("Stored refUtId:", storedRefUtId);
    } else {
      console.log("No token found in URL");
    }
  }, []);

  return (
    <>
      <Router>
        <Header>
          <Routes>
            {/* USER */}
            <Route path="/" element={<OverallDashboard />} />
            <Route path="/notes" element={<UserNotes />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/branch" element={<Branch />} />
            <Route path="/users/profile" element={<Profile />} />
            <Route path="/support" element={<Support />} />

            <Route path="/staff/Dashboard" element={<OverallDashboard />} />
            <Route path="/staff/users" element={<UsersDir />} />
            <Route path="/dir/staff" element={<StaffData />} />

            <Route path="/staff/signedupUsers" element={<Users />} />
            <Route path="/dir/organization" element={<Organization />} />
            <Route path="/therapist/approve" element={<Therapist />} />
            <Route
              path="/staff/registeredUsers"
              element={<RegisteredUsers />}
            />
            <Route path="/feedback" element={<Feedback />} />

            <Route path="/transaction" element={<Transactions />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/editNotes" element={<EditNotes />} />
            <Route path="/restrictions" element={<Restrictions />} />
            <Route path="/fSettings" element={<OverallSettings />} />
          </Routes>
        </Header>
      </Router>
    </>
  );
}

export default App;
