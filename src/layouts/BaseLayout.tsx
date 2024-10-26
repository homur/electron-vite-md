import React from "react";
import DragWindowRegion from "@/components/DragWindowRegion";
import { Sidebar } from "@/layouts/Sidebar";
import { Main } from "./Main";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
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
