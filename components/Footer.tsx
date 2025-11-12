
import React from 'react';
import type { Page } from '../App';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

// FIX: Define a clear interface for SocialIcon props to resolve the 'children' prop error.
interface SocialIconProps {
    href: string;
    children: React.ReactNode;
}

const SocialIcon = ({ href, children }: SocialIconProps) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sbi-gold transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="bg-sbi-blue text-white">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <h2 className="text-2xl font-serif font-bold">Sungai Berkat<span className="text-sbi-gold">.</span></h2>
                        <p className="mt-2 text-gray-300 text-sm italic">Menghubungkan Tangan yang Memberi dengan Hati yang Membutuhkan.</p>
                        <div className="flex space-x-4 mt-4">
                            <SocialIcon href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                            </SocialIcon>
                             <SocialIcon href="#">
                               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.359-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.359-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/></svg>
                            </SocialIcon>
                            <SocialIcon href="#">
                               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                            </SocialIcon>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                         <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-sm font-semibold tracking-wider uppercase text-sbi-gold">Navigasi</h3>
                                <ul className="mt-4 space-y-2">
                                    {(['Beranda', 'Tentang Kami', 'Project'] as Page[]).map(page => (
                                        <li key={page}><a href="#" onClick={e => {e.preventDefault(); onNavigate(page)}} className="text-base text-gray-300 hover:text-white">{page}</a></li>
                                    ))}
                                </ul>
                            </div>
                             <div>
                                <h3 className="text-sm font-semibold tracking-wider uppercase text-sbi-gold">Bergabung</h3>
                                <ul className="mt-4 space-y-2">
                                     {(['Donasi', 'Volunteer', 'Kontak'] as Page[]).map(page => (
                                        <li key={page}><a href="#" onClick={e => {e.preventDefault(); onNavigate(page)}} className="text-base text-gray-300 hover:text-white">{page}</a></li>
                                    ))}
                                </ul>
                            </div>
                         </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Sungai Berkat Indonesia. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
