import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '20+', icon: Award },
    { label: 'Available', value: '24/7', icon: Clock },
  ];

  return (
    <section id="about" className="py-24 bg-zinc-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-3">The Visionary</h2>
          <h3 className="text-4xl font-bold text-zinc-900 mb-6">
            About Dr. Ram Pawar
          </h3>
          <div className="space-y-6 text-zinc-600 leading-relaxed max-w-3xl mx-auto">
            <p className="text-lg">
              Dr. Ram Pawar is the cornerstone of Shree Sai Hospital, bringing decades of medical expertise and a compassionate approach to the Dighi community.
            </p>
            <p>
              As the lead consultant at Dighi Multispeciality Hospital, Dr. Ram has pioneered patient-centric care models that combine advanced diagnostic technology with a personal touch. His commitment to excellence has transformed Shree Sai Hospital into a trusted name for families across the region.
            </p>
            <p>
              Under his leadership, the hospital has expanded to include specialized departments ranging from Laparoscopic Surgery to a Government-approved Maternity Center, ensuring that every patient receives world-class treatment under one roof.
            </p>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-[2.5rem] border border-zinc-100 shadow-sm min-w-[200px] transition-transform hover:scale-105">
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <p className="text-3xl font-bold text-zinc-900">{stat.value}</p>
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}