"use client";

import Footer from "./components/Footer";
import ClothingDesignSteps from "./components/ClothingDesignSteps";
import { ProcessComponent } from "./components/ProcessComponent";
import { useEffect } from "react";
import Lenis from "lenis";

import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";

import TestimonialCarousel from "./components/WhyChooseUs";
import MorqueSection from "./components/MorqueSection";
import CorporateCollection from "./components/CorporateCollection";

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5, // Adjust duration for the easing effect
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        lenis.on("scroll", (e) => {
            console.log(e);
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        const animationId = requestAnimationFrame(raf);

        // Cleanup function
        return () => {
            lenis.destroy();
            cancelAnimationFrame(animationId);
        };
    }, []);
    return (
        <>
            <div className="bg-white">
                <div id="home">
                    <Hero />
                </div>
                <div id="Products" className="sm:mb-10 mb-2">
                    <ClothingDesignSteps />
                </div>
                <div>
                    <CorporateCollection />
                </div>
                {/* <DesignProcess/> */}
                <div id="About">
                    <AboutUs />
                </div>
                <div id="Clients">
                    <MorqueSection />
                </div>
                <div id="Process">
                    <ProcessComponent />
                </div>

                <div id="Why Us">
                    <TestimonialCarousel />
                </div>

                <div id="Contact">
                    <Footer />
                </div>
            </div>
        </>
    );
}
