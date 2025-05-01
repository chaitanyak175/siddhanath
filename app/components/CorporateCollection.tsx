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
        title: "Formal Trousers",
        image: "/images/categories/corporate/formal-trousers.webp",
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
        title: "Hospital Bedsheets",
        image: "/images/categories/hospital/hospital-bedsheets.jpeg",
    },
    {
        title: "Hospital Curtains",
        image: "/images/categories/hospital/hospital-curtains.jpeg",
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
        title: "Visibility Jackets",
        image: "/images/categories/safety-equipment/visibility-tshirts.webp",
    },
    {
        title: "Safety Shoes",
        image: "/images/categories/safety-equipment/safety-shoes.webp",
    },
    {
        title: "Safety Masks",
        image: "/images/categories/safety-equipment/safety-mask.jpg",
    },
];

const sportsItems = [
    {
        title: "Sports Cap",
        image: "/images/categories/sports/sports-cap.jpg",
    },
    {
        title: "Sports Pants",
        image: "/images/categories/sports/sports-pants.webp",
    },
    {
        title: "Sports Socks",
        image: "/images/categories/sports/sports-socks.jpeg",
    },
    {
        title: "Sports Jackets",
        image: "/images/categories/sports/sports-jackets.webp",
    },
    {
        title: "Sports T-Shirts",
        image: "/images/categories/sports/sports-tshirts.webp",
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
    {
        title: "Corporate Backpack",
        image: "/images/categories/corporate-gifting/corporate-backpack.webp",
    },
    {
        title: "Corporate Bottle",
        image: "/images/categories/corporate-gifting/corporate-bottle.webp",
    },
    {
        title: "Corporate Cardholder",
        image: "/images/categories/corporate-gifting/corporate-cardholder.webp",
    },
    {
        title: "Corporate Keychain",
        image: "/images/categories/corporate-gifting/corporate-keychain.webp",
    },
    {
        title: "Corporate Diary",
        image: "/images/categories/corporate-gifting/corporate-diary.avif",
    },
    {
        title: "Corporate Lunchbox",
        image: "/images/categories/corporate-gifting/corporate-lunchbox.jpg",
    },
    {
        title: "Corporate Pens",
        image: "/images/categories/corporate-gifting/corporate-pens.webp",
    },
];

const hotel = [
    {
        title: "Bartender Uniform",
        image: "/images/categories/hotel/bartender-uniform.webp",
    },
    {
        title: "Chef Appron",
        image: "/images/categories/hotel/chef-appron.webp",
    },
    {
        title: "Chef Cap",
        image: "/images/categories/hotel/chef-cap.webp",
    },
    {
        title: "Bellboy Uniform",
        image: "/images/categories/hotel/bellboy-uniform.webp",
    },
    {
        title: "Chef Coats",
        image: "/images/categories/hotel/chef-coats.jpg",
    },
    {
        title: "Front Desk Uniform",
        image: "/images/categories/hotel/front-desk-uniform.webp",
    },
    {
        title: "Waitstaff Uniforms",
        image: "/images/categories/hotel/waitstaff-uniforms.webp",
    },
    {
        title: "Hotel Bellboy",
        image: "/images/categories/hotel/hotel-bellboy.jpg",
    },
    {
        title: "Hotel Guard",
        image: "/images/categories/hotel/hotel-guard.avif",
    },
    {
        title: "Hotel Receptionist",
        image: "/images/categories/hotel/hotel-receptionist.jpg",
    },
];

const hotelLinen = [
    {
        title: "Hotel Bedsheet",
        image: "/images/categories/hotel-linen/hotel-bedsheet.jpg",
    },
    {
        title: "Hotel Curtains",
        image: "/images/categories/hotel-linen/hotel-curtains.webp",
    },
    {
        title: "Hotel Napkin",
        image: "/images/categories/hotel-linen/hotel-napkin.webp",
    },
    {
        title: "Hotel Pillow Cover",
        image: "/images/categories/hotel-linen/hotel-pillowcover.webp",
    },
];

const industrial = [
    {
        title: "Cargo Pants",
        image: "/images/categories/industrial/cargo-pants.avif",
    },
    {
        title: "Cargo Shirt",
        image: "/images/categories/industrial/cargo-shirt.jpg",
    },
    {
        title: "Industrial Coveralls",
        image: "/images/categories/industrial/industrial-coveralls.jpg",
    },
    {
        title: "Industrial Shirts",
        image: "/images/categories/industrial/industrial-shirts.jpg",
    },
    {
        title: "Protective Aprons",
        image: "/images/categories/industrial/protective-aprons.webp",
    },
    {
        title: "Safety Bib",
        image: "/images/categories/industrial/safety-bib.webp",
    },

    {
        title: "Welding Jackets",
        image: "/images/categories/industrial/welding-jackets.jpeg",
    },
    {
        title: "Work Jacket",
        image: "/images/categories/industrial/work-jacket.jpg",
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
            <ProductCarousel title="Industrial Collection" items={industrial} />
            <ProductCarousel title="Hotel Collection" items={hotel} />
            <ProductCarousel title="Hotel Linen" items={hotelLinen} />
            <ProductCarousel title="Hospital Collection" items={hospital} />
            <ProductCarousel title="Sports Collection" items={sportsItems} />
            <ProductCarousel title="Corporate gift" items={corporateGifting} />
            <ProductCarousel title="Safety Equipment" items={safetyEquipment} />
        </div>
    );
}
