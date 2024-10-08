import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="min-h-screen bg-white text-gray-700 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Our Services</h1>
        <ul className="space-y-6">
          <li>
            <h2 className="text-xl font-semibold text-blue-500">Portfolio Website Development</h2>
            <p className="text-gray-600">
              We design and develop custom portfolio websites that are fully responsive and optimized for all devices.
            </p>
          </li>
          <li>
            <h2 className="text-xl font-semibold text-blue-500">SEO Optimization</h2>
            <p className="text-gray-600">
              Our websites come with built-in SEO features to help you rank better on search engines and get noticed.
            </p>
          </li>
          <li>
            <h2 className="text-xl font-semibold text-blue-500">Maintenance & Support</h2>
            <p className="text-gray-600">
              We offer a full year of hosting, maintenance, and support to ensure your site stays up-to-date and secure.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
