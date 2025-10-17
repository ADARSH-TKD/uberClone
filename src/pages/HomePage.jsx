import React, { useState } from 'react';

function HomePage({ navigateTo }) {
    const [activeTab, setActiveTab] = useState('ride'); // 'ride' or 'drive'

    const RideContent = (
        <div id="content-ride" className="tab-content">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
                Get there. Your day belongs to you.
            </h1>
            <div className="space-y-4">
                <input type="text" placeholder="Enter pickup location" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uber-black focus:border-uber-black transition duration-150" />
                <input type="text" placeholder="Enter destination" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uber-black focus:border-uber-black transition duration-150" />
            </div>
            <button onClick={() => navigateTo('signin')} className="w-full mt-6 bg-uber-black text-white text-lg font-semibold py-4 rounded-xl hover:bg-gray-700 transition duration-200 shadow-md">
                See prices
            </button>
        </div>
    );

    const DriveContent = (
        <div id="content-drive" className="tab-content">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
                Earn at your own pace.
            </h1>
            <p className="text-gray-600 mb-6">Make money when you want, and keep your schedule flexible.</p>
            <button onClick={() => navigateTo('signup')} className="w-full mt-2 bg-uber-black text-white text-lg font-semibold py-4 rounded-xl hover:bg-gray-700 transition duration-200 shadow-md">
                Sign up to drive
            </button>
            <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('signin'); }} className="block text-center mt-4 text-sm text-gray-600 hover:text-uber-black font-medium">Already have an account? Sign in here</a>
        </div>
    );

    const getTabClass = (tabName) => 
        `tab-btn py-3 px-6 text-lg transition duration-200 ${
            activeTab === tabName 
                ? 'font-semibold border-b-4 border-uber-black text-uber-black' 
                : 'font-medium text-gray-500 hover:text-gray-700 border-b-4 border-transparent'
        }`;

    return (
        <section id="view-home" className="view-container">
            {/* Hero Section */}
            <div className="hero-overlay h-[80vh] flex items-center justify-start">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl max-w-lg">
                        
                        {/* Tabs for Ride/Drive */}
                        <div className="flex border-b border-gray-200 mb-6">
                            <button 
                                onClick={() => setActiveTab('ride')} 
                                className={getTabClass('ride')}
                            >
                                Ride
                            </button>
                            <button 
                                onClick={() => setActiveTab('drive')} 
                                className={getTabClass('drive')}
                            >
                                Drive
                            </button>
                        </div>
                        
                        {/* Main Content (Conditional Rendering) */}
                        {activeTab === 'ride' ? RideContent : DriveContent}

                        <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('signup'); }} className="block mt-6 text-sm text-gray-600 hover:text-uber-black font-medium transition duration-150">
                            Create an account to continue &rarr;
                        </a>
                    </div>
                </div>
            </div>

            {/* Services Section (Rest of the original Home View) */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-12">The Uber you know, reimagined</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1: Ride */}
                        <div className="group">
                            <img src="https://placehold.co/400x250/F6F6F6/1E1E1E?text=Ride+Image" alt="Car on road" className="w-full h-auto rounded-lg mb-4 object-cover"/>
                            <h3 className="text-2xl font-semibold mb-2">Request a ride</h3>
                            <p className="text-gray-600 mb-4">Tap and go. The easiest way to get where you're going.</p>
                            <a href="#" className="text-lg font-medium text-uber-black group-hover:underline transition duration-150">Learn more &rarr;</a>
                        </div>

                        {/* Card 2: Drive */}
                        <div className="group">
                            <img src="https://placehold.co/400x250/F6F6F6/1E1E1E?text=Drive+Image" alt="Driver with car" className="w-full h-auto rounded-lg mb-4 object-cover"/>
                            <h3 className="text-2xl font-semibold mb-2">Drive or deliver</h3>
                            <p className="text-gray-600 mb-4">Start earning money on your schedule, in your own time.</p>
                            <a href="#" className="text-lg font-medium text-uber-black group-hover:underline transition duration-150">Get started &rarr;</a>
                        </div>

                        {/* Card 3: Eats */}
                        <div className="group">
                            <img src="https://placehold.co/400x250/F6F6F6/1E1E1E?text=Eats+Image" alt="Food delivery" className="w-full h-auto rounded-lg mb-4 object-cover"/>
                            <h3 className="text-2xl font-semibold mb-2">Order food delivery</h3>
                            <p className="text-gray-600 mb-4">Find your favorite restaurants and get meals delivered to your door.</p>
                            <a href="#" className="text-lg font-medium text-uber-black group-hover:underline transition duration-150">Order now &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Global CTA Section */}
            <div className="py-20 bg-uber-light-gray">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                    <h2 className="text-4xl md:text-5xl font-extrabold max-w-xl mb-6 md:mb-0">
                        Ready to ride or ready to earn?
                    </h2>
                    <div className="flex space-x-4">
                        <button onClick={() => navigateTo('signup')} className="bg-uber-black text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-gray-700 transition duration-150 shadow-md">
                            Sign Up Now
                        </button>
                        <button onClick={() => navigateTo('signin')} className="border border-uber-black text-uber-black text-lg font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition duration-150">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomePage;