'use client'

export function HeroSection() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image with animation */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-pulse-slow"
          style={{
            backgroundImage: `url('https://ext.same-assets.com/911983621/3168817268.png')`,
            animationDuration: '4s'
          }}
        />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6">
          <div className="text-center space-y-6 animate-fade-in">
            {/* Welcome text with glow */}
            <h2 className="text-white text-2xl sm:text-3xl font-medium tracking-wide animate-bounce-slow">
              WELCOME TO
            </h2>

            {/* Main NICVERSE text with individual letter animations */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider">
              <span className="flex justify-center gap-3 sm:gap-4 md:gap-5">
                <span className="text-[#FF00FF] hover:text-[#FF66FF] transition-all duration-300 hover:scale-110 animate-pulse" style={{animationDelay: '0s'}}>N</span>
                <span className="text-[#FF00FF] hover:text-[#FF66FF] transition-all duration-300 hover:scale-110 animate-pulse" style={{animationDelay: '0.1s'}}>I</span>
                <span className="text-[#FF00FF] hover:text-[#FF66FF] transition-all duration-300 hover:scale-110 animate-pulse" style={{animationDelay: '0.2s'}}>C</span>
                <span className="text-[#FF00FF] hover:text-[#FF66FF] transition-all duration-300 hover:scale-110 animate-pulse" style={{animationDelay: '0.3s'}}>V</span>
                <span className="text-[#FF00FF] hover:text-[#FF66FF] transition-all duration-300 hover:scale-110 animate-pulse" style={{animationDelay: '0.4s'}}>E</span>
                <span className="text-[#FF00FF] hover:text-[#FF66FF] transition-all duration-300 hover:scale-110 animate-pulse" style={{animationDelay: '0.5s'}}>R</span>
                <span className="text-[#FF00FF] hover:text-[#FF66FF] transition-all duration-300 hover:scale-110 animate-pulse" style={{animationDelay: '0.6s'}}>S</span>
                <span className="text-[#FF00FF] hover:text-[#FF66FF] transition-all duration-300 hover:scale-110 animate-pulse" style={{animationDelay: '0.7s'}}>E</span>
              </span>
            </h1>

            {/* Tagline with sparkle animations */}
            <p className="text-xl sm:text-2xl text-white/90 font-medium tracking-wide max-w-3xl mx-auto">
              <span className="text-yellow-400 animate-bounce">✨</span>
              <span className="mx-2">WHERE MINECRAFT MEETS CREATIVITY</span>
              <span className="text-yellow-400 animate-bounce" style={{animationDelay: '0.5s'}}>✨</span>
            </p>

            {/* Explore button with enhanced styling */}
            <div className="pt-4">
              <button className="group relative inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 disabled:pointer-events-none disabled:opacity-50 shadow-2xl h-auto bg-black/50 hover:bg-black/70 text-white px-12 py-6 text-xl font-medium tracking-widest uppercase transition-all duration-300 hover:scale-105 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/40">
                <span className="relative z-10">Explore</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
