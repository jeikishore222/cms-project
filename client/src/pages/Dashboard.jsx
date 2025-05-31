import React from "react";
import { Link } from "react-router-dom";



const Dashboard = () => (
    <aside className="p-6 bg-black rounded-lg shadow-md w-full h-full min-h-screen">
        <h2 className="mb-8 text-xl font-bold text-white">Dashboard <br/>
            CMS
        </h2>
        <nav>
            <ul className="list-none p-0">
                <li className="mb-4">
                    <Link to="/" className="cursor-pointer hover:text-blue-400 text-white block w-full h-full">Home</Link>
                </li>
                <li className="mb-4">
                    <Link to="/food" className="cursor-pointer hover:text-blue-400 text-white block w-full h-full">Food menu</Link>
                </li>
               
                <li>
                    <Link to="/login" className="cursor-pointer hover:text-blue-400 text-white block w-full h-full">Logout</Link>
                </li>
            </ul>
        </nav>
    </aside>
);

const DashboardWithStyle = (props) => (
    <div className="fixed left-0 top-0 h-screen w-1/4 min-w-[220px] max-w-[400px] z-10">
        <Dashboard {...props} />
    </div>
);

export default Dashboard;