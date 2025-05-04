import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Search, GalleryVerticalEnd, Menu } from 'lucide-react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='w-full bg-white  md:w-[80%] mx-auto sticky top-0 z-50 '>
           
            <div className="flex flex-wrap items-center justify-between container mx-auto px-4 py-2 gap-4">
                <div className="flex flex-wrap items-center gap-4 flex-1 min-w-[280px]">
                    <div className="flex items-center gap-2">
                        <img
                            src="https://api.logobank.uz/media/logos_preview/Uzum-01.png"
                            alt="Uzum logo"
                            className='w-[130px]'
                        />
                        <div className='hidden md:flex items-center gap-2 px-3 py-2 bg-indigo-300 hover:bg-indigo-200 rounded-lg cursor-pointer'>
                            <GalleryVerticalEnd />
                            <span className="text-sm">Tovarlar Katalogi</span>
                        </div>
                    </div>
                    <div className='flex items-center border rounded-lg flex-grow max-w-[500px]'>
                        <input
                            type="search"
                            placeholder="Maxsulotlar va turkumlarni izlash"
                            className="flex-grow py-2 px-3 outline-none bg-transparent text-sm"
                        />
                        <Search size={18} className='cursor-pointer me-2' />
                    </div>
                </div>
                <div className="flex items-center gap-8 ">
                    <Link to="/cart" className="flex  gap-2 items-center text-sm">
                        <ShoppingCart size={22} className='hover:text-indigo-300' />
                        <p>Savat</p>
                    </Link>
                    <button className='flex gap-2 cursor-pointer items-center text-sm'>
                        <Heart size={22} className='hover:text-indigo-300' />
                        <p>Saralanganlar</p>
                    </button>
                    <button className='border px-4 py-2 rounded-lg border-indigo-300 hover:bg-indigo-200 text-sm'>
                        Kirish
                    </button>
                    <button className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
                        <Menu size={24} />
                    </button>
                </div>
            </div>
            <div className="container mx-auto px-4">
                <hr className='my-1' />

                <ul className={`md:flex items-center justify-between gap-2 py-2 ${menuOpen ? 'block' : 'hidden'} md:block`}>
                    <li>
                        <Link to={"/product"} className='block px-3 py-2 hover:bg-gray-100 rounded'>Smartfonlar va gajetlar</Link>
                    </li>
                    <li><span className='block px-3 py-2 hover:bg-gray-100 rounded'>Noutbooklar, Kompyuterlar</span></li>
                    <li><span className='block px-3 py-2 hover:bg-gray-100 rounded'>Tv va proyektorlar</span></li>
                    <li><span className='block px-3 py-2 hover:bg-gray-100 rounded'>Audiotexnikalar</span></li>
                    <li><span className='block px-3 py-2 hover:bg-gray-100 rounded'>Transport</span></li>
                    <li><span className='block px-3 py-2 hover:bg-gray-100 rounded'>Naborlar</span></li>
                    <li><span className='block px-3 py-2 hover:bg-gray-100 rounded'>Uy uchun texnika</span></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
