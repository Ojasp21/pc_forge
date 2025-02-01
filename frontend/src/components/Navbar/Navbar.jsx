import Navlinks from "./Navlinks";
import Logo from "./Logo";
import './Navbar.css';
import {motion, useScroll} from "motion/react"

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  return (
    <>
    
      <nav className="navbar font-honk ">
        <Logo />
        <Navlinks />
      </nav>
      <motion.div
    style={{ scaleX: scrollYProgress }}
    className="bg-blue-900 z-50 origin-left w-full h-2 fixed top-0 left-0 transform progress"
  ></motion.div>
      </>
    
  );
}
