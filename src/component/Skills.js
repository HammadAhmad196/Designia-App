import React from 'react';
import background from '../assets/background.png';
import circle from '../assets/circle.png';
import circle1 from '../assets/circle1.png';
import circle2 from '../assets/circle2.png';
import { Link, useHistory } from 'react-router-dom';


function Skills () {
    const history = useHistory();
    const navigateTo = () => history.push('/portfolio');
        return (
            <div className="h-screen" style={{ background: `url(${background})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
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
                                <Link to="#">
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
                <div className="container py-24 lg:py-20 xl:py-24 mx-auto">
                    <div className="flex flex-row justify-center items-center text-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <img className="xl:w-48 lg:w-48" src={circle} alt="circle" />
                            <div className="-mt-16 md:-mt-32 lg:-mt-44 lg:ml-12 xl:-mt-44" >
                                <h2 className="xl:mr-12 text-white md:ml-16 title-font font-medium text-sm md:text-4xl xl:text-6xl lg:text-5xl">67%</h2>
                                <p className="text-xs text-center text-white xl:font-extrabold md:text-right md:text-base md:ml-4 lg:text-xl xl:text-xl xl:mr-8">User Experience</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <img className="xl:w-48 lg:w-48 " src={circle1} alt="circle1" />
                            <div className="-mt-16 md:-mt-32 lg:-mt-44 lg:ml-16 xl:-mt-44" >
                                <h2 className="md:ml-16 text-white title-font font-medium text-sm md:text-4xl lg:text-6xl">89%</h2>
                                <p className="text-xs text-center xl:font-extrabold  text-white md:text-right md:text-base md:ml-4 lg:text-xl xl:text-xl xl:mr-14">User Interface</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <img className="xl:w-48 lg:w-48" src={circle2} alt="circle2" />
                            <div className="-mt-16 md:-mt-32 xl:-mt-44 lg:ml-16 lg:-mt-44" >
                                <h2 className="md:ml-16 text-white title-font font-medium text-sm md:text-4xl lg:text-5xl">56%</h2>
                                <p className="xl:font-extrabold text-xs text-center text-white md:text-right md:text-base md:ml-4 lg:text-xl xl:text-xl xl:mr-14">UI Interaction</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-white text-xs text-center mt-8 md:mt-16 lg:mt-24 xl:mt-24">
                        <p className="mt-4 xl:text-xl xl:mt-8 xl:ml-20 md:ml-10 lg:text-sm md:text-xs">Get your thing done by us at a very affordable cost. We make sure the quality content. We care about client satisfaction.</p>
                    </div>
                    <div className=" xl:mx-4 lg:mr-20 md:mr-6">
                        <button onClick={navigateTo} className="lg:text-base xl:text-lg text-sm md:mt-8 xl:mr-24 float-right text-white mr-8 lg:mt-2 mt-8">NextPage→</button>
                    </div>
                </div>
            </div>
        );
    }
export default Skills; 