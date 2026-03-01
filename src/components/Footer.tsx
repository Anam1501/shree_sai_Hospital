import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-zinc-50 py-16 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-zinc-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="/#home" className="hover:text-[#20B2AA] transition-colors">Home</a></li>
                <li><a href="/#about" className="hover:text-[#20B2AA] transition-colors">About Dr. Pawar</a></li>
                <li><a href="/#services" className="hover:text-[#20B2AA] transition-colors">Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-zinc-900 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="/#reviews" className="hover:text-[#20B2AA] transition-colors">Reviews</a></li>
                <li><a href="/#contact" className="hover:text-[#20B2AA] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Shree Sai Hospital Dr.Ram Pawar | Multispeciality Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}