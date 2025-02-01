import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HomePageFooter = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const QuickLinks = () => (
    <div className="flex flex-col gap-2">
      <h3 className="text-white font-semibold mb-2">Quick Links</h3>
      <a href="/" className="text-gray-400 hover:text-white transition">Home</a>
      <a href="/build" className="text-gray-400 hover:text-white transition">Build a PC</a>
      <Link to="/" className="text-gray-400 hover:text-white transition">Pre-Built PCs</Link>
      <a href="mailto:support@pc_forge.com?subject=Support Request&body=Hello, I need help with..." className="text-gray-400 hover:text-white transition">Contact</a>
    </div>
  );

  const Categories = () => (
    <div className="flex flex-col gap-2">
      <h3 className="text-white font-semibold mb-2">Categories</h3>
      <a href="/build/CPU" className="text-gray-400 hover:text-white transition">Processors</a>
      <a href="/build/GPU" className="text-gray-400 hover:text-white transition">Graphics Cards</a>
      <a href="/build/RAM" className="text-gray-400 hover:text-white transition">RAM</a>
      <a href="/build/Storage" className="text-gray-400 hover:text-white transition">Storage</a>
      <a href="/accessories" className="text-gray-400 hover:text-white transition">Accessories</a>
    </div>
  );

  const Support = () => (
    <div className="flex flex-col gap-2">
      <h3 className="text-white font-semibold mb-2">Support</h3>
      <Link to="/faqs" className="text-gray-400 hover:text-white transition">FAQs</Link>
      <a href="/faqs" className="text-gray-400 hover:text-white transition">Buying Guide</a>
      <a href="/faqs" className="text-gray-400 hover:text-white transition">Compatibility Help</a>
    </div>
  );

  const SocialLinks = () => (
    <div className="flex gap-6 text-2xl">
      <a href="#" className="text-gray-400 hover:text-blue-400 transition-all transform hover:scale-110">
        <FaFacebook />
      </a>
      <a href="#" className="text-gray-400 hover:text-blue-300 transition-all transform hover:scale-110">
        <FaTwitter />
      </a>
      <a href="#" className="text-gray-400 hover:text-pink-500 transition-all transform hover:scale-110">
        <FaInstagram />
      </a>
      <a href="#" className="text-gray-400 hover:text-purple-500 transition-all transform hover:scale-110">
        <FaDiscord />
      </a>
    </div>
  );

  return (
    <footer className={`w-full ${isHomePage ? 'bg-gray-900 py-16' : 'bg-gray-900 py-8'} text-white mt-auto mb-0`}>
      {isHomePage ? (
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-pulse mb-4">
              Build Your Ultimate PC Now!
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Power, Performance & Precision – Tailored for You.
            </p>
            <a 
              href="/build" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl"
            >
              Start Building
            </a>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <QuickLinks />
            <Categories />
            <Support />
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold mb-2">Stay Connected</h3>
              <p className="text-gray-400 italic mb-4">"Frames Win Games – Choose Your Hardware Wisely!"</p>
              <SocialLinks />
            </div>
          </motion.div>
          
          <motion.div
            className="pt-8 border-t border-gray-800 text-center text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <div className="flex justify-center gap-6 text-sm mb-4">
              <a href="#" className="hover:text-white transition">About</a>
              <a href="#" className="hover:text-white transition">Support</a>
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms & Conditions</a>
            </div>
            <p className="text-sm">© 2025 PC Forge. All rights reserved.</p>
          </motion.div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <QuickLinks />
            <Categories />
            <Support />
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-semibold mb-2">Stay Connected</h3>
              <SocialLinks />
            </div>
          </motion.div>
          <motion.div
            className="pt-4 border-t border-gray-800 flex justify-between items-center text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <span>© 2025 PC Forge</span>
            <div className="flex gap-4">
              <a href="mailto:support@pc_forge.com?subject=Support Request&body=Hello, I need help with..." className="hover:text-white transition">Contact</a>
              <a href="#" className="hover:text-white transition">Terms</a>
            </div>
          </motion.div>
        </div>
      )}
    </footer>
  );
};

export default HomePageFooter;
