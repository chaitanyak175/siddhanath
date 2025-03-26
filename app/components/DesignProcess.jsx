"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    FaComments,
    FaUsers,
    FaCubes,
    FaFlag,
    FaAward,
    FaLightbulb,
} from "react-icons/fa";

const processSteps = [
    { icon: <FaComments />, title: "Ideate and Interview", color: "#22c55e" },
    { icon: <FaUsers />, title: "Research and Explore", color: "#3b82f6" },
    { icon: <FaCubes />, title: "Design and Sample", color: "#facc15" },
    { icon: <FaFlag />, title: "Produce at Scale", color: "#a855f7" },
    { icon: <FaAward />, title: "Quality Check", color: "#ff5733" },
    { icon: <FaLightbulb />, title: "Launch & Feedback", color: "#14b8a6" },
];

const DesignProcess = () => {
    const radius = 500; // Adjusted for proper spacing
    const [centerX, setCenterX] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCenterX(window.innerWidth / 2);
        }
    }, []);

    const centerY = -60;

    return (
        <div className="relative w-screen mx-auto py-10 text-center bg-[#C5B5B5] h-[150vh]">
            <h2 className="text-4xl font-bold">
                Our Design <span className="text-green-600">PROCESS</span>
            </h2>

            {/* Semicircle Path */}

            {/* Process Steps Positioned on the Arc */}
            <div className="relative w-full h-52">
                <div className="relative flex justify-center mt-10 top-[-200] ">
                    <svg
                        width="500"
                        height="600"
                        viewBox="0  0 500 220"
                        fill="none"
                    >
                        <motion.path
                            d="M0,-40 Q250,700 500,-40"
                            fill="transparent"
                            stroke="black"
                            strokeWidth="2"
                            strokeDasharray="6 6"
                            initial={{ strokeDashoffset: 500 ,opacity : 0}}
                            animate={{ strokeDashoffset: 0 , opacity : 1}}
                            transition={{ duration: 4, ease: "easeInOut" , delay : 0.5}}
                        />
                    </svg>
                </div>
                {processSteps.map((step, index) => {
                    const totalSteps = processSteps.length;
                    const angle = Math.PI * (1 - index / (totalSteps - 1)); // Equal arc spacing
                    const x = centerX + radius * Math.cos(angle) - 100; // Offset for centering
                    const y = centerY + radius * Math.sin(angle) - 20;

                    return (
                        <motion.div
                            key={index}
                            className="absolute w-55 text-center bg-white p-4 rounded-xl shadow-lg h-55"
                            style={{ left: `${x}px`, top: `${y}px` }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <div
                                className="text-3xl mb-2"
                                style={{ color: step.color }}
                            >
                                {step.icon}
                            </div>
                            <h3 className="font-bold text-sm">{step.title}</h3>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default DesignProcess;
