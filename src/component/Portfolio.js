import React from 'react';
import Background2 from '../assets/Background2.png'
import gallery from '../assets/gallery.png';
import gallery1 from '../assets/gallery1.png';
import gallery2 from '../assets/gallery2.png';
import gallery3 from '../assets/gallery3.png';
import gallery4 from '../assets/gallery4.png';
import gallery5 from '../assets/gallery5.png';
import { Link, useHistory } from 'react-router-dom';
import Contact from './Contact';


function Portfolio () {
    const history = useHistory();
    const navigateTo = () => history.push('/contact');
    return (
        <div className="h-screen" style={{ backgroundImage: `url(${Background2})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <nav className="md:px-6 md:py-4 fixed w-full z-30 text-white">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
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
                    <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto  mt-2 lg:mt-0 hidden lg:bg-transparent  lg:p-0 z-20" id="nav-content">
                        <ul className="xl:text-xl list-reset lg:flex justify-end flex-1 items-center">
                                <Link to="/">
                                    <li className="mr-3 py-2 px-4 text-white">About</li>
                                </Link>
                                <Link to="/skills">
                                    <li className="mr-3">Skills</li>
                                </Link>
                                <Link to="#">
                                    <li className="mr-3 text-white py-2 px-4">Portfolio</li>
                                </Link>
                                <Link to="/contact">
                                    <li className="mr-3 text-white py-2">contact</li>
                                </Link>
                            </ul>
                    </div>
                </div>
            </nav>
            <section class="md:px-28 xl:px-72 xl:py-6">
                <div class="flex max-auto lg:py-10 py-24">
                    <div class="">
                        <div class="py-4">
                            <img className="" alt="gallery" class="" src={gallery} />

                        </div>
                    </div>
                    <div class="">
                        <div class="py-4">
                            <img class="" alt="gallery" class="" src={gallery1} />
                        </div>
                    </div>
                    <div class="">
                        <div class="py-4">
                            <img alt="gallery" class="" src={gallery2} />
                        </div>
                    </div>
                </div>
                <div class="-mt-24 flex jus">
                    <div class="">
                        <div class="py-4">
                            <img alt="gallery" class="" src={gallery3} />

                        </div>
                    </div>
                    <div class="">
                        <div class="py-4">
                            <img alt="gallery" class="" src={gallery4} />
                        </div>
                    </div>
                    <div class="">
                        <div class="py-4">
                            <img alt="gallery" class="" src={gallery5} />
                        </div>
                    </div>
                </div>
                <div className=" lg:-mt-8 md:-mt-6 w-full text-left">
                    <div class="text-xs ml-4 inline-flex text-white lg:ml-4 md:-mr-32 md:gap-6">
                        <div className="lg:ml-4">
                            <a class="ml-2">
                                For more checkout
                            </a>
                                <a class="ml-2 underline">
                                    Dribble
                            </a>
                                <a class="ml-2 underline ">
                                    Behance
                            </a>
                        </div>
                        <div className="lg:ml-72 ">
                            <button onClick={navigateTo} className="xl:mr-36 float-right text-sm text-white ml-4 md:ml-48">NextPage→</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        )
    }
export default Portfolio;