import React from 'react';
import { Link } from 'react-router-dom';


export default class App extends React.Component {
  render() {
    return (
        <header class="bg-gray-100 antialiased font-sans bg-transparent">
        <nav className="md:px-6 md:py-4 fixed w-full z-30 text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="pl-4 flex items-center">
                    <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                        designia.
                    </a>
                </div>
                {/* <label for="menu-toggle" class="pointer-cursor md:hidden block">
                    <svg class="fill-current text-gray-900"
                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label> */}
                <input class="hidden" type="checkbox" id="menu-toggle" />
                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto  mt-2 lg:mt-0 hidden lg:bg-transparent  lg:p-0 z-20" id="nav-content">
                    <ul className="xl:text-xl list-reset lg:flex justify-end flex-1 items-center">
                        <Link to="/">
                            <li className="mr-3 py-2 px-4 text-white">About</li>
                        </Link>
                        <Link to="/skills">
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
        </header>
    );
  }
}

