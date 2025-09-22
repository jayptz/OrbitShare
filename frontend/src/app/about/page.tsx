import Navbar from "@/components/Navbar";
import Galaxy from "@/components/Galaxy";

export default function AboutPage() {
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
            About <span className="text-purple-600">OrbitShare</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            OrbitShare is a revolutionary screen sharing tool designed to make multi-device workflows effortless. 
            Built for presenters, developers, and remote workers who need seamless screen switching without interrupting their flow.
          </p>
        </div>
      </div>
    </div>
  );
}
