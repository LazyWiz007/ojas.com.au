"use client";

import { motion } from "framer-motion";
import { Target, ShieldCheck, Zap, Leaf } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Integrity in Execution",
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
      desc: "We act with honesty, accountability, and technical discipline in everything we do. We stand behind our work, deliver on our commitments, and maintain the highest standards of compliance and safety across all operations."
    },
    {
      title: "Technical Excellence",
      icon: <Zap className="w-8 h-8 text-accent" />,
      desc: "We are driven by deep industry knowledge and a commitment to quality. From cable supply to testing and recycling, we focus on precision, reliability, and continuous improvement in all technical outcomes."
    },
    {
      title: "Sustainable Impact",
      icon: <Leaf className="w-8 h-8 text-accent" />,
      desc: "We take responsibility for the full lifecycle of the products and services we deliver. Through practical solutions and circular economy thinking, we aim to reduce waste, recover value, and contribute to a more sustainable industrial future."
    }
  ];

  const history = [
    {
      year: "2008",
      title: "Foundation",
      desc: "Ojas Group was established in Victoria, Australia, initially focused on supplying specialised power and communication cables to the infrastructure and energy sectors. The business grew steadily, building a strong presence in industrial and utility markets."
    },
    {
      year: "2016",
      title: "Expansion into Testing",
      desc: "The Group expanded its technical capability with the establishment of CabLab in Victoria, Australia, a NATA-accredited testing and engineering facility supporting cable compliance, quality assurance, and field performance validation. CabLab has since enhanced its capabilities to include advanced inspection services, including drone-based testing for renewable energy assets."
    },
    {
      year: "2020",
      title: "Circular Economy Focus",
      desc: "Ojas Group entered the circular economy sector through the establishment of ElecSome, developed in collaboration with Australian research partners to deliver solar panel recycling, reuse, and recovery solutions."
    }
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
            About Ojas Group
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl text-white/80 leading-relaxed"
          >
            <p>
              Ojas Group is a network of specialist businesses supporting Australia’s energy and infrastructure sectors. It brings together CabLab, Cable Australia and ElecSome, delivering integrated capability across the full lifecycle of electrical and energy assets, from supply and testing to recovery and reuse.
            </p>
            <p>
              Independent in operation but aligned in purpose, Ojas Group combines technical expertise, local capability and innovation to deliver reliable outcomes while supporting a more sustainable industrial future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Purpose Banner */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <Target className="w-16 h-16 text-white mb-6" />
            <h2 className="text-sm font-bold text-white/80 uppercase tracking-widest mb-6">Our Purpose</h2>
            <p className="text-2xl md:text-4xl font-medium text-white leading-tight">
              Our purpose is to enable a more sustainable future for industry and society through practical, integrated solutions across energy, infrastructure, and resource recovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 sticky top-24 lg:top-32"
            >
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Our Strategy</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
                An Integrated Platform of Specialist Businesses
              </h3>
              <div className="w-20 h-1 bg-accent mb-8"></div>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Ojas Group’s strategy is to build an integrated platform of specialist businesses that supports the full lifecycle of energy and electrical infrastructure across Australia from cable supply and technical assurance through to recycling and material recovery.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6 text-gray-600 text-lg leading-relaxed"
            >
              <p>
                This strategy is driven by the growing demand for energy and infrastructure development, the global transition toward decarbonisation, and the increasing need for circular economy solutions that recover value from industrial and renewable assets. It is also shaped by the need for customers to access reliable, compliant and technically capable partners within a single coordinated group rather than fragmented suppliers.
              </p>
              <p>
                The group focuses on critical infrastructure sectors including energy, renewables, mining, utilities, and construction, where technical performance, compliance, and delivery certainty are essential. Growth is pursued in a disciplined way, with expansion into adjacent services only where it strengthens the integrated model and supports long-term customer needs.
              </p>
              <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-accent mt-8 shadow-sm">
                <p className="font-semibold text-secondary italic">
                  &quot;While each business maintains its own operational identity and expertise, they are strategically aligned under a unified group purpose: to deliver integrated, reliable, and sustainable solutions for Australia’s industrial future.&quot;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Our Values</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-secondary leading-tight">
              The Principles That Guide Us
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-bold text-secondary mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Our History</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-secondary leading-tight">
              A Journey of Growth and Innovation
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-gray-100 ml-4 md:ml-0 md:border-l-0">
              {/* Desktop timeline line */}
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -ml-px w-0.5 bg-gray-100"></div>
              
              {history.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative mb-12 md:mb-24 ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  } md:flex items-center justify-between w-full`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-9px] md:left-1/2 md:-ml-3 w-6 h-6 rounded-full bg-accent border-4 border-white shadow"></div>
                  
                  {/* Empty space for desktop layout */}
                  <div className="hidden md:block w-5/12"></div>
                  
                  {/* Content card */}
                  <div className="ml-8 md:ml-0 w-full md:w-5/12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative z-10 hover:shadow-md transition-shadow">
                    <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-bold rounded-full text-lg mb-4">
                      {item.year}
                    </span>
                    <h4 className="text-2xl font-bold text-secondary mb-4">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}

