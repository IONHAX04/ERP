import { useState, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CiUser } from "react-icons/ci";
import { IoGridOutline, IoSettingsOutline, IoBarChartOutline } from "react-icons/io5";
import { HiOutlineUserGroup, HiOutlineUsers } from "react-icons/hi2";
import { PiCreditCard } from "react-icons/pi";
import { TfiWrite } from "react-icons/tfi";
import { CiPen } from "react-icons/ci";
import { RiSpam2Line } from "react-icons/ri";

import { IoIosLogOut, IoIosHelpCircleOutline, IoIosGitBranch, IoIosSwap, IoIosCheckboxOutline, IoMdBook, IoMdMenu } from "react-icons/io";
import { BiMessage } from "react-icons/bi";


import { NavLink } from "react-router-dom";

import "./Header.css";

// Define types for the route structure
interface Route {
    path: string;
    name: string;
    icon: JSX.Element;
}

// Define the routes array with specific Route type
const routes: Route[] = [
    // USERS
    { path: "/", name: "Dashboard", icon: <IoGridOutline /> },
    { path: "/notes", name: "User Notes", icon: <IoMdBook /> },
    { path: "/attendance", name: "Attendance", icon: <IoIosCheckboxOutline /> },
    { path: "/payment", name: "Payment", icon: <IoIosSwap /> },
    { path: "/branch", name: "Branch", icon: <IoIosGitBranch /> },
    { path: "/profile", name: "Profile", icon: <CiUser /> },
    { path: "/support", name: "Support", icon: <IoIosHelpCircleOutline /> },



    // AUTHORIZED ONLY
    { path: "/staffDashboard", name: "Common Dashboard", icon: <IoGridOutline /> },

    // FRONT OFFICE
    { path: "/users", name: "FD / Dir - Users", icon: <HiOutlineUserGroup /> },
    { path: "/feedback", name: "FD / Dir - Feedback", icon: <BiMessage /> },


    // FINANCE
    { path: "/transaction", name: "Fin / Dir - Transactions", icon: <IoIosSwap /> },
    { path: "/payroll", name: "Fin / Dir - Payroll", icon: <PiCreditCard /> },


    // DIRECTORS

    { path: "/staff", name: "Directors - Staff", icon: <HiOutlineUsers /> },
    { path: "/reports", name: "Directors - Reports", icon: <IoBarChartOutline /> },
    { path: "/blogs", name: "Directors - Blogs", icon: <TfiWrite /> },
    { path: "/editNotes", name: "Directors - Notes", icon: <CiPen /> },
    { path: "/restrictions", name: "Directors - Restrictions", icon: <RiSpam2Line /> },


    { path: "/fSettings", name: "Common Settings", icon: <IoSettingsOutline /> },




    { path: "/logout", name: "Common - Logout", icon: <IoIosLogOut /> },
];

// Define props type for the Header component
interface NavProps {
    children: ReactNode;
}

const Header: React.FC<NavProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

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
                                    User Name
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
