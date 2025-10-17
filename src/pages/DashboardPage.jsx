import React, { useState } from 'react';

// Simplified SVG Components for the sidebar
const RideIcon = (props) => (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M14 10l2-1m-2 1L12 9M7 13.5l-2-1m2 1v2.5m2.5 0l2-1m-2 1v2.5M19 13.5l-2-1m2 1v2.5M2 12h20M7 7.5l-2 1m2-1L7 5m0 2.5l2 1m-2-1l2-1m2 1l2 1m-2-1L12 5m0 2.5l2 1m-2-1L12 5M17 7.5l-2 1m2-1L17 5m0 2.5l2 1m-2-1l2-1M4 17h16"/></svg>);
const EatsIcon = (props) => (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14l6-6m-3 0V6a2 2 0 012-2h4a2 2 0 012 2v2m-6 0V6a2 2 0 00-2-2H4a2 2 0 00-2 2v2m6 0h4m-4 0v4m-2-4v4m6-4v4m-2 0h-4"/></svg>);
const HistoryIcon = (props) => (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>);
const AccountIcon = (props) => (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>);
const LogoutIcon = (props) => (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3v-3m18-6v-1a3 3 0 00-3-3h-4"/></svg>);

// --- Dashboard Panels as Sub-Components ---

const DashboardRide = () => (
    <div id="dashboard-ride" className="dashboard-panel">
        <h2 className="text-3xl font-bold mb-8">Where to?</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
                <div className="space-y-4 bg-white p-6 rounded-xl shadow">
                    <h4 className="text-xl font-semibold border-b pb-3 mb-3">Set Trip Details</h4>
                    <input type="text" placeholder="Current Location (e.g., Home)" defaultValue="123 Main St, Anytown" className="w-full p-4 border-2 border-uber-black rounded-lg focus:ring-2 focus:ring-uber-black transition duration-150" />
                    <input type="text" placeholder="Enter drop-off location" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uber-black focus:border-uber-black transition duration-150" />
                    
                    <button className="w-full mt-4 bg-uber-black text-white text-lg font-semibold py-3 rounded-xl hover:bg-gray-700 transition duration-200 shadow-md">
                        Request Ride
                    </button>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow space-y-3">
                    <h4 className="text-xl font-semibold border-b pb-3">Quick Destinations</h4>
                    <div className="flex items-center space-x-3 p-3 hover:bg-uber-light-gray rounded-lg cursor-pointer transition duration-150">
                        <span className="bg-blue-100 text-blue-600 p-2 rounded-full">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-1.043-8.73-2.745M21 13.255l-3.32-3.32-2.527 2.527m3.32-3.32l-3.32 3.32m-8.32 5.094l-2.454 2.454M12 4l-8 8h16l-8-8z"/></svg>
                        </span>
                        <div>
                            <p className="font-medium">The Office</p>
                            <p className="text-sm text-gray-500">456 Corporate Blvd</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-2">
                <div className="map-placeholder">
                    Live Map View Placeholder
                    <br/>(Simulating interactive map interface)
                </div>
                
                <div className="mt-6 bg-white p-6 rounded-xl shadow">
                    <h4 className="text-xl font-semibold mb-3">Available Ride Options</h4>
                    <ul className="space-y-4">
                        <li className="flex justify-between items-center border-b pb-3">
                            <span className="font-medium flex items-center space-x-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-4.418 0-8 3.582-8 8v16h16V8c0-4.418-3.582-8-8-8zm-4 16v-2h8v2H8zm8-4H8V9c0-2.206 1.794-4 4-4s4 1.794 4 4v3z"/></svg>
                                <span>UberX</span>
                            </span>
                            <span className="font-bold">$15.50 - $18.00</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

const DashboardHistory = () => (
    <div id="dashboard-history" className="dashboard-panel">
        <h2 className="text-3xl font-bold mb-8">Your Recent Trips</h2>
        <div className="bg-white p-8 rounded-xl shadow space-y-4">
            <div className="border-b pb-4 pt-2 flex justify-between items-center hover:bg-gray-50 p-3 -m-3 rounded-lg transition duration-150">
                <div>
                    <p className="font-semibold text-lg">Downtown Office to Airport (SFO)</p>
                    <p className="text-sm text-gray-600">Dec 14, 2025 • Uber Comfort</p>
                </div>
                <div className="text-right">
                    <p className="font-bold">$48.75</p>
                    <p className="text-sm text-uber-green">Completed</p>
                </div>
            </div>
            <div className="border-b pb-4 pt-2 flex justify-between items-center hover:bg-gray-50 p-3 -m-3 rounded-lg transition duration-150">
                <div>
                    <p className="font-semibold text-lg">Home to Local Market</p>
                    <p className="text-sm text-gray-600">Dec 12, 2025 • UberX</p>
                </div>
                <div className="text-right">
                    <p className="font-bold">$12.10</p>
                    <p className="text-sm text-uber-green">Completed</p>
                </div>
            </div>
            <div className="pb-2 pt-2 flex justify-between items-center hover:bg-gray-50 p-3 -m-3 rounded-lg transition duration-150">
                <div>
                    <p className="font-semibold text-lg">Hospital Visit</p>
                    <p className="text-sm text-gray-600">Nov 28, 2025 • UberX</p>
                </div>
                <div className="text-right">
                    <p className="font-bold">$25.99</p>
                    <p className="text-sm text-uber-green">Completed</p>
                </div>
            </div>
        </div>
        <button className="mt-8 bg-gray-200 text-uber-black font-semibold py-3 px-6 rounded-xl hover:bg-gray-300 transition duration-150">
            View All Trips
        </button>
    </div>
);

const DashboardAccount = () => (
    <div id="dashboard-account" className="dashboard-panel">
        <h2 className="text-3xl font-bold mb-8">Account & Payment Settings</h2>
        
        <div className="bg-white p-8 rounded-xl shadow mb-8">
            <h3 className="text-xl font-semibold border-b pb-3 mb-4">Profile Information</h3>
            <div className="space-y-3">
                <p><span className="font-medium">Name:</span> Jane Doe</p>
                <p><span className="font-medium">Email:</span> jane.doe@example.com</p>
                <p><span className="font-medium">Phone:</span> (555) 123-4567</p>
            </div>
            <button className="mt-4 text-sm text-uber-black font-medium hover:underline">Edit Profile</button>
        </div>

        <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold border-b pb-3 mb-4">Payment Methods</h3>
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <p className="font-medium">Visa ending in 4242</p>
                    <span className="text-sm text-uber-green font-semibold">Default</span>
                </div>
                <div className="flex justify-between items-center">
                    <p className="font-medium">PayPal (jane.d@)</p>
                    <a href="#" className="text-sm text-uber-black hover:underline">Set as Default</a>
                </div>
            </div>
            <button className="mt-6 bg-uber-black text-white text-sm font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-150">
                Add New Payment
            </button>
        </div>
    </div>
);

const DashboardEats = () => (
    <div id="dashboard-eats" className="dashboard-panel text-center p-20">
        <svg className="w-16 h-16 text-uber-green mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.83-7-7.93 0-.62.08-1.21.21-1.79l5.88 5.88v3.84zm-4.32-8.52c.21-.36.32-.78.32-1.21 0-1.76-1.44-3.2-3.2-3.2-.43 0-.85.11-1.21.32-.36.21-.69.49-1.02.82l6.73 6.73c.33-.33.61-.66.82-1.02zm-3.51-2.28c.11.21.21.43.32.65l6.73 6.73c.33-.33.61-.66.82-1.02.36-.59.56-1.26.56-1.97 0-1.76-1.44-3.2-3.2-3.2s-3.2 1.44-3.2 3.2c0 .71.2 1.38.56 1.97l-.23.23c-.36.59-.56 1.26-.56 1.97 0 1.76 1.44 3.2 3.2 3.2.71 0 1.38-.2 1.97-.56l-.23-.23.23-.23 3.84-3.84c.13.58.21 1.21.21 1.79 0 4.1-3.05 7.44-7 7.93V14.12l3.84-3.84c.59-.36 1.26-.56 1.97-.56 1.76 0 3.2 1.44 3.2 3.2s-1.44 3.2-3.2 3.2c-.71 0-1.38-.2-1.97-.56l.23-.23z"/></svg>
        <h3 className="text-3xl font-bold mb-4">Uber Eats Integration</h3>
        <p className="text-lg text-gray-600 mb-6">This section would link out or embed the food delivery interface.</p>
        <button className="bg-uber-green text-white text-lg font-semibold py-3 px-6 rounded-xl hover:bg-green-700 transition duration-150">
            Go to Uber Eats
        </button>
    </div>
);

const DashboardPanelMap = {
    'ride': DashboardRide,
    'history': DashboardHistory,
    'account': DashboardAccount,
    'eats': DashboardEats,
};

function DashboardPage({ navigateTo }) {
    const [activePanel, setActivePanel] = useState('ride');

    const ActivePanelComponent = DashboardPanelMap[activePanel];

    const getLinkClass = (panelId) => 
        `flex items-center space-x-3 p-3 rounded-lg transition duration-150 ${
            activePanel === panelId 
                ? 'bg-gray-800 font-semibold text-white' 
                : 'text-gray-400 hover:bg-gray-800'
        }`;

    return (
        <section id="view-dashboard" className="view-container bg-white">
            <div className="flex flex-col lg:flex-row h-full">
                
                {/* Sidebar Navigation */}
                <aside className="w-full lg:w-64 bg-uber-black text-white p-6 lg:h-full lg:sticky lg:top-16">
                    <h3 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-3">My Uber</h3>
                    <nav className="space-y-3">
                        <a href="#" onClick={(e) => { e.preventDefault(); setActivePanel('ride'); }} className={getLinkClass('ride')}>
                            <RideIcon />
                            <span>Book a Ride</span>
                        </a>
                        <a href="#" onClick={(e) => { e.preventDefault(); setActivePanel('eats'); }} className={getLinkClass('eats')}>
                            <EatsIcon />
                            <span>Uber Eats Delivery</span>
                        </a>
                        <a href="#" onClick={(e) => { e.preventDefault(); setActivePanel('history'); }} className={getLinkClass('history')}>
                            <HistoryIcon />
                            <span>Trip History</span>
                        </a>
                        <a href="#" onClick={(e) => { e.preventDefault(); setActivePanel('account'); }} className={getLinkClass('account')}>
                            <AccountIcon />
                            <span>Account Settings</span>
                        </a>
                        <button onClick={() => navigateTo('home')} className="w-full text-left flex items-center space-x-3 p-3 text-red-400 hover:bg-gray-800 rounded-lg transition duration-150 mt-8">
                            <LogoutIcon />
                            <span>Log Out</span>
                        </button>
                    </nav>
                </aside>

                {/* Main Dashboard Content Area */}
                <div className="flex-grow p-6 sm:p-10 bg-gray-50">
                    {/* Render the active dashboard panel */}
                    {ActivePanelComponent && <ActivePanelComponent />}
                </div>

            </div>
        </section>
    );
}

export default DashboardPage;