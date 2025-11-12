
import React, { useState, useMemo } from 'react';

type ProjectStatus = 'Sedang Berlangsung' | 'Selesai' | 'Terbaru';
type Category = 'Anak Tidak Bersekolah' | 'Ibu Single Parent';

interface Project {
    id: number;
    title: string;
    category: Category;
    description: string;
    collected: number;
    target: number;
    image: string;
    status: 'Sedang Berlangsung' | 'Selesai';
    isNew: boolean;
}

const allProjects: Project[] = [
    { id: 1, title: 'Beasiswa Harapan Bangsa', category: 'Anak Tidak Bersekolah', description: 'Memberikan beasiswa penuh untuk 50 anak putus sekolah di wilayah Jabodetabek.', collected: 78500000, target: 100000000, image: 'https://picsum.photos/seed/project1/800/600', status: 'Sedang Berlangsung', isNew: true },
    { id: 2, title: 'Modal Usaha Ibu Tangguh', category: 'Ibu Single Parent', description: 'Memberikan modal usaha dan pendampingan untuk 20 ibu single parent agar mandiri.', collected: 50000000, target: 50000000, image: 'https://picsum.photos/seed/project2/800/600', status: 'Selesai', isNew: false },
    { id: 3, title: 'Perlengkapan Sekolah Ceria', category: 'Anak Tidak Bersekolah', description: 'Menyediakan tas, sepatu, dan seragam untuk 100 anak dari keluarga prasejahtera.', collected: 12000000, target: 25000000, image: 'https://picsum.photos/seed/project3/800/600', status: 'Sedang Berlangsung', isNew: true },
    { id: 4, title: 'Rumah Singgah Kasih Bunda', category: 'Ibu Single Parent', description: 'Membangun rumah singgah aman bagi ibu dan anak yang membutuhkan perlindungan.', collected: 150000000, target: 300000000, image: 'https://picsum.photos/seed/project4/800/600', status: 'Sedang Berlangsung', isNew: false },
    { id: 5, title: 'Bimbingan Belajar Gratis', category: 'Anak Tidak Bersekolah', description: 'Program bimbingan belajar gratis untuk anak-anak di komunitas pemulung.', collected: 35000000, target: 35000000, image: 'https://picsum.photos/seed/project5/800/600', status: 'Selesai', isNew: false },
];

const donationOptions = [50000, 100000, 500000];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
        <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
            <span className={`text-xs font-bold uppercase ${project.category === 'Anak Tidak Bersekolah' ? 'text-blue-500' : 'text-pink-500'}`}>{project.category}</span>
            <h3 className="text-xl font-bold font-serif text-sbi-blue-light mt-1 mb-2">{project.title}</h3>
            <p className="text-gray-600 text-sm flex-grow">{project.description}</p>
            <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div className="bg-sbi-gold h-2.5 rounded-full" style={{ width: `${(project.collected / project.target) * 100}%` }}></div>
                </div>
                <div className="flex justify-between text-sm text-gray-700 font-semibold mb-4">
                    <span>Terkumpul: <span className="text-sbi-blue">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(project.collected)}</span></span>
                    <span>{Math.round((project.collected / project.target) * 100)}%</span>
                </div>
                <div className="space-y-2">
                    <div className="grid grid-cols-3 gap-2">
                        {donationOptions.map(amount => (
                            <button key={amount} className="bg-gray-100 text-sbi-blue hover:bg-sbi-blue hover:text-white font-bold py-2 px-2 text-sm rounded-md transition duration-300">
                                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount)}
                            </button>
                        ))}
                    </div>
                    <button className="w-full bg-sbi-gold hover:bg-sbi-gold-dark text-sbi-blue font-bold py-2 px-4 rounded-md transition duration-300">
                        Custom Nominal
                    </button>
                </div>
            </div>
        </div>
    </div>
);


const ProjectsPage: React.FC = () => {
    const [filter, setFilter] = useState<ProjectStatus>('Sedang Berlangsung');
    const filters: ProjectStatus[] = ['Sedang Berlangsung', 'Selesai', 'Terbaru'];

    const filteredProjects = useMemo(() => {
        switch (filter) {
            case 'Selesai':
                return allProjects.filter(p => p.status === 'Selesai');
            case 'Terbaru':
                return allProjects.filter(p => p.isNew);
            case 'Sedang Berlangsung':
            default:
                return allProjects.filter(p => p.status === 'Sedang Berlangsung');
        }
    }, [filter]);

    return (
        <div className="bg-gray-50">
            {/* Page Header */}
            <section className="bg-sbi-blue text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold">Project Kami</h1>
                    <p className="mt-4 text-lg">Setiap donasi Anda menjadi harapan baru bagi mereka.</p>
                </div>
            </section>

            {/* Filter and Projects */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    {/* Filter Buttons */}
                    <div className="flex justify-center mb-12">
                        <div className="flex space-x-2 bg-white p-2 rounded-full shadow-md">
                            {filters.map(f => (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f)}
                                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                                        filter === f ? 'bg-sbi-blue text-white' : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Project Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;
