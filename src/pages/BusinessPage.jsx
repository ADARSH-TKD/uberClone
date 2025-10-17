import React from 'react';

function BusinessPage() {
    return (
        <section id="view-business" className="view-container bg-uber-light-gray py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center py-16">
                    <h1 className="text-5xl font-extrabold mb-4">Business Travel, Reimagined.</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">Simplify employee travel, meals, and local delivery with one powerful platform.</p>
                    <button className="bg-uber-black text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-gray-700 transition duration-150 shadow-md">
                        Get Started for Business
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Travel Management</h3>
                        <p className="text-gray-600 mb-4">Automate booking and expense reporting for all business trips, ensuring policy compliance every step of the way.</p>
                        <a href="#" className="text-uber-black font-semibold hover:underline">Learn about Business Rides &rarr;</a>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Employee Meals (Eats)</h3>
                        <p className="text-gray-600 mb-4">Give your teams access to local and national restaurants for late-night work or team lunches, all tracked centrally.</p>
                        <a href="#" className="text-uber-black font-semibold hover:underline">Explore Business Eats &rarr;</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BusinessPage;