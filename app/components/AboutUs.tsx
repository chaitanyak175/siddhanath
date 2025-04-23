import React, { useRef } from "react";
import Image from "next/image";
import { AnimatedTextForAboutUs } from "./AnimatedTextForAboutUs";
import { motion, useInView } from "framer-motion";
// import AnimatedTextForAboutUs from "./components/AnimatedTextForAboutUs"
import styles from "./styles.module.scss";

const AboutUs = () => {
    const body = useRef(null);
    const isInView = useInView(body, {
        once: true,
        margin: "-20%",
    });

    const text = [
        "✔️ At Siddhanath Trendz Private Limited, we are a leading designer, manufacturer, and exporter of premium-quality apparel and corporate uniforms.",
        "✔️ With in-house design expertise and advanced production capabilities, we offer end-to-end solutions tailored for fashion brands, retail chains, hospitality, e-commerce, and corporate industries.",
        "✔️ From fabric sourcing to bulk production and strict quality checks, our commitment to craftsmanship, innovation, and durability ensures that every garment reflects professionalism and style.",
        "✔️ Partner with us for expertly crafted apparel solutions that elevate your brand.",
    ];

    return (
        <div
            className={`h-[95vh] 2xl:h-[125vh] w-screen relative ${styles.aboutuscontainer} overflow-x-hidden`}
        >
            <div className="w-full h-full sm:px-24 px-6 bg-[#f8f7f4]">
                {/* <Image
                    src="/images/about2.jpg"
                    alt="This is the Image of About us Section."
                    // height={200}
                    // width={200}
                    fill
                    className="w-full h-full object-cover absolute"
                /> */}
            </div>
            <div className="absolute top-10 left-0 sm:left-5 w-full flex flex-col gap-9 ">
                <div className="relative w-full left-15 flex flex-col gap-3">
                    <motion.h1 className="text-7xl sm:text-8xl font-bebas text-black">
                        ABOUT US{" "}
                        <span className="hidden sm:inline-block  text-7xl sm:text-9xl  ">
                            :
                        </span>
                    </motion.h1>

                    <AnimatedTextForAboutUs text={text} />
                </div>

                {/* <div className='font-gilroy w-[50%] font-extrabold text-xl '>
                    <p>At SIddhanath Trendz Private Limited, we are a leading designer, manufacturer, and exporter of premium-quality apparel and corporate uniforms. With in-house design expertise and advanced production capabilities, we offer end-to-end solutions tailored for fashion brands, retail chains, hospitality, e-commerce, and corporate industries. From fabric sourcing to bulk production and strict quality checks, our commitment to craftsmanship, innovation, and durability ensures that every garment reflects professionalism and style. Partner with us for expertly crafted apparel solutions that elevate your brand.</p>
                </div> */}
                <div className="hidden w-full sm:flex flex-row font-gilroy justify-around my-5 ">
                    <div className="w-1/6 flex flex-col items-center justify-start gap-4 text-black ">
                        <div className="h-[200px] w-[200px]">
                            <Image
                                src={"/images/svg/Vision.svg"}
                                height={1000}
                                width={1000}
                                alt="logo"
                                className=""
                            />
                        </div>
                        <h2 className="text-2xl">Vision</h2>
                        <p
                            className={`text-center font-extrabold text-xl font-gilroy ${styles.valuestext}`}
                        >
                            To gain worldwide recognition as a trusted supplier
                            of knitted garments for men, ensuring value for all
                            stakeholders.
                        </p>
                    </div>
                    <div className="w-1/6 flex flex-col items-center justify-start gap-4  text-black">
                        <div className="h-[200px] w-[200px]">
                            <Image
                                src={"/images/svg/Mission.svg"}
                                height={1000}
                                width={1000}
                                alt="logo"
                            />
                        </div>
                        <h2 className="text-2xl">Mission</h2>
                        <p
                            className={`text-center font-extrabold text-xl font-gilroy ${styles.valuestext}`}
                        >
                            To be a trusted manufacturer and exporter of
                            high-quality products, consistently exceeding the
                            expectations of our B2B customers.
                        </p>
                    </div>
                    <div className="w-1/6 flex flex-col items-center justify-start gap-4 text-black">
                        <div className="h-[200px] w-[200px]">
                            <Image
                                src={"/images/svg/values.svg"}
                                height={1000}
                                width={1000}
                                alt="logo"
                            />
                        </div>
                        <h2 className="text-2xl ">Values</h2>
                        <p
                            className={`text-center font-extrabold text-xl font-gilroy ${styles.valuestext}`}
                        >
                            Transparency | Ethics | Dedication | Creativity |
                            Excellence | Social Responsibility
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
