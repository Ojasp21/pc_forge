import React from 'react';
import Dropdown from './Dropdown'; // Import Dropdown component
import './Navlinks.css'; // Use your existing Navlinks.css

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
        { label: 'Custom', href: 'custom' },


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
                <Dropdown title="Components" items={componentsItems} />
                <Dropdown title="Pre-Made PCs" items={preMadePCsItems} />
                {/* <Dropdown title="Accessories" items={accessoriesItems} /> */}
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


// import './Navlinks.css'
// export default function Navlinks () {
//     return (
//         <div>
//         <ul class="nav justify-content-end">
//             <li class="nav-item">
//                 <a class="nav-link active" href="#">Components</a>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link" href="#">Pre-Made PCs</a>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link" href="#">Accessories</a>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link" href="#">Mr. PC</a>
//             </li>
//             <li class="nav-item">
//                 <a class="gg-shopping-cart nav-link" href="#"></a>
//             </li>
//         </ul>
//         </div>
//     )
// }