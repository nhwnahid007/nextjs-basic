import Link from 'next/link';
import React from 'react';

const AboutContents = () => {
    return (
        <div>
            <button className='bg-gray-600 text-white px-4 py-2 rounded-md mx-2 ' ><Link href="/about/history">History</Link></button>
            <button className='bg-gray-600 text-white px-4 py-2 rounded-md mx-2'><Link href="/about/mission">Mission</Link></button>
        </div>
    );
};

export default AboutContents;