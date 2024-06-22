import React from 'react'

function SmallWhiteButton(props) {
    return (
        <button className='bg-white text-black px-10 rounded-md hover:scale-110 transition-all duration-300'>
            <a href={props.link}>
                {props.title}
            </a>
        </button>
    )
}

export default SmallWhiteButton
