"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        id: 1,
        text: "Silvee.in transformed our business with their exceptional services!",
        author: "John Doe",
        position: "CEO, ExampleCorp",
    },
    {
        id: 2,
        text: "Highly professional team, outstanding results!",
        author: "Jane Smith",
        position: "Marketing Lead, TechStartup",
    },
    {
        id: 3,
        text: "A seamless experience from start to finish. Highly recommend!",
        author: "Emily Johnson",
        position: "Founder, Creative Agency",
    },
];

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

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
        <div className="relative 2xl:w-[91.5%] sm:w-[90.5%] sm:mx-auto sm:p-6 bg-green-500 shadow-lg rounded-2xl text-center h-[61vh]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={testimonials[currentIndex].id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    <p className="text-lg font-medium text-white">
                        {testimonials[currentIndex].text}
                    </p>
                    <h4 className="text-sm font-semibold text-gray-900">
                        {testimonials[currentIndex].author}
                    </h4>
                    <p className="text-xs text-gray-500">
                        {testimonials[currentIndex].position}
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
        </div>
    );
};

export default TestimonialCarousel;
