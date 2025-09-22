import Navbar from "@/components/Navbar";
import Galaxy from "@/components/Galaxy";

export default function DocumentationPage() {
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
            Documentation
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Learn how to use OrbitShare to streamline your screen sharing workflow. 
            Documentation coming soon!
          </p>
        </div>
      </div>
    </div>
  );
}
