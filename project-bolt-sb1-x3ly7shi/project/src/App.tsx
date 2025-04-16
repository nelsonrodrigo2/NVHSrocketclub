import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Video, Users, Info, BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

// Components
import Logo from './components/Logo';

// Pages
import Home from './pages/Home';
import Tutorials from './pages/Tutorials';
import Contact from './pages/Contact';
import Information from './pages/Information';
import Rules from './pages/Rules';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', path: '/', icon: Logo },
    { name: 'Tutorials', path: '/tutorials', icon: Video },
    { name: 'Contact', path: '/contact', icon: Users },
    { name: 'Information', path: '/information', icon: Info },
    { name: 'Rules', path: '/rules', icon: BookOpen },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Logo />
                <span className="ml-2 text-xl font-bold">Neuqua Valley Rocket Club</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      <div className="flex items-center space-x-1">
                        {item.name === 'Home' ? null : <item.icon className="h-4 w-4" />}
                        <span>{item.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md hover:bg-blue-700 focus:outline-none"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-2">
                      {item.name === 'Home' ? null : <item.icon className="h-5 w-5" />}
                      <span>{item.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/information" element={<Information />} />
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <Logo />
                <span className="ml-2 text-lg font-semibold">Neuqua Valley Rocket Club</span>
              </div>
              <div className="text-sm text-gray-400">
                © {new Date().getFullYear()} Neuqua Valley Rocket Club. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;