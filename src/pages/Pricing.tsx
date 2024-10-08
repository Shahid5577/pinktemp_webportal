import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section className="min-h-screen bg-white text-gray-700 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Pricing Plans</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Plan</h3>
            <p className="text-lg text-blue-500 font-bold">₹2000</p>
            <p className="text-gray-600 mb-4">Includes Hosting & Maintenance</p>
            <ul className="text-gray-700 space-y-2">
              <li>Custom-designed one-page portfolio</li>
              <li>Responsive across all devices</li>
              <li>1-year hosting and maintenance</li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Professional Plan</h3>
            <p className="text-lg text-green-500 font-bold">₹3500</p>
            <p className="text-gray-600 mb-4">Best for freelancers & professionals</p>
            <ul className="text-gray-700 space-y-2">
              <li>Custom multi-page portfolio</li>
              <li>Responsive design + SEO optimization</li>
              <li>1-year hosting and advanced maintenance</li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-red-500">
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
      </div>
    </section>
  );
};

export default Pricing;
