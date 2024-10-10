import React, { useState } from 'react';
import Modal from 'react-modal';
import { db, storage } from '../../firebaseConfig'; // Adjust the path as needed
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions
import { ref, uploadBytes } from 'firebase/storage'; // Import Storage functions

// Set the app element for accessibility
Modal.setAppElement('#root');

const Brochure: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [appreciationModalIsOpen, setAppreciationModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    qualification: '',
    experience: '',
    resume: null as File | null,
    socialMedia: '',
  });

  const handleOpenModal = () => {
    setModalIsOpen(true);
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
      resume: e.target.files?.[0] || null,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.resume) {
      const resumeRef = ref(storage, `resumes/${formData.resume.name}`);
      try {
        // Upload resume to Firebase Storage
        await uploadBytes(resumeRef, formData.resume);
        
        // Prepare Firestore data
        const formDataToFirestore = {
          name: formData.name,
          qualification: formData.qualification,
          experience: formData.experience,
          socialMedia: formData.socialMedia,
          resumeUrl: `resumes/${formData.resume.name}`, // You can also store the download URL later
        };

        // Add form data to Firestore
        await addDoc(collection(db, 'submissions'), formDataToFirestore);

        // Reset form data and open appreciation modal
        setModalIsOpen(false);
        setAppreciationModalIsOpen(true);
        setFormData({
          name: '',
          qualification: '',
          experience: '',
          resume: null,
          socialMedia: '',
        });
      } catch (error) {
        console.error('Error submitting form:', error);
      }
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
        <section className="bg-blue-100 shadow-inner rounded-lg p-6 md:p-8 my-12">
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

        {/* Get in Touch Section */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-600 mb-4">Get in Touch</h2>
          <p className="text-center text-gray-700 mb-6">Have any questions or want to discuss your project? Feel free to reach out!</p>
          <div className="flex justify-center">
            <button onClick={handleOpenModal} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Contact Us</button>
          </div>
        </section>
      </div>

      {/* Modal for Form Submission */}
      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal} className="bg-white rounded-lg p-6 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">Submit Your Information</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            type="text"
            name="qualification"
            placeholder="Your Qualification"
            value={formData.qualification}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            type="text"
            name="experience"
            placeholder="Your Experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            type="text"
            name="socialMedia"
            placeholder="LinkedIn/GitHub Profile Link"
            value={formData.socialMedia}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Submit</button>
          <button type="button" onClick={handleCloseModal} className="w-full bg-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-400">Cancel</button>
        </form>
      </Modal>

      {/* Appreciation Modal */}
      <Modal isOpen={appreciationModalIsOpen} onRequestClose={handleCloseAppreciationModal} className="bg-white rounded-lg p-6 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">Thank You!</h2>
        <p className="text-gray-700 mb-4">Your submission was successful! We appreciate your interest in our services.</p>
        <button onClick={handleCloseAppreciationModal} className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">Close</button>
      </Modal>
    </div>
  );
};

export default Brochure;
