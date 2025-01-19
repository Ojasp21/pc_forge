import React from 'react';
import Dropdown from './Dropdown'; 
// // import { Link } from 'react-router-dom';
// import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Navlinks.css'; 

export default function Navlinks() {
    const componentsItems = [
        { label: 'Motherboard', href: 'motherboard' },
        { label: 'Storage', href: 'storage' },
        { label: 'Graphics Card', href: '#graphics-card' },
    ];

    const preMadePCsItems = [
        { label: 'Gaming', href: 'gaming' },
        { label: 'Professional', href: 'editing' },
        { label: 'Editing', href: 'editing' },


    ];

    const accessoriesItems = [
        { label: 'Mouse', href: 'mouse' },
        { label: 'Keyboard', href: 'keyboard' },
        { label: 'Headset', href: '#headset' },
        { label: 'Monitor', href: '#monitor' },
        { label: 'Cabinet', href: '#cabinet' },

    ];

    const mrPCItems = [
        { label: 'About Us', href: '#about-us' },
        { label: 'Support', href: '#support' },
        { label: 'Contact', href: '#contact' },
        { label: 'Talk To Expert', href: '#toe' },

    ];
    

    return (
        <>
        <div>
            <ul className="nav justify-content-end">
                <li className='nav-item'>
                    {/* <Link to="prebuildpc" smooth={true} duration={500} className='nav-link' href="">Pre-Made PCs</Link> */}
                    <RouterLink to="/" className="nav-link" onClick={() => {
                setTimeout(() => {
                document.getElementById("prebuildpc").scrollIntoView({
                behavior: "smooth"
              });
            }, 100);
          }}>
            Pre-Made PCs
          </RouterLink>
                </li>
                <Dropdown title="Components" items={componentsItems} />
                <Dropdown title="Mr. PC" items={mrPCItems} />
                <li className="nav-item">
                    <a className='nav-link' href="#">Sign In</a>
                    <a className="gg-shopping-cart nav-link" href="#"></a>
                </li>
            </ul>
        </div>
        </>
    );
}

