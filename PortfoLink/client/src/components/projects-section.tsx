import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface ProjectsSectionProps {
  onOpenModal: () => void;
}

export function ProjectsSection({ onOpenModal }: ProjectsSectionProps) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="projects" className="py-20 bg-light-bg dark:bg-netflix-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white" data-testid="text-projects-title">
            Featured <span className="text-netflix-red">Project</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-testid="text-projects-subtitle">
            Showcasing my latest work in full-stack development and e-commerce solutions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div 
            ref={ref}
            className={`glass-morphism bg-white/50 dark:bg-black/20 rounded-2xl p-8 border border-gray-200/20 dark:border-gray-800/20 transform hover:scale-105 transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
              alt="E-commerce website interface" 
              className="rounded-xl shadow-lg w-full h-64 md:h-80 object-cover mb-6"
              data-testid="img-project-featured"
            />
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="bg-netflix-red text-white px-3 py-1 rounded-full text-sm font-semibold" data-testid="badge-featured">Featured</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold" data-testid="badge-ecommerce">E-commerce</span>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white" data-testid="text-project-title">Flipkart Clone</h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed" data-testid="text-project-description">
                A comprehensive e-commerce platform inspired by Flipkart, featuring user authentication, 
                product catalog, shopping cart functionality, and payment integration. Built with modern 
                web technologies and responsive design principles.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm" data-testid="tech-react">React</span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm" data-testid="tech-nodejs">Node.js</span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm" data-testid="tech-mongodb">MongoDB</span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm" data-testid="tech-express">Express</span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm" data-testid="tech-tailwind">Tailwind CSS</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onOpenModal}
                  className="bg-netflix-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  data-testid="button-view-details"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  View Details
                </button>
                <a 
                  href="https://github.com/bsgautam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-morphism bg-white/20 hover:bg-white/30 dark:bg-black/20 dark:hover:bg-black/30 text-gray-900 dark:text-white border border-gray-300/30 dark:border-gray-600/30 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  data-testid="link-view-code"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
