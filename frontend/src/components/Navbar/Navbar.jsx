import Navlinks from "./Navlinks";
import Logo from "./Logo";
import UpperNavlinks from "./UpperNavlinks";
import './Navbar.css';

export default function Navbar() {
  return (
    <>

      <nav className="navbar">
        <Logo />
        <Navlinks />
      </nav>
    </>
  );
}
