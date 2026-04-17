"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const lifecycleNodes = [
    { name: "Cable Australia", role: "Supply", logo: "/images/cable-australia.png", desc: "Providing responsive, locally sourced critical infrastructure." },
    { name: "CabLab", role: "Testing & Diagnostics", logo: "/images/cablab.png", desc: "Ensuring uncompromising quality and regulatory compliance." },
    { name: "ElecSome", role: "Recycling", logo: "/images/elecsome.png", desc: "Engineering the circular economy through material recovery." }
  ];

  return (
    <main className="pb-20 overflow-hidden bg-white">
      
      {/* Hero */}
      <section className="bg-secondary text-white py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-blue-900 z-0"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Sustainability & <br className="hidden md:block" /> Local Support
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Ojas Group is committed to strengthening Australia’s infrastructure through a locally driven, sustainability-focused approach.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Our Footprint</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
                Local Expertise.<br /> Responsive Supply.
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Operating directly out of Brisbane and Melbourne, we ensure that critical infrastructure projects across Australia receive the rapid support and technical expertise they demand. We eliminate international supply chain risks to keep your projects on schedule.
              </p>
              
              <div className="flex items-center space-x-6 p-6 bg-gray-50 rounded border border-gray-100">
                <MapPin className="w-12 h-12 text-accent" />
                <div>
                  <h4 className="font-bold text-secondary text-lg">National Presence</h4>
                  <p className="text-gray-500 text-sm">Brisbane & Melbourne Operations</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-2xl bg-gray-100"
            >
              <img src="/images/about-footprint.png" alt="Australian Industrial Operations" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Unified Flow */}
          <div className="bg-gray-50 rounded-2xl p-10 md:p-16 border border-gray-100">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <ShieldCheck className="w-16 h-16 text-accent mx-auto mb-6" />
               <h3 className="text-3xl font-bold text-secondary mb-6">Reducing Risk. Improving Quality.</h3>
               <p className="text-gray-600 text-lg leading-relaxed">
                 Our interconnected structure intrinsically promotes circular infrastructure, meaning sustainability is baked into the model, not added as an afterthought.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-200 via-accent/50 to-emerald-200 z-0"></div>
              
              {lifecycleNodes.map((node, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm relative z-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform"
                >
                  <div className="w-28 h-20 bg-white text-secondary rounded-full flex items-center justify-center mb-6 shadow-inner border border-gray-100 p-4 transition-colors">
                    <Image 
                      src={node.logo} 
                      alt={`${node.name} logo`} 
                      width={100} 
                      height={100} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-secondary">{node.name}</h4>
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full my-3">
                    {node.role}
                  </span>
                  <p className="text-sm text-gray-500 leading-relaxed">{node.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Link href="/businesses" className="inline-flex items-center text-secondary font-bold hover:text-accent transition-colors">
                 Learn more about our businesses
              </Link>
            </div>
          </div>

          {/* Commitment Pillars */}
          <div className="mt-32">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-16 text-center">Our Commitment</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-2xl font-bold text-secondary border-l-4 border-accent pl-4">Sustainability</h4>
                <p className="text-gray-600 leading-relaxed">
                  We are engineering the circular economy. By integrating industrial solar panel recycling through ElecSome, we ensure that the renewable infrastructure of today doesn&apos;t become the environmental burden of tomorrow.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-4"
              >
                <h4 className="text-2xl font-bold text-secondary border-l-4 border-blue-500 pl-4">Local Impact</h4>
                <p className="text-gray-600 leading-relaxed">
                  Supporting Australia&apos;s economy by creating local jobs and maintaining significant warehouse efficiency in Brisbane and Melbourne. Our national footprint ensures we are always close to the project site.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <h4 className="text-2xl font-bold text-secondary border-l-4 border-gray-400 pl-4">NATA Quality</h4>
                <p className="text-gray-600 leading-relaxed">
                  Safety is non-negotiable. With NATA accredited testing via CabLab, we provide mathematically transparent results that give asset owners and installers absolute confidence in their infrastructure.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

