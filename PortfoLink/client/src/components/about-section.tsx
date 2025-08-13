import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function AboutSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-white dark:bg-netflix-gray transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white" data-testid="text-about-title">
            About <span className="text-netflix-red">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-testid="text-about-subtitle">
            A passionate learner with a strong foundation in electrical engineering and a growing expertise in web development.
          </p>
        </div>
        
        <div 
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-6">
            <div className="glass-morphism bg-gray-50/50 dark:bg-black/20 p-6 rounded-xl border border-gray-200/20 dark:border-gray-800/20">
              <h3 className="text-2xl font-bold mb-4 text-netflix-red" data-testid="text-my-journey">My Journey</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed" data-testid="text-journey-description">
                I am currently pursuing my B.Tech in Electrical Engineering at Rajkiya Engineering College, Bijnor. 
                My academic journey has provided me with a strong foundation in problem-solving and analytical thinking, 
                which I apply to my passion for technology and web development.
              </p>
            </div>
            
            <div className="glass-morphism bg-gray-50/50 dark:bg-black/20 p-6 rounded-xl border border-gray-200/20 dark:border-gray-800/20">
              <h3 className="text-2xl font-bold mb-4 text-netflix-red" data-testid="text-education">Education</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-lg" data-testid="text-degree">B.Tech, Electrical Engineering</h4>
                  <p className="text-gray-600 dark:text-gray-400" data-testid="text-college">Rajkiya Engineering College, Bijnor</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500" data-testid="text-year">2022 - Present</p>
                </div>
              </div>
            </div>
            
            <div className="glass-morphism bg-gray-50/50 dark:bg-black/20 p-6 rounded-xl border border-gray-200/20 dark:border-gray-800/20">
              <h3 className="text-2xl font-bold mb-4 text-netflix-red" data-testid="text-certifications">Certifications</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-netflix-red mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold" data-testid="text-cert-prompt-eng">Introduction to Prompt Engineering with GitHub Copilot</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400" data-testid="text-cert-prompt-eng-details">SkillUp & Microsoft • August 12, 2025 • Code: 8773027</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-netflix-red mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold" data-testid="text-cert-gemini">Gemini for Google Workspace</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400" data-testid="text-cert-gemini-details">Google Cloud • August 12, 2025 • Code: 8773442</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-netflix-red mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold" data-testid="text-cert-cybersec">Tata - Cybersecurity Analyst Job Simulation</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400" data-testid="text-cert-cybersec-details">Comprehensive cybersecurity analysis training</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Developer workspace with code on screen" 
              className="rounded-xl shadow-lg w-full h-auto glass-morphism border border-gray-200/20 dark:border-gray-800/20"
              data-testid="img-workspace"
            />
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-morphism bg-gray-50/50 dark:bg-black/20 p-4 rounded-xl text-center border border-gray-200/20 dark:border-gray-800/20">
                <div className="text-3xl font-bold text-netflix-red mb-2" data-testid="text-followers-count">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400" data-testid="text-followers-label">GitHub Followers</div>
              </div>
              <div className="glass-morphism bg-gray-50/50 dark:bg-black/20 p-4 rounded-xl text-center border border-gray-200/20 dark:border-gray-800/20">
                <div className="text-3xl font-bold text-netflix-red mb-2" data-testid="text-coding-year">2022</div>
                <div className="text-sm text-gray-600 dark:text-gray-400" data-testid="text-coding-label">Started Coding</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
