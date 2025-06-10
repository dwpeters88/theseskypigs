import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-text-dark text-gray-300 py-8 md:py-12 px-4 text-center">
      <div className="container mx-auto">
        <p className="mb-4">&copy; {new Date().getFullYear()} [SaaS Name]. All rights reserved.</p>
        <nav className="flex flex-wrap justify-center space-x-2 sm:space-x-4"> {/* Added flex-wrap and justify-center, reduced base space-x */}
          <a href="/about" className="hover:text-primary-blue transition-colors px-2 py-1">About</a>
          <a href="/contact" className="hover:text-primary-blue transition-colors px-2 py-1">Contact</a>
          <a href="/privacy" className="hover:text-primary-blue transition-colors px-2 py-1">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
