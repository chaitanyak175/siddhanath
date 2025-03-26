import React from 'react'
import { ProcessCardComponent } from './ProcessCardComponent'

export const ProcessComponent = () => {
  return (
    <div className='flex flex-row justify-between '> 
        <div className='w-1/2' >
            <h2 className='text-4xl'>
            A complete visual merchandising tool that your teams will love.
            </h2>
            <p>
            Create the customer experience that your in-store teams can implement with precision.
            </p>
            <button className='px-3 py-2 text-white bg-violet-500'>
                Learn More
            </button>

        </div>
        <div className='flex flex-col gap-3'>
            <ProcessCardComponent title={"Review."} description={'Track every stores progress and easily give feedback and approval.'} imageUrl={'/images/2.jpg'}  className=''/>
            <ProcessCardComponent title={"Review."} description={'Track every stores progress and easily give feedback and approval.'} imageUrl={'/images/2.jpg'}  className=''/>
            <ProcessCardComponent title={"Review."} description={'Track every stores progress and easily give feedback and approval.'} imageUrl={'/images/2.jpg'}  className=''/>

        </div>
    </div>
  )
}
