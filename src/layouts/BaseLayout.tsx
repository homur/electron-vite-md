import React, { useEffect } from "react";
import DragWindowRegion from "@/components/DragWindowRegion";
import { Sidebar } from "@/layouts/Sidebar";
import { Main } from "./Main";
import { useTranslation } from "react-i18next";
import { syncThemeWithLocal } from "@/helpers/theme_helpers";
import { updateAppLanguage } from "@/helpers/language_helpers";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
    const { i18n } = useTranslation();

    useEffect(() => {
        syncThemeWithLocal();
        updateAppLanguage(i18n);
    }, []);

    return (
        <>
            <DragWindowRegion title="desktop app md" />
            <div className="flex">
                <Sidebar />
                <Main children={children} />
            </div>
        </>
    );
}
