import React from "react";

export const Main = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex flex-1 flex-col">{children}</div>;
};
