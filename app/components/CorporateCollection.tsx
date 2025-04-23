import Image from "next/image";

const uniforms = [
    {
        title: "School Uniforms",
        image: "/images/pants/pant1.png",
    },
    {
        title: "Industrial Uniforms",
        image: "/images/pants/pant2.png",
    },
    {
        title: "Sports Uniforms",
        image: "/images/pants/pant3.png",
    },
    {
        title: "Hospital Uniforms",
        image: "/images/pants/pant3.png",
    },
];

export default function CorporateCollection() {
    return (
        <div className="py-12 px-4 md:px-12 bg-[#e9d7d9]">
            <div>
                <h2 className="text-3xl font-bold text-center mb-10 text-black font-bebas">
                    Corporate Collection
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {uniforms.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center"
                        >
                            <div className="relative w-full h-60 mb-4">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain rounded-xl"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-center text-black font-gilroy">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-7">
                <h2 className="text-3xl font-bold text-center mb-10 text-black font-bebas">
                    Safety Collection
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {uniforms.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center"
                        >
                            <div className="relative w-full h-60 mb-4">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain rounded-xl"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-center text-black font-gilroy">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>{" "}
            <div className="mt-7">
                <h2 className="text-3xl font-bold text-center mb-10 text-black font-bebas">
                    Corporate Gifting
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {uniforms.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center"
                        >
                            <div className="relative w-full h-60 mb-4">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain rounded-xl"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-center text-black font-gilroy">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>{" "}
            <div className="mt-7">
                <h2 className="text-3xl font-bold text-center mb-10 text-black font-bebas">
                    Hotel Linen
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {uniforms.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center"
                        >
                            <div className="relative w-full h-60 mb-4">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain rounded-xl"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-center text-black font-gilroy">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
