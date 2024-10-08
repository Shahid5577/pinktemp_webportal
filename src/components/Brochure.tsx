import React, { useState } from 'react';
import Modal from 'react-modal';

// Set the app element for accessibility
Modal.setAppElement('#root');

const Brochure: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [appreciationModalIsOpen, setAppreciationModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    qualification: '',
    experience: '',
    resume: null as File | null, // Changed resume type to File | null
    socialMedia: '',
  });
  // Removed the `submitted` state if not needed, or keep it if you plan to use it
  // const [submitted, setSubmitted] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
    // Reset submission status when modal opens
    // setSubmitted(false);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleCloseAppreciationModal = () => {
    setAppreciationModalIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files?.[0] || null, // Uses optional chaining and defaults to null
    }));
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      // Type assertion to let TypeScript know that key is a valid key in formData
      formDataToSend.append(key, formData[key as keyof typeof formData] as string | File); // Append as appropriate
    }

    try {
      const response = await fetch('http://localhost:5000/api/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Submission successful:', data);
        // Optionally handle submitted state here
        setModalIsOpen(false); // Close form modal
        setAppreciationModalIsOpen(true); // Open appreciation modal
        // Reset form data
        setFormData({
          name: '',
          qualification: '',
          experience: '',
          resume: null,
          socialMedia: '',
        });
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <section className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">Professional Portfolio Website Offer</h1>
          <p className="text-lg text-gray-600">Crafted by <span className="font-semibold">Enershas Technologies</span></p>
        </section>

        {/* Why You Need a Portfolio */}
        <section className="bg-white shadow-md rounded-lg p-6 md:p-8 mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-500 mb-4 text-center">Why Do You Need a Portfolio Website?</h2>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            In today’s competitive world, having an <strong>online presence</strong> is essential. Whether you’re a student, freelancer, or job seeker, a portfolio website helps you stand out by showcasing your skills, achievements, and projects.
          </p>
          <p className="text-base md:text-lg text-gray-700">Let us build a <strong>stunning portfolio website</strong> that will elevate your professional profile and help you achieve your goals.</p>
        </section>

        {/* Service Plans */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-500 mb-8">Our Pricing Plans</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Basic Plan */}
            <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 border-t-4 border-blue-500">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Basic Plan</h3>
              <p className="text-lg text-blue-500 font-bold">₹2918</p>
              <p className="text-gray-600 mb-6">Includes Hosting & Maintenance</p>
              <ul className="text-gray-700 space-y-2">
                <li>Custom-designed one-page portfolio</li>
                <li>Responsive across all devices</li>
                <li>About Me, Projects, Skills, Contact Form</li>
                <li>LinkedIn and GitHub Integration</li>
                <li>1-year hosting and maintenance</li>
              </ul>
              <button onClick={handleOpenModal} className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">Get Started</button>
            </div>

            {/* Professional Plan */}
            <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 border-t-4 border-green-500">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Professional Plan</h3>
              <p className="text-lg text-green-500 font-bold">₹3918</p>
              <p className="text-gray-600 mb-6">Best for freelancers & professionals</p>
              <ul className="text-gray-700 space-y-2">
                <li>Custom multi-page portfolio</li>
                <li>Responsive design + SEO optimization</li>
                <li>Blog integration & content management</li>
                <li>Detailed projects section with case studies</li>
                <li>1-year hosting and advanced maintenance</li>
              </ul>
              <button onClick={handleOpenModal} className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg shadow-lg hover:bg-green-600 transition duration-300">Get Started</button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 border-t-4 border-red-500">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Premium Plan</h3>
              <p className="text-lg text-red-500 font-bold">₹5918</p>
              <p className="text-gray-600 mb-6">Perfect for agencies or personal brands</p>
              <ul className="text-gray-700 space-y-2">
                <li>Custom design with advanced features</li>
                <li>Integration with external APIs</li>
                <li>Full e-commerce capabilities (if needed)</li>
                <li>Advanced SEO, analytics, and tracking</li>
                <li>1-year hosting, priority maintenance, and updates</li>
              </ul>
              <button onClick={handleOpenModal} className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg shadow-lg hover:bg-red-600 transition duration-300">Get Started</button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-blue-50 shadow-inner rounded-lg p-6 md:p-8 my-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-600 mb-8">Why Choose Us?</h2>
          <ul className="text-gray-700 space-y-4 text-base md:text-lg">
            <li><strong>Affordable Pricing:</strong> We offer high-quality websites at student-friendly prices.</li>
            <li><strong>Fast Turnaround:</strong> Get your site live in as little as 7 days.</li>
            <li><strong>Experienced Team:</strong> Our team specializes in building professional portfolio websites for students, freelancers, and professionals.</li>
            <li><strong>Ongoing Support:</strong> We provide a full year of hosting and maintenance, ensuring your site stays up-to-date and secure.</li>
          </ul>
        </section>

        {/* How It Works */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-600 mb-8">How It Works</h2>
          <div className="bg-blue-50 shadow-md rounded-lg p-6 space-y-6 text-gray-700 text-base md:text-lg">
            <div className="flex items-start space-x-4">
              <span className="bg-blue-500 text-white font-bold rounded-full h-8 w-8 flex items-center justify-center">1</span>
              <p><strong>Step 1: Choose a Plan</strong> - Select the package that best fits your needs.</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="bg-blue-500 text-white font-bold rounded-full h-8 w-8 flex items-center justify-center">2</span>
              <p><strong>Step 2: Fill the Form</strong> - Provide us with your details and requirements.</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="bg-blue-500 text-white font-bold rounded-full h-8 w-8 flex items-center justify-center">3</span>
              <p><strong>Step 3: We Build!</strong> - Our team will start working on your portfolio.</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="bg-blue-500 text-white font-bold rounded-full h-8 w-8 flex items-center justify-center">4</span>
              <p><strong>Step 4: Launch</strong> - Review and launch your professional portfolio website!</p>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-500 mb-8">Frequently Asked Questions</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Q: How long does it take to build my portfolio?</h3>
            <p className="text-gray-700 mb-6">A: We aim to deliver your website within 7 days after receiving your details.</p>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Q: What if I want to make changes later?</h3>
            <p className="text-gray-700 mb-6">A: We offer maintenance services for one year to ensure your website stays up to date.</p>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Q: Can I see examples of your work?</h3>
            <p className="text-gray-700">A: Absolutely! We can provide you with examples upon request.</p>
          </div>
        </section>
        <section className="text-center my-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-500 mb-4">Get in Touch with Us!</h2>
          <p className="text-gray-700 mb-6">Ready to create your professional portfolio? Let’s get started today!</p>
          <button onClick={handleOpenModal} className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Contact Us
          </button>
        </section>
      </div>

      {/* Modal for Form Submission */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Portfolio Submission Form"
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white rounded-lg shadow-lg p-6 w-96">
          <h2 className="text-xl font-semibold text-center text-blue-600 mb-4">Submit Your Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 font-medium" htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium" htmlFor="qualification">Qualification:</label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium" htmlFor="experience">Experience:</label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium" htmlFor="resume">Resume:</label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium" htmlFor="socialMedia">Social Media Links:</label>
              <input
                type="text"
                id="socialMedia"
                name="socialMedia"
                value={formData.socialMedia}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </Modal>

      {/* Appreciation Modal */}
      <Modal
        isOpen={appreciationModalIsOpen}
        onRequestClose={handleCloseAppreciationModal}
        contentLabel="Thank You"
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Thank You!</h2>
          <p className="text-gray-700">We appreciate your submission and will get back to you shortly.</p>
          <button
            onClick={handleCloseAppreciationModal}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Brochure;
