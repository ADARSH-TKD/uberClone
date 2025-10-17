import React from 'react';

function EatsPage() {
    return (
        <section id="view-eats" className="view-container bg-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <h1 className="text-5xl font-extrabold mb-6 leading-tight">Feast in Five Minutes.</h1>
                        <p className="text-xl text-gray-600 mb-8">From fine dining to late-night snacks, Uber Eats brings you the best of your neighborhood, delivered fast.</p>
                        <div className="space-y-4">
                            <input type="text" placeholder="Enter your delivery address" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uber-green focus:border-uber-green transition duration-150" />
                            <button className="w-full bg-uber-green text-white text-lg font-semibold py-4 rounded-xl hover:bg-green-700 transition duration-200 shadow-md">
                                Find Food Near Me
                            </button>
                        </div>
                    </div>
                    <img src="https://placehold.co/600x400/E5E5E5/1E1E1E?text=Food+Delivery+Image" alt="Food Delivery" className="w-full h-auto rounded-xl shadow-2xl order-1 lg:order-2"/>
                </div>
            </div>
        </section>
    );
}

export default EatsPage;