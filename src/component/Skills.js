import React from 'react';
import background from '../assets/background.png';
import circle from '../assets/circle.png';
import circle1 from '../assets/circle1.png';
import circle2 from '../assets/circle2.png';
import {useHistory } from 'react-router-dom';

function Skills () {
    const history = useHistory();
    const navigateTo = () => history.push('/portfolio');
        return (
            <div className="h-screen flex flex-1 items-center justify-center" style={{ background: `url(${background})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-start items-center text-center">
                        <div className=" p-4 md:w-1/4 w-full">
                            <img className="xl:w-56 lg:w-56 w-28 ml-20 md:ml-0" src={circle} alt="circle" />
                            <div className="-mt-16 md:-mt-32 lg:-mt-44 lg:ml-12 xl:-mt-44" >
                                <h2 className="xl:-ml-2 text-white md:ml-16 title-font font-medium text-sm md:text-4xl xl:text-4xl lg:text-4xl lg:-ml-16 ">67%</h2>
                                <p className="lg:mr-2 text-xs text-center text-white xl:font-extrabold md:text-right md:text-base md:ml-4 lg:text-xl xl:text-xl xl:mr-4">User Experience</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <img className="xl:w-56 lg:w-56 w-28 ml-20 md:ml-0" src={circle1} alt="circle1" />
                            <div className="-mt-16 md:-mt-32 lg:-mt-44 lg:ml-16 xl:-mt-44" >
                                <h2 className="xl:-ml-2 md:ml-16 text-white title-font font-medium text-sm md:text-4xl lg:text-4xl lg:-ml-16 ">89%</h2>
                                <p className="lg:-mr-2 text-xs text-center xl:font-extrabold  text-white md:text-right md:text-base md:ml-4 lg:text-xl xl:text-xl xl:mr-8">User Interface</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <img className="xl:w-56 lg:w-56 w-28 ml-20 md:ml-0" src={circle2} alt="circle2" />
                            <div className="-mt-16 md:-mt-32 xl:-mt-44 lg:ml-16 lg:-mt-44" >
                                <h2 className="xl:-ml-2 md:ml-16 text-white title-font font-medium text-sm md:text-4xl lg:text-4xl lg:-ml-16">56%</h2>
                                <p className="lg:mr-2 xl:font-extrabold text-xs text-center text-white md:text-right md:text-base md:ml-4 lg:text-xl xl:text-xl xl:mr-8">UI Interaction</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-white text-xs text-center mt-8 md:mt-16 lg:mt-24 xl:mt-24">
                        <p className="xl:text-lg lg:-ml-10 mt-8 xl:mt-24 xl:-ml-56 md:ml-10 md:text-base">Get your thing done by us at a very affordable cost. We make sure the quality content. We care about client satisfaction.</p>
                    </div>
                    <div className=" xl:mx-4 lg:mr-20 md:mr-6">
                        <button onClick={navigateTo} className="md:text-base text-sm md:mt-8 xl:mr-2 float-right text-white mr-2 lg:mt-2 ">NextPage→</button>
                    </div> 
                </div>
            </div>
        );
    }
export default Skills; 