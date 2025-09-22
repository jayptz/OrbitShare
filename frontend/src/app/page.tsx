import Link from 'next/link';
import Navbar from "../components/Navbar";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Galaxy from "@/components/Galaxy";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-black relative">
      {/* Galaxy Background */}
      <div className="absolute inset-0 w-full h-full">
        <Galaxy 
          hueShift={280}           // Purple/blue hue
          saturation={1}         // Slightly colorful
          glowIntensity={0.2}      // Brighter glow
          density={3}            // More stars
          starSpeed={0.3}          // Slower movement
          twinkleIntensity={0.6}   // More twinkling
          speed={0.8}              // Slower overall animation
          mouseInteraction={false} // Disable mouse hover effects
        />
      </div>
      
      <div className="relative z-20">
        <Navbar />
      </div>
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="text-center">
          <div className="text-6xl font-bold text-white mb-6">
            Orbit<span className="text-purple-600">Share</span>
          </div>
          <div className="text-lg font-medium text-gray-300">
            <TypingAnimation duration={60}>Switching Screens, has never been easier.</TypingAnimation>
          </div>
          <div className="flex justify-center mt-6">
            <Link href="/signup">
              <ShimmerButton>Sign Up</ShimmerButton>
            </Link>
          </div>
          
          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center text-white/60 hover:text-white/80 transition-colors cursor-pointer">
              <span className="text-sm mb-2">Scroll to learn more</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Showcase / Features */}
      <section id="showcase" className="relative z-10 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-300">Take control of screen sharing</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              No more stop → modal → reselect. OrbitShare lets you swap displays with one hotkey
              or a quick tray pick — works across Meet, Teams, Zoom, and more.
            </p>
          </div>

          <BentoGrid className="max-w-4xl mx-auto gap-10 ">
            <BentoCard
              name="Hotkey Switch"
              className="col-span-3 md:col-span-1 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 [&_h3]:text-white"
              background={
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-purple-800/5" />
              }
              Icon={() => (
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-purple-500/20">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v10H4zM10 18h4" />
                  </svg>
                </div>
              )}
              description="Cycle monitors instantly with a global shortcut. No flow break, no modal."
              href="#"
              cta="Learn more"
            />
            
            <BentoCard
              name="Tray Picker"
              className="col-span-3 md:col-span-1 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 [&_h3]:text-white"
              background={
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-blue-800/5" />
              }
              Icon={() => (
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-blue-500/20">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                  </svg>
                </div>
              )}
              description="Menu-bar / system-tray menu shows all displays with tiny thumbnails — click to switch."
              href="#"
              cta="Learn more"
            />
            
            <BentoCard
              name="Voice Change (soon)"
              className="col-span-3 md:col-span-1 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 [&_h3]:text-white"
              background={
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-transparent to-emerald-800/5" />
              }
              Icon={() => (
                <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-emerald-500/20">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M9 16h6M8 8h8" />
                  </svg>
                </div>
              )}
              description="Name a display 'Slides' or 'Code,' or let AI recognize it and switch by saying it."
              href="#"
              cta="Learn more"
            />
          </BentoGrid>

          {/* Why it matters */}
          <div className="mt-14 md:mt-16 grid md:grid-cols-2 gap-6 md:gap-10">
            <div className="bg-white/5 rounded-xl p-7 border border-white/10">
              <h4 className="text-xl font-semibold mb-2 text-white">Why presenters love it</h4>
              <p className="text-gray-300 text-sm">
                Stop fumbling with pickers. Keep momentum in lectures, demos, and standups by switching in-place.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-7 border border-white/10">
              <h4 className="text-xl font-semibold mb-2 text-white">Privacy-first defaults</h4>
              <p className="text-gray-300 text-sm">
                Local capture and control. If you enable AI features, analysis can run on-device. No screen content leaves your machine unless you choose cloud ASR.
              </p>
            </div>
          </div>
          {/* Footer CTA */}
          <div className="mt-12 md:mt-14 flex items-center justify-center gap-3">
            <Link href="https://github.com/jayptz/OrbitShare">
              <ShimmerButton>Star on GitHub</ShimmerButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Simple footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-xs text-white/60">
        MIT © {new Date().getFullYear()} OrbitShare
      </footer>
    </div>
  );
}
