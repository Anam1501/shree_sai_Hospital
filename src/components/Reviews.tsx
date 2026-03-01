import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { cn } from '../utils/cn';

const testimonials = [
  {
    name: "Jyoti Naik",
    text: "Our entire family has been seeing Dr Ram Pawar for years, and we couldn't be happier . From kids check up to more complex health issue, Dr Pawar Handles everything with expertise and genuine care.",
    rating: 5,
    date: "1 week ago"
  },
  {
    name: "Ayushi T",
    text: "Visited Shree Sai Hospital for emergency treatment and received immediate care. Clean hospital, affordable charges, and experienced doctor. Best multispeciality hospital in Dighi area and facilities are available 24/7",
    rating: 5,
    date: "3 week ago"
  },
  {
    name: "Suryakant Waydande",
    text: "Best hospital in dighi I recommend you that please visit this hospital for best treatment",
    rating: 5,
    date: "2 month ago"
  }
];

const StarRating = ({ rating, size = "w-6 h-6" }: { rating: number; size?: string }) => {
  return (
    <div className="flex items-center gap-1" aria-label={`Rating: ${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((index) => {
        // Calculate fill percentage for each star: 1 for full, 0 for empty, 0.x for partial
        const fillPercentage = Math.min(Math.max(rating - (index - 1), 0), 1) * 100;
        
        return (
          <div key={index} className="relative">
            {/* Base Gray Star (Background) */}
            <Star className={cn(size, "text-zinc-200 fill-zinc-200")} />
            
            {/* Filled Overlay Star (Foreground) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fillPercentage}%` }}
            >
              <Star className={cn(size, "text-amber-400 fill-amber-400")} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default function Reviews() {
  const googleReviewUrl = "https://www.google.com/search?sca_esv=f845591e1947aef4&cs=0&biw=1280&bih=712&sxsrf=ANbL-n6gaBFPSK9kDEFz2wbVAKfMqCDx5g:1772263805061&si=AL3DRZFIhG6pAqfNLal55wUTwygCG0fClF3UxiOmgw9Hq7nbWdw2NiqGPgOgS_nVgqfWzNFE4Jok6_ygADNTQsKFE9-GFx2DaIXk6auboV4u4gasPX6i8Uw6toEuXZdjy525Mse3gBuCJujDyJily-k4jNJavMHULjnpKe7LChTMvyWYDhuPhcM%3D&q=Shree+Sai+Hospital+Dighi+Dr+Ram+Pawar+Reviews&sa=X&ved=2ahUKEwj26rGU1fuSAxWPa_UHHZXvKhwQ0bkNegQIJxAF";
  const averageRating = 4.5;

  return (
    <section id="reviews" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#20B2AA] font-bold text-sm tracking-widest uppercase mb-3">Patient Feedback</h2>
              <h3 className="text-4xl font-bold text-zinc-900 mb-6">
                Trusted by Thousands of <br/>Families in Dighi
              </h3>
              <p className="text-zinc-600">
                We take pride in our commitment to medical excellence and patient satisfaction. See what our patients have to say about their experience at Shree Sai Hospital.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 shadow-xl text-center min-w-[280px]"
          >
            <div className="flex justify-center mb-4">
              <StarRating rating={averageRating} size="w-7 h-7" />
            </div>
            <p className="text-5xl font-black text-zinc-900 mb-2">{averageRating}</p>
            <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6">Google Rating</p>
            <a 
              href={googleReviewUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#20B2AA] font-bold hover:underline group"
            >
              Review us on Google 
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm relative hover:shadow-md transition-shadow flex flex-col h-full"            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-zinc-50" />
              <div className="mb-4">
                <StarRating rating={review.rating} size="w-4 h-4" />
              </div>
              <p className="text-zinc-600 mb-6 italic leading-relaxed flex-grow">
                "{review.text}"
              </p>

              <div className="mt-auto">
                <p className="font-bold text-zinc-900">{review.name}</p>
                <p className="text-xs text-zinc-400">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
