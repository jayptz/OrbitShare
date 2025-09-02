import Image from "next/image";
import Navbar from "../components/Navbar";
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="text-center text-2xl font-semibold text-gray-800">
          <TypingAnimation duration={60}>Switching Screens, has never been easier.</TypingAnimation>
        </div>
      </div>
    </div>
  );
}
