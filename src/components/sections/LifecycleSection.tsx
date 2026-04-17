"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LifecycleSection() {
  const steps = [
    {
      title: "Specify With Confidence",
      subtitle: "Cable Supply + Expertise",
      description: "We provide high-performance electrical cables backed by deep engineering expertise. From civil construction to renewables, we ensure you have the right solutions.",
      logo: "/images/cable-australia.png"
    },
    {
      title: "Verify Performance",
      subtitle: "NATA Accredited Testing",
      description: "Our independent laboratory services deliver accurate compliance testing and drone EL inspections to guarantee infrastructure reliability.",
      logo: "/images/cablab.png"
    },
    {
      title: "Close The Loop",
      subtitle: "Solar Recycling",
      description: "We enable sustainable circular economy solutions by diverting end-of-life photovoltaic panels from landfills and recovering valuable materials.",
      logo: "/images/elecsome.png"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/3"
          >
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">
              Integrated Capability
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-secondary leading-tight mb-6">
              Complete Lifecycle Support.
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Ojas Group stands uniquely positioned at the intersection of supply, testing, and sustainability. We mitigate risk and ensure compliance from initial specification to end-of-life recycling.
            </p>
          </motion.div>

          <div className="w-full lg:w-2/3 relative">
            {/* Connecting Line behind steps */}
            <div className="absolute top-1/2 -ml-2 w-full h-1 bg-gradient-to-r from-secondary/5 via-accent/30 to-secondary/5 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {steps.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex flex-col items-center text-center p-8 bg-white rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow relative"
                >
                  <div className="w-24 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-md shadow-secondary/10 border border-gray-100 p-2 transition-colors">
                    <Image 
                      src={feature.logo} 
                      alt={`${feature.title} logo`} 
                      width={80} 
                      height={80} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-secondary mb-1">{feature.title}</h4>
                  <h5 className="text-xs uppercase tracking-widest text-accent font-semibold mb-4">{feature.subtitle}</h5>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
