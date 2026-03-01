import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar,MessageSquare, Video } from 'lucide-react';
import DoctorImage from "../components/DoctorImage";

export default function Hero() {
  // Mobile appointment dropdown state
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const phoneNumber = "+919823122768";
  const whatsappNumber = "+919823122768";
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
              Advanced Care for <span className="text-[#20B2AA]">Every Life.</span>
            </h1>
            <p className="text-lg lg:text-2xl text-zinc-600 mb-10 max-w-2xl leading-relaxed">
              Welcome to Shree Sai Hospital. Led by Dr. Ram Pawar, we provide comprehensive medical excellence and compassionate care.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="w-[170px] bg-[#20B2AA] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#20B2AA]/80 transition-all flex items-center gap-2 shadow-lg shadow-blue-[#66CDAA]">
                Our Services
              </a>
              <div className="relative w-full">
                <button
                  onClick={() => setIsAppointmentOpen(!isAppointmentOpen)}
                  className={`w-full px-8 py-4 rounded-2xl font-bold flex gap-2 transition-all border border-zinc-200
                    ${isAppointmentOpen ? 'bg-zinc-100' : 'bg-white'}`}
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </button>

                {/* Animate dropdown */}
                <AnimatePresence>
                  {isAppointmentOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-0 mt-2 w-full bg-white border border-zinc-200 rounded-xl shadow-lg flex flex-col z-50"
                      onAnimationComplete={() => {
                        if (!isAppointmentOpen && document.activeElement instanceof HTMLElement) {
                          document.activeElement.blur();
                        }
                      }}
                    >
                      <a
                        href={`tel:${phoneNumber}`}
                        className="flex items-center gap-2 px-6 py-3 transition-colors"
                      >
                        <Phone className="w-5 h-5" /> Call Now
                      </a>
                      <a
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 transition-colors"
                      >
                        <MessageSquare className="w-5 h-5" /> WhatsApp
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <a
                href={`https://wa.me/+919823122768?text=${encodeURIComponent(
                  "Hello, I would like to book an online consultation with Dr. Ram Pawar."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-2xl font-bold hover:bg-zinc-50 transition-all flex items-center gap-2"
              >
                <Video className="w-5 h-5" /> Book Online Consultation
              </a>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <DoctorImage desktopOnly />
          </motion.div>
        </div>
      </div>
    </section>
  );
}