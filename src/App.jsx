import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// Removed react-icons/fa import as it's causing resolution issues in the environment.
// Icons will be replaced with inline SVGs or appropriate text/emoji.

// LogoHeader Component: Displays the company logo and name with an animation, now includes navigation.
function LogoHeader({ setCurrentPage }) { // Accept setCurrentPage prop
  return (
    <div className="bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 py-4 shadow-md text-center"> {/* Changed gradient to blue-indigo-purple */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between px-4 sm:px-8">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <img
            src="/infinity_logo.png" // Dummy logo image
            alt="Company Logo"
            //className="mx-auto w-48 h-48 border-4 border-indigo-300 rounded-xl shadow-lg"
            className="mx-auto w-45 h-24" // Smaller size for inline display
            //animate={{ rotate: [0, 360], y: [0, -5, 0] }} // Animation applied to the logo
            //transition={{ duration: 2, repeat: Infinity }}
          
          />
          {/*<h1 className="text-white text-3xl font-extrabold">INFINITY INFOTECH</h1>*/}
        </div>

        {/* Navigation Links - Adjusted font size here */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
          <button className="hover:text-gray-300 font-semibold transition-colors text-white" onClick={() => setCurrentPage('home')}>Home</button>
          <button className="hover:text-gray-300 font-semibold transition-colors text-white" onClick={() => setCurrentPage('about')}>About Us</button>
          <button className="hover:text-gray-300 font-semibold transition-colors text-white" onClick={() => setCurrentPage('services')}>Our Services</button>
          <button className="hover:text-gray-300 font-semibold transition-colors text-white" onClick={() => setCurrentPage('gallery')}>Gallery</button> {/* Added Gallery button */}
          <button className="hover:text-gray-300 font-semibold transition-colors text-white" onClick={() => setCurrentPage('drop-message')}>Drop Message</button>
          <button className="hover:text-gray-300 font-semibold transition-colors text-white" onClick={() => setCurrentPage('contact')}>Contact</button>
        </nav>
      </div>
    </div>
  );
}

// Home Component: The landing page with a welcome message and an image.
function Home() {
  return (
    <motion.div
      className="font-display p-16 text-center bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 text-white min-h-[80vh] flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 animate-pulse drop-shadow-xl">Welcome to Infinity Infotech, Saharsa. A Digital Service Provider</h1>
      <p className="text-lg sm:text-xl md:text-2xl max-w-3xl font-light">Empowering businesses through innovative technology and digital transformation.</p>
      <motion.img
        src="/infinity_services1.png" // Placeholder image
        alt="Digital Transformation"
        className="mt-10 w-48 sm:w-64 rounded-3xl shadow-2xl"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
    </motion.div>
  );
}

// About Component: Provides information about the company's mission and services.
function About() {
  return (
    <motion.div
      className="font-display p-8 sm:p-16 text-left bg-gradient-to-br from-white to-purple-100 min-h-[80vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-purple-700 text-center drop-shadow-md">About Us</h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-small mb-4">
        At Infinity Infotech, we are your one-stop destination for comprehensive digital, financial, and citizen-centric services. Founded with the mission to make technology and government services easily accessible and efficient for all, we bring together innovation, expertise, and trust under one roof.
      </p>
      <p className="text-base sm:text-lg md:text-xl text-purple-800 max-w-3xl mx-auto leading-relaxed font-extrabold font-small mb-4">
        We specialize in:
      </p>

      {/* List of specialized services */}
      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-small mb-2">
        🔹 <span className="font-bold">Financial Consulting & Insurance:</span> From guiding you in stock market investments and mutual funds to securing your future through health, life, motor, and accidental insurance plans, we ensure your financial goals are achieved with expert advice.
      </p>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-small mb-2">
        🔹 <span className="font-bold">Complete Software Solutions:</span> Be it laptop/mobile servicing, online billing software, antivirus installations, or genuine Microsoft software licensing, our solutions are tailored to keep your devices and business running smoothly.
      </p>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-small mb-2">
        🔹 <span className="font-bold">Digital Security & Internet Services:</span> With state-of-the-art CCTV installation, a full-fledged cyber café, and internet-based services, we safeguard your data and support your everyday digital needs.
      </p>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-small mb-2">
        🔹 <span className="font-bold">Government & Legal Documentation:</span> We assist with GST, MSME, FSSAI registrations, ITR filing, NPS, PAN, passport services, PF/EPF/PPF/KYC, voter ID, Ayushman Card, marriage/birth/life/income/caste/residence certificates, and e-stamp issuance.
      </p>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-small mb-2">
        🔹 <span className="font-bold">Digital Business Promotion:</span> Our Business Ad Tech services include social media marketing, IVR, bulk SMS, and even newspaper ads to help your brand grow with visibility.
      </p>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-small mb-2">
        🔹 <span className="font-bold">Travel & Utility Services:</span> Whether you need to book a train or flight, pay bills, transfer money, or send couriers, we offer fast and reliable solutions.
      </p>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-small mb-2">
        🔹 <span className="font-bold">Office & Academic Services:</span> From printing, scanning, lamination, spiral binding, to online form filling, English/Hindi typing, and data entry for school, college, or bank projects, we provide accurate and timely assistance.
      </p>
      <p className="text-base sm:text-lg md:text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed font-small mt-4">
        <span className="font-bold">At Infinity Infotech, we are committed to serving individuals, professionals, and businesses with integrity, convenience, and a customer-first approach. Your trust is our priority, and your satisfaction is our goal.
        We are a dynamic team of developers, designers, and strategists committed to transforming businesses through innovative tech solutions. With a blend of creativity and engineering, we design systems that are not only beautiful but also powerful.
        </span>
      </p>
    </motion.div>
  );
}

// Services Component: Lists the various services offered by the company.
function Services() {
  const services = [
    {
      // Replaced FaChartLine with inline SVG
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8L11 20m-9-1h13V4H2v15z" />
        </svg>
      ),
      title: 'Financial Consultants & Advisor',
      description: 'Keep growing your money to achieve your financial goals.',
      subServices: ['Mutual Fund', 'Share Market', 'Insurance (Life,Health,Accidental,Motor)']
    },
    {
      // Replaced FaLaptopCode with inline SVG
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h4c0 1.105.895 2 2 2h4c1.105 0 2-.895 2-2h4l-1-1-1-3m-3-13H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2z" />
        </svg>
      ),
      title: 'Software Solutions',
      description: 'Consult for all type of software and IT solutions.',
      subServices: ['Windows Operating System', 'Microsoft Office Licensing', 'Antivirus Solutions', 'Business Ad Tech (Social Media, IVR, SMS, Newspaper)']
    },
    {
      // Replaced FaLaptopCode with inline SVG
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h4c0 1.105.895 2 2 2h4c1.105 0 2-.895 2-2h4l-1-1-1-3m-3-13H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2z" />
        </svg>
      ),
      title: 'Data Entry & Documentation',
      description: 'We provide data entry work for all official like Govt offices, School, Colleges, Banks, etc.',
      subServices: ['Govt Offices', 'Schools', 'Colleges', 'Banks', 'Other Private Sector Companies']
    },
    {
      // Replaced FaLaptopCode with inline SVG
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h4c0 1.105.895 2 2 2h4c1.105 0 2-.895 2-2h4l-1-1-1-3m-3-13H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2z" />
        </svg>
      ),
      title: 'General Online Services',
      description: 'We provide general online services.',
      subServices: ['PAN Card (New, Reissue, Correction)', 'Passport Apply (New, Renewal, Tatkal, Urgent)', 'Online Form Filling (Any competitive examination)', 'Certificates (Marriage, Birth, Life, Income, Caste, Residential, NCL)', 'Money Transfer', 'Travel Ticket (Train/ Flight)', 'ID Card (Voter ID, Aadhar, Ayushman)', 'Printout/Scan/Photocopy', 'Computer Typing (English/Hindi)', 'E-Stamp']
    },
    {
      // Replaced FaLaptopCode with inline SVG
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h4c0 1.105.895 2 2 2h4c1.105 0 2-.895 2-2h4l-1-1-1-3m-3-13H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2z" />
        </svg>
      ),
      title: 'Training & Internship',
      description: 'We provide training and internship to college students in software technology.',
      subServices: ['Software Development', 'Web Technologies', 'Digital Marketing', 'Data Science']
    },
    {
      // Replaced FaCode with inline SVG
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Web Development',
      description: 'Fast, responsive, and secure websites tailored to your business goals.',
      subServices: ['Frontend (React, Vue)', 'Backend (Node.js, Python)', 'SEO Optimization']
    },
    {
      // Replaced FaCloud with inline SVG
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 005-5c0-1.49-.446-2.898-1.226-4.062M12 17.25V21m0-3.75h.008M12 17.25c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z" />
        </svg>
      ),
      title: 'Cloud Integration',
      description: 'Connect and scale infrastructure with modern cloud-native architecture.',
      subServices: ['AWS', 'Azure', 'GCP']
    },
    {
      // Replaced FaCogs with inline SVG
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'DevOps Consulting',
      description: 'Streamline CI/CD, infrastructure automation, and monitoring practices.',
      subServices: ['Docker & Kubernetes', 'Terraform & IaC', 'Monitoring (Grafana, ELK)']
    }
  ];

  return (
    <motion.div
      className="font-display p-8 sm:p-16 text-center bg-gradient-to-br from-purple-50 to-indigo-100 min-h-[80vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 text-indigo-800">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          // Added group-hover:z-[60] to ensure the hovered card creates a higher stacking context
          <div key={index} className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 hover:scale-105 transition-transform group relative group-hover:z-[60]">
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-indigo-700">{service.title}</h3>
            <p className="text-base sm:text-lg text-gray-600 font-medium">{service.description}</p>
            {/* Sub-services dropdown on hover - positioned below the card, but on top of other elements */}
            {/* Increased z-index to z-[61] to be higher than the parent's z-index on hover */}
            <ul className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white border border-indigo-200 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[61] w-56 sm:w-64 py-3">
              {service.subServices.map((sub, idx) => (
                <li key={idx} className="text-gray-700 px-4 py-2 hover:bg-indigo-50 text-sm font-medium text-left">{sub}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// Gallery Component: Displays images and rewards/achievements.
function Gallery() {
  const images = [
    "https://placehold.co/400x300/FF5733/FFFFFF?text=Image+1",
    "https://placehold.co/400x300/33FF57/FFFFFF?text=Image+2",
    "https://placehold.co/400x300/3357FF/FFFFFF?text=Image+3",
    "https://placehold.co/400x300/FF33FF/FFFFFF?text=Image+4",
    "https://placehold.co/400x300/33FFFF/FFFFFF?text=Image+5",
    "https://placehold.co/400x300/FFBD33/FFFFFF?text=Image+6",
  ];

  const rewards = [
    "Award for Best Digital Service Provider 2023",
    "Excellence in Customer Satisfaction (2022)",
    "Top Innovator in Software Solutions (2021)",
    "Community Impact Award (2020)",
  ];

  return (
    <motion.div
      className="font-display p-8 sm:p-16 text-center bg-gradient-to-br from-gray-50 to-blue-50 min-h-[80vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 text-blue-700">Our Gallery & Achievements</h2>

      <section className="mb-12">
        <h3 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-6">Our Work & Moments</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-48 object-cover" />
              <p className="p-4 text-gray-700 text-md">A glimpse of our journey.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-6">Our Rewards & Recognitions</h3>
        <ul className="list-disc list-inside text-left max-w-2xl mx-auto text-lg text-gray-700 space-y-3">
          {rewards.map((reward, index) => (
            <motion.li
              key={index}
              className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-3"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-yellow-500 text-2xl">🏆</span> {/* Trophy emoji as icon */}
              <span>{reward}</span>
            </motion.li>
          ))}
        </ul>
      </section>
    </motion.div>
  );
}


// DropMessage Component: A form for users to send messages.
function DropMessage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending message...');
    try {
      // Basic validation
      if (!name || !email || !phone || !message) {
        setStatus('Please fill in all fields.');
        return;
      }

      // Placeholder for API call - replace with actual backend endpoint
      const res = await fetch('https://script.google.com/macros/s/AKfycbySU2qYQ0dQYdqd2IsoADByUsSG_K3IdYrW57OMBpV_jKUposTFLTZQF0pqP3g3SxVoBw/exec', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ name, email, phone, message }),
         });
       const data = await res.json();
       if (data.success) {
         setStatus('Message sent successfully!');
         setName('');
         setEmail('');
         setPhone('');
         setMessage('');
       } else {
         setStatus('Failed to send message.');
       }

      // Simulate API call success
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');

    } catch (err) {
      console.error("Error sending message:", err);
      setStatus('Error sending message.');
    }
  };

  return (
    <motion.div
      className="font-display p-8 sm:p-16 bg-gradient-to-br from-white to-indigo-50 min-h-[80vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-indigo-700">Drop a Message</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-xl mx-auto">
        <input
          type="text"
          className="p-3 sm:p-5 border border-gray-300 rounded-2xl shadow-md focus:outline-none focus:ring-4 focus:ring-purple-400 text-base sm:text-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          className="p-3 sm:p-5 border border-gray-300 rounded-2xl shadow-md focus:outline-none focus:ring-4 focus:ring-purple-400 text-base sm:text-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
        />
        <input
          type="tel" // Use type="tel" for phone numbers
          className="p-3 sm:p-5 border border-gray-300 rounded-2xl shadow-md focus:outline-none focus:ring-4 focus:ring-purple-400 text-base sm:text-lg"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Your Phone Number"
          required
        />
        <textarea
          className="p-3 sm:p-5 border border-gray-300 rounded-2xl shadow-md focus:outline-none focus:ring-4 focus:ring-purple-400 text-base sm:text-lg"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message..."
          required
        ></textarea>
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-2xl hover:opacity-90 shadow-lg text-lg sm:text-xl font-semibold"
        >
          Send Message
        </button>
        {status && <p className="text-center text-base sm:text-lg text-green-700 font-semibold mt-4">{status}</p>}
      </form>
    </motion.div>
  );
}

