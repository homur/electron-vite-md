import React from "react";
import { Link } from "@tanstack/react-router";
import Icon from "../components/ui/icon";
import { icons } from "lucide-react";

export const Sidebar = () => {
    return (
        <div className="sidebar flex h-screen w-64 flex-col bg-stone-900 dark:bg-stone-100">
            <div className="flex flex-col space-y-4 p-4">
                <SidebarItem to="/" icon="House" label="Home" />
                <SidebarItem to="/profile" icon="User" label="Profile" />
                <SidebarItem to="/settings" icon="Settings" label="Settings" />
            </div>
        </div>
    );
};

const SidebarItem = ({
    icon,
    label,
    to,
}: {
    icon: keyof typeof icons;
    label: string;
    to: string;
}) => {
    return (
        <Link to={to} className="flex items-center space-x-4">
            <Icon name={icon} color="white" size={24} absoluteStrokeWidth={true} />
            <span className="text-white dark:text-black">{label}</span>
        </Link>
    );
};
