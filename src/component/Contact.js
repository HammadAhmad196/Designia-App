import React from 'react';
import Background3 from '../assets/Background3.png';
import { Link } from 'react-router-dom';

export default class Contact extends React.Component {
    render() {
        return (
            <div className="h-screen" style={{ background: `url(${Background3}) no-repeat scroll center`, backgroundSize: "cover", }}>
                <nav className="md:px-6 md:py-4 fixed w-full z-30 text-white mt-0">
                    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
                        <div className="pl-4 flex items-center">
                            <Link className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                                designia.
                            </Link>
                        </div>
                        <div className="block lg:hidden pr-4">
                            <button className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                            </button>
                        </div>
                        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto  lg:mt-0 hidden lg:bg-transparent  lg:p-0 z-20" id="nav-content">
                            <ul className="xl:text-xl list-reset lg:flex justify-end flex-1 items-center">
                                <Link to="/">
                                    <li className="mr-3 py-2 px-4 text-white">About</li>
                                </Link>
                                <Link to="/skills">
                                    <li className="mr-3">Skills</li>
                                </Link>
                                <Link to="/portfolio">
                                    <li className="mr-3 text-white py-2 px-4">Portfolio</li>
                                </Link>
                                <Link to="#">
                                    <li className="mr-3 text-white">contact</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section class="py-24 md:py-24 lg:py-24 xl:py-28 text-gray-600 body-font relative">
                    <div class="container px-5 mx-auto">
                        <div class="lg:w-1/2 md:w-2/3 mx-auto">
                            <div class="flex flex-wrap content-center justify-items-center -m-2">
                                <div class="p-2 w-1/2">
                                    <div class=" relative">
                                        <label for="name" class="leading-7 text-xl text-white">Name</label>
                                        <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class=" p-2 w-1/2">
                                    <div class=" relative">
                                        <label for="email" class="leading-7 text-xl text-white">Email</label>
                                        <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <label for="message" class="leading-7 text-xl text-white">Message</label>
                                        <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div class="p-2 w-full text-right">
                                    <span class="inline-flex text-white lg:-mr-56 lg:gap-6  md:-mr-32 md:gap-6">
                                        <a class="ml-2">
                                            For more checkout
                                        </a>
                                        <a class="ml-2 underline">
                                            Dribble
                                        </a>
                                        <a class="ml-2 underline ">
                                            Behance
                                    </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}