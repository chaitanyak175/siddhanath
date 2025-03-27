import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWhatsapp,
    faXTwitter,
    faInstagram,
    faFacebookSquare,
    faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="h-auto w-[100vw] py-14 px-3 justify-center sm:px-22 flex flex-col sm:justify-between bg-black font-gilroy  gap-12 2xl:gap-6 xl:h-screen 2xl:h-screen overflow-hidden">
            <div className="flex flex-col sm:flex-row justify-between w-full">
                <div className="flex flex-col justify-between gap-7 ">
                    <div className=" flex flex-col gap-4 p-2  ">
                        <div className="flex gap-3 items-center ">
                            <div className=" w-2 h-2 inline-block rounded-[50%] bg-amber-400"></div>
                            <p className="text-[#868282] text-[10px]">
                                QUICK LINKS
                            </p>
                        </div>
                        <div className="flex flex-col gap-[-2rem] text-[#f3ececd3] text-[1.7rem] ">
                            <a href="">Shop</a>
                            <a href="About  ">About Us</a>
                            <a href="About  ">Help Centre</a>
                            <a href="About  ">Partner With Us</a>
                        </div>
                    </div>

                    <div className="  hidden sm:flex flex-col gap-4 p-2  ">
                        <div className="flex gap-2 items-center ">
                            <div className=" w-2 h-2 inline-block rounded-[50%] bg-amber-400"></div>
                            <p className="text-[#868282] text-[10px]">OTHERS</p>
                        </div>
                        <div className="flex flex-col gap-2 text-sm text-[#c8c8c8c5]">
                            <a href="" className="#7A7B76">
                                Careers
                            </a>
                            <a href="" className="#7A7B76">
                                Returns And Exchange
                            </a>
                            <a href="" className="#7A7B76">
                                Contacts
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between w-4/7 ">
                    <div className=" flex flex-col gap-15 p-2 ">
                        <div className="hidden sm:flex gap-2 items-center w-full h-2 bg-[#CFD0CA]"></div>
                        <div className="flex flex-col gap-7  sm:flex-row   sm:justify-between ">
                            <div className="flex flex-col gap-4 ">
                                <div className="flex flex-row gap-2 items-center ">
                                    <div className=" w-2 h-2 inline-block rounded-[50%] bg-amber-400"></div>
                                    <p className="text-[rgb(134,130,130)] text-[10px]">
                                        CONTACT US
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 text-sm text-[#c8c8c8c5] ">
                                    <a href="">+91 9552134094</a>
                                    <a href="">test@gangaprasad.com</a>
                                </div>
                            </div>

                            <div className="flex  sm:flex-col sm:gap-2">
                                <div className="flex flex-row justify-end sm:gap-3">
                                    <div className=" flex justify-center items-center rounded-full w-10 h-10 bg-[#d1d1c4]">
                                        <FontAwesomeIcon
                                            icon={faFacebookSquare}
                                            color="black"
                                            className="text-sm h-8  "
                                        />
                                    </div>
                                    <div className=" flex justify-center items-center rounded-full w-10 h-10 bg-[#d1d1c4]">
                                        <FontAwesomeIcon
                                            icon={faXTwitter}
                                            color="black"
                                            className="text-sm h-8"
                                        />
                                    </div>
                                    <div className=" flex justify-center items-center rounded-full w-10 h-10 bg-[#d1d1c4]">
                                        <FontAwesomeIcon
                                            icon={faInstagram}
                                            color="black"
                                            className="text-sm h-7"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row justify-around  sm:justify-end gap-1 sm:gap-3">
                                    <div className=" flex justify-center items-center rounded-full w-10 h-10 bg-[#d1d1c4] border">
                                        <FontAwesomeIcon
                                            icon={faTelegramPlane}
                                            color="black"
                                            className="text-sm h-7"
                                        />
                                    </div>

                                    <div className=" flex justify-center items-center rounded-full w-10 h-10 bg-[#d1d1c4] border ">
                                        <FontAwesomeIcon
                                            icon={faWhatsapp}
                                            color="black"
                                            className="text-sm h-7"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" flex flex-col gap-4 p-2 ">
                        <div className="flex gap-2 items-center ">
                            <div className=" w-2 h-2 inline-block rounded-[50%] bg-amber-400"></div>
                            <p className="text-[#868282] text-[10px]">
                                LOCATION
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <p className="text-[#f3ececd3] text-sm ">
                                2nd Floor, Phoenix Building, at, Senapati Bapat
                                Rd, above Dominos Pizza,
                            </p>
                            <p className="text-[#f3ececd3] text-sm">
                                Shivaji Co operative Housing Society,
                                Bhageerath, Gokhalenagar, Pune, Maharashtra
                                411016
                            </p>
                            <p className="text-2xl text-[#868282]">10am-6pm</p>
                            <p className="text-[#868282] text-xs">/Everyday</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-between items-center p-2 sm:px-4 text-[#2C2C2C] ">
                <p className="text-xs text-[#4f4c4c] ">2024-Copyright</p>
                <div className="flex flex-row justify-around sm:justify-between w-2/3 sm:w-4/7  ">
                    <p className="text-xs text-[#4f4c4c]">Privacy</p>
                    <p className="text-xs text-[#4f4c4c]">Eng</p>
                </div>
            </div>

            <div className="flex justify-center items-center text-6xl sm:text-[12rem] text-center font-bebas">
                SIDDHANATH TRENDZ
            </div>
        </div>
    );
};

export default Footer;
