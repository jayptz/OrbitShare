import Link from 'next/link';
import { FaGithub } from "react-icons/fa6";
import { GiConcentricCrescents } from "react-icons/gi";
import { IoMailSharp } from "react-icons/io5";




export default function Navbar() {
  return (
    <nav className="bg-black shadow-sm border-b border-purple-700">
      <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        {/* Project Name - Absolute Left */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-white hover:text-purple-700 transition-colors">
            <GiConcentricCrescents className="h-8 w-8" />
            Orbit<span className="text-purple-600">Share</span>
          </Link>
        </div>

        {/* Navigation Links - Right Side */}
        <div className="hidden md:block">
          <div className="flex items-center space-x-8">
            
            <Link href="mailto:jaypt2105@gmail.com" className="text-white hover:text-purple-700 px-3 py-2 text-xl font-medium transition-colors">
            <IoMailSharp />
            </Link>

          <Link href="https://github.com/jayptz/Orbitshare" className="text-white hover:text-purple-700 px-3 py-2 text-sm font-medium transition-colors" >
            <FaGithub className="h-5 w-5" />
          </Link>

          
          </div>
        </div>
      </div>
    </nav>
  );
}
