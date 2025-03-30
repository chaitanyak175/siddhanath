import React from "react";
import { ClothingCard } from "./ClothingCard";
import styles from "./styles.module.scss";
// import ClothingCard from './ClothingCard'

const ClothingDesignSteps = () => {
    const shirts = [
        "/images/shirts/shirt1.jpg",
        "/images/shirts/shirt2.jpg",
        "/images/shirts/shirt3.jpg",
        "/images/shirts/shirt4.jpg",
        "/images/shirts/shirt5.jpg",
    ];
    const tshirts = [
        "/images/tshirts/tshirt1.jpg",
        "/images/tshirts/tshirt2.jpg",
        "/images/tshirts/tshirt3.jpg",
        "/images/tshirts/tshirt4.jpg",
        "/images/tshirts/tshirt5.jpg",
    ];

    const pants = [
        "/images/pants/pant1.jpg",
        "/images/pants/pant2.jpg",
        "/images/pants/pant3.jpg",
        "/images/pants/pant4.jpg",
        "/images/pants/pant5.jpg",
    ];

    return (
        <div
            className={`px-0 w-full xl:h-[135vh] lg:px-24 xl:px-24 py-8 xl:py-20 flex flex-col font-gilroy gap-15 xl:gap-15 bg-[#FBF0F1] bg-[radial-gradient(circle_at_90%_90%,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_30%,rgba(245,240,240,1)_31%,rgba(245,240,240,1)_60%,rgba(251,240,241,1)_61%)] ${styles.clothingContainer}`}
        >
            <div className="flex flex-col gap-4 text-black px-3">
                <p className="w-fit px-2 border border-black rounded-2xl mx-1 hidden sm:block">
                    Explore our premium corporate apparel solutions tailored to
                    your brand.
                </p>
                <div className="text-4xl font-bold xl:mt-2 mx-2">
                    <h2>"How to Create Custom Apparel</h2>
                    <h2>for Your Business?"</h2>
                </div>
            </div>

            <div className="flex gap-16 xl:gap-5 justify-evenly xl:justify-around items-center flex-col xl:flex-row w-full">
                <ClothingCard
                    title="Tshirts"
                    subtitle="Comfortable, stylish, and perfect for everyday wear. Choose from a variety of designs and fabrics."
                    hashtag="#1"
                    products={tshirts}
                    className="bg-white"
                />
                <ClothingCard
                    title="Shirts"
                    subtitle="From formal to casual, our shirts are tailored to fit every occasion with premium quality fabrics."
                    hashtag="#2"
                    products={shirts}
                    className="bg-[#199BFC]"
                />
                <ClothingCard
                    title="Pants"
                    subtitle="Designed for both comfort and style. Whether it's chinos, jeans, or joggers, find your perfect fit."
                    hashtag="#3"
                    products={pants}
                    className="bg-[#003CD3]"
                />
            </div>
        </div>
    );
};
export default ClothingDesignSteps;
