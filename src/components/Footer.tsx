import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sky-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Links Section */}
        <div className="flex space-x-4">
          <a href="/privacy-policy" className="text-gray-200 hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="/terms" className="text-gray-200 hover:text-white">Terms</a>
        </div>
        {/* Copyright */}
        <div className="text-center text-gray-200 flex-grow">
          <p>© {new Date().getFullYear()} Enershas Technologies. All rights reserved.</p>
        </div>
        {/* Help Link */}
        <div>
          <a href="/help" className="text-gray-200 hover:text-white">Help</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
