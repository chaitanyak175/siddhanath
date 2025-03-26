import React from "react";
import { ProcessCardComponent } from "./ProcessCardComponent";

export const ProcessComponent = () => {
    return (
        <div className="relative flex flex-row justify-around p-10 gap-80 text-black font-gilroy bg-[#FFFBF6]">
            {/* Sticky Left Section */}
            <div className="w-1/3 flex flex-col gap-6 sticky top-20 self-start h-fit">
                <h2 className="text-5xl font-bebas">OUR PROCESS :</h2>
                <h2 className="text-3xl">
                    A complete apparel manufacturing solution for your brand.
                </h2>
                <p>
                    From design to delivery, we ensure high-quality
                    craftsmanship, efficient production, and timely execution to
                    bring your vision to life.
                </p>
                <button className="px-1 py-2 text-white bg-violet-500">
                    Learn More
                </button>
            </div>
            <div className="flex flex-col gap-13 overflow-y-auto max-h-[200vh]">
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
