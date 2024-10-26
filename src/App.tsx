import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/HomePage";
import { Profile } from "./pages/Profile";
import { Settings } from "./pages/Settings";
import BaseLayout from "./layouts/BaseLayout";
import { syncThemeWithLocal } from "./helpers/theme_helpers";
import { useTranslation } from "react-i18next";
import { updateAppLanguage } from "./helpers/language_helpers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./localization/i18n";

export default function App() {
    const { i18n } = useTranslation();

    useEffect(() => {
        syncThemeWithLocal();
        updateAppLanguage(i18n);
    }, []);

    return (
        <Router>
            <BaseLayout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </BaseLayout>
        </Router>
    );
}

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
