import React from "react";

import { Link } from "react-router-dom";

export const Sidebar = () => {
    return (
        <div className="sidebar flex h-screen w-64 flex-col bg-slate-400">
            <div className="flex h-16 items-center justify-center bg-slate-500">
                <h1 className="text-xl font-bold text-white">Shadcn</h1>
            </div>
            <div className="flex flex-col space-y-4 p-4">
                <SidebarItem to="/" icon="home" label="Home" />
                <SidebarItem to="/profile" icon="user" label="Profile" />
                <SidebarItem to="/settings" icon="settings" label="Settings" />
            </div>
        </div>
    );
};

const SidebarItem = ({ icon, label, to }: { icon: string; label: string; to: string }) => {
    return (
        <Link to={to} className="flex items-center space-x-4">
            <div className="h-8 w-8 rounded-md bg-slate-600">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="m-auto h-4 w-4 text-white"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                </svg>
            </div>
            <span className="text-white">{label}</span>
        </Link>
    );
};