// Contact Component: Provides contact information and feedback options.
function Contact() {
  const [likes, setLikes] = useState(0);
  const [stars, setStars] = useState(0);

  return (
    <motion.div
      className="font-display p-8 sm:p-16 text-center bg-gradient-to-br from-white to-blue-50 min-h-[80vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-blue-700">Contact Us</h2>
      <p className="text-base sm:text-lg text-gray-700 mb-4">We’d love to hear from you. Reach out using the information below:</p>
      <div className="text-base sm:text-md text-gray-800 mb-6">
        📧 Email: <a href="mailto:digitalsolution@gmail.com" className="text-blue-600 underline">digitalsolution@gmail.com</a><br />
        📞 Phone: <span className="text-blue-600">+91-95550 11695</span>
      </div>
      <div className="my-6">
        <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-700 mb-4">QR Code for Payment</h3>
        <img
          //src="https://placehold.co/192x192/indigo/white?text=QR+Code" // Placeholder image for QR code
          src="/payment-qr-code.png"
          alt="QR Code"
          className="mx-auto w-32 h-32 sm:w-48 sm:h-48 border-4 border-indigo-300 rounded-xl shadow-lg"
        />
        <p className="mt-2 text-sm text-gray-600">Scan the QR to make a payment</p>
      </div>
      <div className="my-10">
        <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-700 mb-4">Feedback</h3>
        <div className="flex justify-center gap-6 sm:gap-8 text-3xl sm:text-4xl">
          <button onClick={() => setLikes(likes + 1)} className="text-green-600 hover:scale-110 transition" title="Like">
            {/* Replaced FaThumbsUp with inline SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21H3v-3.750L7.75 10.5h4.499zm0 0l1.912-1.912A2 2 0 0118 7.058V5a2 2 0 00-2-2h-3.243c-.287.11-.564.24-.828.396l-7.212 4.327m0 0V11m0 0v11m0 0v-4.75" />
            </svg>
            <p className="text-sm sm:text-base font-medium text-gray-800">{likes} Likes</p>
          </button>
          <button onClick={() => setStars(stars + 1)} className="text-yellow-500 hover:scale-110 transition" title="Star">
            {/* Replaced FaStar with inline SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0">
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.691h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.683-1.539 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.565-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.925 10.1c-.783-.57-.381-1.81.588-1.81h4.915a1 1 0 00.95-.691l1.519-4.674z" />
            </svg>
            <p className="text-sm sm:text-base font-medium text-gray-800">{stars} Stars</p>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// FollowUsFloating Component: A floating social media follow section.
function FollowUsFloating() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false); // Hide when scrolling down
      } else {
        setVisible(true); // Show when scrolling up
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'} bottom-6 left-6 z-50 fixed`}>
      <h3 className="text-lg sm:text-xl font-semibold text-indigo-700 mb-2">Follow Us</h3>
      <div className="flex gap-3 sm:gap-4 text-xl sm:text-2xl text-white">
        {/* Replaced social media icons with inline SVGs */}
        <a href="https://facebook.com" className="bg-blue-600 p-2 rounded-full hover:scale-110 transition shadow-lg" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.243-1.333 1.103-1.333h2.897v-5h-3.999c-4.04 0-5.001 3.017-5.001 4.999v2.001z" />
          </svg>
        </a>
        <a href="https://instagram.com" className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-2 rounded-full hover:scale-110 transition shadow-lg" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.07 4.85-1.48 3.252-1.691 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.849 0-3.204.012-3.584.07-4.85 1.48-3.252 1.691-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.947.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073 3.259 0 3.668-.014 4.947-.072 4.358-.2 6.78-2.618 6.98-6.98.058-1.281.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.44-.645 1.44-1.44s-.645-1.44-1.44-1.44z" />
          </svg>
        </a>
        <a href="https://twitter.com" className="bg-blue-400 p-2 rounded-full hover:scale-110 transition shadow-lg" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.407 0-6.176 2.76-6.176 6.177 0 .484.055.955.152 1.405-5.144-.259-9.686-2.728-12.732-6.49-.524.9-1.048 1.954-1.048 3.227 0 2.132 1.087 4.081 2.748 5.197-.798-.025-1.549-.245-2.204-.61v.075c0 2.99 2.13 5.472 4.928 6.03-.48.13-.984.195-1.504.195-.366 0-.723-.035-1.07-.103.78 2.436 3.04 4.22 5.71 4.267-2.085 1.637-4.71 2.607-7.594 2.607-.493 0-.979-.029-1.459-.085 2.694 1.725 5.898 2.733 9.378 2.733 11.29 0 17.49-9.92 17.49-18.59 0-.282-.007-.562-.02-.843.961-.695 1.799-1.56 2.459-2.549z" />
          </svg>
        </a>
        <a href="https://linkedin.com" className="bg-blue-700 p-2 rounded-full hover:scale-110 transition shadow-lg" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 6.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </a>
        <a href="https://youtube.com" className="bg-red-600 p-2 rounded-full hover:scale-110 transition shadow-lg" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.235 0-2.388.163-3.693 1.66-3.856 4.04-.163 2.388-.163 7.669 0 10.057.163 2.388 1.468 3.877 3.856 4.04 3.604.246 11.631.246 15.235 0 2.388-.163 3.693-1.66 3.856-4.04.163-2.388.163-7.669 0-10.057-.163-2.388-1.468-3.877-3.856-4.04zm-7.615 10.816v-5l5 2.5-5 2.5z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

// Footer Component: Displays copyright information.
function Footer() {
  return (
    <footer className="font-display bg-gradient-to-r from-purple-700 to-fuchsia-700 text-white text-center py-6 mt-12">
      <p className="text-sm">© {new Date().getFullYear()} Digital World. All rights reserved.</p>
    </footer>
  );
}

// Main App Component: Manages the overall structure and navigation.
export default function App() {
  // State to manage the current page, defaulting to 'home'
  const [currentPage, setCurrentPage] = useState('home');

  // Function to render the current page component based on 'currentPage' state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'gallery': // Added Gallery case
        return <Gallery />;
      case 'drop-message':
        return <DropMessage />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />; // Fallback to Home page
    }
  };

  return (
    <div className="font-sans min-h-screen bg-white text-gray-800">
      {/* Pass setCurrentPage to LogoHeader for navigation */}
      <LogoHeader setCurrentPage={setCurrentPage} />
      {/* Render the selected page */}
      {renderPage()}
      {/* FollowUsFloating Component moved here */}
      <FollowUsFloating />
      <Footer />
    </div>
  );
}
