import React from 'react';
import { Phone, MapPin, Clock, ExternalLink, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const hospitalPhone = "+919823122768"; 
  const whatsappNumber = "+919823122768"; 
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d236.31750360711504!2d73.87189252996801!3d18.615468553075132!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c70e90010067%3A0x8555d1e01da80701!2sSHREE%20SAI%20HOSPITAL%20DIGHI%20DR%20RAM%20PAWAR!5e0!3m2!1sen!2sin!4v1772024512257!5m2!1sen!2sin";
  const googleMapsUrl = "https://www.google.com/maps/place/SHREE+SAI+HOSPITAL+DIGHI+DR+RAM+PAWAR/@18.6154438,73.8694877,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c70e90010067:0x8555d1e01da80701!8m2!3d18.6154438!4d73.8720626!16s%2Fg%2F1pp2vls6x?entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3D";
  
  return (
    <section id="contact" className="py-24 bg-zinc-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-400 font-bold text-sm tracking-widest uppercase mb-3">Contact Us</h2>
            <h3 className="text-4xl font-bold mb-8">Visit Shree Sai Hospital</h3>
            
            <div className="space-y-8">
              <a href={`tel:${hospitalPhone}`} className="flex gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-5 h-5 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-zinc-400 text-sm mb-1">Appointments & Emergency</p>
                  <p className="text-xl font-bold group-hover:text-blue-400 transition-colors">{hospitalPhone}</p>
                </div>
              </a>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-zinc-400 text-sm mb-1">Hospital Address</p>
                  <p className="text-xl font-bold">Sai Park Rd, Ymai Nagar, Mauli Nagar, Dighi,<br/>Pune, Pimpri-Chinchwad, Maharashtra 411015</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-zinc-400 text-sm mb-1">Working Hours</p>
                  <p className="text-xl font-bold">Open 24/7</p>
                  <p className="text-xl font-bold">All days (Mon-Sun)</p>
                  <p className="text-zinc-500 text-sm"></p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-zinc-800 text-white px-6 py-3 rounded-xl font-bold hover:bg-zinc-700 transition-all"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/2] rounded-[3rem] overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-800">
              <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.1) contrast(1.1) brightness(0.95)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shree Sai Hospital Location"
                className="opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent pointer-events-none" />
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 bg-blue-600 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-2 font-bold text-sm hover:scale-105 transition-transform md:hidden"
              >
                <ExternalLink className="w-4 h-4 text-white" /> Open in Maps
              </a>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-blue-600 p-5 rounded-3xl shadow-xl hidden sm:block">
              <p className="text-white font-bold text-sm">Verified Location</p>
              <p className="text-blue-100 text-[10px] uppercase tracking-wider font-medium">Dighi, Pune</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}