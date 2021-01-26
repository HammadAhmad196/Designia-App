import React from 'react';
import background from '../assets/background.png';
import circle from '../assets/circle.png';
import circle1 from '../assets/circle1.png';
import circle2 from '../assets/circle2.png';
import {useHistory } from 'react-router-dom';
import Navigation from '../component/Navigation';

function Skills () {
    const history = useHistory();
    const navigateTo = () => history.push('/portfolio');
        return (
            <div className="h-screen" style={{ background: `url(${background})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <Navigation />
                <div className="container py-12 lg:py-28 xl:py-28 mx-auto">
                    <div className="flex flex-row justify-start items-center text-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <img className="xl:w-48 lg:w-44" src={circle} alt="circle" />
                            <div className="-mt-16 md:-mt-32 lg:-mt-44 lg:ml-12 xl:-mt-44" >
                                <h2 className="xl:-ml-20 text-white md:ml-16 title-font font-medium text-sm md:text-4xl xl:text-4xl lg:text-4xl lg:-ml-16 ">67%</h2>
                                <p className="lg:-mr-2 text-xs text-center text-white xl:font-extrabold md:text-right md:text-base md:ml-4 lg:text-xl xl:text-xl xl:mr-4">User Experience</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <img className="xl:w-48 lg:w-44 " src={circle1} alt="circle1" />
                            <div className="-mt-16 md:-mt-32 lg:-mt-44 lg:ml-16 xl:-mt-44" >
                                <h2 className="xl:-ml-20 md:ml-16 text-white title-font font-medium text-sm md:text-4xl lg:text-4xl lg:-ml-16 ">89%</h2>
                                <p className="lg:-mr-2 text-xs text-center xl:font-extrabold  text-white md:text-right md:text-base md:ml-4 lg:text-xl xl:text-xl xl:mr-8">User Interface</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <img className="xl:w-48 lg:w-44" src={circle2} alt="circle2" />
                            <div className="-mt-16 md:-mt-32 xl:-mt-44 lg:ml-16 lg:-mt-44" >
                                <h2 className="xl:-ml-20 md:ml-16 text-white title-font font-medium text-sm md:text-4xl lg:text-4xl lg:-ml-16">56%</h2>
                                <p className="lg:mr-2 xl:font-extrabold text-xs text-center text-white md:text-right md:text-base md:ml-4 lg:text-xl xl:text-xl xl:mr-8">UI Interaction</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-white text-xs text-center mt-8 md:mt-16 lg:mt-24 xl:mt-24">
                        <p className="lg:-ml-16 mt-4 xl:text-xl xl:mt-8 xl:-ml-2 md:ml-10 lg:text-sm md:text-xs">Get your thing done by us at a very affordable cost. We make sure the quality content. We care about client satisfaction.</p>
                    </div>
                    <div className=" xl:mx-4 lg:mr-20 md:mr-6">
                        <button onClick={navigateTo} className="lg:text-base xl:text-lg text-sm md:mt-8 xl:mr-24 float-right text-white mr-8 lg:mt-2 mt-8">NextPage→</button>
                    </div>
                </div>
            </div>
        );
    }
export default Skills; 