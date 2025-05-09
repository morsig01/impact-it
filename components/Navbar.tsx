'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Employees', path: '/employees' },
        { label: 'Equipment', path: '/equipment' },
    ];

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                                    pathname === item.path
                                        ? 'border-blue-500 text-gray-900'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;