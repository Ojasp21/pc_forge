import Navlinks from "./Navlinks"
import './Navbar.css'
import Logo from "./Logo";
import UpperNavlinks from "./UpperNavlinks";
export default function Navbar() {
    return (
        <>
        <nav className="navbar">
        <UpperNavlinks/>
        </nav>
        <nav className="navbar">
            <Logo />
            <Navlinks />
        </nav>
        </>
    );
}