"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const ClothingCard = ({
    title,
    subtitle,
    hashtag,
    products,
    className,
}: {
    title: string;
    subtitle: string;
    hashtag: string;
    products: string[];
    className: string;
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextImage();
        }, 2000);
        return () => clearInterval(intervalId);
    }, [products]);

    // Function to create ripple effect
    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
        const button = event.currentTarget;
        const ripple = document.createElement("span");

        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;

        ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

        ripple.classList.add(styles.ripple);
        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    };

    return (
        <div
            className={`flex flex-col gap-4 justify-center rounded-2xl w-[30%] p-7 pb-10 px-12 ${className}`}
        >
            <div className="flex flex-col">
                <h3 className="text-black text-3xl font-bold font-bebas">
                    {title}
                </h3>
                <p className="text-black mt-2">{subtitle}</p>
            </div>
            <div>
                <h2 className="text-8xl font-bold font-bebas">{hashtag}</h2>
            </div>

            <div className={styles.carouselContainer}>
                <div className={styles.imageContainer}>
                    <Image
                        className={styles.productImage}
                        src={products[currentIndex]}
                        alt={`Slide ${currentIndex}`}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <button
                    onClick={(e) => {
                        createRipple(e);
                        prevImage();
                    }}
                    className={styles.button}
                    style={{ left: "10px" }}
                >
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        color="white"
                        className="text-sm h-8"
                    />
                </button>

                <button
                    onClick={(e) => {
                        createRipple(e);
                        nextImage();
                    }}
                    className={styles.button}
                    style={{ right: "10px" }}
                >
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        color="white"
                        className="text-sm h-8"
                    />
                </button>
            </div>
        </div>
    );
};
