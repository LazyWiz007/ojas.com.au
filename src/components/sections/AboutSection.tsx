"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "500+", label: "Global Projects" },
    { value: "50k", label: "Tons Manufactured" },
    { value: "100%", label: "Quality Compliant" },
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">
              About Ojas Group
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
              Engineering Excellence <br /> For A Connected World
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At Ojas Group, we don&apos;t just manufacture—we engineer solutions. For over two decades, our precision-focused approach has established us as Australia&apos;s leading partner in industrial manufacturing and critical cable infrastructure.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We bridge the gap between rigorous industrial standards and modern innovation, ensuring that every project meets the uncompromising demands of tomorrow&apos;s challenges. Trust, durability, and performance are woven into the very fabric of our operations.
            </p>
            
            <div className="bg-gray-50 border-l-4 border-accent p-6 rounded-r">
              <p className="text-secondary font-medium italic">
                &quot;To be the catalyst for industrial growth through unparalleled manufacturing precision and unwavering commitment to quality.&quot;
              </p>
            </div>
          </motion.div>

          {/* Stats & Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            {/* Image Placeholder */}
            <div className="relative w-full h-[400px] overflow-hidden rounded shadow-xl group">
              {/* Note: User requested placeholders for images */}
              <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors z-10"></div>
              <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                 <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(#0A2540 1px, transparent 1px)`,
                    backgroundSize: "20px 20px"
                 }}></div>
                 <span className="text-secondary/50 font-medium tracking-widest uppercase">Factory Operations Image</span>
              </div>
            </div>

            {/* Counters */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded shadow-sm border border-gray-100 flex flex-col justify-center">
                  <span className="text-4xl font-bold text-secondary mb-2">{stat.value}</span>
                  <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
