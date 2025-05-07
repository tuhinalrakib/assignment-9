import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 px-5 mt-10">
            <div className="w-11/12 mx-auto ">
                <h1></h1>

                {/* <div>
                    <h6 className="footer-title text-lg font-semibold mb-4">Explore</h6>
                    <ul className="space-y-2">
                        <Link to="/upcoming"><a className="hover:text-white transition" href="#">Upcoming Events</a></Link>
                        <li><a className="hover:text-white transition" href="#">Popular Locations</a></li>
                        <li><a className="hover:text-white transition" href="#">Event Categories</a></li>
                        <li><a className="hover:text-white transition" href="#">Submit an Event</a></li>
                    </ul>
                </div>

                <div>
                    <h6 className="footer-title text-lg font-semibold mb-4">Company</h6>
                    <ul className="space-y-2">
                        <li><a className="hover:text-white transition" href="#">About Us</a></li>
                        <li><a className="hover:text-white transition" href="#">Contact</a></li>
                        <li><a className="hover:text-white transition" href="#">Careers</a></li>
                        <li><a className="hover:text-white transition" href="#">Press</a></li>
                    </ul>
                </div>

                <div>
                    <h6 className="footer-title text-lg font-semibold mb-4">Legal</h6>
                    <ul className="space-y-2">
                        <li><a className="hover:text-white transition" href="#">Terms of Service</a></li>
                        <li><a className="hover:text-white transition" href="#">Privacy Policy</a></li>
                        <li><a className="hover:text-white transition" href="#">Cookie Policy</a></li>
                    </ul>
                </div> */}

                <div>
                    <h6 className="footer-title text-lg font-semibold mb-4">Stay in the Loop</h6>
                    <p className="text-sm mb-2">Get updates about the latest events and offers.</p>
                    <form className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
                <p>© {new Date().getFullYear()} Events Explorer. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
