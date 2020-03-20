import React from 'react';
const Header = () => {
    return(
        <header className="w-full h-20 fixed z-10 bg-black flex justify-center justify-between items-center shadow-2xl">
        <h1 className="hidden md:block md:text-white ml-3">La mejor cerveza, para ti y para tu familia</h1>
        <h1 className="text-white font-bold text-4xl mx-6 md:m-0 xl:m-0">Logo</h1>
        <h1 className="text-white font-extrabold mx-6 btn-circle w-16 h-16 flex items-center justify-center bg-black cursor-pointer hover:bg-primary hover:border-black hover:text-black"><i className="material-icons text-3xl">shopping_basket</i></h1>
        </header>
    )
};

export default Header;