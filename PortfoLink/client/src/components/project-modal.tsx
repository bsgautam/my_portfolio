import { useEffect } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      data-testid="modal-project"
    >
      <div className="glass-morphism-strong bg-white/90 dark:bg-netflix-gray/90 rounded-2xl max-w-4xl w-full max-h-screen overflow-y-auto border border-gray-200/20 dark:border-gray-800/20">
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white" data-testid="text-modal-title">
              Flipkart Clone - Detailed View
            </h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-netflix-red transition-colors duration-300"
              data-testid="button-close-modal"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
            alt="E-commerce product listing interface" 
            className="rounded-xl shadow-lg w-full h-64 md:h-80 object-cover mb-6"
            data-testid="img-modal-project"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white" data-testid="text-project-overview">
                Project Overview
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6" data-testid="text-overview-description">
                A full-featured e-commerce platform that replicates the core functionality of Flipkart. 
                This project demonstrates my ability to create complex, scalable web applications with 
                modern development practices.
              </p>
              
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white" data-testid="text-key-features">
                Key Features
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center" data-testid="feature-auth">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  User Authentication & Authorization
                </li>
                <li className="flex items-center" data-testid="feature-catalog">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Product Catalog with Search & Filtering
                </li>
                <li className="flex items-center" data-testid="feature-cart">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Shopping Cart & Wishlist
                </li>
                <li className="flex items-center" data-testid="feature-orders">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Order Management System
                </li>
                <li className="flex items-center" data-testid="feature-payment">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Payment Gateway Integration
                </li>
                <li className="flex items-center" data-testid="feature-responsive">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Responsive Design
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white" data-testid="text-technologies-used">
                Technologies Used
              </h4>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center space-x-2" data-testid="tech-react-detail">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">R</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">React.js</span>
                </div>
                <div className="flex items-center space-x-2" data-testid="tech-nodejs-detail">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">N</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">Node.js</span>
                </div>
                <div className="flex items-center space-x-2" data-testid="tech-mongodb-detail">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">M</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">MongoDB</span>
                </div>
                <div className="flex items-center space-x-2" data-testid="tech-express-detail">
                  <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">E</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">Express.js</span>
                </div>
                <div className="flex items-center space-x-2" data-testid="tech-tailwind-detail">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">T</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">Tailwind CSS</span>
                </div>
                <div className="flex items-center space-x-2" data-testid="tech-javascript-detail">
                  <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">JS</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">JavaScript ES6+</span>
                </div>
              </div>
              
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white" data-testid="text-project-links">
                Project Links
              </h4>
              <div className="space-y-3">
                <a 
                  href="https://github.com/bsgautam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-gray-900 hover:bg-black text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
                  data-testid="link-github-modal"
                >
                  <svg className="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
                <button 
                  className="block w-full glass-morphism bg-gray-100/50 dark:bg-black/20 text-gray-700 dark:text-gray-300 border border-gray-300/30 dark:border-gray-600/30 px-4 py-3 rounded-lg font-semibold transition-all duration-300 opacity-75 cursor-not-allowed"
                  disabled
                  data-testid="button-live-demo"
                >
                  <svg className="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  Live Demo (Coming Soon)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
