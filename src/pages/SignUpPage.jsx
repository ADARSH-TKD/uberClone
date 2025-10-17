import React from 'react';

function SignUpPage({ navigateTo }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate successful registration and redirect to the dashboard
        setTimeout(() => {
            navigateTo('dashboard');
        }, 500);
    };

    return (
        <section id="view-signup" className="view-container flex items-center justify-center bg-gray-50 py-12">
            <div className="w-full max-w-lg p-8 bg-white rounded-xl shadow-2xl">
                <button onClick={() => navigateTo('home')} className="text-gray-600 hover:text-uber-black mb-4 flex items-center text-sm">
                    &larr; Back to Home
                </button>
                <h2 className="text-3xl font-bold mb-6 text-center">Get started with Uber</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input type="text" id="first-name" placeholder="First Name" required className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uber-black focus:border-uber-black transition duration-150" />
                        <input type="text" id="last-name" placeholder="Last Name" required className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uber-black focus:border-uber-black transition duration-150" />
                    </div>
                    <input type="email" id="email-signup" placeholder="Email Address" required className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uber-black focus:border-uber-black transition duration-150" />
                    <input type="tel" id="phone-signup" placeholder="Mobile Phone Number" required className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uber-black focus:border-uber-black transition duration-150" />
                    <input type="password" id="password-signup" placeholder="Create Password" required className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uber-black focus:border-uber-black transition duration-150" />
                    
                    <p className="text-xs text-gray-500 pt-2">
                        By clicking "Sign Up", you agree to Uber's Terms and Conditions and Privacy Policy.
                    </p>
                    
                    <button type="submit" className="w-full bg-uber-green text-white text-lg font-semibold py-4 rounded-xl hover:bg-green-700 transition duration-200 shadow-md">
                        Sign Up
                    </button>
                </form>

                <p className="mt-6 text-center text-sm">
                    Already have an account? 
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('signin'); }} className="text-uber-black font-semibold hover:underline">Sign in</a>
                </p>
                <div id="signup-message" className="mt-4 text-center text-red-600 hidden"></div>
            </div>
        </section>
    );
}

export default SignUpPage;
