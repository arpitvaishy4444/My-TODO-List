import React from 'react';
import "./Navbar.css"
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to="/" ><h3 className='h3'>Add Task</h3></Link>
            
            <Link to="/upcoming" ><h3 className='h3'>Upcoming Task</h3></Link>
            

         
            
        </div>
    );
};

export default Navbar;