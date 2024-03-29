import React from 'react'
import { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import HeaderData from './HeaderData.json'
import logo from '/Darsh_Logo.png'


const Navbar = () => {

    //    function navbarshow(e){
    //     let list = document.querySelector('.nav-links')

    //             e.name === "menu-outline" ?
    //                 (e.name = "close", list.classList.add('top-[177px]'), list.classList.add('opacity-100')) :
    //                 (e.name = "menu-outline", list.classList.remove('top-[177px]'), list.classList.remove('opacity-100'))
    //    }

    const [hamburger, setHamburger] = useState(false);

    const handleHamClick = () => {
        setHamburger(!hamburger);
        console.log(hamburger)
    }

    const scrollRef = useRef(null);

    const handleMenuClick = () => {
        if (scrollRef.current) {
            if (window.pageYOffset > 0) {
                // Scroll to top if not already at the top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                // Scroll to previous location if already at the top
                scrollRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };






    let activeClassName = "md:px-5 md:py-1 py-2 underline text-red-800"



    return (
        <>
            {/* Header Top */}
            <div ref={scrollRef} className='bg-black text-white py-3 px-10 flex flex-row md:justify-between justify-center '>

                <div className='hidden md:block'>
                    <ul className='flex flex-row text-2xl'>
                        <li className='mx-3'><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a></li>
                        <li className='mx-3'><a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a></li>
                        <li className='mx-3'><a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a></li>
                        <li className='mx-3'><a href="https://www.linkedin.com/in"><i className="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                </div>

                <div className=''>
                    <ul className='flex md:flex-row flex-col md:mx-5  '>
                        <li className='mx-3 text-center'><a href="tel:+91 7717788162"><i class="fa-solid fa-phone"></i> +91 7717788162</a></li>
                        <li className='mx-3 text-center'><a href="mailto:roshntn@gmail.com"><i class="fa-regular fa-envelope"></i> roshntn@gmail.com</a></li>
                    </ul>
                </div>
            </div>


            {/* Header Bottom */}
            <div className='sticky top-0 w-full z-10'>
                <nav className="bg-white flex md:flex-row flex-col shadow-xl justify-between overflow-hidden md:py-2  md:px-14">
                    <div className='flex flex-row justify-between md:px-2 px-5 py-3'>
                        <img className='h-16 overflow-hidden' src={logo} alt="Logo" />

                        <div className='py-4 text-3xl md:hidden block' onClick={handleHamClick}>
                            {!hamburger ? <i className="fa-solid fa-bars"></i> : <i className="fa fa-close text-red-500"></i>}
                        </div>

                    </div>


                    <ul className={`navmenu ${hamburger ? "h-1/2" : "h-0"} flex md:flex md:flex-row flex-col md:text-center font-semibold text-lg pb-2 text-center md:py-7`}>
                        {HeaderData.map(nav => {
                            return (
                                <NavLink key={nav.link} to={nav.link} onClick={() => { handleHamClick(); handleMenuClick(); }} className={({ isActive }) =>
                                    isActive ? activeClassName : "md:px-5 md:py-1 py-2"
                                }>
                                    <a href={nav.link}>{nav.name}</a>
                                </NavLink>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </ >
    )
}

export default Navbar