import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 rounded-l-[100px] hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-zinc-900 leading-[1.1] mb-6">
              Advanced Care for <span className="text-blue-600">Every Life.</span>
            </h1>
            <p className="text-lg text-zinc-600 mb-10 max-w-lg leading-relaxed">
              Welcome to Shree Sai Hospital. Led by Dr. Ram Pawar, we provide comprehensive medical excellence and compassionate care.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-100">
                Our Services
              </a>
              <a href="tel:+919823122768" className="bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-2xl font-bold hover:bg-zinc-50 transition-all flex items-center gap-2">
                <Phone className="w-5 h-5" /> Emergency Call
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://placehold.co/800x1000.png?text=Dr.+Ram+Pawar"
                alt="Dr. Ram Pawar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-[2rem] shadow-xl border border-zinc-100 hidden sm:block">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Chief Consultant</p>
              <p className="text-2xl font-bold text-zinc-900">Dr. Ram Pawar</p>
              <p className="text-sm text-zinc-500">Specialist in Multispeciality Care</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}