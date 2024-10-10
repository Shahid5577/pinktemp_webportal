import React from 'react';

const About: React.FC = () => {
  return (
    <section className="min-h-screen bg-white text-gray-700 py-10">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">About Us</h1>
        
        {/* Introduction Section */}
        <div className="text-center mb-10">
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Enershas Technologies is a leading company specializing in building professional portfolio websites for students, freelancers, and professionals. 
            Our mission is to help individuals stand out in today's competitive world by creating stunning websites that showcase their skills, achievements, and projects. 
            With a dedicated team and affordable pricing, we strive to provide top-notch services that enable our clients to grow their online presence.
          </p>
        </div>

        {/* Our Mission, Vision, and Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="text-xl font-bold text-blue-500 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              At Enershas Technologies, our mission is to empower individuals and businesses by providing them with beautifully crafted websites that reflect their true potential. 
              We believe in offering a platform where everyone can showcase their unique talents and services to the world.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-blue-500 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              We envision a world where everyone can have an impactful online presence. 
              Whether you’re a student looking to present your academic work or a freelancer building your personal brand, 
              we aim to be the bridge that connects you to your audience.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-blue-500 mb-4">Our Values</h2>
            <p className="text-gray-600">
              Integrity, quality, and innovation are the pillars that define Enershas Technologies. 
              We strive to maintain transparency with our clients and constantly innovate to provide the best solutions.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-blue-500 mb-4">Our Team</h2>
            <p className="text-gray-600">
              Our talented team of developers, designers, and project managers works together to bring your vision to life. 
              With years of experience in the web development industry, we are passionate about delivering outstanding results.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-100 p-8 rounded-lg mb-10">
          <h2 className="text-2xl font-bold text-blue-500 mb-6 text-center">Why Choose Enershas Technologies?</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-4">
            <li>
              <strong>Custom Solutions:</strong> We build websites tailored to your specific needs, ensuring that your portfolio stands out.
            </li>
            <li>
              <strong>Affordable Pricing:</strong> Our plans are designed to be budget-friendly while still delivering premium quality.
            </li>
            <li>
              <strong>Responsive Design:</strong> All our websites are fully responsive, meaning they look great on any device, from desktops to smartphones.
            </li>
            <li>
              <strong>SEO Optimization:</strong> We incorporate SEO best practices to help you rank higher on search engines and increase your visibility.
            </li>
            <li>
              <strong>Dedicated Support:</strong> We offer a full year of maintenance and support, so you can focus on your career while we take care of your website.
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Build Your Online Presence?</h2>
          <p className="text-gray-600 mb-6">
            Contact us today to start your journey with a professionally designed portfolio that sets you apart!
          </p>
          <a href="/contact" className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
