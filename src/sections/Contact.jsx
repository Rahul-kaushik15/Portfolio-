


import React, { useState, useEffect } from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import emailjs from '@emailjs/browser';
import Astra from '../assets/Astra.png';
import { motion } from 'framer-motion';

const Contact = () => {
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    idea: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [envReady, setEnvReady] = useState(false);

  useEffect(() => {
    // Disable form if env vars are missing
    if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) setEnvReady(true);
  }, [SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'budget' && value && !/^\d+$/.test(value)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const required = ['name', 'email', 'service', 'idea'];
    const newErrors = {};
    required.forEach((f) => !formData[f].trim() && (newErrors[f] = 'This field is required'));
    if (formData.service && formData.service !== 'other' && !formData.budget.trim())
      newErrors.budget = 'Please enter your budget';
    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm() || !envReady) return;

    setStatus('sending');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...formData,
          from_name: formData.name,
          reply_to: formData.email,
        },
        { publicKey: PUBLIC_KEY }
      );

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        service: '',
        budget: '',
        idea: '',
      });
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10 overflow-hidden"
    >
      <ParticlesBackground />
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={Astra}
            alt="Contact"
            className="w-72 md:w-140 rounded-2xl shadow-2xl object-cover"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Right Form */}
        <motion.div
          className="w-full md:w-1/2 bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/20"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
            Let's Work Together
          </h2>

          {!envReady && (
            <p className="text-red-400 mb-4 text-center">
              Contact form is disabled. EmailJS env variables are missing.
            </p>
          )}

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="flex flex-col">
              <label className="mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`p-3 rounded-md bg-white/10 border ${
                  errors.name ? 'border-red-500' : 'border-gray-500'
                } text-white focus:outline-none focus:border-blue-500`}
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-1">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`p-3 rounded-md bg-white/10 border ${
                  errors.email ? 'border-red-500' : 'border-gray-500'
                } text-white focus:outline-none focus:border-blue-500`}
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>

            {/* Service */}
            <div className="flex flex-col">
              <label className="mb-1">
                Services Needed <span className="text-red-500">*</span>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`p-3 rounded-md bg-white/10 border ${
                  errors.service ? 'border-red-500' : 'border-gray-500'
                } text-white focus:outline-none focus:border-blue-500`}
              >
                <option value="" disabled>
                  Something in Mind?
                </option>
                <option value="Web Development" className="text-black">
                  Web Development
                </option>
                <option value="Mobile Application" className="text-black">
                  Mobile Application
                </option>
                <option value="other" className="text-black">
                  Others
                </option>
              </select>
              {errors.service && <p className="text-red-500 text-xs">{errors.service}</p>}
            </div>

            {/* Budget */}
            {formData.service && formData.service !== 'other' && (
              <div className="flex flex-col">
                <label className="mb-1">
                  Budget <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="budget"
                  placeholder="Your Budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`p-3 rounded-md bg-white/10 border ${
                    errors.budget ? 'border-red-500' : 'border-gray-500'
                  } text-white focus:outline-none focus:border-blue-500`}
                />
                {errors.budget && <p className="text-red-500 text-xs">{errors.budget}</p>}
              </div>
            )}

            {/* Idea */}
            <div className="flex flex-col">
              <label className="mb-1">
                Explain Your Idea <span className="text-red-500">*</span>
              </label>
              <textarea
                name="idea"
                rows={5}
                placeholder="Enter Your Idea"
                value={formData.idea}
                onChange={handleChange}
                className={`p-3 rounded-md bg-white/10 border ${
                  errors.idea ? 'border-red-500' : 'border-gray-500'
                } text-white focus:outline-none focus:border-blue-500`}
              />
              {errors.idea && <p className="text-red-500 text-xs">{errors.idea}</p>}
            </div>

            {/* Status */}
            {status && (
              <p
                className={`text-sm ${
                  status === 'success'
                    ? 'text-green-400'
                    : status === 'error'
                    ? 'text-red-400'
                    : 'text-yellow-400'
                } `}
              >
                {status === 'sending'
                  ? 'Sending...'
                  : status === 'success'
                  ? 'Message sent Successfully ✅'
                  : 'Something went wrong ❌'}
              </p>
            )}

            {/* Submit */}
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-2 rounded-md font-semibold transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status === 'sending' || !envReady}
              type="submit"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
