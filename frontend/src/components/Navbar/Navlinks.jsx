// import React from 'react';
// import Dropdown from './Dropdown'; 
// // // import { Link } from 'react-router-dom';
// // import { Link } from 'react-scroll';
// import { Link, Link as RouterLink } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';
// import './Navlinks.css'; 
// import { useAuthStore } from '../../store/useAuthStore';

// export default function Navlinks() {

//     const componentsItems = [
//         { label: 'Motherboard', href: 'motherboard' },
//         { label: 'Storage', href: 'storage' },
//         { label: 'Graphics Card', href: '#graphics-card' },
//     ];

//     const preMadePCsItems = [
//         { label: 'Gaming', href: 'gaming' },
//         { label: 'Professional', href: 'editing' },
//         { label: 'Editing', href: 'editing' },


//     ];

//     const accessoriesItems = [
//         { label: 'Mouse', href: 'mouse' },
//         { label: 'Keyboard', href: 'keyboard' },
//         { label: 'Headset', href: '#headset' },
//         { label: 'Monitor', href: '#monitor' },
//         { label: 'Cabinet', href: '#cabinet' },

//     ];

//     const mrPCItems = [
//         { label: 'About Us', href: '#about-us' },
//         { label: 'Support', href: '#support' },
//         { label: 'Contact', href: '#contact' },
//         { label: 'Talk To Expert', href: '#toe' },

//     ];
    
//     const { authUser } = useAuthStore();
//     return (
//         <>
//         <div>
//             <ul className="nav justify-content-end">
//                 <li className='nav-item'>
//                     {/* <Link to="prebuildpc" smooth={true} duration={500} className='nav-link' href="">Pre-Made PCs</Link> */}
//                     <RouterLink to="/" className="nav-link" onClick={() => {
//                 setTimeout(() => {
//                 document.getElementById("prebuildpc").scrollIntoView({
//                 behavior: "smooth"
//               });
//             }, 100);
//           }}>
//             Pre-Made PCs
//           </RouterLink>
//                 </li>
//                 <Dropdown title="Components" items={componentsItems} />
//                 <Dropdown title="Mr. PC" items={mrPCItems} />
//                 <li className="nav-item">
//                     {/* <a className='nav-link' href="#">Sign In</a> */}
//                     {!authUser ? <Link to='/login' className="nav-link">Sign In</Link>: <div className='font-audiowide'
//                     >
//                     Hello, {authUser.fullName}
//                     </div> }
//                     <a className="gg-shopping-cart nav-link" href="#"></a>
//                 </li>
//             </ul>
//         </div>
//         </>
//     );
// }


import React, { useState } from 'react';
import Dropdown from './Dropdown'; 
import { Link, Link as RouterLink } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
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
    
    const { authUser, logout } = useAuthStore();
    const [hovered, setHovered] = useState(false);

    return (
        <>
        <div>
            <ul className="nav justify-content-end">
                <li className='nav-item'>
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
                    <a className="gg-shopping-cart nav-link" href="#"></a>
                </li>
            </ul>
        </div>
        </>
    );
}
