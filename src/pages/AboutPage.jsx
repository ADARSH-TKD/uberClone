import React from 'react';

function AboutPage() {
    return (
        <section id="view-about" className="view-container bg-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-extrabold mb-8">Moving what matters.</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="md:col-span-2">
                        <p className="text-lg text-gray-700 mb-6">Uber is a technology company whose mission is to make transportation and commerce accessible for everyone. Since 2009, we’ve connected riders and drivers, food lovers and restaurants, and revolutionized how people move and connect with their cities.</p>
                        <p className="text-lg text-gray-700 mb-6">Today, we are operating in thousands of cities worldwide, driven by the belief that movement sparks opportunity. We are committed to safety, environmental sustainability, and building a platform that provides flexible work for millions.</p>
                    </div>
                    <div className="md:col-span-1 bg-uber-light-gray p-6 rounded-xl shadow">
                        <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>We do the right thing.</li>
                            <li>We move the world.</li>
                            <li>We value every voice.</li>
                            <li>We celebrate the wins.</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 text-center border-t pt-10">
                    <h3 className="text-3xl font-bold mb-4">Global Impact</h3>
                    <p className="text-gray-600">See our latest report on safety, sustainability, and community initiatives.</p>
                    <button className="mt-4 border border-uber-black text-uber-black text-md font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition duration-150">
                        Read Our Newsroom
                    </button>
                </div>
            </div>
        </section>
    );
}

export default AboutPage;