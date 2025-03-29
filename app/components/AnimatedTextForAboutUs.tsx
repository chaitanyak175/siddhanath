import React from "react";

import { useRef } from "react";
import styles from "./styles.module.scss";
import { motion, useInView } from "framer-motion";

export const AnimatedTextForAboutUs = ({ text }: { text: string[] }) => {
    const body = useRef(null);
    const isInView = useInView(body, {
        once: true,
        margin: "-20%",
    });

    return (
        <div ref={body} className={styles.textbody}>
            {text.map((phrase, index) => {
                return (
                    <div key={index} className={styles.lineMask}>
                        <motion.p
                            initial={{ y: "100%" }}
                            animate={isInView ? { y: "0%" } : { y: "100%" }}
                            transition={{
                                duration: 0.75,
                                ease: [0.33, 1, 0.68, 1],
                                delay: 0.075 * index,
                            }}
                            className={`text-base sm:text-3xl font-gilroy font-bold sm:font-bold text-black ${styles.aboutustext}`}
                        >
                            {phrase}
                        </motion.p>
                    </div>
                );
            })}
        </div>
    );
};
