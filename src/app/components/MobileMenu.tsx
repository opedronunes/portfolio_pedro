'use client'
import { useState, useRef, useEffect } from 'react';
import { List } from "@phosphor-icons/react";
import Link from 'next/link';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="md:hidden z-50" ref={menuRef}>
            <button
                className="text-tertiary hover:text-primary focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <List size={32} />
            </button>
            {isOpen && (
                <div className="absolute top-16 inset-x-0 p-2 transition transform origin-top-right">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-primary divide-y divide-gray-100 px-2">
                        <div className="pt-3 pb-2">
                            <Link className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-red-100" href={'/'} onClick={() => setIsOpen(false)}>
                                Home
                            </Link>
                            <Link className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-red-100" href={'/dweb'} onClick={() => setIsOpen(false)}>
                                Desenvolvimento Web
                            </Link>
                            <Link className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-red-100" href={'/appweb'} onClick={() => setIsOpen(false)}>
                                App Web
                            </Link>
                            <Link className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-red-100" href={'/cti'} onClick={() => setIsOpen(false)}>
                                Consultoria TI
                            </Link>
                            <Link className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-red-100" href={'/drone'} onClick={() => setIsOpen(false)}>
                                Drone
                            </Link>
                            <Link className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-red-100" href={'/contacts'} onClick={() => setIsOpen(false)}>
                                Contato
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;