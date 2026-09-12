import React from 'react';

const DuckNutzWebsite = () => {
  return (
    <div className="min-h-screen bg-[url('/images/background.jpg')] bg-cover bg-center bg-fixed bg-no-repeat text-slate-900 font-sans overflow-hidden flex flex-col">
      
      <main className="flex-grow py-12 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Section with Frosted Glass Backdrop */}
          <section className="max-w-4xl mx-auto mt-8 mb-20 p-10 md:p-14 bg-white/85 backdrop-blur-md rounded-[3rem] shadow-2xl border border-white/50 text-center">
            <img 
              src="/images/DuckNutzlogo2.png" 
              alt="DuckNutz LLC Mallard Logo" 
              className="h-48 md:h-64 w-auto mx-auto mb-6 drop-shadow-xl hover:scale-105 transition-transform duration-300"
            />
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 tracking-tight mb-3">
              DuckNutz LLC
            </h1>
            <p className="text-orange-600 text-lg md:text-xl font-bold uppercase tracking-widest mb-10">
              Product Management & Architecture
            </p>
            
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-black mb-4 text-slate-800 leading-tight">
                The central hub for our digital portfolio.
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed font-medium">
                We manage the product lifecycle and technical execution for modern software platforms. From user-centric mobile experiences to business-grade AI solutions, we build things that actually work.
              </p>
            </div>
          </section>

          {/* Fun Product Grid */}
          <section className="grid md:grid-cols-3 gap-8 mb-24">
            {/* TapTap Social */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-orange-300 flex flex-col justify-between">
              <div>
                <img src="/images/taptapsplash.png" alt="TapTap Social Icon" className="w-20 h-20 mb-6 drop-shadow-md" />
                <h3 className="text-2xl font-bold mb-3 text-slate-800">TapTap Social</h3>
                <p className="text-slate-600 mb-8 font-medium">
                  A localized real-time social discovery application featuring precise geofencing and venue check-ins. Built to simplify sharing and connecting across your digital networks.
                </p>
              </div>
              <a href="https://www.get-taptap.com/" className="inline-block text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-md hover:shadow-orange-500/30">
                View Platform
              </a>
            </div>

            {/* Sun City Connect */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-blue-300 flex flex-col justify-between">
              <div>
                <img src="/images/SCC.png" alt="Sun City Connect AI Icon" className="w-20 h-20 mb-6 drop-shadow-md" />
                <h3 className="text-2xl font-bold mb-3 text-slate-800">Sun City Connect</h3>
                <p className="text-slate-600 mb-8 font-medium">
                  Specialized B2B artificial intelligence solutions leveraging custom chatbot architecture. Engineered to optimize communication pipelines and automate freight data flow.
                </p>
              </div>
              <a href="https://www.suncityconnect.com/" className="inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-md hover:shadow-blue-600/30">
                Explore AI Solutions
              </a>
            </div>

            {/* Ramped */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-emerald-300 flex flex-col justify-between">
              <div>
                <img src="/images/ramped_logo-nobg.png" alt="Ramped Logo" className="h-20 w-auto mb-6 object-contain drop-shadow-md" />
                <h3 className="text-2xl font-bold mb-3 text-slate-800">Ramped</h3>
                <p className="text-slate-600 mb-8 font-medium">
                  A modern platform designed to streamline professional development and career progression. Built with scalable architecture to support high-volume user interactions.
                </p>
              </div>
              <a href="https://www.ramped.fit/" className="inline-block text-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-md hover:shadow-emerald-500/30">
                View Platform
              </a>
            </div>
          </section>

          {/* Bio Section */}
          <section className="max-w-4xl mx-auto bg-white rounded-[3rem] p-10 md:p-14 shadow-xl border-4 border-white/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-20 translate-y-20"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-shrink-0">
                <img 
                  src="/images/wesOld.png" 
                  alt="Wes Davis" 
                  className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-8 border-orange-100 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-300"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-black text-slate-800 mb-2">Hi, I'm Wes Davis.</h2>
                <h3 className="text-lg font-bold text-orange-500 mb-4 uppercase tracking-wide">Project Coordinator & Architect</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                  Based in El Paso, Texas, I bridge the gap between technical infrastructure and everyday utility. Whether I'm orchestrating application deployments or mapping out the next feature for TapTap, my focus is on building scalable, user-centric software that makes an impact. 
                </p>
                <a 
                  href="https://wesdavis.app" 
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105"
                >
                  Visit My Personal Portfolio
                  <span className="text-xl">→</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-10 text-center mt-12">
        <p className="text-slate-500 font-medium">
          &copy; {new Date().getFullYear()} DuckNutz LLC. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default DuckNutzWebsite;