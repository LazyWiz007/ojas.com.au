"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    {
      name: "Construction & Commercial",
      image: "/images/industry-construction.png",
      description: "Providing high-grade electrical cables and supply logistics for large-scale commercial builds and urban development."
    },
    {
      name: "Utilities & Energy",
      image: "/images/industry-utilities.png",
      description: "Critical cable testing and supply for municipal energy grids, ensuring uninterrupted power distribution to communities."
    },
    {
      name: "Mining & Resources",
      image: "/images/industry-mining.png",
      description: "Heavy-duty, infrastructure designed to withstand abrasive, extreme-temperature extraction environments."
    },
    {
      name: "Renewable Energy (Solar PV)",
      image: "/images/industry-renewable.png",
      description: "End-to-end solar lifecycle support: from drone EL testing arrays to end-of-life photovoltaic recycling via ElecSome."
    },
    {
      name: "Infrastructure & Transport",
      image: "/images/industry-infrastructure.png",
      description: "Powering signal networks, rail corridors, and civil infrastructure with NATA-certified reliability."
    }
  ];

  return (
    <main className="pb-20 overflow-hidden bg-gray-50">
      
      {/* Page Header */}
      <section className="bg-secondary text-white py-20 relative">
        <div className="absolute inset-0 bg-blue-900/50 mix-blend-multiply"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Industries Served
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl leading-relaxed"
          >
            Powering Australia&apos;s most demanding sectors. We connect reliable supply, rigorous testing, and circular sustainability to drive heavy industry forward.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`group relative h-[450px] rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all ${idx === 3 || idx === 4 ? 'lg:col-span-1.5' : ''}`}
                style={idx === 3 ? { gridColumn: "span 2 / span 2" } : {}}
              >
                {/* Background Image */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                   <img src={industry.image} alt={industry.name} className="w-full h-full object-cover" />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-2xl font-bold text-white mb-3 flex items-center justify-between">
                      {industry.name}
                      <ArrowRight className="w-6 h-6 text-accent opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                    </h4>
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
    </main>
  );
}
