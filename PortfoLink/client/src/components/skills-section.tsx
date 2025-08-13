import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const skills = [
  {
    icon: "💻",
    title: "Frontend Development",
    description: "Building responsive and user-friendly web interfaces with modern frameworks and technologies.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React"],
    bgColor: "bg-blue-100 dark:bg-blue-900",
    textColor: "text-blue-800 dark:text-blue-200"
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user experiences with modern design principles.",
    technologies: ["Figma", "Tailwind", "Bootstrap"],
    bgColor: "bg-purple-100 dark:bg-purple-900",
    textColor: "text-purple-800 dark:text-purple-200"
  },
  {
    icon: "📱",
    title: "Version Control",
    description: "Experienced in collaborative development workflows and project management.",
    technologies: ["Git", "GitHub"],
    bgColor: "bg-green-100 dark:bg-green-900",
    textColor: "text-green-800 dark:text-green-200"
  },
  {
    icon: "💬",
    title: "Communication",
    description: "Effective at conveying complex ideas clearly and working collaboratively in teams.",
    technologies: ["Team Work", "Presentation"],
    bgColor: "bg-yellow-100 dark:bg-yellow-900",
    textColor: "text-yellow-800 dark:text-yellow-200"
  },
  {
    icon: "🐧",
    title: "Linux",
    description: "Comfortable navigating and operating within Linux environments for development.",
    technologies: ["Ubuntu", "Terminal"],
    bgColor: "bg-gray-100 dark:bg-gray-700",
    textColor: "text-gray-800 dark:text-gray-200"
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    description: "Understanding of security principles and practices through certified training.",
    technologies: ["Analysis", "Security"],
    bgColor: "bg-red-100 dark:bg-red-900",
    textColor: "text-red-800 dark:text-red-200"
  }
];

export function SkillsSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="skills" className="py-20 bg-white dark:bg-netflix-gray transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white" data-testid="text-skills-title">
            Technical <span className="text-netflix-red">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-testid="text-skills-subtitle">
            A comprehensive toolkit for modern web development and beyond.
          </p>
        </div>
        
        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="skill-card glass-morphism bg-gray-50/50 dark:bg-black/20 p-6 rounded-xl border border-gray-200/20 dark:border-gray-800/20 transform hover:scale-105 transition-all duration-300 cursor-pointer"
              data-testid={`card-skill-${index}`}
            >
              <div className="text-4xl mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white" data-testid={`text-skill-title-${index}`}>
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4" data-testid={`text-skill-description-${index}`}>
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className={`${skill.bgColor} ${skill.textColor} px-2 py-1 rounded text-sm`}
                    data-testid={`badge-tech-${index}-${techIndex}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
