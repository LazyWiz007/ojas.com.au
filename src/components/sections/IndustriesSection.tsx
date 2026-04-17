"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    {
      name: "Mining & Resources",
      imageText: "Mining Site",
      description: "Robust cable infrastructure and heavy engineering for extreme extraction environments.",
    },
    {
      name: "Renewable Energy",
      imageText: "Solar / Wind Farm",
      description: "High-voltage transmission solutions for solar grids and offshore wind farms.",
    },
    {
      name: "Transportation Infrastructure",
      imageText: "Rail & Transport",
      description: "Signaling and power distribution for urban rail and aviation frameworks.",
    },
    {
      name: "Advanced Manufacturing",
      imageText: "Automated Facility",
      description: "Precision robotics integration and automated facility power management.",
    }
  ];

  return (
    <section id="industries" className="py-24 bg-secondary text-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-sm font-bold text-accent uppercase tracking-widest mb-3"
            >
              Industries Served
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold leading-tight"
            >
              Powering the World&apos;s <br /> Most Demanding Sectors
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <button className="flex items-center text-accent hover:text-white transition-colors group font-medium">
              View All Sectors 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative h-[400px] rounded overflow-hidden cursor-pointer"
            >
              {/* Background Placeholder */}
              <div className="absolute inset-0 bg-gray-800 transition-transform duration-700 group-hover:scale-105 flex items-center justify-center">
                 <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `linear-gradient(45deg, #D32F2F 1px, transparent 1px)`,
                    backgroundSize: "10px 10px"
                 }}></div>
                 <span className="text-white/30 font-medium tracking-widest uppercase">{industry.imageText}</span>
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-xl font-bold mb-3">{industry.name}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {industry.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
