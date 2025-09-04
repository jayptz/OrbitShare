import Image from "next/image";
import Navbar from "../components/Navbar";
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-black">
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="text-center">
          <div className="text-6xl font-bold text-white mb-6">
            OrbitShare
          </div>
          <div className="text-lg font-medium text-gray-300">
            <TypingAnimation duration={60}>Switching Screens, has never been easier.</TypingAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}
