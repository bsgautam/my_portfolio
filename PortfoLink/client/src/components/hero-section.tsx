import { useEffect, useState } from "react";
import profileImage from "@assets/phantom.png_1755075535451.jpg";

export function HeroSection() {
  const [typingText, setTypingText] = useState("");
  const fullText = "Creative • Learner • Frontend Developer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 parallax-bg bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      ></div>
      <div className="absolute inset-0 bg-black/60 dark:bg-black/80"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="glass-morphism bg-white/10 dark:bg-black/20 rounded-2xl p-8 md:p-12 border border-white/20 dark:border-gray-800/30 animate-fade-in">
          {/* Professional Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden glass-morphism bg-white/20 dark:bg-black/20 border-4 border-netflix-red/50 p-1">
                <img 
                  src={profileImage}
                  alt="Bhopendra Singh Gautam" 
                  className="w-full h-full object-cover rounded-full"
                  data-testid="img-profile"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-netflix-dark flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4" data-testid="text-hero-title">
            <span className="text-white">Bhopendra Singh</span>
            <span className="text-netflix-red"> Gautam</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-200 mb-6 h-8 overflow-hidden">
            <span className="typing-text border-r-2 border-netflix-red" data-testid="text-typing">
              {typingText}
            </span>
          </div>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto" data-testid="text-hero-description">
            Passionate B.Tech Electrical Engineering student at REC Bijnor, dedicated to innovative technology solutions and continuous learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection("projects")}
              className="bg-netflix-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              data-testid="button-view-work"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="glass-morphism bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="flex justify-center space-x-6 mt-8">
            <a 
              href="https://github.com/bsgautam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-netflix-red transition-colors duration-300 transform hover:scale-110"
              data-testid="link-github-hero"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/bhopendra-singh-gautam-bb6267258/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-netflix-red transition-colors duration-300 transform hover:scale-110"
              data-testid="link-linkedin-hero"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="mailto:badal639544@gmail.com" 
              className="text-white hover:text-netflix-red transition-colors duration-300 transform hover:scale-110"
              data-testid="link-email-hero"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
