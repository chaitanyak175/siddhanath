import React from 'react';
import { ClothingCard } from './ClothingCard';
// import ClothingCard from './ClothingCard'

const ClothingDesignSteps=()=> {

    const products=[
        '/images/1.jpg',
        '/images/2.jpg'
    ]

    return (
        <div className='h-[150vh] px-24 py-20 flex flex-col font-gilroy gap-15 bg-[#FBF0F1]  bg-[radial-gradient(circle_at_90%_90%,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_30%,rgba(245,240,240,1)_31%,rgba(245,240,240,1)_60%,rgba(251,240,241,1)_61%)]'>
            <div className='flex flex-col gap-4 text-black px-3'>
                <p className="w-fit px-2  border border-black rounded-2xl" >See below products and choose one</p>
               <div className='text-4xl font-bold'>
                <h2>"How to get my</h2>
                <h2>Clothing designs made ?"</h2>
               </div>

            </div>



            <div className='flex gap-5 justify-around items-center'>
            <ClothingCard title="Tshirts" subtitle='all are best' products={products} className='bg-white' />
            <ClothingCard title="Tshirts" subtitle='all are best' products={products} className='bg-[#199BFC]' />
            <ClothingCard title="Tshirts" subtitle='all are best' products={products} className='bg-[#003CD3]'/>
            </div>

        </div>

    );
}
export default ClothingDesignSteps;