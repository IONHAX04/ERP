import { useState, ReactNode, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CiUser } from "react-icons/ci";
import {
  IoGridOutline,
  IoSettingsOutline,
  IoBarChartOutline,
} from "react-icons/io5";
import { HiOutlineUserGroup, HiOutlineUsers } from "react-icons/hi2";
import { PiCreditCard } from "react-icons/pi";
import { TfiWrite } from "react-icons/tfi";
import { CiPen } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { SlOrganization } from "react-icons/sl";

import { RiSpam2Line } from "react-icons/ri";

import {
  IoIosLogOut,
  IoIosHelpCircleOutline,
  IoIosGitBranch,
  IoIosSwap,
  IoIosCheckboxOutline,
  IoMdBook,
  IoMdMenu,
} from "react-icons/io";
import { BiMessage } from "react-icons/bi";

import { NavLink } from "react-router-dom";

import "./Header.css";

// Define types for the route structure
interface Route {
  path: string;
  name: string;
  icon: JSX.Element;
}

// const routes: Route[] = [
//   { path: "/users/dashboard", name: "Dashboard", icon: <IoGridOutline /> },
//   { path: "/users/notes", name: "User Notes", icon: <IoMdBook /> },
//   {
//     path: "/users/attendance",
//     name: "Attendance",
//     icon: <IoIosCheckboxOutline />,
//   },
//   { path: "/users/payment", name: "Payment", icon: <IoIosSwap /> },
//   { path: "/users/branch", name: "Branch", icon: <IoIosGitBranch /> },
//   { path: "/users/profile", name: "Profile", icon: <CiUser /> },
//   { path: "/users/support", name: "Support", icon: <IoIosHelpCircleOutline /> },

//   {
//     path: "/staff/Dashboard",
//     name: "Common Dashboard",
//     icon: <IoGridOutline />,
//   },

//   {
//     path: "/staff/users",
//     name: "FD / Dir - Users",
//     icon: <HiOutlineUsers />,
//   },
//   {
//     path: "/staff/registeredUsers",
//     name: "FD / Dir - Registered",
//     icon: <HiOutlineUsers />,
//   },
//   {
//     path: "/dir/staff",
//     name: "Dir - Staff",
//     icon: <AiOutlineUser />,
//   },
//   {
//     path: "/staff/signedupUsers",
//     name: "FD / Dir - Signed Up",
//     icon: <HiOutlineUserGroup />,
//   },
//   { path: "/staff/feedback", name: "FD / Dir - Feedback", icon: <BiMessage /> },

//   {
//     path: "/staff/transaction",
//     name: "Fin / Dir - Transactions",
//     icon: <IoIosSwap />,
//   },
//   {
//     path: "/staff/payroll",
//     name: "Fin / Dir - Payroll",
//     icon: <PiCreditCard />,
//   },

//   {
//     path: "/staff/employee",
//     name: "Directors - Staff",
//     icon: <HiOutlineUsers />,
//   },
//   {
//     path: "/reports",
//     name: "Directors - Reports",
//     icon: <IoBarChartOutline />,
//   },
//   { path: "/blogs", name: "Directors - Blogs", icon: <TfiWrite /> },
//   { path: "/editNotes", name: "Directors - Notes", icon: <CiPen /> },
//   {
//     path: "/restrictions",
//     name: "Directors - Restrictions",
//     icon: <RiSpam2Line />,
//   },

//   { path: "/fSettings", name: "Common Settings", icon: <IoSettingsOutline /> },

//   { path: "/logout", name: "Common - Logout", icon: <IoIosLogOut /> },
// ];

