import React from 'react';
import Section from '../ui/Section';
import { personalDetails } from '../../data/personal';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';



const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Me</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Feel free to contact me for collaborations or inquiries!
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* Contact Info Side */}
                <div className="p-10 lg:p-16 bg-blue-600 text-white">
                    <h3 className="text-3xl font-bold mb-8">Let's get in touch</h3>
                    <p className="text-blue-100 mb-12 leading-relaxed">
                        I'm open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <p className="text-sm text-blue-200 uppercase tracking-wider font-semibold">Address</p>
                                <p className="font-medium">{personalDetails.address}</p>
                            </div>
                        </div>

                         <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <p className="text-sm text-blue-200 uppercase tracking-wider font-semibold">Phone</p>
                                <p className="font-medium">
                                    <a href={`tel:${personalDetails.phone}`} className="hover:text-white transition-colors">
                                        {personalDetails.phone}
                                    </a>
                                </p>
                            </div>
                        </div>

                         <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                <FaEnvelope />
                            </div>
                            <div>
                                <p className="text-sm text-blue-200 uppercase tracking-wider font-semibold">Email</p>
                                <p className="font-medium">
                                    <a href={`mailto:${personalDetails.email}`} className="hover:text-white transition-colors">
                                        {personalDetails.email}
                                    </a>
                                </p>
                            </div>
                        </div>

                         <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                <FaGlobe />
                            </div>
                            <div>
                                <p className="text-sm text-blue-200 uppercase tracking-wider font-semibold">Website</p>
                                <p className="font-medium">
                                    <a href={personalDetails.website} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                                        {personalDetails.website.replace('http://', '')}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <div className="p-10 lg:p-16">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div>
                             <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                             <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Project Inquiry" />
                        </div>
                        <div>
                             <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                             <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Tell me about your project..." />
                        </div>
                        
                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </div>

            </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
