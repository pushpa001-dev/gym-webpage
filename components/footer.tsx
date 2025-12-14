import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white py-10 pt-20 pb-10 font-sans overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-end">

                    {/* Column 1: Purpose & Details */}
                    <div className="flex flex-col space-y-4">
                        <p className="text-sm md:text-base text-gray-300 uppercase tracking-wider">
                            Train for purpose and balance your Life
                        </p>
                        <p className="text-sm md:text-base text-gray-300 uppercase tracking-wider mt-auto">
                            gym trainers details
                        </p>
                    </div>

                    {/* Column 2: Contact Links */}
                    <div className="flex flex-col space-y-2">
                        <h4 className="text-sm md:text-base text-white uppercase tracking-wider font-semibold mb-2">Contact us</h4>
                        <a href="#" className="text-sm md:text-base text-gray-400 hover:text-[#CCFF00] lowercase transition-colors">instagram</a>
                        <a href="#" className="text-sm md:text-base text-gray-400 hover:text-[#CCFF00] lowercase transition-colors">youtube</a>
                        <a href="#" className="text-sm md:text-base text-gray-400 hover:text-[#CCFF00] lowercase transition-colors">x</a>
                        <a href="#" className="text-sm md:text-base text-gray-400 hover:text-[#CCFF00] lowercase transition-colors">linkedin</a>
                    </div>

                    {/* Column 3: Large Branding */}
                    <div className="flex flex-col justify-end items-center lg:items-end">
                        <h2 className="text-5xl md:text-6xl font-bold font-oswald text-[#CCFF00] uppercase tracking-tighter leading-none whitespace-nowrap">
                            LETS MEET
                        </h2>
                    </div>

                    {/* Column 4: Locations */}
                    <div className="flex flex-col space-y-2 lg:items-end lg:text-right">
                        <h4 className="text-sm md:text-base text-white uppercase tracking-wider font-semibold mb-2">places</h4>
                        <span className="text-sm md:text-base text-gray-400 lowercase">metro city</span>
                        <span className="text-sm md:text-base text-gray-400 lowercase">tenali</span>
                        <span className="text-sm md:text-base text-gray-400 lowercase">guntur</span>
                        <span className="text-sm md:text-base text-gray-400 lowercase">hyderabad</span>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
