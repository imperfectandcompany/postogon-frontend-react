import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
    <nav>
        <Link to='/' className='pl-8'>Postogon</Link>
    </nav>
    );
};

export default Navbar;
