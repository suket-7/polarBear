import React from 'react'

function CardComponent(props) {
    return (
        <>
            <div className='h-[12rem] w-[40rem] bg-white flex flex-col rounded-xl p-8 font-bold text-[#252525] gap-1 my-4 '>
                <text>
                    id: {props.id}
                </text>


                <text className='font-semibold'>
                    title:{props.title}

                </text>

                <div className='h-[1px] bg-slate-400 w-full '>

                </div>

                <text className='font-medium text-sm mr-24'>
                    body:{props.body}
                </text>


            </div>
        </>
    )
}

export default CardComponent
