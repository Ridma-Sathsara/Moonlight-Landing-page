import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7 }}
        className="text-4xl font-serif font-semibold text-gray-900 text-center mb-12"
      >
        Get in Touch
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
            Reach Us
          </h2>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <MapPin className="w-8 h-8 text-gray-600" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Visit Our Store</h3>
                <p className="text-gray-600">
                  123 Luxury Lane, New York, NY 10001, United States
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <Mail className="w-8 h-8 text-gray-600" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Email Us</h3>
                <p className="text-gray-600">contact@moonlightjewelry.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <Phone className="w-8 h-8 text-gray-600" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          {/* Store Hours */}
          <div className="mt-12 space-y-2">
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">Store Hours</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Mon-Fri</span>
                <span>10:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saturday</span>
                <span>11:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-50 p-6 rounded-xl shadow-md w-full"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-600 focus:ring-gray-600 px-4 py-2"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-600 focus:ring-gray-600 px-4 py-2"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-600 focus:ring-gray-600 px-4 py-2"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-600 focus:ring-gray-600 px-4 py-2"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gray-800 text-white py-3 px-6 rounded-md hover:bg-gray-700 transition duration-300 shadow-md"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
