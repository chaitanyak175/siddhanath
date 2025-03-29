import React from "react";
import { ProcessCardComponent } from "./ProcessCardComponent";
import styles from "./styles.module.scss";

export const ProcessComponent = () => {
    return (
        <div className="relative flex flex-col sm:flex-row justify-around p-10 gap-15 sm:gap-20 text-black font-gilroy bg-[#FFFBF6] w-screen">
            {/* Sticky Left Section */}
            <div
                className={`w-1/3 flex flex-col gap-6 sm:sticky relative top-20 self-start h-fit ${styles.ourprocesstext}`}
            >
                <h2 className="text-5xl sm:text-7xl font-bebas">
                    OUR PROCESS{" "}
                    <span className="hidden sm:inline-block">:</span>
                </h2>
                <h2 className="hidden sm:block sm:text-4xl ">
                    A complete apparel manufacturing solution for your brand.
                </h2>
                <p className="hidden sm:block">
                    From design to delivery, we ensure high-quality
                    craftsmanship, efficient production, and timely execution to
                    bring your vision to life.
                </p>
                <button className="px-1 py-2 text-white bg-violet-500 hidden sm:block">
                    Learn More
                </button>
            </div>
            <div className="flex flex-col gap-13 overflow-y-auto h-auto sm:max-h-[200vh] items-center">
                <ProcessCardComponent
                    title={"Design & Pattern Development"}
                    description={
                        "Our in-house design team creates custom patterns, ensuring precision, innovation, and brand consistency."
                    }
                    imageUrl={"/images/2.jpg"}
                    className=""
                />
                <div className="border border-[#ECE6D8] w-[80%]"></div>{" "}
                <ProcessCardComponent
                    title={"Sampling"}
                    description={
                        "We develop high-quality samples for review, ensuring fabric, fit, and style align with your brand’s expectations."
                    }
                    imageUrl={"/images/2.jpg"}
                    className=""
                />
                <div className="border border-[#ECE6D8] w-[80%]"></div>
                <ProcessCardComponent
                    title={"Fabrics, Trims & Accessories Sourcing"}
                    description={
                        "We source premium fabrics and accessories to enhance durability, comfort, and aesthetic appeal."
                    }
                    imageUrl={"/images/2.jpg"}
                    className=""
                />
                <div className="border border-[#ECE6D8] w-[80%]"></div>{" "}
                <ProcessCardComponent
                    title={"Bulk Production"}
                    description={
                        "Using advanced manufacturing techniques, we ensure high-efficiency production while maintaining quality control."
                    }
                    imageUrl={"/images/2.jpg"}
                    className=""
                />
                <div className="border border-[#ECE6D8] w-[80%]"></div>{" "}
                <ProcessCardComponent
                    title={"Quality Checks"}
                    description={
                        "Every garment undergoes strict quality control to meet industry standards and exceed client expectations."
                    }
                    imageUrl={"/images/2.jpg"}
                    className=""
                />
                <div className="border border-[#ECE6D8] w-[80%]"></div>{" "}
                <ProcessCardComponent
                    title={"Delivery"}
                    description={
                        "Timely and efficient logistics ensure your products reach you on schedule, ready for market distribution."
                    }
                    imageUrl={"/images/2.jpg"}
                    className=""
                />
            </div>
        </div>
    );
};
