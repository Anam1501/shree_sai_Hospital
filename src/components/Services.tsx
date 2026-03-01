import React from 'react';
import { motion } from 'framer-motion';
import {
  Stethoscope,
  Activity,
  Baby,
  Ear,
  Bone,
  Droplets,
  Sparkles,
  Accessibility,
  Microscope,
  HeartPulse,
  ScanLine,
  FlaskConical,
  ShieldCheck,
  Syringe,
  Heart
} from 'lucide-react';

const services = [
  { title: 'General Medicine', icon: Stethoscope },
  { title: 'General Surgery', icon: Syringe },
  { title: 'Obstetrics & Gynecology', icon: HeartPulse },
  { title: 'ENT', icon: Ear },
  { title: 'Pediatrics', icon: Baby },
  { title: 'Orthopedics', icon: Bone },
  { title: 'Urology', icon: Droplets },
  { title: 'Dermatology (Skin & Hair)', icon: Sparkles },
  { title: 'Ophthalmology (Eye Treatment)' },
  { title: 'Physiotherapy', icon: Accessibility },
  { title: 'Laparoscopic Surgery', icon: Microscope },
  { title: 'Maternity Center', icon: Heart },
  { title: 'ECG', icon: Activity },
  { title: 'Digital X-Ray', icon: ScanLine },
  { title: 'Lab Facilities', icon: FlaskConical },
  { title: 'Mediclaim', icon: ShieldCheck },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#20B2AA] font-bold text-sm tracking-widest uppercase mb-3">Multispeciality Care</h2>
            <h3 className="text-4xl font-bold text-zinc-900 mb-6">
              Our Specialized Medical Services
            </h3>
            <p className="text-zinc-500">
              Shree Sai Hospital offers a wide range of medical services under one roof, ensuring comprehensive care for you and your family.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group flex flex-col items-center justify-center text-center p-6 rounded-[1.5rem] bg-gradient-to-b from-[#20B2AA]/20 to-white shadow-md transition-all duration-300">

                {/* Text */}
                <h4 className="text-base font-bold text-zinc-900 whitespace-pre-line">
                  {service.title}
                </h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}