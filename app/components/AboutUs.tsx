import React from "react";
import Image from "next/image";
import { TextCard, Typewrite } from "./TextCard";
import { AnimatedText } from "./AnimatedText";

const AboutUs = () => {
    return (
        <div className="">
            <section
                id="section"
                className="h-screen py-6 sm:py-24 max-h-[1120px] sm:max-h-screen relative w-full justify-center flex items-center"
            >
                <div id="container" className="w-full h-full sm:px-24 px-6">
                    <Image
                        src="/images/normal-people.jpg"
                        alt="Hero Background"
                        fill
                        className="w-full h-full object-cover absolute"
                    />{" "}
                    <div className="fixed sm:flex top-0 mt-60 flex-col hidden">
                        <div className="text-white text-6xl font-gilroy">
                            All-in-1
                        </div>
                        <div className="">
                            <AnimatedText
                                examples={[
                                    "planner",
                                    "manufacturer",
                                    "exporter",
                                ]}
                            />
                        </div>
                        <div className="text-white text-6xl font-gilroy mb-2">
                            for your clothing
                        </div>
                        <div className="text-white text-6xl font-gilroy">
                            brand
                        </div>
                    </div>
                    <div className="relative flex sm:flex-row flex-col-reverse items-start sm:items-end gap-3 xl:gap-0 sm:justify-between w-full bottom-0 h-full">
                        <button className="border-2 font-bebas text-white pt-1 hover:bg-white hover:text-black duration-300 text-lg rounded-full px-9 py-1">
                            Explore
                        </button>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-4xl leading-none text-white font-bebas">
                                Clothes for you business.
                            </h1>
                            <p className="text-white text-lg font-gilroy">
                                This is an example of a clothing website that I
                                am making.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
