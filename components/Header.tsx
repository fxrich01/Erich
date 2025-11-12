
import React, { useState } from 'react';
import type { Page } from '../App';

interface HeaderProps {
    currentPage: Page;
    onNavigate: (page: Page) => void;
    isRadioPlaying: boolean;
    onRadioToggle: () => void;
}

const navLinks: Page[] = ['Beranda', 'Tentang Kami', 'Project', 'Volunteer', 'Donasi', 'Kontak'];

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const PauseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);


const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, isRadioPlaying, onRadioToggle }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // FIX: Explicitly type NavLink as React.FC to ensure it can receive the 'key' prop without a type error.
    const NavLink: React.FC<{ page: Page }> = ({ page }) => (
        <a
            href="#"
            onClick={(e) => { e.preventDefault(); onNavigate(page); setIsMenuOpen(false); }}
            className={`px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                currentPage === page
                    ? 'text-sbi-gold'
                    : 'text-white hover:text-sbi-gold'
            }`}
        >
            {page}
        </a>
    );

    return (
        <header className="bg-sbi-blue sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('Beranda'); }} className="text-white font-serif text-2xl font-bold">
                            Sungai Berkat<span className="text-sbi-gold">.</span>
                        </a>
                    </div>

                    <nav className="hidden md:flex md:items-center md:space-x-2">
                        {navLinks.map((page) => (
                            <NavLink key={page} page={page} />
                        ))}
                    </nav>

                    <div className="flex items-center">
                       <button onClick={onRadioToggle} className="text-white hover:text-sbi-gold transition-colors duration-300 flex items-center space-x-2 mr-4" aria-label="Toggle Radio Stream">
                           {isRadioPlaying ? <PauseIcon /> : <PlayIcon />}
                           <span className="hidden lg:inline text-sm font-semibold">Radio</span>
                       </button>

                       <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-sbi-gold focus:outline-none">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-sbi-blue-light">
                    <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((page) => (
                            <a
                                key={page}
                                href="#"
                                onClick={(e) => { e.preventDefault(); onNavigate(page); setIsMenuOpen(false); }}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${
                                    currentPage === page ? 'bg-sbi-blue text-sbi-gold' : 'text-white hover:bg-sbi-blue hover:text-sbi-gold'
                                }`}
                            >
                                {page}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
