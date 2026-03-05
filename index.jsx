import React, { useState } from 'react';

export default function ResponsivePopup() {
  const [activeTab, setActiveTab] = useState(0);

  const popupData = [
    {
      image: 'https://via.placeholder.com/800x600/6366f1/ffffff?text=Image+1',
      title: 'Mountain Serenity',
      body: 'Discover the tranquil beauty of untouched peaks where silence speaks louder than words. Experience nature in its purest form, away from the chaos of modern life.'
    },
    {
      image: 'https://via.placeholder.com/800x600/ec4899/ffffff?text=Image+2',
      title: 'Ocean Dreams',
      body: 'Dive into the endless horizons of azure waters. Let the rhythm of the waves guide your journey to inner peace and contemplation.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Background with image and dim overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://via.placeholder.com/1920x1080/1e293b/ffffff?text=Background')`
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Popup Container */}
      <div className="relative w-full max-w-[480px] aspect-square bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={() => console.log('Close popup')}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-all duration-300 hover:rotate-90 group"
          aria-label="Close"
        >
          <svg className="w-5 h-5 text-gray-700 group-hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Tab Navigation */}
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          {[0, 1].map((idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeTab === idx 
                  ? 'bg-gray-900 w-8' 
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
              aria-label={`Tab ${idx + 1}`}
            />
          ))}
        </div>

        {/* Content Slider */}
        <div className="relative h-full overflow-hidden">
          {popupData.map((item, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                activeTab === idx 
                  ? 'translate-x-0 opacity-100' 
                  : idx < activeTab 
                    ? '-translate-x-full opacity-0' 
                    : 'translate-x-full opacity-0'
              }`}
            >
              {/* Image Section */}
              <div className="relative h-[55%] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
              </div>

              {/* Text Content */}
              <div className="h-[45%] p-8 flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-4 text-gray-900 leading-tight">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setActiveTab((prev) => Math.max(0, prev - 1))}
          disabled={activeTab === 0}
          className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center transition-all duration-300 ${
            activeTab === 0 
              ? 'opacity-0 pointer-events-none' 
              : 'opacity-100 hover:bg-white hover:scale-110'
          }`}
          aria-label="Previous"
        >
          <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => setActiveTab((prev) => Math.min(1, prev + 1))}
          disabled={activeTab === 1}
          className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center transition-all duration-300 ${
            activeTab === 1 
              ? 'opacity-0 pointer-events-none' 
              : 'opacity-100 hover:bg-white hover:scale-110'
          }`}
          aria-label="Next"
        >
          <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @media (max-width: 640px) {
          .aspect-square {
            aspect-ratio: 3 / 4;
          }
        }

        @media (max-width: 400px) {
          .text-4xl {
            font-size: 1.875rem;
            line-height: 2.25rem;
          }
          
          div[class*="p-8"] {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
