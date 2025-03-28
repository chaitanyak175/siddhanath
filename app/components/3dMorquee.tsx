"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function cn(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(" ");
}

export const ThreeDMarquee = ({
    images,
    className,
}: {
    images: string[];
    className?: string;
}) => {
    if (!images || images.length === 0) return null;

    // Split images into 8 columns (marquee lines)
    const chunkSize = Math.ceil(images.length / 8);
    const columns = Array.from({ length: 8 }, (_, i) => {
        const start = i * chunkSize;
        return images.slice(start, start + chunkSize);
    });

    return (
        <div className="relative w-full h-[60vh] flex justify-center items-center overflow-hidden my-12">
            {/* Parent container restricts height and prevents overlap */}
            <div
                className={cn(
                    "relative mx-auto w-full h-full max-w-screen-lg overflow-hidden rounded-2xl p-4",
                    className
                )}
            >
                {/* 3D perspective container */}
                <div
                    style={{
                        perspective: "1200px",
                        transform: "rotateX(50deg) rotateY(0deg) rotateZ(-30deg)",
                    }}
                    className="w-full h-full"
                >
                    <div className="grid grid-cols-5 gap-4 w-full h-full">
                        {columns.map((colImages, colIndex) => (
                            <motion.div
                                key={colIndex}
                                // Animate vertically so that it starts at 30% and moves to -40% (70% shift)
                                animate={{ y: ["-30%", "-70%"] }}
                                transition={{
                                    duration: colIndex % 2 === 0 ? 4 : 5, // Adjust durations as needed
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "linear",
                                }}
                                className="flex flex-col gap-4"
                            >
                                {colImages.map((img, imgIndex) => (
                                    <motion.div
                                        key={imgIndex}
                                        whileHover={{ scale: 1.1, rotateY: 15 }}
                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                        className="relative"
                                    >
                                        <Image
                                            src={img}
                                            alt={`Image ${imgIndex + 1}`}
                                            width={1200}
                                            height={440}
                                            className="rounded-lg object-cover ring-1 ring-gray-200 hover:shadow-lg"
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
