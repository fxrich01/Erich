
import React from 'react';

const galleryImages = [
    'https://picsum.photos/seed/gallery1/600/400',
    'https://picsum.photos/seed/gallery2/600/400',
    'https://picsum.photos/seed/gallery3/600/400',
    'https://picsum.photos/seed/gallery4/600/400',
    'https://picsum.photos/seed/gallery5/600/400',
    'https://picsum.photos/seed/gallery6/600/400',
];

const VolunteerPage: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Page Header */}
            <section className="relative bg-cover bg-center py-32" style={{ backgroundImage: "url('https://picsum.photos/seed/volunteer/1920/1080')" }}>
                 <div className="absolute inset-0 bg-sbi-blue bg-opacity-75"></div>
                 <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold">Jadilah Relawan</h1>
                    <p className="mt-4 text-lg max-w-2xl mx-auto">
                        Jadilah saluran kasih yang nyata — bantu kami menjangkau lebih banyak jiwa dengan waktu dan talenta Anda.
                    </p>
                </div>
            </section>

            {/* Volunteer Form */}
            <section className="py-20">
                <div className="container mx-auto px-4 grid md:grid-cols-5 gap-12">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-serif font-bold text-sbi-blue mb-4">Bergabunglah dengan Tim Kami</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Kami percaya bahwa setiap orang memiliki karunia untuk dibagikan. Baik Anda seorang pengajar, profesional, mahasiswa, atau siapa pun yang memiliki hati untuk melayani, ada tempat untuk Anda di sini. Isi formulir di samping untuk memulai perjalanan pelayanan Anda bersama kami.
                        </p>
                    </div>
                    <div className="md:col-span-3">
                        <form className="bg-gray-50 p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-serif font-bold text-sbi-blue-light mb-6">Form Pendaftaran Volunteer</h3>
                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                                    <input type="text" name="name" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sbi-blue-light focus:border-sbi-blue-light" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sbi-blue-light focus:border-sbi-blue-light" />
                                </div>
                                <div>
                                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700">Bidang Minat</label>
                                    <select id="interest" name="interest" className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sbi-blue-light focus:border-sbi-blue-light">
                                        <option>Pelayanan Anak</option>
                                        <option>Pendampingan Ibu</option>
                                        <option>Administrasi & Kreatif</option>
                                        <option>Lainnya</option>
                                    </select>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                     <div>
                                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Lokasi (Kota)</label>
                                        <input type="text" name="location" id="location" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sbi-blue-light focus:border-sbi-blue-light" />
                                    </div>
                                    <div>
                                        <label htmlFor="availability" className="block text-sm font-medium text-gray-700">Ketersediaan Waktu</label>
                                        <input type="text" name="availability" id="availability" placeholder="Contoh: Akhir pekan" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sbi-blue-light focus:border-sbi-blue-light" />
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="w-full bg-sbi-gold hover:bg-sbi-gold-dark text-sbi-blue font-bold py-3 px-6 rounded-lg transition duration-300">
                                        Kirim Pendaftaran
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

             {/* Gallery Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-sbi-blue text-center mb-12">Momen Pelayanan Kami</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryImages.map((src, index) => (
                             <div key={index} className="overflow-hidden rounded-lg shadow-md">
                                <img src={src} alt={`Volunteer activity ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VolunteerPage;
