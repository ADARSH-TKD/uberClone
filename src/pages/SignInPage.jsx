import React from 'react';

function SignInPage({ navigateTo }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate successful login and redirect to the dashboard
        setTimeout(() => {
            navigateTo('dashboard');
        }, 500);
    };

    return (
        <section id="view-signin" className="view-container flex items-center justify-center bg-gray-50 py-12">
            <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-2xl">
                <button onClick={() => navigateTo('home')} className="text-gray-600 hover:text-uber-black mb-4 flex items-center text-sm">
                    &larr; Back to Home
                </button>
                <h2 className="text-3xl font-bold mb-6 text-center">Sign in to your Uber account</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email-signin" className="sr-only">Email or phone number</label>
                        <input type="text" id="email-signin" placeholder="Email or phone number" required className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uber-black focus:border-uber-black transition duration-150" />
                    </div>
                    <div>
                        <label htmlFor="password-signin" className="sr-only">Password</label>
                        <input type="password" id="password-signin" placeholder="Password" required className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uber-black focus:border-uber-black transition duration-150" />
                    </div>
                    
                    <button type="submit" className="w-full bg-uber-black text-white text-lg font-semibold py-4 rounded-xl hover:bg-gray-700 transition duration-200 shadow-md">
                        Continue
                    </button>
                </form>

                <p className="mt-6 text-center text-sm">
                    New to Uber? 
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('signup'); }} className="text-uber-black font-semibold hover:underline">Create an account</a>
                </p>
                <p className="mt-2 text-center text-sm">
                    <a href="#" className="text-gray-500 hover:text-uber-black font-medium">Forgot password?</a>
                </p>
                <div id="signin-message" className="mt-4 text-center text-red-600 hidden"></div>
            </div>
        </section>
    );
}

export default SignInPage;