import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sky-900 text-white py-2">
      <div className="container mx-auto text-center">
        {/* Copyright */}
        <div className="text-center text-gray-200">
          <p>© {new Date().getFullYear()} Enershas Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
