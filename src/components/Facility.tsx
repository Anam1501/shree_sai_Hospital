import React from 'react';
import { motion } from 'framer-motion';
import hospitalImg from "../assets/images/hospital.jpg";

export default function Facility() {

  return (
    <section id="facility" className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="w-full rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src={hospitalImg} 
              alt="Shree Sai Hospital Main Building"
              className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="mt-6 text-center">
            <p className="text-black-400 text-sm font-medium uppercase tracking-widest">Shree Sai Hospital - Main Building</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}