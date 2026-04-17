"use client";

import { motion } from "framer-motion";
import { Settings, Droplets, Zap, ShieldCheck, Factory, Cpu } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Precision Engineering",
      description: "Custom-engineered mechanical components designed with absolute microscopic accuracy for rigorous industrial environments.",
      icon: <Settings size={32} />
    },
    {
      title: "Critical Cable Manufacturing",
      description: "High-performance data and power cables that ensure flawless transmission in the harshest conditions.",
      icon: <Zap size={32} />
    },
    {
      title: "Industrial Fabrication",
      description: "End-to-end heavy metal fabrication, automated machining, and structural assembly.",
      icon: <Factory size={32} />
    },
    {
      title: "Fluid Dynamics Systems",
      description: "Advanced hydraulic and pneumatic routing systems tailored for extreme pressure scenarios.",
      icon: <Droplets size={32} />
    },
    {
      title: "Automation Components",
      description: "Smart sensory and PLC integration components for modern robotic production lines.",
      icon: <Cpu size={32} />
    },
    {
      title: "Quality Assurance & Testing",
      description: "Rigorous stress, thermal, and durability testing ensuring 100% compliance with ISO standards.",
      icon: <ShieldCheck size={32} />
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 relative border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-sm font-bold text-accent uppercase tracking-widest mb-3"
          >
            Capabilities
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-secondary leading-tight"
          >
            Comprehensive Industrial Solutions
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] transition-all group relative overflow-hidden"
            >
              {/* Subtle hover accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <div className="w-16 h-16 bg-blue-50 text-secondary rounded flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
