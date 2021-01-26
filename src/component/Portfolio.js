import React from 'react';
import Background2 from '../assets/Background2.png'
import gallery from '../assets/gallery.png';
import gallery1 from '../assets/gallery1.png';
import gallery2 from '../assets/gallery2.png';
import gallery3 from '../assets/gallery3.png';
import gallery4 from '../assets/gallery4.png';
import gallery5 from '../assets/gallery5.png';
import { Link, useHistory } from 'react-router-dom';


function Portfolio() {
    const history = useHistory();
    const navigateTo = () => history.push('/contact');
    return (
        <div className="h-screen flex flex-1 items-center justify-center" style={{ backgroundImage: `url(${Background2})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div class="md:px-28 xl:w-9/12 xl:py-6">
                <div class="flex  max-auto lg:py-10 py-16 md:mt-0 -mt-12">
                    <div class="">     
                        <div class="py-4">
                            <img className="py-4" alt="gallery" class="" src={gallery} />

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
                <div class="-mt-24 flex">
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
                    <div class="text-xs md:text-base ml-4 inline-flex text-white lg:ml-4 md:-mr-32 md:gap-6">
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
                            <button onClick={navigateTo} className="md:text-base ml-6 md:ml-28">NextPage→</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Portfolio;