const Header: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [routes, setRoutes] = useState<Route[]>([]);

  const toggle = () => setIsOpen(!isOpen);

  const utId = localStorage.getItem("refUtId");

  const showAnimation = {
    hidden: {
      inlineSize: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      inlineSize: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Define the routes based on refUtId
  const userRoutes: Route[] = [
    { path: "/users/dashboard", name: "Dashboard", icon: <IoGridOutline /> },
    { path: "/users/notes", name: "User Notes", icon: <IoMdBook /> },
    {
      path: "/users/attendance",
      name: "Attendance",
      icon: <IoIosCheckboxOutline />,
    },
    { path: "/users/payment", name: "Payment", icon: <IoIosSwap /> },
    { path: "/users/branch", name: "Branch", icon: <IoIosGitBranch /> },
    { path: "/users/profile", name: "Profile", icon: <CiUser /> },
    {
      path: "/users/support",
      name: "Support",
      icon: <IoIosHelpCircleOutline />,
    },
    { path: "/logout", name: "Logout", icon: <IoIosLogOut /> },
  ];

  const staffRoutes: Route[] = [
    {
      path: "/staff/Dashboard",
      name: "Dashboard",
      icon: <IoGridOutline />,
    },
    {
      path: "/staff/users",
      name: "All Users",
      icon: <HiOutlineUsers />,
    },
    {
      path: "/staff/registeredUsers",
      name: "Form Submitted Users",
      icon: <HiOutlineUsers />,
    },
    {
      path: "/staff/signedupUsers",
      name: "Signed Up (Client)",
      icon: <HiOutlineUserGroup />,
    },
    {
      path: "/staff/feedback",
      name: "Feedback",
      icon: <BiMessage />,
    },
    { path: "/users/profile", name: "Profile", icon: <CiUser /> },
    {
      path: "/users/support",
      name: "Support",
      icon: <IoIosHelpCircleOutline />,
    },
    { path: "/logout", name: "Logout", icon: <IoIosLogOut /> },
  ];

  const directorRoutes: Route[] = [
    {
      path: "/staff/Dashboard",
      name: "Dashboard",
      icon: <IoGridOutline />,
    },
    {
      path: "/staff/users",
      name: "All Users",
      icon: <HiOutlineUsers />,
    },
    {
      path: "/staff/registeredUsers",
      name: "Form Submitted Users",
      icon: <HiOutlineUsers />,
    },
    {
      path: "/staff/signedupUsers",
      name: "Signed Up (Client)",
      icon: <HiOutlineUserGroup />,
    },
    // {
    //   path: "/therapist/approve",
    //   name: "Therapist Users",
    //   icon: <HiOutlineUserGroup />,
    // },
    {
      path: "/dir/staff",
      name: "Staff / Employee",
      icon: <AiOutlineUser />,
    },
    {
      path: "/staff/feedback",
      name: "Feedback",
      icon: <BiMessage />,
    },
    {
      path: "/staff/transaction",
      name: "Transactions",
      icon: <IoIosSwap />,
    },
    {
      path: "/staff/payroll",
      name: "Payroll",
      icon: <PiCreditCard />,
    },
    {
      path: "/reports",
      name: "Directors - Reports",
      icon: <IoBarChartOutline />,
    },
    { path: "/blogs", name: "Directors - Blogs", icon: <TfiWrite /> },
    { path: "/editNotes", name: "Directors - Notes", icon: <CiPen /> },
    {
      path: "/restrictions",
      name: "Directors - Restrictions",
      icon: <RiSpam2Line />,
    },
    {
      path: "/dir/organization",
      name: "Organization Chart",
      icon: <SlOrganization />,
    },
    { path: "/users/profile", name: "Profile", icon: <CiUser /> },
    {
      path: "/users/support",
      name: "Support",
      icon: <IoIosHelpCircleOutline />,
    },
    { path: "/logout", name: "Logout", icon: <IoIosLogOut /> },
  ];

  const financeRoutes: Route[] = [
    {
      path: "/staff/Dashboard",
      name: "Dashboard",
      icon: <IoGridOutline />,
    },
    {
      path: "/staff/transaction",
      name: "Transactions",
      icon: <IoIosSwap />,
    },
    {
      path: "/staff/payroll",
      name: "Payroll",
      icon: <PiCreditCard />,
    },
    {
      path: "/reports",
      name: "Reports",
      icon: <IoBarChartOutline />,
    },
    { path: "/users/profile", name: "Profile", icon: <CiUser /> },
    {
      path: "/users/support",
      name: "Support",
      icon: <IoIosHelpCircleOutline />,
    },
    { path: "/logout", name: "Logout", icon: <IoIosLogOut /> },
  ];

  const therapist: Route[] = [
    {
      path: "/staff/Dashboard",
      name: "Dashboard",
      icon: <IoGridOutline />,
    },
    {
      path: "/staff/users",
      name: "All Users",
      icon: <HiOutlineUsers />,
    },
    {
      path: "/staff/registeredUsers",
      name: "Form Submitted Users",
      icon: <HiOutlineUsers />,
    },
    {
      path: "/staff/signedupUsers",
      name: "Signed Up (Client)",
      icon: <HiOutlineUserGroup />,
    },
    {
      path: "/therapist/approve",
      name: "Therapist Users",
      icon: <HiOutlineUserGroup />,
    },
    {
      path: "/dir/staff",
      name: "Staff / Employee",
      icon: <AiOutlineUser />,
    },
    {
      path: "/staff/feedback",
      name: "Feedback",
      icon: <BiMessage />,
    },
    {
      path: "/staff/transaction",
      name: "Transactions",
      icon: <IoIosSwap />,
    },
    {
      path: "/staff/payroll",
      name: "Payroll",
      icon: <PiCreditCard />,
    },
    {
      path: "/reports",
      name: "Directors - Reports",
      icon: <IoBarChartOutline />,
    },
    { path: "/blogs", name: "Directors - Blogs", icon: <TfiWrite /> },
    { path: "/editNotes", name: "Directors - Notes", icon: <CiPen /> },
    {
      path: "/restrictions",
      name: "Directors - Restrictions",
      icon: <RiSpam2Line />,
    },
    {
      path: "/dir/organization",
      name: "Organization Chart",
      icon: <SlOrganization />,
    },
    { path: "/users/profile", name: "Profile", icon: <CiUser /> },
    {
      path: "/users/support",
      name: "Support",
      icon: <IoIosHelpCircleOutline />,
    },
    { path: "/logout", name: "Logout", icon: <IoIosLogOut /> },
  ];

  useEffect(() => {
    console.log("Ref ut id", utId);

    const parsedUtId = utId ? parseInt(utId, 10) : null;

    if (parsedUtId === 5 || parsedUtId === 6) {
      setRoutes(userRoutes);
    } else if (parsedUtId === 4) {
      setRoutes(staffRoutes);
    } else if (parsedUtId === 7) {
      setRoutes(directorRoutes);
    } else if (parsedUtId === 8) {
      setRoutes(financeRoutes);
    } else if (parsedUtId === 11) {
      setRoutes(therapist);
    } else {
      console.warn("Unknown refUtId:", parsedUtId);
    }
  }, [utId]);

  return (
    <div>
      <div className="main_container">
        <motion.div
          animate={{
            inlineSize: isOpen ? "250px" : "60px",
            transition: {
              duration: 0.2,
              type: "spring",
              damping: 10,
            },
          }}
          className="sidebar"
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  className="logo"
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  Dashboard
                </motion.h1>
              )}
            </AnimatePresence>
            <div className="bars">
              <IoMdMenu onClick={toggle} />
            </div>
          </div>

          <section className="routes">
            {routes.map((route) => (
              <NavLink
                to={route.path}
                key={route.name}
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                <div className="icon">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="link_text"
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            ))}
          </section>
        </motion.div>
        <main style={{ inlineSize: isOpen ? "85vw" : "95vw" }}>{children}</main>
      </div>
    </div>
  );
};

export default Header;
