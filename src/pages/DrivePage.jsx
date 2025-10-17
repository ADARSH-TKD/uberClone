import React from 'react';

function DrivePage({ navigateTo }) {
    return (
        <section id="view-drive" className="view-container bg-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-5xl font-extrabold mb-6 leading-tight">Your path. Your profit.</h1>
                        <p className="text-xl text-gray-600 mb-8">Drive when you want, for however long you want. Find out how much you can earn with flexible schedules on the Uber platform.</p>
                        <button onClick={() => navigateTo('signup')} className="bg-uber-green text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-green-700 transition duration-150 shadow-md">
                            Sign Up to Drive
                        </button>
                        <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home'); }} className="block mt-4 text-sm text-gray-600 hover:text-uber-black font-medium">Already driving? Sign in here &rarr;</a>
                    </div>
                    <img src="https://placehold.co/600x400/1E9455/F6F6F6?text=Driver+Earning+App" alt="Driver App Interface" className="w-full h-auto rounded-xl shadow-2xl"/>
                </div>

                <div className="mt-20 border-t pt-10">
                    <h2 className="text-3xl font-bold mb-8">Why drive with Uber?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-uber-light-gray rounded-xl">
                            <h3 className="text-xl font-semibold mb-2">Flexibility</h3>
                            <p className="text-gray-600">No office, no boss. You decide when and where you drive.</p>
                        </div>
                        <div className="p-6 bg-uber-light-gray rounded-xl">
                            <h3 className="text-xl font-semibold mb-2">Quick Pay</h3>
                            <p className="text-gray-600">Cash out your earnings instantly with Instant Pay.</p>
                        </div>
                        <div className="p-6 bg-uber-light-gray rounded-xl">
                            <h3 className="text-xl font-semibold mb-2">Safety Tools</h3>
                            <p className="text-gray-600">We invest in technology to help keep you safe before, during, and after every trip.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DrivePage;