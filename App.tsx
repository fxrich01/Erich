
import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import VolunteerPage from './components/VolunteerPage';
import DonatePage from './components/DonatePage';
import ContactPage from './components/ContactPage';

export type Page = 'Beranda' | 'Tentang Kami' | 'Project' | 'Volunteer' | 'Donasi' | 'Kontak';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('Beranda');
    const [isRadioPlaying, setIsRadioPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const radioStreamUrl = 'https://stream.heartline.co.id:8443/radio_yaski_stereo';

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().then(() => {
                setIsRadioPlaying(true);
            }).catch(error => {
                console.log("Autoplay was prevented by the browser.");
                setIsRadioPlaying(false);
            });
        }
    }, []);

    const handleNavigate = (page: Page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    const toggleRadio = () => {
        if (audioRef.current) {
            if (isRadioPlaying) {
                audioRef.current.pause();
                setIsRadioPlaying(false);
            } else {
                audioRef.current.play().then(() => {
                    setIsRadioPlaying(true);
                }).catch(error => console.error("Error playing audio:", error));
            }
        }
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'Beranda':
                return <HomePage onNavigate={handleNavigate} />;
            case 'Tentang Kami':
                return <AboutPage />;
            case 'Project':
                return <ProjectsPage />;
            case 'Volunteer':
                return <VolunteerPage />;
            case 'Donasi':
                return <DonatePage />;
            case 'Kontak':
                return <ContactPage />;
            default:
                return <HomePage onNavigate={handleNavigate} />;
        }
    };

    return (
        <div className="bg-white text-gray-800 font-sans">
            <audio ref={audioRef} src={radioStreamUrl} autoPlay hidden></audio>
            <Header
                currentPage={currentPage}
                onNavigate={handleNavigate}
                isRadioPlaying={isRadioPlaying}
                onRadioToggle={toggleRadio}
            />
            <main>{renderPage()}</main>
            <Footer onNavigate={handleNavigate} />
        </div>
    );
};

export default App;
