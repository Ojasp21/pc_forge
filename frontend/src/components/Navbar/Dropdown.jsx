import React, { useState } from 'react';
import './Dropdown.css'; // For custom dropdown styles
import { Link } from 'react-router-dom';

export default function Dropdown({ title, items }) {
    const [isOpen, setIsOpen] = useState(false);

    // Handle mouse enter and leave to show/hide the dropdown
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
            <a className="nav-link" href="#">
                {title}
            </a>
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
