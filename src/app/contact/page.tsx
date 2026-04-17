"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry. Our team will get back to you shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="pb-20 overflow-hidden bg-white">
      {/* Page Header */}
      <section className="bg-secondary text-white py-20 relative">
        <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Connect with Ojas Group for specialized cable supply, NATA accredited testing, or sustainable solar recycling initiatives.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Get In Touch</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6 leading-tight">
                  Let&apos;s Build the Future Together.
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Whether you have a major infrastructure project or an end-of-life solar asset, our team of experts is ready to provide technical support and end-to-end lifecycle solutions.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-blue-50 text-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-lg mb-1">Our Location</h4>
                    <p className="text-gray-500 leading-relaxed">
                      Naxos Way, Melbourne<br />
                      VIC, Australia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-blue-50 text-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-lg mb-1">Email Us</h4>
                    <a href="mailto:sales@ojas.com.au" className="text-gray-500 leading-relaxed hover:text-accent transition-colors">
                      sales@ojas.com.au
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-blue-50 text-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-lg mb-1">Call Us</h4>
                    <p className="text-gray-500 leading-relaxed font-medium">
                      Inquiries via email preferred for technical specifications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100">
                 <h4 className="font-bold text-secondary mb-4 uppercase text-xs tracking-widest">Our Operations</h4>
                 <div className="flex space-x-8">
                    <div className="flex items-center text-sm font-medium text-gray-500">
                       <span className="w-2 h-2 bg-accent rounded-full mr-2"></span> Melbourne
                    </div>
                    <div className="flex items-center text-sm font-medium text-gray-500">
                       <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span> Brisbane
                    </div>
                 </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full"></div>
              
              <h3 className="text-2xl font-bold text-secondary mb-8">Send an Inquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-secondary/80">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-secondary/80">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-secondary/80">Service of Interest</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="cable-australia">Cable Australia (Supply)</option>
                    <option value="cablab">CabLab (Testing & Diagnostics)</option>
                    <option value="elecsome">ElecSome (Recycling & Circular Economy)</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-secondary/80">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project requirements..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder:text-gray-400 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-secondary text-white font-bold rounded-lg hover:bg-secondary/90 transition-all flex items-center justify-center group"
                >
                  Send Inquiry
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-gray-200 flex items-center justify-center relative grayscale group hover:grayscale-0 transition-all duration-700 overflow-hidden">
         <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000&auto=format&fit=crop" alt="Map View Placeholder" className="absolute inset-0 w-full h-full object-cover" />
         <div className="absolute inset-0 bg-secondary/20"></div>
         <div className="relative z-10 p-6 bg-white rounded-lg shadow-xl border border-gray-100 flex items-center space-x-4">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white">
               <MapPin className="w-5 h-5" />
            </div>
            <div>
               <h4 className="font-bold text-secondary">Australia Hub</h4>
               <p className="text-xs text-gray-500">Melbourne & Brisbane Operations</p>
            </div>
         </div>
      </section>
    </main>
  );
}
