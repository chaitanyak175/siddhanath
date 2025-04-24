import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
        <div className="w-screen px-2 sm:px-8 md:px-12 lg:px-20 py-6 bg-[#e9d7d9] mb-8">
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
                        {visibleItems.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center w-full"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-60 h-60 object-contain rounded-2xl shadow-md mb-3"
                                />
                                <p className="text-lg  font-semibold text-center text-black font-gilroy">
                                    {item.title}
                                </p>
                            </div>
                        ))}
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
