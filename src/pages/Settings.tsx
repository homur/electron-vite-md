import React from "react";
import LangToggle from "@/components/LangToggle";
import ToggleTheme from "@/components/ToggleTheme";
import { useTranslation } from "react-i18next";
import { SettingsCardComponent } from "@/components/SettingsCard";

export const Settings = () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center gap-2">
            <SettingsCardComponent />
        </div>
    );
};
