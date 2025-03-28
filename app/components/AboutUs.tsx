import React, { useRef } from "react";
import Image from "next/image";
import { AnimatedTextForAboutUs } from "./AnimatedTextForAboutUs";
import { motion, useInView } from "framer-motion";
// import AnimatedTextForAboutUs from "./components/AnimatedTextForAboutUs"

const AboutUs = () => {
    const body = useRef(null);
    const isInView = useInView(body, {
        once: true,
        margin: "-20%",
    });

    const text = [
        "* At Siddhanath Trendz Private Limited, we are a leading designer, manufacturer, and exporter of premium-quality apparel and corporate uniforms.",
        "* With in-house design expertise and advanced production capabilities, we offer end-to-end solutions tailored for fashion brands, retail chains, hospitality, e-commerce, and corporate industries.",
        "* From fabric sourcing to bulk production and strict quality checks, our commitment to craftsmanship, innovation, and durability ensures that every garment reflects professionalism and style.",
        "* Partner with us for expertly crafted apparel solutions that elevate your brand.",
    ];

    return (
        <div className="h-[95vh] 2xl:h-[125vh] w-screen relative">
            <div className="w-full h-full sm:px-24 px-6 bg-[#004f4f]">
                {/* <Image
                    src="/images/about2.jpg"
                    alt="This is the Image of About us Section."
                    // height={200}
                    // width={200}
                    fill
                    className="w-full h-full object-cover absolute"
                /> */}
            </div>
            <div className="absolute top-10 left-5 w-full flex flex-col gap-9 ">
                <motion.h1 className="text-7xl sm:text-8xl font-bebas">
                    ABOUT US{" "}
                    <span className="inline-block  text-7xl sm:text-9xl">
                        :
                    </span>
                </motion.h1>

                <AnimatedTextForAboutUs text={text} />
                {/* <div className='font-gilroy w-[50%] font-extrabold text-xl '>
                    <p>At SIddhanath Trendz Private Limited, we are a leading designer, manufacturer, and exporter of premium-quality apparel and corporate uniforms. With in-house design expertise and advanced production capabilities, we offer end-to-end solutions tailored for fashion brands, retail chains, hospitality, e-commerce, and corporate industries. From fabric sourcing to bulk production and strict quality checks, our commitment to craftsmanship, innovation, and durability ensures that every garment reflects professionalism and style. Partner with us for expertly crafted apparel solutions that elevate your brand.</p>
                </div> */}

                <div className="w-full flex flex-row font-gilroy justify-around my-7">
                    <div className="w-1/6 flex flex-col items-center justify-center gap-4 " >
                        <Image src={'/images/pants/pant1.jpg'} height={160} width={160} alt="logo" />
                        <h2 className="">TITLE</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio excepturi veritatis ducimus at labore! Dolore magni tempore, perspiciatis corporis cum eligendi. Explicabo nemo ea quod iusto</p>
                    </div>
                    <div className="w-1/6 flex flex-col items-center justify-center gap-4 " >
                        <Image src={'/images/pants/pant1.jpg'} height={160} width={160} alt="logo" />
                        <h2>TITLE</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio excepturi veritatis ducimus at labore! Dolore magni tempore, perspiciatis corporis cum eligendi. Explicabo nemo ea quod iusto</p>
                    </div>
                    <div className="w-1/6 flex flex-col items-center justify-center gap-4 " >
                        <Image src={'/images/pants/pant1.jpg'} height={160} width={160} alt="logo" />
                        <h2>TITLE</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio excepturi veritatis ducimus at labore! Dolore magni tempore, perspiciatis corporis cum eligendi. Explicabo nemo ea quod iusto</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;
