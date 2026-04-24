"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Target, Leaf, CheckCircle2 } from "lucide-react";

export default function SustainabilityPage() {
  const safetyPoints = [
    "Ojas Group is committed to preventing incidents and protecting people by identifying, understanding, and effectively managing the highest risks across all areas of our operations.",
    "We foster a safety-first culture where every individual takes responsibility for their own wellbeing and actively looks out for colleagues, partners, and contractors.",
    "We enable consistent, high-performance outcomes by continuously improving our systems, learning from experience, and embedding best practice across all businesses to maintain strong safety and operational standards."
  ];

  const commitmentPoints = [
    "Ojas Group is committed to operating with discipline, accountability, and consistency across all businesses, ensuring that every decision supports long-term resilience and measurable improvement in how infrastructure and energy systems are delivered and managed.",
    "We are committed to maintaining high technical and operational standards, strengthening compliance and assurance practices, and continuously improving performance across supply, testing, and resource recovery activities.",
    "We are committed to building trusted relationships with customers, suppliers, and industry partners through transparency, reliability, and responsible business conduct in every engagement.",
    "We are committed to developing capability within our teams and systems so that we can adapt to changing industry demands while delivering safe, efficient, and dependable outcomes across all areas of the group."
  ];

  return (
    <main className="pb-20 overflow-hidden bg-white">
      
      {/* Hero */}
      <section className="bg-secondary text-white py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-blue-950 z-0"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center mt-12 md:mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            Sustainability
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed"
          >
            Sustainability is central to how Ojas Group operates and is shaped by the expectations of the people and systems we serve.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-600 leading-relaxed">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              This includes our people who are committed to building a more sustainable industrial future, the communities that rely on long-term economic stability from our businesses, and our customers who are actively managing their own carbon reduction and sustainability journeys.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              It also includes our suppliers, with whom we engage to improve transparency and assess sustainability performance across the supply chain, as well as governments in the regions we operate in and trade with, whose national and international carbon reduction targets require practical industry participation to achieve meaningful outcomes.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 p-8 md:p-10 rounded-2xl border-l-4 border-accent shadow-sm mt-12"
            >
              <div className="flex flex-col md:flex-row items-start">
                <Leaf className="w-12 h-12 text-accent mb-6 md:mb-0 md:mr-6 flex-shrink-0" />
                <p className="font-medium text-secondary text-xl italic leading-relaxed">
                  In response to these expectations, we focus on practical, measurable sustainability outcomes across the lifecycle of energy and electrical infrastructure—supporting responsible material sourcing, extending asset life through compliance and testing, and enabling recovery and recycling of end-of-life renewable infrastructure to reduce waste and improve resource efficiency.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 sticky top-24 lg:top-32"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <ShieldAlert className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Our Priority</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
                Safety First
              </h3>
              <div className="w-20 h-1 bg-accent mb-8"></div>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Protecting our people, our partners, and the communities in which we operate is our highest priority.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 space-y-6"
            >
              <div className="grid gap-6">
                {safetyPoints.map((point, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex items-start group hover:shadow-md transition-shadow">
                    <CheckCircle2 className="w-6 h-6 text-accent mr-4 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-600 text-lg leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Our Commitment</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-secondary leading-tight">
              Driving Long-Term Value
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {commitmentPoints.map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <Target className="w-8 h-8 text-accent mb-6 opacity-50" />
                <p className="text-gray-700 leading-relaxed text-lg">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
