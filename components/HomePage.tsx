
import React from 'react';
import type { Page } from '../App';

interface HomePageProps {
    onNavigate: (page: Page) => void;
}

const missions = [
    { icon: '🎓', title: 'Pendidikan Anak', description: 'Memberikan akses pendidikan berkualitas bagi anak-anak putus sekolah.' },
    { icon: '👩‍👧', title: 'Pemberdayaan Ibu', description: 'Menopang dan memberdayakan ibu single parent untuk mandiri secara ekonomi.' },
    { icon: '❤️', title: 'Jejaring Kasih', description: 'Membangun jembatan kasih antara donatur dan mereka yang membutuhkan.' },
];

const projects = [
    { id: 1, title: 'Beasiswa Harapan Bangsa', collected: 78500000, target: 100000000, image: 'https://picsum.photos/seed/project1/800/600' },
    { id: 2, title: 'Modal Usaha Ibu Tangguh', collected: 45000000, target: 50000000, image: 'https://picsum.photos/seed/project2/800/600' },
    { id: 3, title: 'Perlengkapan Sekolah Ceria', collected: 12000000, target: 25000000, image: 'https://picsum.photos/seed/project3/800/600' },
];

const testimonials = [
    { name: 'Ibu Sarah', role: 'Penerima Bantuan', quote: 'Terima kasih Sungai Berkat Indonesia. Bantuan modal usaha sangat membantu saya membesarkan anak-anak seorang diri.', avatar: 'https://picsum.photos/seed/avatar1/100/100' },
    { name: 'Bapak David', role: 'Donatur', quote: 'Saya percaya dengan transparansi dan dampak nyata yang dibuat. Senang bisa menjadi bagian dari pelayanan ini.', avatar: 'https://picsum.photos/seed/avatar2/100/100' },
];

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}>
                <div className="absolute inset-0 bg-sbi-blue bg-opacity-70"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-serif font-extrabold leading-tight mb-4">
                        Menjadi Saluran Berkat Kristus untuk Anak dan Ibu yang Membutuhkan
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mb-8">
                        Kami percaya setiap pribadi berharga dan layak mendapatkan harapan baru.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button onClick={() => onNavigate('Donasi')} className="bg-sbi-gold hover:bg-sbi-gold-dark text-sbi-blue font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 duration-300 shadow-lg">
                            Donasi Sekarang
                        </button>
                        <button onClick={() => onNavigate('Project')} className="bg-transparent border-2 border-white hover:bg-white hover:text-sbi-blue font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg">
                            Lihat Project Kami
                        </button>
                    </div>
                </div>
            </section>

            {/* Visi & Misi Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-sbi-blue mb-4">Fokus Pelayanan Kami</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12">Melalui dua pilar utama, kami menjangkau mereka yang paling rentan dengan kasih dan tindakan nyata.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {missions.map((mission, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className="text-5xl mb-4">{mission.icon}</div>
                                <h3 className="text-xl font-bold font-serif text-sbi-blue-light mb-2">{mission.title}</h3>
                                <p className="text-gray-600">{mission.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Carousel Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-sbi-blue text-center mb-12">Project Terbaru</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map(project => (
                            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                                <img src={project.image} alt={project.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold font-serif text-sbi-blue-light mb-3">{project.title}</h3>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                                        <div className="bg-sbi-gold h-2.5 rounded-full" style={{ width: `${(project.collected / project.target) * 100}%` }}></div>
                                    </div>
                                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                                        <span>Terkumpul: {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(project.collected)}</span>
                                        <span>{Math.round((project.collected / project.target) * 100)}%</span>
                                    </div>
                                    <button onClick={() => onNavigate('Project')} className="w-full bg-sbi-blue hover:bg-sbi-blue-light text-white font-bold py-2 px-4 rounded-full transition duration-300">
                                        Donasi untuk Project Ini
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-sbi-blue text-white">
                 <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Apa Kata Mereka<span className="text-sbi-gold">.</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-sbi-blue-light p-8 rounded-lg shadow-xl">
                                <p className="italic text-gray-200 mb-4">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 border-2 border-sbi-gold" />
                                    <div>
                                        <p className="font-bold">{testimonial.name}</p>
                                        <p className="text-sm text-sbi-gold">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                 </div>
            </section>
        </div>
    );
};

export default HomePage;
