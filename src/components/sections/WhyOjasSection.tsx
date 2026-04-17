"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Globe, Award } from "lucide-react";

export default function WhyOjasSection() {
  const features = [
    {
      title: "ISO Certified Quality",
      description: "Rigorous testing and compliance at every stage of the manufacturing life-cycle.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Rapid Deployment",
      description: "Agile logistics network ensuring minimal downtime for critical infrastructure projects.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Global Supply Chain",
      description: "Robust international partnerships supplying premium raw materials without delay.",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Award-Winning Engineering",
      description: "Recognized industry leaders in innovating extreme-condition cable solutions.",
      icon: <Award className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/3"
          >
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">
              Why Ojas
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-secondary leading-tight mb-6">
              The Standard of Trust
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              When millions depend on infrastructure reliability, compromise is not an option. We deliver certainty through obsessive quality control and engineering prowess.
            </p>
          </motion.div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col p-6 bg-white rounded border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-50 text-secondary rounded flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-secondary mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
