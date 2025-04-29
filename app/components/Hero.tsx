import React from "react";
import Image from "next/image";
import { TextCard, Typewrite } from "./TextCard";
import { AnimatedText } from "./AnimatedText";

const Hero = () => {
    return (
        <div className="">
            <section
                id="section"
                className="h-screen py-6 sm:py-24 max-h-[1120px] sm:max-h-screen relative w-screen justify-center flex items-center"
            >
                <div id="container" className="w-full h-full sm:px-24 px-6">
                    <Image
                        src="/images/hero-section1.jpg"
                        alt="Hero Background"
                        fill
                        priority
                        sizes="100vw"
                        quality={100}
                        unoptimized={true}
                        className="w-full h-full object-cover absolute"
                    />
                    <div className="absolute sm:flex sm:top-0 mt-30 sm:mt-60 flex-col text-lg">
                        <div className="text-white text-4xl  sm:text-6xl font-gilroy">
                            All-in-1
                        </div>
                        <div className="">
                            <AnimatedText
                                examples={[
                                    // "designer",
                                    "manufacturer",
                                    "supplier",
                                ]}
                            />
                        </div>
                        <div className="text-white text-4xl sm:text-6xl font-gilroy mb-2">
                            of premium apparel
                        </div>
                        <div className="text-white text-4xl sm:text-6xl font-gilroy">
                            and corporate uniforms.
                        </div>
                    </div>
                    <div className="relative flex sm:flex-row flex-col-reverse items-start sm:items-end gap-3 xl:gap-0 sm:justify-between w-full bottom-0 h-full">
                        <button className="border-2 font-bebas text-white pt-1 hover:bg-white hover:text-black duration-300 text-lg rounded-full px-9 py-1">
                            Explore
                        </button>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-4xl leading-none text-white font-bebas mb-2">
                                Apparel that defines your brand
                            </h1>
                            <p className="text-white text-lg font-gilroy">
                                Premium-quality clothing tailored for
                            </p>
                            <p className="text-white text-lg font-gilroy">
                                businesses, brands, and professionals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
