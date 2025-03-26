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

        <div className='flex flex-row gap-8 justify-start w-3/5'>
            <div className='flex justify-center items-center'>
                <Image
                    src={imageUrl}
                    width={200}
                    height={240}
                    alt='process image'
                    className='rounded-xl'
                />
            </div>
            <div className='flex flex-col gap-3 justify-center w-1/2' >
                <h2 className='text-3xl font-extrabold'>
                    {title}
                </h2>
                <p>
                    {description}
                </p>

            </div>
        </div>
    );
};
