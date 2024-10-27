import { LucideIcon, icons } from "lucide-react";
import React, { ComponentProps, FC } from "react";

// Use ComponentProps to get the props for LucideIcon components
type LucideIconProps = ComponentProps<LucideIcon>;

// Define the props for the Icon component
interface DynamicIconProps extends LucideIconProps {
    name: keyof typeof icons; // Restrict the icon name to only valid Lucide icons
}

// Create the Icon component
const Icon: FC<DynamicIconProps> = ({ name, ...props }) => {
    const LucideIconComponent = icons[name] as LucideIcon;
    return <LucideIconComponent {...props} />;
};

export default Icon;
