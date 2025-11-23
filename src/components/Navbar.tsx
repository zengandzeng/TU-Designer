import Link from 'next/link';
import { Home, Edit } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              TU-Designer
            </Link>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              改图大师
            </span>
          </div>
          
          <div className="flex space-x-4">
            <Link 
              href="/"
              className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link 
              href="/editor"
              className="flex items-center space-x-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <Edit size={20} />
              <span>Editor</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
