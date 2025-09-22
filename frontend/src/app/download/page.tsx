import Navbar from "@/components/Navbar";
import Galaxy from "@/components/Galaxy";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function DownloadPage() {
  return (
    <div className="font-sans min-h-screen bg-black relative">
      {/* Galaxy Background */}
      <div className="absolute inset-0 w-full h-full">
        <Galaxy 
          hueShift={280}
          saturation={1}
          glowIntensity={0.2}
          density={3}
          starSpeed={0.3}
          twinkleIntensity={0.6}
          speed={0.8}
          mouseInteraction={false}
        />
      </div>
      
      <div className="relative z-20">
        <Navbar />
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Download <span className="text-purple-600">OrbitShare</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Get the latest version of OrbitShare and start streamlining your screen sharing workflow today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ShimmerButton className="text-lg px-8 py-4">
              Download for Windows
            </ShimmerButton>
            <ShimmerButton className="text-lg px-8 py-4">
              Download for macOS
            </ShimmerButton>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Coming soon! Follow our GitHub for updates.
          </p>
        </div>
      </div>
    </div>
  );
}
