
import React from 'react';

const teamMembers = [
    { name: 'Pdt. Yohanes Cahyadi', role: 'Pendiri & Pembina', image: 'https://picsum.photos/seed/team1/400/400' },
    { name: 'Maria Susanti', role: 'Ketua Yayasan', image: 'https://picsum.photos/seed/team2/400/400' },
    { name: 'Lukas Setiawan', role: 'Direktur Program', image: 'https://picsum.photos/seed/team3/400/400' },
    { name: 'Grace Ananda', role: 'Manajer Keuangan', image: 'https://picsum.photos/seed/team4/400/400' },
];

const values = [
    { title: 'Kasih', description: 'Bekerja dengan hati yang tulus, terinspirasi oleh kasih Kristus.' },
    { title: 'Integritas', description: 'Menjunjung tinggi kejujuran dan kepercayaan dalam setiap tindakan.' },
    { title: 'Transparansi', description: 'Menyajikan laporan yang jelas dan akuntabel kepada para donatur.' },
    { title: 'Pelayanan', description: 'Melayani dengan rendah hati dan mengutamakan kebutuhan sesama.' },
];

const AboutPage: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Page Header */}
            <section className="bg-sbi-blue-light text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold">Tentang Kami</h1>
                    <p className="mt-4 text-lg">Mengenal lebih dekat hati di balik pelayanan Sungai Berkat Indonesia.</p>
                </div>
            </section>

            {/* Sejarah & Latar Belakang */}
            <section className="py-20">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="https://picsum.photos/seed/about/800/600" alt="Kegiatan sosial" className="rounded-lg shadow-xl" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-sbi-blue mb-4">Sejarah & Latar Belakang</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Sungai Berkat Indonesia lahir dari kerinduan hati untuk menjadi jawaban doa bagi mereka yang terpinggirkan. Berawal dari sebuah komunitas kecil di tahun 2015, kami tergerak oleh banyaknya kisah anak-anak yang tidak bisa sekolah dan para ibu tunggal yang berjuang sendirian.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Dengan iman dan keyakinan bahwa Tuhan menyediakan, kami memulai langkah pertama untuk menghubungkan mereka yang rindu memberi dengan mereka yang sungguh-sungguh membutuhkan. Kini, pelayanan kami terus bertumbuh, menjadi sungai yang mengalirkan berkat ke lebih banyak tempat.
                        </p>
                    </div>
                </div>
            </section>

            {/* Visi & Misi */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                     <div className="max-w-3xl mx-auto">
                        <h2 className="text-sbi-gold text-lg font-semibold">Visi Kami</h2>
                        <p className="text-3xl font-serif font-bold text-sbi-blue mt-2 italic">
                            "Menjadi saluran berkat Kristus yang menghubungkan tangan yang memberi dengan hati yang membutuhkan."
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto mt-16 text-left">
                        <h2 className="text-sbi-gold text-lg font-semibold text-center">Misi Kami</h2>
                         <ul className="mt-6 space-y-4">
                            <li className="flex items-start">
                                <span className="text-sbi-blue text-2xl mr-4">&#10148;</span>
                                <p className="text-gray-700">Meliput kisah nyata orang-orang yang membutuhkan pertolongan untuk dibagikan kepada publik.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-sbi-blue text-2xl mr-4">&#10148;</span>
                                <p className="text-gray-700">Menginspirasi umat Kristen dan masyarakat luas untuk menyalurkan berkatnya secara tepat sasaran.</p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-sbi-blue text-2xl mr-4">&#10148;</span>
                               <p className="text-gray-700">Membangun jejaring kasih dan persaudaraan yang transparan antara para donatur dan penerima manfaat.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Nilai Inti */}
             <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-sbi-blue text-center mb-12">Nilai-nilai Inti Kami</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map(value => (
                            <div key={value.title} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                                <h3 className="text-2xl font-serif text-sbi-blue-light mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Struktur Organisasi */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-sbi-blue text-center mb-12">Tim Pelayanan Kami</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map(member => (
                            <div key={member.name} className="text-center">
                                <img src={member.image} alt={member.name} className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg border-4 border-sbi-gold" />
                                <h3 className="mt-4 text-xl font-bold text-sbi-blue-light">{member.name}</h3>
                                <p className="text-gray-500">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
