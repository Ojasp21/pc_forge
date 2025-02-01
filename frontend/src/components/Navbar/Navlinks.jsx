import React, { useState } from 'react';
import Dropdown from './Dropdown'; 
import { Link, Link as RouterLink } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import useBuildStore from "../../store/useBuildStore"; //
import './Navlinks.css'; 

export default function Navlinks() {
    const mrPCItems = [
        { label: 'About Us', href: '/about-us' },
        { label: 'Support', href: '/faqs' },
        { label: 'Contact', href: 'mailto:support@pc_forge.com?subject=Support Request&body=Hello, I need help with...' },
        { label: 'Talk To Expert', href: '#toe' },
    ];
    const accessories = [
        {label: "Monitor", href: '/category/Monitor'},
        {label: "Mouse", href: '/category/Mouse-and-Mouse-Pads'},
        {label: "Keyboard", href: '/category/Keyboard'},
        {label: "More", href: '/accessories'},
    ];
    
    const { authUser, logout } = useAuthStore();
    const { addedParts } = useBuildStore();
    const [hovered, setHovered] = useState(false);

    return (
        <>
        <div>
            <ul className="nav justify-content-end">
                <li className='nav-item'>
                    <RouterLink to="/" className="nav-link"
                        onClick={(e) => {
                            e.preventDefault();
                            if (window.location.pathname === '/') {
                                document.getElementById("prebuildpc").scrollIntoView({
                                    behavior: "smooth"
                                });
                            } else {
                                const newTab = window.open('/', '_blank');
                                setTimeout(() => {
                                    if (newTab) {
                                        newTab.document.getElementById("prebuildpc").scrollIntoView({
                                            behavior: "smooth"
                                        });
                                    }
                                }, 100);
                            }
                        }}
                    >
                        Pre-Made PCs
                    </RouterLink>
                </li>
                {/* <li className='nav-item'>
                    <RouterLink to="/accessories" className="nav-link">
                        Accessories
                    </RouterLink>
                </li> */}
                <Dropdown title="Accessories" items={accessories} />
                <Dropdown title="Mr. PC" items={mrPCItems} />
                <li className="nav-item">
                    {!authUser ? (
                        <Link to='/login' className="nav-link">Sign In</Link>
                    ) : (
                        <div 
                            className='nav-link auth-user-wrapper font-audiowide' 
                            onMouseEnter={() => setHovered(true)} 
                            onMouseLeave={() => setHovered(false)}
                        >
                            Hello, {authUser.fullName.split(' ')[0]}
                            {hovered && (
                                <div className="logout-dropdown bg-teal-600">
                                    <button className="logout-button" onClick={logout}>
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                    <Link to="/checkout" className="nav-link cart-container">
                        <i className="gg-shopping-cart"></i>
                        {addedParts.length > 0 && (
                            <span className="cart-count">{addedParts.length}</span>
                        )}
                    </Link>
                </li>
            </ul>
        </div>
        </>
    );
}
