import React from 'react';
import Background2 from '../assets/Background2.png'
import gallery from '../assets/gallery.png';
import gallery1 from '../assets/gallery1.png';
import gallery2 from '../assets/gallery2.png';
import gallery3 from '../assets/gallery3.png';
import gallery4 from '../assets/gallery4.png';
import gallery5 from '../assets/gallery5.png';
import { Link, useHistory } from 'react-router-dom';
import Navigation from '../component/Navigation';
import Contact from './Contact';


function Portfolio () {
    const history = useHistory();
    const navigateTo = () => history.push('/contact');
    return (
        <div className="h-screen" style={{ backgroundImage: `url(${Background2})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

            <Navigation />
            <section class="md:px-28 xl:px-72 xl:py-6">
                <div class="flex max-auto lg:py-10 py-12">
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