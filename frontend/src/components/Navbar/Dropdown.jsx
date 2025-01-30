import React, { useState } from 'react';
import './Dropdown.css'; // For custom dropdown styles
import { Link } from 'react-router-dom';

export default function Dropdown({ title, items, linkTo }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <li 
            className="nav-item dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link className="nav-link" to={linkTo || '#'}>
                {title}
            </Link>
            {isOpen && (
                <ul className="dropdown-menu">
                    {items.map((item, index) => (
                        <li key={index}>
                            <Link className="dropdown-item" to={item.href}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
}
