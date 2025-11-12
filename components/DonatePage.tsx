
import React from 'react';

const quickDonateOptions = [
    { amount: 50000, color: 'bg-sbi-gold', hover: 'hover:bg-sbi-gold-dark', text: 'text-sbi-blue' },
    { amount: 100000, color: 'bg-sbi-blue', hover: 'hover:bg-sbi-blue-light', text: 'text-white' },
    { amount: 500000, color: 'bg-purple-600', hover: 'hover:bg-purple-700', text: 'text-white' },
];

const paymentMethods = [
    { name: 'QRIS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_QRIS_2020.svg/2560px-Logo_QRIS_2020.svg.png' },
    { name: 'BCA', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia_logo.svg/2560px-Bank_Central_Asia_logo.svg.png' },
    { name: 'Mandiri', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/2560px-Bank_Mandiri_logo_2016.svg.png' },
    { name: 'GoPay', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/2560px-Gopay_logo.svg.png' },
];


const DonatePage: React.FC = () => {
    return (
        <div className="bg-gray-50">
            {/* Page Header */}
            <section className="bg-sbi-blue text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold">Beri Donasi</h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto">
                        Setiap Rp50.000 dapat membantu seorang anak kembali ke sekolah atau seorang ibu mendapatkan penghasilan untuk keluarganya.
                    </p>
                </div>
            </section>

            {/* Donation Form Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
                        <h2 className="text-2xl font-serif font-bold text-sbi-blue-light text-center mb-6">Pilih Nominal Donasi Anda</h2>

                        {/* Quick Donate Options */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                            {quickDonateOptions.map(opt => (
                                <button key={opt.amount} className={`${opt.color} ${opt.hover} ${opt.text} font-bold py-4 px-2 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300`}>
                                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(opt.amount)}
                                </button>
                            ))}
                        </div>

                         {/* Custom Amount */}
                        <div className="mb-6">
                             <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-1">Atau Masukkan Nominal Lain</label>
                             <div className="relative">
                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                     <span className="text-gray-500 sm:text-sm">Rp</span>
                                 </div>
                                 <input type="number" name="custom-amount" id="custom-amount" className="focus:ring-sbi-blue-light focus:border-sbi-blue-light block w-full pl-8 pr-4 py-3 sm:text-sm border-gray-300 rounded-md" placeholder="0" />
                             </div>
                        </div>

                        {/* Donation Purpose */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Tujuan Donasi</h3>
                            <div className="space-y-3">
                                <label className="flex items-center p-4 border rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <input type="radio" name="purpose" className="focus:ring-sbi-blue-light h-4 w-4 text-sbi-blue border-gray-300" defaultChecked />
                                    <span className="ml-3 text-gray-700">Anak Tidak Bersekolah</span>
                                </label>
                                <label className="flex items-center p-4 border rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <input type="radio" name="purpose" className="focus:ring-sbi-blue-light h-4 w-4 text-sbi-blue border-gray-300" />
                                    <span className="ml-3 text-gray-700">Ibu Single Parent</span>
                                </label>
                                <label className="flex items-center p-4 border rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <input type="radio" name="purpose" className="focus:ring-sbi-blue-light h-4 w-4 text-sbi-blue border-gray-300" />
                                    <span className="ml-3 text-gray-700">Bebas (Disalurkan Sesuai Kebutuhan)</span>
                                </label>
                            </div>
                        </div>
                        
                        <button className="w-full bg-sbi-blue hover:bg-sbi-blue-light text-white font-bold py-4 px-6 rounded-lg text-xl transition duration-300">
                           Lanjutkan ke Pembayaran
                        </button>
                    </div>
                </div>
            </section>
            
             {/* Payment Methods & Transparency */}
            <section className="pb-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl font-serif font-bold text-sbi-blue mb-6">Metode Pembayaran</h3>
                        <div className="flex justify-center items-center flex-wrap gap-8 mb-12">
                            {paymentMethods.map(method => (
                                <img key={method.name} src={method.logo} alt={method.name} className="h-8 md:h-12" />
                            ))}
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-sbi-gold">
                             <h4 className="text-lg font-semibold text-gray-600">Total Donasi Terkumpul</h4>
                             <p className="text-4xl md:text-5xl font-bold font-serif text-sbi-blue my-2">
                                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(1347500000)}
                             </p>
                             <a href="#" className="text-sbi-blue-light hover:text-sbi-gold font-semibold transition-colors duration-300">Lihat Laporan Transparansi &rarr;</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DonatePage;
