import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 ">
          {/* Project Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
              OrbitShare
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex-end space-x-8">
              
              <Link href="/documentation" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                Documentation
              </Link>
              
              <Link href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                About
              </Link>
              
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </Link>
              
              <Link 
              href="/signin" 
              className="text-black px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Sign in
            </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
