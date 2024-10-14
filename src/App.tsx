import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/00-Header/Header";
import Dashboard from "./components/01-Dashboard/Dashboard";
import UserNotes from "./components/02-UserNotes/UserNotes";
import Attendance from "./components/03-Attendance/Attendance";
import Profile from "./components/04-Profile/Profile";
import Payment from "./components/05-Payment/Payment";
import Branch from "./components/06-Branch/Branch";
import Support from "./components/07-Support/Support";
import OverallDashboard from "./components/21-OverallDashboard/OverallDashboard";
import Users from "./components/22-Users/Users";
import Feedback from "./components/23-Feedback/Feedback";
import Transactions from "./components/24-Transactions/Transactions";
import Payroll from "./components/25-Payroll/Payroll";
import Staff from "./components/26-Staff/Staff";
import Reports from "./components/27-Reports/Reports";
import Blogs from "./components/28-Blogs/Blogs";
import EditNotes from "./components/29-EditNotes/EditNotes";
import Restrictions from "./components/30-Restrictions/Restrictions";
import OverallSettings from "./components/31-OverallSettings/OverallSettings";

import './App.css'

function App() {

  return (
    <>
      <Router>
        <Header>
          <Routes>
            {/* USER */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/notes" element={<UserNotes />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/branch" element={<Branch />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/support" element={<Support />} />


            <Route path="/staffDashboard" element={<OverallDashboard />} />


            <Route path="/users" element={<Users />} />
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
  )
}

export default App;