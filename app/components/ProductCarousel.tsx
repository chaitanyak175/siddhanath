"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

type Item = {
    image: string;
    title: string;
};

type Props = {
    title: string;
    items: Item[];
};

const ProductCarousel = ({ title, items }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);
    // Track image loading status for all images, not just visible ones
    const [imageLoadStates, setImageLoadStates] = useState<
        Record<string, boolean>
    >({});
    // Track which images we've started preloading
    const preloadedImages = useRef<Set<string>>(new Set());

    // Preload all images on component mount
    useEffect(() => {
        // Create a function to preload an image
        const preloadImage = (src: string) => {
            // Skip if already preloaded
            if (preloadedImages.current.has(src)) return;

            // Mark as preloaded
            preloadedImages.current.add(src);

            // Create a new image object
            const img = new window.Image();
            img.src = src;
            img.onload = () => {
                setImageLoadStates((prev) => ({
                    ...prev,
                    [src]: true,
                }));
            };
        };

        // Preload all images
        items.forEach((item) => preloadImage(item.image));
    }, [items]);

    useEffect(() => {
        const updateItemsPerPage = () => {
            setItemsPerPage(window.innerWidth < 640 ? 1 : 4);
        };
        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);
        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + items.length) % items.length
        );
    };

    useEffect(() => {
        timeoutRef.current = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => {
            if (timeoutRef.current) {
                clearInterval(timeoutRef.current);
            }
        };
    }, [items.length]);

    // Get items to display
    const getVisibleItems = () => {
        let visible: Item[] = [];
        for (let i = 0; i < itemsPerPage; i++) {
            const index = (currentIndex + i) % items.length;
            visible.push(items[index]);
        }
        return visible;
    };

    const visibleItems = getVisibleItems();

    // Also preload the next set of images that will be shown after the current ones
    useEffect(() => {
        // Determine which images will be shown next and ensure they're loaded
        for (let i = 0; i < itemsPerPage; i++) {
            const nextIndex = (currentIndex + itemsPerPage + i) % items.length;
            const nextImageSrc = items[nextIndex].image;

            // Skip if already preloaded
            if (preloadedImages.current.has(nextImageSrc)) continue;

            // Mark as preloaded
            preloadedImages.current.add(nextImageSrc);

            // Create a new image object
            const img = new window.Image();
            img.src = nextImageSrc;
            img.onload = () => {
                setImageLoadStates((prev) => ({
                    ...prev,
                    [nextImageSrc]: true,
                }));
            };
        }
    }, [currentIndex, items, itemsPerPage]);

    // Pause autoplay when user hovers over carousel
    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearInterval(timeoutRef.current);
            timeoutRef.current = null;
        }
    };

    // Resume autoplay when user leaves carousel
    const handleMouseLeave = () => {
        if (!timeoutRef.current) {
            timeoutRef.current = setInterval(() => {
                nextSlide();
            }, 3000);
        }
    };

    return (
        <div
            className="max-w-full mx-10 px-2 sm:px-8 md:px-12 lg:px-20 py-6 bg-[#e9d7d9] mb-2 mt-6 rounded-2xl shadow-xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className="font-bold text-center text-3xl mb-10 text-black font-bebas">
                {title}
            </h2>
            <div className="relative flex items-center justify-center">
                <button
                    onClick={prevSlide}
                    className="absolute left-2 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={28} />
                </button>

                <div className="w-full overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-1 transition-transform duration-500 ease-in-out">
                        {visibleItems.map((item, index) => {
                            const isLoaded = imageLoadStates[item.image];

                            return (
                                <div
                                    key={`${currentIndex}-${index}`}
                                    className="flex flex-col items-center w-full"
                                >
                                    <div className="relative w-60 h-60 mb-3">
                                        {!isLoaded && (
                                            <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                                {/* Shimmer effect container */}
                                                <div className="w-full h-full bg-gray-200 relative">
                                                    {/* Animated shimmer overlay */}
                                                    <div className="absolute inset-0 shimmer-effect"></div>
                                                </div>
                                            </div>
                                        )}
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className={`rounded-2xl shadow-md object-cover transition-opacity duration-300 ${
                                                isLoaded
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                            }`}
                                            priority={index === 0} // Only set priority on the first visible image
                                            onLoad={() => {
                                                setImageLoadStates((prev) => ({
                                                    ...prev,
                                                    [item.image]: true,
                                                }));
                                            }}
                                        />
                                    </div>
                                    <p className="text-lg font-semibold text-center text-black font-gilroy">
                                        {item.title}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <button
                    onClick={nextSlide}
                    className="absolute right-2 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100"
                    aria-label="Next slide"
                >
                    <ChevronRight size={28} />
                </button>
            </div>

            {/* Add the shimmer effect CSS */}
            <style jsx global>{`
                @keyframes shimmer {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }

                .shimmer-effect {
                    background: linear-gradient(
                        to right,
                        rgba(255, 255, 255, 0) 0%,
                        rgba(255, 255, 255, 0.5) 50%,
                        rgba(255, 255, 255, 0) 100%
                    );
                    animation: shimmer 1.5s infinite;
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </div>
    );
};

export default ProductCarousel;
