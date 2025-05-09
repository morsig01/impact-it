import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-black py-8 shadow-md">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Impact IT</h3>
                        <p>
                            Delivering innovative IT solutions for your business success.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
                            <li><Link href="/employees" className="hover:text-blue-400">About Us</Link></li>
                            <li><Link href="/equipment" className="hover:text-blue-400">Services</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <div className="space-y-2 text-gray-300">
                            <p>Email: contact@impact-it.com</p>
                            <p>Phone: (123) 456-7890</p>
                            <p>Address: Your Business Address</p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Impact IT. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;