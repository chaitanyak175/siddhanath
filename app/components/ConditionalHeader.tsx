"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

const ConditionalHeader = () => {
    const pathname = usePathname();

    // Hide header on privacy page
    if (pathname === "/privacy") {
        return null;
    }

    return <Header />;
};

export default ConditionalHeader;
