import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import DrivePage from './pages/DrivePage';
import BusinessPage from './pages/BusinessPage';
import EatsPage from './pages/EatsPage';
import AboutPage from './pages/AboutPage';

// Simple mapping of view IDs to their components
const VIEWS = {
    'home': HomePage,
    'signin': SignInPage,
    'signup': SignUpPage,
    'dashboard': DashboardPage,
    'drive': DrivePage,
    'business': BusinessPage,
    'eats': EatsPage,
    'about': AboutPage,
};

function App() {
    const [currentView, setCurrentView] = useState('home');

    // Simple navigation function passed down to all children
    const navigateTo = (viewId) => {
        if (VIEWS[viewId]) {
            setCurrentView(viewId);
            window.scrollTo(0, 0); // Scroll to top on navigation
        }
    };

    const CurrentComponent = VIEWS[currentView] || HomePage; // Default to HomePage

    return (
        <div className="min-h-screen flex flex-col">
            <Header navigateTo={navigateTo} />
            
            <main className="flex-grow">
                {/* Each component receives the navigateTo function */}
                <CurrentComponent navigateTo={navigateTo} />
            </main>
            
            {/* Conditional Footer: Hide on the Dashboard view */}
            {currentView !== 'dashboard' && <Footer navigateTo={navigateTo} />}
        </div>
    );
}

export default App;