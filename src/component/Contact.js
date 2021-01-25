import React from 'react';
import Background3 from '../assets/Background3.png';
import Navigation from '../component/Navigation';

export default class Contact extends React.Component {
    render() {
        return (
            <div className="h-screen" style={{ background: `url(${Background3}) no-repeat scroll center`, backgroundSize: "cover", }}>
                <Navigation />
                <section class="py-24 md:py-24 lg:py-24 xl:py-28 text-gray-600 body-font relative">
                    <div class="container px-5 mx-auto">
                        <div class="lg:w-1/2 md:w-2/3 mx-auto">
                            <div class="flex flex-wrap content-center justify-items-center -m-2">
                                <div class="p-2 w-1/2">
                                    <div class=" relative">
                                        <label for="name" class="leading-7 text-xl text-white">Name</label>
                                        <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class=" p-2 w-1/2">
                                    <div class=" relative">
                                        <label for="email" class="leading-7 text-xl text-white">Email</label>
                                        <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <label for="message" class="leading-7 text-xl text-white">Message</label>
                                        <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div class="p-2 w-full text-right">
                                    <span class="inline-flex text-white lg:-mr-56 lg:gap-6  md:-mr-32 md:gap-6">
                                        <a class="ml-2">
                                            For more checkout
                                        </a>
                                        <a class="ml-2 underline">
                                            Dribble
                                        </a>
                                        <a class="ml-2 underline ">
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