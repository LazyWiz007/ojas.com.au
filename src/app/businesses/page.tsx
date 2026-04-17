"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ChevronRight, ArrowUpRight } from "lucide-react";

export default function BusinessesPage() {
  return (
    <main className="pb-20 overflow-hidden bg-gray-50">
      
      {/* Page Header */}
      <section className="bg-secondary text-white py-20 relative">
        <div className="absolute inset-0 z-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: `40px 40px`
        }}></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Businesses
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl leading-relaxed"
          >
            Ojas Group operates three specialized entities spanning cable supply, rigorous testing, and solar recycling. Together, we power the full infrastructure lifecycle.
          </motion.p>
        </div>
      </section>

      {/* 1. Cable Australia */}
      <section id="cable-australia" className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="w-40 h-24 mb-6 bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center justify-center">
                <Image src="/images/cable-australia.png" alt="Cable Australia Logo" width={140} height={80} className="object-contain" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Cable Australia</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Trusted Local Cable Supply for Critical Infrastructure.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Cable Australia delivers high-performance electrical cable solutions designed to meet the extreme demands of modern infrastructure projects across Australia. From construction and utilities to mining and renewables, we ensure the right cable solutions are delivered on time, on spec, and built to perform.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Extensive range of LV, MV, and specialised cables",
                  "Local warehouses in Brisbane and Melbourne",
                  "Compliant with core Australian & International standards",
                  "Technical support for project specifications",
                  "Reliable logistics for major infrastructure projects"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="https://cableaustralia.com.au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors group">
                Visit Cable Australia
                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] flex items-center justify-center bg-gray-100 group"
            >
               <img src="/images/business-cable-supply.png" alt="Industrial Cables Supply" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-multiply" />
               <div className="absolute inset-0 bg-blue-900/10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CabLab */}
      <section id="cablab" className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-last lg:order-first relative rounded-2xl overflow-hidden shadow-2xl h-[600px] flex items-center justify-center bg-gray-100 group"
            >
               <img src="/images/business-lab-testing.png" alt="Electrical Lab Testing" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 mix-blend-multiply" />
               <div className="absolute inset-0 bg-red-900/10"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="w-40 h-24 mb-6 bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center justify-center">
                <Image src="/images/cablab.png" alt="CabLab Logo" width={140} height={80} className="object-contain" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">CabLab</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Independent Testing. Accurate Results. Trusted Insights.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Based in Keysborough, Melbourne, CabLab is a NATA accredited electrical cable testing laboratory providing compliance testing, material analysis, and failure investigation.
              </p>

              <div className="space-y-6 mb-10">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-lg text-secondary mb-3">Cable & Conductor Testing</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Electrical, mechanical, thermal, & environmental testing</li>
                    <li>• Independent failure investigation & material analysis</li>
                    <li>• Rigorous compliance reporting for asset owners</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-lg text-secondary mb-3">EL Drone Technology</h4>
                  <p className="text-sm text-gray-600 mb-3">Market-leading electroluminescence (EL) imaging for large-scale solar arrays, aligned with IEC 60904-13 standards.</p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• UAV-based high-resolution cell crack detection</li>
                    <li>• Performance validation for utility-scale PV assets</li>
                    <li>• Advanced maintenance planning & risk mitigation</li>
                  </ul>
                </div>
              </div>

              <a href="https://cablab.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-accent font-bold hover:text-accent-hover transition-colors group">
                Visit CabLab
                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. ElecSome */}
      <section id="elecsome" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -right-64 -top-64 w-[500px] h-[500px] bg-green-50 rounded-full blur-[100px] opacity-60"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="w-40 h-24 mb-6 bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center justify-center">
                <Image src="/images/elecsome.png" alt="ElecSome Logo" width={140} height={80} className="object-contain" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">ElecSome</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Solar Panel Recycling & Circular Energy Solutions.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                ElecSome provides end-to-end solar panel recycling solutions for end-of-life photovoltaic modules across Australia. By partnering with asset owners and installers, we drive the circular economy forward.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start text-gray-700">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                  <span>Diverts old and broken panels significantly away from landfill.</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                  <span>Recovers valuable raw materials for future manufacturing.</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                  <span>Enables fully sustainable and mathematically compliant disposal.</span>
                </li>
              </ul>
              
              <button className="inline-flex items-center text-emerald-700 font-bold hover:text-emerald-900 transition-colors group">
                Discover ElecSome
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] flex items-center justify-center bg-gray-100 group"
            >
               <img src="/images/business-solar-recycling.png" alt="Solar Panels Recycling" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
               <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}
