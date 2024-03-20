import React, { useState } from 'react';
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom';



const NavBar = () => {
    const [active, setactive]=useState("nav")
    const [toggleIcon, settoggleIcon]=useState("nav__toggler")
    
    const navToggle =()=>{
        active==='nav'? setactive("nav__active"): setactive("nav");

       
    }
    return (
        <div>
            <header>
                <div className='Logo-image'>
                    <img src={logo} alt="" />
                </div>
                <nav className={active}>
                   <Link to='/'> Home</Link>
                   <Link to='/services'> services</Link>
                   <Link to='/Vendors'> Vendors</Link>
                   <Link to='/Contact'> Contact</Link>
                </nav>
                <div className="login-sign">
                    <Link className='connection' to='/login' >Se connecter</Link>
                    <Link className='inscription' to='/signUp'>s'inscrire</Link>
                </div>
                <div  onClick={navToggle} className='nav__toggler' >
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
                </div>
            </header>
        </div>
    );
}

export default NavBar;
