import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50">      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

            {/* Logo */}
            <h1 className="text-xl font-bold">Vishwajith</h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 text-gray-300">
                <li><a href="#hero" className="hover:text-white">Home</a></li>
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#skills" className="hover:text-white">Skills</a></li>
                <li><a href="#projects" className="hover:text-white">Projects</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>

            {/* Mobile Button */}
            <button
                className="md:hidden text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>
        </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black px-4 pb-4">
                    <ul className="flex flex-col gap-4 text-gray-300">
                        <li onClick={() => setIsOpen(false)} className="hover:text-white">Home</li>
                        <li onClick={() => setIsOpen(false)} className="hover:text-white">About</li>
                        <li onClick={() => setIsOpen(false)} className="hover:text-white">Skills</li>
                        <li onClick={() => setIsOpen(false)} className="hover:text-white">Projects</li>
                        <li onClick={() => setIsOpen(false)} className="hover:text-white">Contact</li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;