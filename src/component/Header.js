import React from 'react';
import backimg from '../assets/backimg.png';
import hero1 from '../assets/hero1.png';
import Navigation from '../component/Navigation';
import {useHistory } from 'react-router-dom';

function Header () {
    const history = useHistory();
    const navigateTo = () => history.push('/skills');
    return (
        <div className="h-screen" style={{ backgroundImage: `url(${backimg})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <Navigation />
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