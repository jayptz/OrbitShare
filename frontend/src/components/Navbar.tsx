import Link from 'next/link';
import { FaGithub } from "react-icons/fa6";
import { GiConcentricCrescents } from "react-icons/gi";


export default function Navbar() {
  return (
    <nav className="bg-black shadow-sm border-b border-purple-700">
      <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        {/* Project Name - Absolute Left */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-white hover:text-purple-700 transition-colors">
            <GiConcentricCrescents className="h-8 w-8" />
            Orbit<div className="text-purple-600">Share</div>
          </Link>
        </div>

        {/* Navigation Links - Right Side */}
        <div className="hidden md:block">
          <div className="flex items-center space-x-8">
            
            <Link href="/documentation" className="text-white hover:text-purple-700 px-3 py-2 text-sm font-medium transition-colors">
              Documentation
            </Link>
            
            <Link href="/about" className="text-white hover:text-purple-700 px-3 py-2 text-sm font-medium transition-colors">
              About
            </Link>
            
            <Link href="/contact" className="text-white hover:text-purple-700 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </Link>
            
            <Link 
            href="https://github.com/jayptz/Orbitshare" 
            className="text-gray-400 px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-purple-500"
          >
            Download
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
