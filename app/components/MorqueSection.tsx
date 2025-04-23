import {
    useScroll,
    useTransform,
    motion,
    AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import Marquee from "react-fast-marquee";
import styles from "./styles.module.scss";

const MorqueSection = () => {
    const client = [
        { imageUrl: "/images/clients/2.jpg" },
        { imageUrl: "/images/clients/3.png" },
        { imageUrl: "/images/clients/4.png" },
        { imageUrl: "/images/clients/5.png" },
        { imageUrl: "/images/clients/6.png" },
        { imageUrl: "/images/clients/7.png" },
        { imageUrl: "/images/clients/8.jpg" },
    ];

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const width = useTransform(scrollYProgress, [0, 1], ["100vw", "91.5%"]);

    return (
        <div className="sm:w-screen sm:mb-20 mb-15 w-[90%] flex flex-col items-center sm:block">
            <h2
                className={`relative sm:mx-auto sm:p-6 sm:left-10 text-black sm:text-7xl text-4xl left-3 my-6 font-bebas ${styles.ourclienttitle}`}
            >
                OUR CLIENTS <span className="hidden sm:inline-block">:</span>
            </h2>
            <motion.div
                ref={containerRef}
                className="relative left-5 sm:left-0 sm:mx-auto sm:p-6 bg-[#e9d7d9] shadow-lg rounded-2xl text-center h-[61vh] sm:mb-7 max-w-100vw sm:shadow-2xl"
                style={{
                    width,
                    transformOrigin: "center",
                    margin: "auto",
                }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{ opacity: 0, x: 50, y: 100 }}
                        animate={{ opacity: 1, x: 0, y: 100 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4 flex flex-col items-center"
                    >
                        <Marquee className="w-full" speed={50} gradient={false}>
                            {[...client, ...client].map((clt, index) => (
                                <Image
                                    key={index}
                                    src={clt.imageUrl}
                                    height={200}
                                    width={200}
                                    alt={`client image ${index}`}
                                    className={`mx-4 rounded-2xl ${styles.clientImage}`}
                                />
                            ))}
                        </Marquee>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default MorqueSection;
