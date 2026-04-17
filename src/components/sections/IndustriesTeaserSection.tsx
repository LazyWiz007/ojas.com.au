"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IndustriesTeaserSection() {
  const industries = [
    { name: "Construction", image: "/images/teaser-construction.png", desc: "Large-scale commercial builds & urban dev." },
    { name: "Utilities", image: "/images/teaser-utilities.png", desc: "Energy grids & power distribution." },
    { name: "Mining", image: "/images/teaser-mining.png", desc: "Extreme-temperature resource extraction." },
    { name: "Renewables", image: "/images/teaser-renewables.png", desc: "Solar lifecycle & panel recycling." },
  ];

  return (
    <section className="py-24 bg-white">
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
              className="group relative h-[400px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h4 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                  {item.name}
                  <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
