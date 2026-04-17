"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-secondary">
      {/* Background accents */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          height: "100%",
          width: "100%"
        }}></div>
      </div>
      
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/20 blur-[100px] rounded-full transform translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Engineer <br /> Your Next Project?
          </h2>
          <p className="text-white/80 text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
            Partner with Ojas Group for industry-leading manufacturing precision, reliable supply chains, and infrastructure excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-medium rounded hover:bg-zinc-100 hover:text-accent transition-colors group">
              Request a Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-medium rounded border border-white/20 hover:bg-white/10 transition-colors">
              Explore Documentation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
