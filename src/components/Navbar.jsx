import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='bg-red-500 px-6 py-2 h-16 flex gap-5 justify-between items-center'>
                <h6 className='text-white text-2xl font-bold'>
                    Next <span className='text-orange-400'>Hero</span>
                </h6>

                <ul className='flex justify-between items-center gap-4'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>

            </nav>
        </div>
    );

};

export default Navbar;