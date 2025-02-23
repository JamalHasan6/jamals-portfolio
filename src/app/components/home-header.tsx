"use client";

import Link from "next/link";
//import { useState } from "react";
// import SVGLogo from "./SVGlogo";

export default function HomeHeader() {
    //const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="navbar bg-white dark:bg-gray-900">
            <div className="navbar-start w-2/5">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center  hidden lg:flex">
                <nav aria-label="Global" className="hidden md:block">
                    <ul className="flex items-center gap-6 text-sm">
                        <li>
                            <Link className="text-gray-500 transition hover:text-gray-700 dark:text-white dark:hover:text-gray-300" href="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className="text-gray-500 transition hover:text-gray-700 dark:text-white dark:hover:text-gray-300" href="/projects">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link className="text-gray-500 transition hover:text-gray-700 dark:text-white dark:hover:text-gray-300" href="/history">
                                History
                            </Link>
                        </li>
                        <li>
                            <Link className="text-gray-500 transition hover:text-gray-700 dark:text-white dark:hover:text-gray-300" href="/blog">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link className="text-gray-500 transition hover:text-gray-700 dark:text-white dark:hover:text-gray-300" href="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        // <header className="bg-white dark:bg-gray-900">
        //     <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        //         <Link className="flex items-center" href="/">
        //             {/* <SVGLogo width={40} height={40} /> */}
        //             <span className="ml-2 text-lg font-bold text-teal-600 dark:text-teal-300">{`Jamal's Portfolio`}</span>
        //         </Link>

        //         <div className="flex flex-1 items-center justify-end md:justify-between">
        //             {/* Desktop Navigation */}
        //             <nav aria-label="Global" className="hidden md:block">
        //                 <ul className="flex items-center gap-6 text-sm">
        //                     <li>
        //                         <Link className="text-gray-500 transition hover:text-gray-700 dark:text-white dark:hover:text-gray-300" href="/about">
        //                             About
        //                         </Link>
        //                     </li>
        //                     <li>
        //                         <Link className="text-gray-500 transition hover:text-gray-700 dark:text-white dark:hover:text-gray-300" href="/projects">
        //                             Projects
        //                         </Link>
        //                     </li>
        //                     <li>
        //                         <Link className="text-gray-500 transition hover:text-gray-700 dark:text-white dark:hover:text-gray-300" href="/history">
        //                             History
        //                         </Link>
        //                     </li>
        //                     <li>
        //                         <Link className="text-gray-500 transition hover:text-gray-700 dark:text-white dark:hover:text-gray-300" href="/blog">
        //                             Blog
        //                         </Link>
        //                     </li>
        //                     <li>
        //                         <Link className="text-gray-500 transition hover:text-gray-700 dark:text-white dark:hover:text-gray-300" href="/contact">
        //                             Contact
        //                         </Link>
        //                     </li>
        //                 </ul>
        //             </nav>

        //             {/* Login & Register Buttons */}
        //             <div className="flex items-center gap-4">
        //                 {/* <div className="sm:flex sm:gap-4">
        //                     <Link className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700" href="/login">
        //                         Login
        //                     </Link>
        //                     <Link className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-800 sm:block dark:bg-gray-800 dark:text-white" href="/register">
        //                         Register
        //                     </Link>
        //                 </div> */}

        //                 {/* Mobile Menu Button */}
        //                 <button
        //                     onClick={() => setIsMenuOpen(!isMenuOpen)}
        //                     className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-800 md:hidden dark:bg-gray-800 dark:text-white"
        //                 >
        //                     <span className="sr-only">Toggle menu</span>
        //                     <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        //                         <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        //                     </svg>
        //                 </button>
        //             </div>
        //         </div>
        //     </div>

        //     {/* Mobile Navigation Menu */}
        //     {isMenuOpen && (
        //         <nav className="md:hidden bg-white dark:bg-gray-900">
        //             <ul className="flex flex-col items-center gap-4 py-4">
        //                 <li><Link href="/about" className="text-gray-700 dark:text-white" onClick={() => setIsMenuOpen(false)}>About</Link></li>
        //                 <li><Link href="/projects" className="text-gray-700 dark:text-white" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
        //                 <li><Link href="/services" className="text-gray-700 dark:text-white" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
        //                 <li><Link href="/blog" className="text-gray-700 dark:text-white" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
        //             </ul>
        //         </nav>
        //     )}
        // </header>
    );
}
