import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { LuLinkedin } from 'react-icons/lu';
import myimage from "../assets/img.jpeg"
import axios from 'axios';
import CardComponent from '../components/CardComponent';



function HomePage() {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setData(response.data)
            }
            catch (error) {
                console.log("Error", error);
            }

        };

        fetchData();

    }, [])



    return (
        <>

            {/* section 1 starts here */}
            <section className=' h-[45rem] bg-[#252525] px-[10rem] flex flex-row items-center justify-center gap-20'>


                {/* left portion */}
                <div className=' flex flex-col w-2/3 gap-5'>
                    <div>
                        <h1 className='text-6xl text-white  font-bold'>
                            HI! 👋
                            <br />
                            My name is

                            <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#cf4747] to-yellow-500'> Suket Nayak</span>
                        </h1>
                    </div>
                    <div className=' text-white pr-36'>
                        Cupidatat consectetur non eu consequat do. Consectetur magna ipsum adipisicing esse velit et fugiat ad aute. Mollit ipsum tempor excepteur eiusmod ipsum nulla. Eu et eiusmod voluptate tempor tempor magna voluptate cupidatat sint ut esse quis aute est. Aliqua occaecat officia amet irure velit irure ad est deserunt. Incididunt aliqua veniam proident non culpa officia mollit culpa.
                    </div>
                    <div className='flex flex-row gap-4'>
                        <button className='bg-gradient-to-r from-[#cf4747] to-yellow-500 text-white px-6 py-3 rounded-lg hover:scale-110 transition-all duration-300'>
                            Hire Me!
                        </button>

                        <button className='text-white border border-r-orange-500 border-l-purple-500 rounded-xl px-6 py-3 border-t-transparent border-b-transparent hover:scale-110 transition-all duration-300'>
                            View Portfolio

                        </button>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-lg text-white'>
                            Follow me:

                        </h1>

                        <div className=' flex flex-row gap-2 '>
                            <div className='h-10 w-10 flex justify-center items-center rounded-full border-dotted border-r-orange-400 border-l-purple-600 border-2 '>
                                <FaFacebook className='text-white' />
                            </div>
                            <div className='h-10 w-10 flex justify-center items-center rounded-full border-dotted border-r-orange-400 border-l-purple-600 border-2 '>
                                <FaInstagram className='text-white' />
                            </div>
                            <div className='h-10 w-10 flex justify-center items-center rounded-full border-dotted border-r-orange-400 border-l-purple-600 border-2 '>
                                <LuLinkedin className='text-white' />
                            </div>
                        </div>
                    </div>
                </div>


                {/* right portion */}
                <div className='w-1/3 rounded-lg h-[30rem ]'>
                    <img
                        src={myimage}
                        alt="Example"
                        className="object-cover object-right rounded-lg shadow-lg h-[30rem]"
                    />
                </div>




            </section>

            <div className='h-[1px] bg-slate-500 w-full'>

            </div>

            {/* section 2 starts here */}

            <section className='flex flex-col justify-center items-center h-auto py-[10rem] bg-[#252525]'>
                {data.map(student => (
                    <CardComponent id={student.id} title={student.title} body={student.body} />
                ))}
            </section>

            {/* section 3 starts here */}
            <section>
                Section 3

            </section>
        </>
    )
}

export default HomePage
