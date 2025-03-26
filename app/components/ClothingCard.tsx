'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const ClothingCard = ({ title, subtitle, products, className }: { title: string, subtitle: string, products: string[], className: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Advance to the next image
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    // Go to the previous image
    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    };

    // Auto change image every 2 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextImage();
        }, 2000);

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, [products]);



    return (
        <div className={`flex flex-col gap-4 justify-center rounded-2xl w-[30%]  p-7 px-12 ${className}`}>
            <div className='flex flex-col '>
                <h3 className='text-black text-xl font-bold'>{title}</h3>
                <p className='text-black '>{subtitle}</p>
            </div>
            <div>
                <h2 className='text-8xl font-bold font-bebas '>#1</h2>
            </div>

            <div className={styles.carouselContainer}>
                {/* Using Next.js Image component */}
                <div className={styles.imageContainer}>
                    <Image
                        className={styles.productImage}
                        src={products[currentIndex]}
                        alt={`Slide ${currentIndex}`}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <button onClick={prevImage} className={styles.button} style={{ left: '10px' }}>
                    <FontAwesomeIcon icon={faChevronLeft} color="black" size='2x' className="text-sm   " />
                </button>
                <button onClick={nextImage} className={styles.button} style={{ right: '10px' }}>
                    <FontAwesomeIcon icon={faChevronRight} color="black" className="text-sm h-8  " />
                </button>
            </div>

        </div>
    )
}
