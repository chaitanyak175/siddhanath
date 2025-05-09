"use client";

import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        console.log("click");
        setShowMenu((prev) => !prev);
    };

    const headerData = [
        "Products",
        "About",
        "Clients",
        "Process",
        "Why Us",
        "Contact",
    ];
    return (
        <header className="flex justify-between items-center px-6 absolute z-10 w-full">
            <div className=" flex justify-between w-full items-center py-3 border-b-2 border-black">
                <Link
                    href="/"
                    className="font-bebas sm:text-black text-xl text-white"
                >
                    Siddhanath Trendz
                </Link>{" "}
                <ul
                    className={`flex flex-col duration-300 sm:flex-row absolute right-0 bg-white w-screen h-screen sm:h-fit sm:w-fit sm:top-0 sm:relative sm:bg-transparent gap-6 justify-center items-center ${
                        showMenu ? "top-0" : "-top-[100vh]"
                    } `}
                >
                    {headerData.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <li className="text-base nav-hover-btn">
                                    <Link href={`#${item}`}>{item}</Link>
                                </li>
                            </React.Fragment>
                        );
                    })}
                </ul>
                <div>
                    <button
                        onClick={() => toggleMenu()}
                        className="sm:text-white sm:hidden z-20 relative text-black"
                    >
                        {showMenu ? "Close" : "Menu"}
                    </button>
                    <a
                        href="https://wa.me/917263095032"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sm:block font-bebas hidden border-2 border-black rounded-full px-3 py-1 text-black hover:bg-black hover:text-white duration-300"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
