import React from "react";
import HomePage from "@/pages/HomePage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
    component: () => <HomePage />,
});
