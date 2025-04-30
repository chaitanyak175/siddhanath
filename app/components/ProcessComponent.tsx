import React from "react";
import { ProcessCardComponent } from "./ProcessCardComponent";
import styles from "./styles.module.scss";

export const ProcessComponent = () => {
    return (
        <div className="relative flex flex-col sm:flex-row justify-around p-10 gap-15 sm:gap-20 text-black font-gilroy bg-[#f8fbf8] w-full min-h-screen">
            {/* Sticky Left Section */}
            <div
                className={`w-full sm:w-1/3 flex flex-col gap-6 sm:sticky relative top-10 sm:top-20 self-start h-fit ${styles.ourprocesstext}`}
            >
                <h2 className="text-5xl sm:text-7xl font-bebas">
                    OUR PROCESS{" "}
                    <span className="hidden sm:inline-block">:</span>
                </h2>
                <h2 className="hidden sm:block sm:text-4xl">
                    A complete apparel manufacturing solution for your brand.
                </h2>
                <p className="hidden sm:block">
                    From design to delivery, we ensure high-quality
                    craftsmanship, efficient production, and timely execution to
                    bring your vision to life.
                </p>
                {/* <a
                    href="https://wa.me/917263095032"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-white bg-violet-500 sm:block rounded-md hover:bg-violet-600 transition flex items-center justify-center"
                >
                    <div className="flex items-center justify-center">
                        Learn More
                    </div>
                </a> */}
            </div>

            {/* Right Section with Cards */}
            <div className="flex flex-col gap-13 items-center w-full sm:w-2/3">
                <ProcessCardComponent
                    title={"Design & Pattern Development"}
                    description={
                        "Our in-house design team creates custom patterns, ensuring precision, innovation, and brand consistency."
                    }
                    imageUrl={"/images/ourprocess/design2.jpg"}
                    className=""
                />
                <div className="border border-[#ECE6D8] w-[80%]" />

                <ProcessCardComponent
                    title={"Sampling"}
                    description={
                        "We develop high-quality samples for review, ensuring fabric, fit, and style align with your brand’s expectations."
                    }
                    imageUrl={"/images/ourprocess/sampling2.jpg"}
                    className=""
                />
                <div className="border border-[#ECE6D8] w-[80%]" />

                <ProcessCardComponent
                    title={"Fabrics, Trims & Accessories Sourcing"}
                    description={
                        "We source premium fabrics and accessories to enhance durability, comfort, and aesthetic appeal."
                    }
                    imageUrl={"/images/ourprocess/accessories.jpg"}
                    className=""
                />
                <div className="border border-[#ECE6D8] w-[80%]" />

                <ProcessCardComponent
                    title={"Bulk Production"}
                    description={
                        "Using advanced manufacturing techniques, we ensure high-efficiency production while maintaining quality control."
                    }
                    imageUrl={"/images/ourprocess/bulkproduction.jpg"}
                    className=""
                />
                <div className="border border-[#ECE6D8] w-[80%]" />

                <ProcessCardComponent
                    title={"Quality Checks"}
                    description={
                        "Every garment undergoes strict quality control to meet industry standards and exceed client expectations."
                    }
                    imageUrl={"/images/ourprocess/qualitycheck.png"}
                    className=""
                />
                <div className="border border-[#ECE6D8] w-[80%]" />

                <ProcessCardComponent
                    title={"Delivery"}
                    description={
                        "Timely and efficient logistics ensure your products reach you on schedule, ready for market distribution."
                    }
                    imageUrl={"/images/ourprocess/delivery.jpg"}
                    className=""
                />
            </div>
        </div>
    );
};
