import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Map, Flower, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "GoAdventureGo",
      description: "A comprehensive travel and hotel booking platform that simplifies trip planning with intuitive search, real-time availability, and seamless booking experiences. Features include interactive maps, user reviews, and personalized recommendations.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      icon: Plane,
      gradient: "from-blue-500 to-purple-600",
      features: ["Real-time booking", "Interactive maps", "Payment integration", "Review system"],
      github: "https://github.com/Kesamreddyprashanthreddy/GoAdventureGo/tree/main/GoAdventureGo",
      demo: "https://kesamreddyprashanthreddy.github.io/GoAdventureGo/"
    },
    {
      title: "Iris Classification",
      description: "An advanced machine learning project that classifies iris flower species using multiple algorithms. Includes data visualization, model comparison, and an interactive web interface for real-time predictions.",
      tech: ["Python", "Scikit-learn", "Pandas", "Flask", "TensorFlow"],
      icon: Flower,
      gradient: "from-green-500 to-teal-600",
      features: ["ML algorithms", "Data visualization", "Model comparison", "Interactive UI"],
      github: "https://github.com/Kesamreddyprashanthreddy/Iris-classification",
      demo: "https://kesamreddyprashanthreddy.github.io/Iris-classification/"
    },
    {
      title: "Maps Tracker",
      description: "A fitness tracking application that monitors running distance and workouts with integrated GPS mapping. Features route planning, performance analytics, and social sharing capabilities.",
      tech: ["React Native", "Google Maps API", "Firebase", "Redux"],
      icon: Map,
      gradient: "from-red-500 to-orange-600",
      features: ["GPS tracking", "Route planning", "Performance analytics", "Social features"],
      github: "https://github.com/Kesamreddyprashanthreddy/Maps",
      demo: "https://kesamreddyprashanthreddy.github.io/Maps/"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" ref={ref} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing solutions that blend creativity with technical excellence
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/30 transition-all duration-300 overflow-hidden">
                  {/* Background gradient effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Project icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center mb-4`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto relative z-20">
                    <button
                      type="button"
                      className="flex-1 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 sm:h-9 px-3 cursor-pointer transition-colors relative z-30 touch-manipulation"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Code button clicked for:', project.title);
                        window.open(project.github, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                    <button
                      type="button"
                      className="flex-1 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 sm:h-9 px-3 cursor-pointer transition-colors disabled:pointer-events-none disabled:opacity-50 relative z-30 touch-manipulation"
                      disabled={!project.demo}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Demo button clicked for:', project.title);
                        if (project.demo) {
                          window.open(project.demo, '_blank', 'noopener,noreferrer');
                        }
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more of my work?
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10"
              onClick={() => window.open('https://github.com/Kesamreddyprashanthreddy', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};