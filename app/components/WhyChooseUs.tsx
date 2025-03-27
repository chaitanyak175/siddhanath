"use client";

import { useRef } from "react";
import { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        id: 1,
        title: "Silvee.in transformed our business with their exceptional services!",
        description: "John Doe is the hero of industry who makes clothes for every event in life from birth to death",

    },
    {
        id: 2,
        title: "Silvee.in transformed our business with their exceptional services!",
        description: "John Doe is the hero of industry who makes clothes for every event in life from birth to death",



    },
    {
        id: 3,
        title: "Silvee.in transformed our business with their exceptional services!",
        description: "John Doe is the hero of industry who makes clothes for every event in life from birth to death",


    },
];

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    // Animate width based on scroll
    const width = useTransform(scrollYProgress, [0, 1], ["100vw", "91.5%"]);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <div className="sm:w-screen sm:mb-20 mb-15 w-[90%] flex flex-col items-center sm:block" >
            <h2 className="relative sm:mx-auto sm:p-6 sm:left-10 text-black sm:text-7xl text-4xl left-3 my-6 font-bebas">Why choose us?</h2>
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
                        key={testimonials[currentIndex].id}
                        initial={{ opacity: 0, x: 50, y: 100 }}
                        animate={{ opacity: 1, x: 0, y: 100 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4 flex flex-col items-center"
                    >
                        <p className="text-xl font-bold text-black sm:text-4xl font-gilroy">
                            {testimonials[currentIndex].title}
                        </p>
                        {/* <h4 className="text-sm font-semibold text-gray-900">
                        {testimonials[currentIndex].author}
                    </h4> */}
                        <p className="text-lg text-black w-[60%] sm:text-2xl font-gilroy">
                            {testimonials[currentIndex].description}
                        </p>
                    </motion.div>
                </AnimatePresence>
                <button
                    onClick={prevTestimonial}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <button
                    onClick={nextTestimonial}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                >
                    <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
            </motion.div>
        </div>
    );
};

export default TestimonialCarousel;