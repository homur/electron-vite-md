import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import BaseLayout from "@/layouts/BaseLayout";

export const Route = createRootRoute({
    component: () => (
        <>
            <BaseLayout children={<Outlet />} />
            <TanStackRouterDevtools />
        </>
    ),
});
