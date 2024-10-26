import React, { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import BaseLayout from "./layouts/BaseLayout";
import { syncThemeWithLocal } from "./helpers/theme_helpers";
import { useTranslation } from "react-i18next";
import { updateAppLanguage } from "./helpers/language_helpers";
import { routeTree } from "./routeTree.gen";
import { createRouter, Link, RouterProvider } from "@tanstack/react-router";
import "./localization/i18n";

const router = createRouter({
    routeTree,
    defaultNotFoundComponent: () => {
        return (
            <div>
                <p>Not found!</p>
                <Link to="/">Go home</Link>
            </div>
        );
    },
});

const root = createRoot(document.getElementById("app")!);
root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
