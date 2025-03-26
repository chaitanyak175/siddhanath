import React from "react";
import { ProcessCardComponent } from "./ProcessCardComponent";

export const ProcessComponent = () => {

  return (
    <div className='flex flex-row justify-around p-10 gap-8 text-black font-gilroy'> 
        <div className='w-1/3 flex flex-col gap-6' >
            <h2 className='text-4xl'>
            A complete visual merchandising tool that your teams will love.
            </h2>
            <p>
            Create the customer experience that your in-store teams can implement with precision.
            </p>
            <button className='px-1 py-2 text-white bg-violet-500'>
                Learn More
            </button>

        </div>
        <div className='flex flex-col gap-13 '>
            <ProcessCardComponent title={"Review."} description={'Track every stores progress and easily give feedback and approval.'} imageUrl={'/images/2.jpg'}  className=''/>
            <div className='border border-red-400 w-[80%]'></div>
            <ProcessCardComponent title={"Review."} description={'Track every stores progress and easily give feedback and approval.'} imageUrl={'/images/2.jpg'}  className=''/>
            <div className='border border-red-400 w-[80%]'></div>
            <ProcessCardComponent title={"Review."} description={'Track every stores progress and easily give feedback and approval.'} imageUrl={'/images/2.jpg'}  className=''/>


        </div>
    );
};
