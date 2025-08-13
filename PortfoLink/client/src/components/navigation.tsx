import { useState } from "react";
import { useTheme } from "./theme-provider";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism bg-white/60 dark:bg-netflix-dark/60 border-b border-gray-200/30 dark:border-gray-800/30 transition-colors duration-300 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-netflix-red cursor-pointer transition-all duration-300 hover:scale-110" data-testid="logo">BSG</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-6">
            <button 
              onClick={() => scrollToSection("home")}
              className="nav-link px-4 py-2 text-gray-700 dark:text-gray-300 font-medium"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="nav-link px-4 py-2 text-gray-700 dark:text-gray-300 font-medium"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="nav-link px-4 py-2 text-gray-700 dark:text-gray-300 font-medium"
              data-testid="nav-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className="nav-link px-4 py-2 text-gray-700 dark:text-gray-300 font-medium"
              data-testid="nav-skills"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="nav-link px-4 py-2 text-gray-700 dark:text-gray-300 font-medium"
              data-testid="nav-contact"
            >
              Contact
            </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300"
            data-testid="button-theme-toggle"
          >
            <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${theme === 'dark' ? 'translate-x-7' : 'translate-x-1'}`}>
              {theme === 'light' ? (
                <svg className="w-4 h-4 text-yellow-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-blue-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </span>
          </button>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
            data-testid="button-mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2" data-testid="mobile-menu">
          <div className="px-3 pt-3 pb-4 space-y-2 sm:px-4 glass-morphism bg-white/90 dark:bg-netflix-dark/90 rounded-xl">
            <button 
              onClick={() => scrollToSection("home")}
              className="nav-link block px-4 py-2 text-gray-700 dark:text-gray-300 font-medium w-full text-left"
              data-testid="nav-home-mobile"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="nav-link block px-4 py-2 text-gray-700 dark:text-gray-300 font-medium w-full text-left"
              data-testid="nav-about-mobile"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="nav-link block px-4 py-2 text-gray-700 dark:text-gray-300 font-medium w-full text-left"
              data-testid="nav-projects-mobile"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className="nav-link block px-4 py-2 text-gray-700 dark:text-gray-300 font-medium w-full text-left"
              data-testid="nav-skills-mobile"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="nav-link block px-4 py-2 text-gray-700 dark:text-gray-300 font-medium w-full text-left"
              data-testid="nav-contact-mobile"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}