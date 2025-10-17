import React from 'react';
// Replaced complex social icons with simple placeholders for brevity
const FacebookIcon = () => (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.16 6 14 6c1.67 0 2.5 1.23 2.5 1.23V10h-2.11c-.75 0-.91.38-.91 1.05V12h3.29l-.53 3H15v6.8c4.56-.93 8-4.96 8-9.8V12z"/></svg>);
const TwitterIcon = () => (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.3 5.7c-.5.5-1.1.9-1.8 1.1.7-.5 1.2-1.2 1.5-2.1-.7.4-1.4.7-2.2.9-.6-.6-1.5-1-2.5-1C10.5 4.6 8 7.1 8 10.1v1c-2.4-.1-4.7-1.3-6.4-3.3-.3.6-.5 1.3-.5 2 0 1.2.6 2.4 1.6 3-.6 0-1.2-.2-1.7-.5v.1c0 2.6 1.8 4.7 4.2 5.2-.4.1-.9.2-1.4.2-.3 0-.7 0-1-.1.7 2.2 2.8 3.7 5.2 3.8-1.7 1.3-3.8 2-6 2H2c2.4 1.5 5.1 2.3 8 2.3 9.6 0 14.8-8 14.8-14.8V6.9c.7-.5 1.3-1.2 1.8-2z"/></svg>);
const InstagramIcon = () => (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.21 15.35c-1.34.07-2.6-.08-3.79-.46-1.56-.51-2.73-1.68-3.32-3.11-.59-1.42-.56-3.03.09-4.38.65-1.35 1.81-2.29 3.25-2.75 1.44-.45 3-.43 4.39.06 1.38.49 2.33 1.66 2.72 3.1.39 1.45.31 3.06-.21 4.5-.53 1.43-1.7 2.47-3.15 2.92z"/></svg>);
const LinkedInIcon = () => (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.46 6c-.85.38-1.76.64-2.71.75.98-.59 1.74-1.54 2.1-2.66-.92.55-1.95.95-3.05 1.17-.87-.93-2.1-1.5-3.48-1.5-2.64 0-4.78 2.14-4.78 4.78 0 .37.04.73.11 1.07-3.97-.2-7.49-2.1-9.85-5-.4 1.37-.63 2.82-.63 4.47 0 1.65.84 3.1 2.21 3.96-.8-.02-1.55-.24-2.2-.6v.05c0 2.3 1.64 4.22 3.82 4.66-.4.1-.82.16-1.25.16-.3 0-.6-.03-.88-.08.6 1.8 2.34 3.1 4.4 3.13-1.64 1.28-3.73 2.05-5.96 2.05-.38 0-.75-.02-1.12-.07 2.12 1.37 4.63 2.16 7.34 2.16 8.8 0 13.56-7.3 13.56-13.56v-.68c.94-.68 1.76-1.53 2.42-2.52z"/></svg>);


function Footer({ navigateTo }) {
    return (
        <footer className="bg-uber-black text-white pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home'); }} className="text-3xl font-bold mb-10 block">Uber</a>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-10 mb-8">
                    {/* Column 1 */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition duration-150">About us</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Our offerings</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Newsroom</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Investors</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Blog</a></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Products</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition duration-150">Ride</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Drive</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Uber Eats</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Uber Freight</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Venture</a></li>
                        </ul>
                    </div>
                    
                    {/* Column 3 */}
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="text-lg font-semibold mb-4">Global Citizenship</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition duration-150">Safety</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Diversity and inclusion</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Sustainability</a></li>
                        </ul>
                    </div>
                    
                    {/* Column 4 (Travel) */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Travel</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition duration-150">Airports</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Cities</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Help Center</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar: Language, Social, Legal */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-gray-400">
                    <div className="mb-4 md:mb-0">&copy; 2025 Uber Technologies Inc.</div>
                    
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition duration-150"><FacebookIcon /></a>
                        <a href="#" className="hover:text-white transition duration-150"><TwitterIcon /></a>
                        <a href="#" className="hover:text-white transition duration-150"><InstagramIcon /></a>
                        <a href="#" className="hover:text-white transition duration-150"><LinkedInIcon /></a>
                    </div>

                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition duration-150">Privacy</a>
                        <a href="#" className="hover:text-white transition duration-150">Terms</a>
                        <a href="#" className="hover:text-white transition duration-150">Sitemap</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;