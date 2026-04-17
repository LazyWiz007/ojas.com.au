"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IndustriesTeaserSection() {
  const industries = [
    { name: "Construction", icon: "🏗️", desc: "Large-scale commercial builds & urban dev." },
    { name: "Utilities", icon: "⚡", desc: "Energy grids & power distribution." },
    { name: "Mining", icon: "⛏️", desc: "Extreme-temperature resource extraction." },
    { name: "Renewables", icon: "☀️", desc: "Solar lifecycle & panel recycling." },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Industries</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-secondary leading-tight">
              Powering Australia&apos;s Most Demanding Sectors.
            </h3>
          </div>
          <Link 
            href="/industries" 
            className="inline-flex items-center text-secondary font-bold hover:text-accent transition-colors group"
          >
            View All Industries
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h4 className="text-xl font-bold text-secondary mb-3">{item.name}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
