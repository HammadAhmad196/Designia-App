import React from 'react';
import backimg from '../assets/backimg.png';
import hero1 from '../assets/hero1.png';
import { Link, useHistory } from 'react-router-dom';

function Header () {
    const history = useHistory();
    const navigateTo = () => history.push('/skills');
    return (
        <div className="h-screen" style={{ backgroundImage: `url(${backimg})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <nav className="md:px-6 md:py-4 fixed w-full z-30 text-white">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                    <div className="pl-4 flex items-center">
                        <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                            designia.
                        </a>
                    </div>
                    <div className="block lg:hidden pr-4">
                        <button className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto  mt-2 lg:mt-0 hidden lg:bg-transparent  lg:p-0 z-20" id="nav-content">
                        <ul className="xl:text-xl list-reset lg:flex justify-end flex-1 items-center">
                            <Link to="#">
                                <li className="mr-3 py-2 px-4 text-white">About</li>
                            </Link>
                            <Link to="/skills">
                                <li className="mr-3">Skills</li>
                            </Link>
                            <Link to="/portfolio">
                                <li className="mr-3 text-white py-2 px-4">Portfolio</li>
                            </Link>
                            <Link to="/contact">
                                <li className="mr-3 text-white py-2">contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="pt-16">
                <div class="xl:py-4 lg:mt-14 md:mt-14 md:container px-2 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <div class="flex flex-col w-full md:w-2/5 justify-center items-center text-center md:text-left md:px-14 lg:px-10">
                        <p class="my-2 text-white text-2xl md:text-xl md:font-extrabold lg:text-4xl lg:font-extrabold">We make thing done!</p>
                        <p class="xl:ml-6 text-white text-xs">
                            Get your thing done by us at a very affordable cost. We make sure the quality content. We care about client satisfaction.
                                        </p>
                        <button class="xl:-ml-72 lg:-ml-56 md:-ml-28 hover:underline bg-white text-blue-500 font-bold rounded-full my-6 px-3 py-1">
                            Subscribe
                        </button>
                    </div>
                    <div class="-mt-10 md:flex md:w-3/5 text-center">
                        <img className="w-full md:w-4/5 " src={hero1} alt="hero" />
                    </div>
                </div>
            </div>
            <div>
                <button onClick={navigateTo}  className="xl:mr-36 xl:-mt-4 float-right text-xl text-white mr-12">NextPage→</button>
            </div>
        </div>
        );
    }
export default Header;