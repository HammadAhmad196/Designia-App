import React from 'react';
import backimg from '../assets/backimg.png';
import hero1 from '../assets/hero1.png';
import {useHistory } from 'react-router-dom';

function Header () {
    const history = useHistory();
    const navigateTo = () => history.push('/skills');
    return (
        <div className="h-screen flex flex-1 items-center justify-center" style={{ backgroundImage: `url(${backimg})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <center>
            <div class="">
                <div class="md:container lg:px-12 md:px-12 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <div class="flex flex-col w-full md:w-2/5 justify-center items-center text-center md:text-left md:px-14 lg:px-10">
                        <p class="my-2 text-white text-2xl md:text-xl md:font-extrabold lg:text-4xl lg:font-extrabold xl:text-4xl">We make thing done!</p>
                        <p class="xl:ml-3 xl:text-lg text-gray-200 text-xs">
                            Get your thing done by us at a very affordable cost. We make sure the quality content. We care about client satisfaction.
                        </p>
                        <button class="md:-text-base focus:outline-none xl:-ml-64 lg:-ml-48 md:-ml-12 hover:underline bg-white text-blue-500 font-bold rounded-full my-6 px-6 py-1">
                            Hire Us!
                        </button>
                    </div>
                    <div class="md:flex md:w-3/5">
                        <div className="md:flex md:justify-end xl:justify-end">
                            <img className="-mt-4 w-full md:w-2/3 px-8 -ml-6 md:px-0" src={hero1} alt="hero" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={navigateTo}  className="xl:mr-2 float-right text-base text-white mr-2">NextPage→</button>
            </div>
            </center>
        </div>
        );
    }
export default Header;