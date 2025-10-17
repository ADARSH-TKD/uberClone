import React from 'react';

function Header({ navigateTo }) {
    return (
        <header className="sticky top-0 z-50 bg-white header-shadow">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                
                {/* Logo and Primary Links */}
                <div className="flex items-center space-x-8">
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home'); }} className="text-2xl font-bold">Uber</a>
                    
                    {/* Primary Navigation Links (Hidden on Mobile) */}
                    <div className="hidden lg:flex space-x-6 text-sm font-medium">
                        <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home'); }} className="hover:text-gray-700">Ride</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('drive'); }} className="hover:text-gray-700">Drive</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('business'); }} className="hover:text-gray-700">Business</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('eats'); }} className="hover:text-gray-700">Uber Eats</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('about'); }} className="hover:text-gray-700">About</a>
                    </div>
                </div>

                {/* Action Buttons and Language */}
                <div className="flex items-center space-x-4 text-sm font-medium">
                    <span className="hidden md:inline text-gray-600 hover:text-gray-800 cursor-pointer">EN</span>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('signin'); }} className="hidden md:inline px-4 py-2 hover:bg-uber-light-gray rounded-full">Sign in</a>
                    <button onClick={() => navigateTo('signup')} className="bg-uber-black text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-150">
                        Sign up
                    </button>
                    {/* Mobile Menu Button (Hamburger) - functionality omitted for brevity */}
                    <button id="mobile-menu-btn" className="lg:hidden p-2 rounded-full hover:bg-uber-light-gray transition duration-150">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;