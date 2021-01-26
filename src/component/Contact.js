import React from 'react';
import Background3 from '../assets/Background3.png';

export default class Contact extends React.Component {
    render() {
        return (
            <div className="h-screen flex flex-1 items-center justify-center" style={{ background: `url(${Background3}) no-repeat scroll center`, backgroundSize: "cover", }}>
                <section class=" text-gray-600 body-font relative">
                    <div class="container px-5 mx-auto">
                        <div class="lg:w-1/2 md:w-2/3 mx-auto">
                            <div class="flex flex-wrap content-center justify-items-center -m-2">
                                <div class="p-2 w-1/2">
                                    <div class=" relative">
                                        <input type="text" placeholder="Name" class="text-xl placeholder-white outline-none w-full border-0 bg-transparent border-b-2 border-white" />
                                    </div>
                                </div>
                                <div class=" p-2 w-1/2">
                                    <div class=" relative">
                                        <input type="email" placeholder="Email" class="text-xl placeholder-white outline-none w-full border-0 bg-transparent border-b-2 border-white" />
                                    </div>
                                </div>
                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <textarea placeholder="Message" name="message" class="text-xl placeholder-white outline-none w-full border-0 bg-transparent border-b-2 border-white"></textarea>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="flex-row">
                                        <button class="px-2 py-1 text-blue-400 rounded-2xl border-2 bg-white  focus:outline-none">Send Message</button>
                                    </div>
                                </div>
                                <div class=" md:my- my-10 w-full text-right">
                                    <span class=" md:flex md:justify-self-end xl:text-xl md:text-base flex flex-row text-white lg:gap-6  md:ml-40  lg:ml-40  xl:ml-72  md:gap-6">
                                        <a class="text-sm ml-2">
                                            For more checkout
                                        </a>
                                        <a class="text-sm ml-2 underline">
                                            Dribble
                                        </a>
                                        <a class="text-sm ml-2 underline ">
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