import Image from "next/image";
import React from "react";

export const ProcessCardComponent = ({
    title,
    imageUrl,
    description,
    className,
}: {
    title: string;
    imageUrl: string;
    description: string;
    className: string;
}) => {
    return (
        <div className="flex flex-col  sm:flex-row gap-8 justify-start w-full sm:w-3/5 ">
            <div className="flex justify-center items-center ">
                <Image
                    src={imageUrl}
                    width={200}
                    height={240}
                    alt="process image"
                    className="rounded-xl sm:w-[200px] w-full"
                />
            </div>
            <div className="flex flex-col gap-3 justify-center w-full sm:w-1/2">
                <h2 className="text-2xl font-bold font-bebas text-[#13013B]">
                    {title}
                </h2>
                <p className="font-gilroy text-sm text-[#52466B]">
                    {description}
                </p>
            </div>
        </div>
    );
};
