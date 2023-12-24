
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { GrLinkedin } from "react-icons/gr";

function RootLayout(props) {

    const [navDrawerOpen, setNavDrawerOpen] = useState(false);
    const navigate = useNavigate();

    function logOut() {
        axios.post('http://localhost:3000/users/logout', {}, { withCredentials: true })
            .then(data => {
                //console.log(data)
                navigate('/');
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <>
            <div className={`z-50 fixed left-0 top-0 w-full h-full bg-white  ${navDrawerOpen ? '' : 'translate-x-full'} transition-all duration-300 ease-in-out`}>
                <button className='bg-white fixed right-4 top-4' onClick={() => { setNavDrawerOpen(false) }}>
                    <IoCloseSharp />
                </button>
                <nav className='w-full h-full  flex flex-col justify-center items-center '>
                    <div className=''>

                        <div className='flex flex-col justify-center items-center gap-7'>
                            <div className='bg-black text-white shadow-lg w-24 h-8  flex justify-center items-center border-2 cursor-pointer'>
                                <Link to={'/'} onClick={() => setNavDrawerOpen(false)} smooth duration={500} >Home</Link>
                            </div>
                            <div className='bg-black text-white shadow-lg w-24 h-8  flex justify-center items-center border-2 cursor-pointer'>
                                <Link to={'/about'} onClick={() => setNavDrawerOpen(false)} smooth duration={500}>About</Link>
                            </div>
                            <div className='bg-black text-white shadow-lg w-24 h-8  flex justify-center items-center border-2 cursor-pointer'>
                                <Link to={'/hospitals'} onClick={() => setNavDrawerOpen(false)} smooth duration={500}>Hospitals</Link>
                            </div>
                            <div className='bg-black text-white shadow-lg w-24 h-8  flex justify-center items-center border-2 cursor-pointer'>
                                <Link to={'/contact'} onClick={() => setNavDrawerOpen(false)} smooth duration={500}>Contact</Link>
                            </div>
                            <div className='bg-black text-white shadow-lg w-24 h-8  flex justify-center items-center border-2 cursor-pointer'>
                                <button className="logoutButton" onClick={logOut}>Logout</button>
                            </div>

                        </div>
                    </div>
                </nav>


            </div>
            <header className='z-40 bg-blue-950 p-5 text-white h-16 flex flex-row  justify-between items-center'>
                <div>
                    <span className='text-lg font-bold'>Ruhaan HIS</span>
                </div>
                <nav className='hidden md:block'>
                    <div className=''>

                        <div className='flex flex-row gap-5'>
                            <div>
                                <Link to={'/'}>Home</Link>
                            </div>
                            <div>
                                <Link to={'/about'}>About</Link>
                            </div>
                            <div>
                                <Link to={'/hospitals'}>Hospitals</Link>
                            </div>
                            <div>
                                <Link to={'/contact'}>Contact</Link>
                            </div>
                            <button className="logoutButton" onClick={logOut}>Logout</button>

                        </div>
                    </div>
                </nav>
                <button className='md:hidden' onClick={() => { setNavDrawerOpen(true) }}>
                    <HiMenu />
                </button>


            </header>
            <Outlet />

            <footer className='bg-slate-400 p-3 md:px-10 text-sm '>
                <section className='md:flex flex-row justify-between'>
                    <div className='flex flex-col md:flex-row md:gap-12 items-center  pb-2 md:pb-0'>
                        <div className=''>
                            <span>Design and developed by Asna VT</span>
                        </div>
                        <div className='flex flex-row items-center gap-1'>
                            <span>Copyright</span>
                            <img className='w-3 h-3' src='./images/copyright.png'></img>
                            <span> by asna.vt</span>
                        </div>
                    </div>

                    <div >
                        <ul className='flex  justify-center md:justify-end items-center gap-4 px-6'>

                            <li><a className='' href="mailto:saydathasna@gmail.com"><img className='w-9  hover:scale-150 duration-500' src="./images/gmail.png"></img></a></li>
                            <li><a className='' href="mailto:saydathasna@gmail.com"><img className='w-9  hover:scale-150 duration-500' src="./images/linkedin.png"></img></a></li>
                        </ul>
                    </div>
                </section>

            </footer>
        </>

    )
}

export default RootLayout
