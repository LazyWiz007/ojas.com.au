"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      id: "01",
      title: "Sydney Metro Extension",
      category: "Transport Infrastructure",
      description: "Supplied over 500km of high-voltage fire-rated cabling for the underground rail network.",
    },
    {
      id: "02",
      title: "Pilbara Iron Ore Facility",
      category: "Mining & Heavy Industry",
      description: "Engineered scalable automated conveyer components designed to withstand 50°C+ conditions.",
    },
    {
      id: "03",
      title: "Victoria Offshore Wind Farm",
      category: "Renewable Energy",
      description: "Custom deep-water subsea power transmission lines ensuring minimal energy loss.",
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-sm font-bold text-accent uppercase tracking-widest mb-3"
          >
            Featured Work
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-secondary leading-tight mb-6"
          >
            Engineering Outcomes
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            A selection of our most demanding and successful implementations across the Asia-Pacific region.
          </motion.p>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center group`}
            >
              {/* Project Image Placeholder */}
              <div className="w-full lg:w-[60%] h-[350px] md:h-[450px] relative rounded overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                  <span className="text-gray-400 font-medium tracking-widest uppercase text-xl">Project Image {project.id}</span>
                </div>
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-[40%] flex flex-col justify-center">
                <span className="text-accent font-bold text-xl mb-4 opacity-50">{project.id}</span>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h4 className="text-2xl md:text-3xl font-bold text-secondary mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {project.description}
                </p>
                <a href="#" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-secondary hover:text-accent transition-colors">
                  View Case Study
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
