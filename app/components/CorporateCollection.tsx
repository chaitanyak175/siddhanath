import Image from "next/image";
import ProductCarousel from "./ProductCarousel";

const corporate = [
    {
        title: "Corporate Suits",
        image: "/images/categories/corporate/corporate-suits.jpg",
    },
    {
        title: "Custom Jackets",
        image: "/images/categories/corporate/custom-jackets.jpg",
    },
    {
        title: "Custom Ties",
        image: "/images/categories/corporate/custom-ties.jpg",
    },
    {
        title: "Formal Shirts",
        image: "/images/categories/corporate/formal-shirts.avif",
    },
    {
        title: "Polo T-Shirts",
        image: "/images/categories/corporate/polo-tshirts.jpg",
    },
];

const hospital = [
    {
        title: "Hospital Uniforms",
        image: "/images/categories/hospital/hospital-uniform.webp",
    },
    {
        title: "Lab Coats",
        image: "/images/categories/hospital/lab-coats.webp",
    },
    {
        title: "Nurse Scrubs",
        image: "/images/categories/hospital/nurse-srubs.webp", // spelling!
    },
    {
        title: "Caps and Masks",
        image: "/images/categories/hospital/caps-facemasks.jpg",
    },
    {
        title: "Patient Gowns",
        image: "/images/categories/hospital/patient-gowns.webp",
    },
];

const safetyEquipment = [
    {
        title: "Face Shields",
        image: "/images/categories/safety-equipment/face-shields.jpg",
    },
    {
        title: "Industrial Coveralls",
        image: "/images/categories/safety-equipment/industrial-coveralls.jpg",
    },
    {
        title: "Protective Gloves",
        image: "/images/categories/safety-equipment/protective-gloves.webp",
    },
    {
        title: "Safety Helmets",
        image: "/images/categories/safety-equipment/safety-helmets.jpg",
    },
    {
        title: "Visibility T-Shirts",
        image: "/images/categories/safety-equipment/visibility-tshirts.webp",
    },
];

const corporateGifting = [
    {
        title: "Branded T-Shirts",
        image: "/images/categories/corporate-gifting/branded-tshirts.webp",
    },
    {
        title: "Custom Caps",
        image: "/images/categories/corporate-gifting/custom-caps.webp",
    },
    {
        title: "Custom Hoodies",
        image: "/images/categories/corporate-gifting/custom-hoodies.jpg",
    },
    {
        title: "Monogrammed Towels",
        image: "/images/categories/corporate-gifting/monogrammed-towels.webp",
    },
];

export default function CorporateCollection() {
    return (
        // <div className="py-12 px-4 md:px-12 bg-[#e9d7d9]">
        //     <div>
        //         <h2 className="text-3xl font-bold text-center mb-10 text-black font-bebas">
        //             Corporate Collection
        //         </h2>
        //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        //             {uniforms.map((item, index) => (
        //                 <div
        //                     key={index}
        //                     className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center"
        //                 >
        //                     <div className="relative w-full h-60 mb-4">
        //                         <Image
        //                             src={item.image}
        //                             alt={item.title}
        //                             fill
        //                             className="object-contain rounded-xl"
        //                         />
        //                     </div>
        //                     <h3 className="text-lg font-semibold text-center text-black font-gilroy">
        //                         {item.title}
        //                     </h3>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>
        <div className="w-screen flex flex-col gap-8">
            <ProductCarousel title="Corporate Collection" items={corporate} />
            <ProductCarousel title="Hospital Collection" items={hospital} />
            <ProductCarousel title="Corporate gift" items={corporateGifting} />
            <ProductCarousel title="Safety Equipment" items={safetyEquipment} />
        </div>
    );
}
