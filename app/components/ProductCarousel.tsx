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

    const getVisibleItems = () => {
        let visible: Item[] = [];
        for (let i = 0; i < itemsPerPage; i++) {
            const index = (currentIndex + i) % items.length;
            visible.push(items[index]);
        }
        return visible;
    };

    const visibleItems = getVisibleItems();

    return (
        <div className="max-w-full mx-10 px-2 sm:px-8 md:px-12 lg:px-20 py-6 bg-[#e9d7d9] mb-2 mt-6 rounded-2xl shadow-xl">
            <h2 className="font-bold text-center text-3xl mb-10 text-black font-bebas">
                {title}
            </h2>
            <div className="relative flex items-center justify-center">
                <button
                    onClick={prevSlide}
                    className="absolute left-2 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100"
                >
                    <ChevronLeft size={28} />
                </button>

                <div className="w-full overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-1 transition-transform duration-500 ease-in-out">
                        {visibleItems.map((item, index) => {
                            const [isLoading, setIsLoading] = useState(true);

                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center w-full"
                                >
                                    <div className="relative w-60 h-60 mb-3">
                                        {isLoading && (
                                            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-2xl" />
                                        )}
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className={`rounded-2xl shadow-md object-cover transition-opacity duration-500 ${
                                                isLoading
                                                    ? "opacity-0"
                                                    : "opacity-100"
                                            }`}
                                            onLoad={() => setIsLoading(false)}
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
                >
                    <ChevronRight size={28} />
                </button>
            </div>
        </div>
    );
};

export default ProductCarousel;
