"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function GroupEntitiesSection() {
  const entities = [
    {
      id: "cable-australia",
      name: "Cable Australia",
      tagline: "Trusted Local Cable Supply",
      description: "High-performance electrical cable solutions for modern infrastructure. Extensive LV/MV range with local Brisbane & Melbourne supply.",
      logo: "/images/cable-australia.png",
      color: "bg-blue-50 text-blue-900 border-blue-100",
      iconBox: "bg-white border border-blue-100 shadow-inner"
    },
    {
      id: "cablab",
      name: "CabLab",
      tagline: "Independent NATA Testing",
      description: "Accredited electrical cable testing & advanced electroluminescence (EL) drone inspections for solar PV assets.",
      logo: "/images/cablab.png",
      color: "bg-red-50 text-red-900 border-red-100",
      iconBox: "bg-white border border-red-100 shadow-inner"
    },
    {
      id: "elecsome",
      name: "ElecSome",
      tagline: "Solar Recycling & Circular Solutions",
      description: "Diverting end-of-life solar panels from landfill. We recover valuable materials and enable sustainable, compliant disposal.",
      logo: "/images/elecsome.png",
      color: "bg-zinc-50 text-zinc-900 border-zinc-100",
      iconBox: "bg-white border border-zinc-100 shadow-inner"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-sm font-bold text-accent uppercase tracking-widest mb-3"
          >
            Our Businesses
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-secondary leading-tight"
          >
            Integrated Capability.<br/> One Group.
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {entities.map((entity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`flex flex-col p-8 rounded-xl border ${entity.color} shadow-sm hover:shadow-xl transition-all group relative overflow-hidden`}
            >
              <div className={`w-28 h-20 rounded-xl flex items-center justify-center p-2 mb-6 ${entity.iconBox}`}>
                <Image 
                  src={entity.logo} 
                  alt={`${entity.name} logo`} 
                  width={120} 
                  height={120} 
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-2xl font-bold mb-2">{entity.name}</h4>
              <h5 className="font-medium text-sm uppercase tracking-wide mb-4 opacity-80">{entity.tagline}</h5>
              <p className="opacity-90 leading-relaxed mb-8 flex-grow">
                {entity.description}
              </p>
              
              <Link href={`/businesses#${entity.id}`} className="inline-flex items-center font-bold tracking-wide transition-colors opacity-90 group-hover:opacity-100 group-hover:translate-x-1 duration-300">
                Explore {entity.name}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
