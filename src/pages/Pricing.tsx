import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '../assets/paper.png';
import Rocket from '../assets/Rocket.png';
import Rock from '../assets/Rock.png';

const Pricing: React.FC = () => {
  return (
    <section className="min-h-screen bg-white text-gray-700 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Pricing Plans</h1>
        <p className="text-center text-gray-600 mb-8">
          Choose the perfect plan for your needs. Our pricing is transparent and designed to fit various budgets.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Basic Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-500">
            <img
              src={Paper} // Placeholder image for Basic Plan
              alt="Basic Plan"
              className="w-full h-32 object-cover rounded-md mb-4 border-2 border-zinc-200" // Added border-sky-500 class
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Plan</h3>
            <p className="text-lg text-blue-500 font-bold">₹2000</p>
            <p className="text-gray-600 mb-4">Includes Hosting & Maintenance</p>
            <ul className="text-gray-700 space-y-2">
              <li>Custom-designed one-page portfolio</li>
              <li>Responsive across all devices</li>
              <li>1-year hosting and maintenance</li>
            </ul>
          </div>
          {/* Professional Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-green-500">
            <img
              src={Rocket} // Placeholder image for Professional Plan
              alt="Professional Plan"
              className="w-full h-32 object-cover rounded-md mb-4 border-2 border-zinc-200" // Added border-sky-500 class
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Professional Plan</h3>
            <p className="text-lg text-green-500 font-bold">₹3500</p>
            <p className="text-gray-600 mb-4">Best for freelancers & professionals</p>
            <ul className="text-gray-700 space-y-2">
              <li>Custom multi-page portfolio</li>
              <li>Responsive design + SEO optimization</li>
              <li>1-year hosting and advanced maintenance</li>
            </ul>
          </div>
          {/* Premium Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-red-500">
            <img
              src={Rock} // Placeholder image for Premium Plan
              alt="Premium Plan"
              className="w-full h-32 object-cover rounded-md mb-4 border-2 border-zinc-200" // Added border-sky-500 class
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Premium Plan</h3>
            <p className="text-lg text-red-500 font-bold">₹5000</p>
            <p className="text-gray-600 mb-4">Perfect for agencies or personal brands</p>
            <ul className="text-gray-700 space-y-2">
              <li>Custom design with advanced features</li>
              <li>Full e-commerce capabilities</li>
              <li>1-year hosting and priority maintenance</li>
            </ul>
          </div>
        </div>
        {/* Call to Action Section */}
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-4">
            Contact us today to discuss your project, and let’s find the right plan for you!
          </p>
          <Link to="/contact">
            <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
