import Image from 'next/image'
import React from 'react'

export const ProcessCardComponent = (
    {
        title,
        imageUrl,
        description,
        className
    }: {
        title: string
        imageUrl: string
        description: string
        className: string
    }
) => {
    return (
        <div className='flex flex-row gap-3 '>
            <div className='flex justify-center items-center'>
                <Image
                    src={imageUrl}
                    width={150}
                    height={100}
                    alt='process image'
                />
            </div>
            <div className='flex flex-col gap-3' >
                <h1>
                    {title}
                </h1>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}
