import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {

    const [show, setShow] = useState(false);

    function showSwitch() {
        return setShow(!show)
    }

    return <>
        <div className="navbar">
            <div className="logo">
                <img src={require('/Users/saura/Desktop/101infotech-assignment/src/assets/logo.png')} alt=''/>
            </div>

            <div className={show ? "links active" : "links"}>
                <Link onClick={() => showSwitch()} to="/">Home</Link>
                <Link onClick={() => showSwitch()} to="/about">About</Link>
                <Link onClick={() => showSwitch()} to="/services">Services</Link>
                <Link onClick={() => showSwitch()} to="/blogs">Blogs</Link>
                <Link onClick={() => showSwitch()} to="/contact">Contact</Link>
                <button className='btn-navbar' onClick={() => showSwitch()} to="/login">Login</button>
            </div>

            <div className={show ? "bars-button active" : "bars-button"} onClick={() => showSwitch()} >
                {show ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#333'}} />)}
            </div>
        </div>
    </>;
}

export default Navbar