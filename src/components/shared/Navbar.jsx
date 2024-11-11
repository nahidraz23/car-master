import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsHandbag } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {

    const navLinks = [
        {
            title: "Home",
            path: '/'
        },
        {
            title: "About",
            path: '/about'
        },
        {
            title: "Services",
            path: '/services'
        },
        {
            title: "Blog",
            path: '/blog'
        },
        {
            title: "Contact",
            path: '/contact'
        },
    ]

    return (
        <div className='bg-base-100 py-5'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                           {
                            navLinks.map((item) => <Link className='hover:text-orange duration-200 font-semibold' href={item.path} key={item.path}>{item.title}</Link>)
                           }
                        </ul>
                    </div>
                    <Link href={'/'}>
                        <Image src={'/assets/logo.svg'} height={60} width={80} alt='logo'></Image>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className='flex gap-10'>
                        {
                            navLinks.map((item) => <Link className='hover:text-orange duration-200 font-semibold' href={item.path} key={item.path}>{item.title}</Link>)
                        }
                    </div>
                </div>
                <div className="navbar-end">
                    <div className='flex items-center gap-4'>
                        <BsHandbag className='text-2xl' />
                        <IoIosSearch className='text-2xl'/>
                        <a className="btn btn-outline border-orange text-orange hover:bg-orange hover:border-none">Appointment</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;