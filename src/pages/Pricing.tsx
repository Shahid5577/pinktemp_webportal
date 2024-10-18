import React from 'react';
import Paper from '../assets/paper.png';
import Rocket from '../assets/Rocket.png';
import Rock from '../assets/Rock.png';

const Pricing: React.FC = () => {
  return (
    <section className="min-h-screen bg-white text-gray-700 py-10">
      <div className="container mx-auto px-4">
        {/* OUR SERVICES Section */}
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">OUR SERVICES</h1>
        <p className="text-center text-gray-600 mb-6 text-lg">Where ideas become reality</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {/* Service 1: UX/UI Design */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">UX/UI Design</h3>
            <p className="text-sm">Amplify user engagement with intuitive designs.</p>
          </div>
          {/* Service 2: Website Development */}
          <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Website Development</h3>
            <p className="text-sm">Future-proof web solutions with exceptional experiences.</p>
          </div>
          {/* Service 3: DevOps */}
          <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">DevOps</h3>
            <p className="text-sm">Streamline operations with secure deployments.</p>
          </div>
          {/* Service 4: IT Consultancy */}
          <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">IT Consultancy</h3>
            <p className="text-sm">Align technology strategy with your business goals.</p>
          </div>
          {/* Service 5: Marketing */}
          <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Marketing</h3>
            <p className="text-sm">Increase visibility and generate leads for your business.</p>
          </div>
          {/* Service 6: Hire Developers */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Hire Developers</h3>
            <p className="text-sm">Build your own dedicated team for projects.</p>
          </div>
          {/* Service 7: QA Services */}
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">QA Services</h3>
            <p className="text-sm">Prevent defects and ensure confidence.</p>
          </div>
          {/* Service 8: AI/ML */}
          <div className="bg-gradient-to-r from-gray-500 to-black text-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">AI/ML</h3>
            <p className="text-sm">Unlock your business potential with AI.</p>
          </div>
          {/* Service 9: IoT */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">IoT</h3>
            <p className="text-sm">Deliver insights that enhance efficiencies.</p>
          </div>
        </div>

        {/* Pricing Section */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Pricing Plans</h1>
        <p className="text-center text-gray-600 mb-8 text-lg">
          Choose the perfect plan for your needs. Our pricing is transparent and designed to fit various budgets.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Basic Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-500 transition-transform transform hover:scale-105">
            <img
              src={Paper}
              alt="Basic Plan"
              className="w-full h-32 object-cover rounded-md mb-4 border-2 border-zinc-200"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Plan</h3>
            <p className="text-3xl text-blue-500 font-bold bg-yellow-200 py-2 px-4 rounded-lg text-center">
              ₹2918
            </p>
            <p className="text-gray-600 mb-4">Includes Hosting & Maintenance</p>
            <ul className="text-gray-700 space-y-2">
              <li>Custom-designed one-page portfolio</li>
              <li>Responsive across all devices</li>
              <li>1-year hosting and maintenance</li>
            </ul>
          </div>
          {/* Professional Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-green-500 transition-transform transform hover:scale-105">
            <img
              src={Rocket}
              alt="Professional Plan"
              className="w-full h-32 object-cover rounded-md mb-4 border-2 border-zinc-200"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Professional Plan</h3>
            <p className="text-3xl text-green-500 font-bold bg-yellow-200 py-2 px-4 rounded-lg text-center">
              ₹3918
            </p>
            <p className="text-gray-600 mb-4">Best for freelancers & professionals</p>
            <ul className="text-gray-700 space-y-2">
              <li>Custom multi-page portfolio</li>
              <li>Responsive design + SEO optimization</li>
              <li>1-year hosting and advanced maintenance</li>
            </ul>
          </div>
          {/* Premium Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-red-500 transition-transform transform hover:scale-105">
            <img
              src={Rock}
              alt="Premium Plan"
              className="w-full h-32 object-cover rounded-md mb-4 border-2 border-zinc-200"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Premium Plan</h3>
            <p className="text-3xl text-red-500 font-bold bg-yellow-200 py-2 px-4 rounded-lg text-center">
              ₹5918
            </p>
            <p className="text-gray-600 mb-4">Perfect for agencies or personal brands</p>
            <ul className="text-gray-700 space-y-2">
              <li>Custom design with advanced features</li>
              <li>Full e-commerce capabilities</li>
              <li>1-year hosting and priority maintenance</li>
            </ul>
          </div>
        </div>

        {/* Email Section */}
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            For inquiries, please reach out via email:
          </p>
          <span className="relative inline-block bg-gradient-to-r from-blue-200 to-blue-500 border-2 border-blue-700 rounded-full py-3 px-5 text-white font-bold text-lg ml-2 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            <a href="mailto:enershas@gmail.com" className="text-lg">enershas@gmail.com</a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
