import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-start text-center md:text-left space-y-8 md:space-y-0">
        
        <div>
          <h2 className="text-2xl font-bold">BuildYourPC</h2>
          <nav className="mt-4">
            <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
              <li><Link to="/" className="hover:text-gray-400 transition-colors">Home</Link></li>
              <li><Link to="/build" className="hover:text-gray-400 transition-colors">Build</Link></li>
              <li><Link to="/prebuildpc" className="hover:text-gray-400 transition-colors">Prebuilt PCs</Link></li>
              <li><Link to="/accessories" className="hover:text-gray-400 transition-colors">Accessories</Link></li>
            </ul>
          </nav>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-7 h-7 hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-7 h-7 hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-7 h-7 hover:text-pink-500 transition-colors" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-7 h-7 hover:text-gray-300 transition-colors" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-gray-400 mt-2">support@buildyourpc.com</p>
          <p className="text-gray-400">123 PC Street, Tech City</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} BuildYourPC. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
