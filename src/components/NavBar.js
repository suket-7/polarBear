import React from 'react'
import SmallWhiteButton from './SmallWhiteButton'

function NavBar() {
    return (
        <div className='flex w-full h-[4rem] bg-[#252525] text-white flex-row justify-center items-center border-b-[#525151] border-b'>
            <div className='flex flex-row w-[75rem] justify-between'>
                <h1 className='text-2xl font-black'>Suket Nayak</h1>
                <div className='flex flex-row gap-10 '>
                    <a className='hover:font-bold transition-all duration-200' href="#">
                        Home
                    </a>
                    <a className='hover:font-bold transition-all duration-200' href="#">
                        About Me
                    </a>
                    <a className='hover:font-bold transition-all duration-200' href="#">
                        My Work
                    </a>
                    <a className='hover:font-bold transition-all duration-200' href="#">
                        Contact Me
                    </a>
                </div>
                <SmallWhiteButton title="Lets Smash" link="https://www.google.com" />
            </div>
        </div>
    )
}

export default NavBar
