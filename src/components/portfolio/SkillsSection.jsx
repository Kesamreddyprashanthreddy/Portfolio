import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Frontend Mastery",
      color: "from-cyan-400 to-blue-500",
      icon: "🎨",
      skills: [
        { 
          name: "React", 
          icon: "⚛️", 
          description: "Building dynamic UIs",
          years: "3+",
          level: "Expert"
        },
        { 
          name: "TypeScript", 
          icon: "🔷", 
          description: "Type-safe development",
          years: "2+",
          level: "Advanced"
        },
        { 
          name: "Next.js", 
          icon: "▲", 
          description: "Full-stack React apps",
          years: "2+",
          level: "Advanced"
        },
        { 
          name: "Tailwind", 
          icon: "🎭", 
          description: "Utility-first styling",
          years: "2+",
          level: "Expert"
        },
      ]
    },
    {
      title: "Backend Power",
      color: "from-green-400 to-emerald-500",
      icon: "⚡",
      skills: [
        { 
          name: "Node.js", 
          icon: "🟢", 
          description: "Server-side JavaScript",
          years: "3+",
          level: "Expert"
        },
        { 
          name: "Python", 
          icon: "�", 
          description: "Versatile programming",
          years: "4+",
          level: "Expert"
        },
        { 
          name: "Express", 
          icon: "🚀", 
          description: "Web application framework",
          years: "3+",
          level: "Advanced"
        },
        { 
          name: "FastAPI", 
          icon: "⚡", 
          description: "High-performance APIs",
          years: "1+",
          level: "Proficient"
        },
      ]
    },
    {
      title: "Data & Cloud",
      color: "from-purple-400 to-pink-500",
      icon: "☁️",
      skills: [
        { 
          name: "MongoDB", 
          icon: "🍃", 
          description: "NoSQL database",
          years: "2+",
          level: "Advanced"
        },
        { 
          name: "PostgreSQL", 
          icon: "🐘", 
          description: "Relational database",
          years: "2+",
          level: "Advanced"
        },
        { 
          name: "AWS", 
          icon: "☁️", 
          description: "Cloud infrastructure",
          years: "1+",
          level: "Proficient"
        },
        { 
          name: "Docker", 
          icon: "�", 
          description: "Containerization",
          years: "1+",
          level: "Proficient"
        },
      ]
    },
    {
      title: "AI & Innovation",
      color: "from-orange-400 to-red-500",
      icon: "🤖",
      skills: [
        { 
          name: "Machine Learning", 
          icon: "🧠", 
          description: "Predictive modeling",
          years: "2+",
          level: "Advanced"
        },
        { 
          name: "TensorFlow", 
          icon: "🔬", 
          description: "Deep learning framework",
          years: "1+",
          level: "Proficient"
        },
        { 
          name: "Data Analysis", 
          icon: "📊", 
          description: "Insights from data",
          years: "2+",
          level: "Advanced"
        },
        { 
          name: "OpenAI APIs", 
          icon: "✨", 
          description: "AI-powered features",
          years: "1+",
          level: "Proficient"
        },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 }
    },
  };

  return (
    <section id="skills" ref={ref} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div 
            variants={categoryVariants} 
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-surface-elevated border border-border rounded-full">
              <span className="text-2xl">💻</span>
              <span className="text-sm font-mono text-muted-foreground">Skills & Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold">
              Technical <span className="gradient-text">Arsenal</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Technologies mastered through passion, dedication, and countless hours of building real-world solutions
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                className="group"
              >
                <div className="relative p-8 bg-surface border border-border rounded-3xl hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  {/* Category Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl`}>
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        className="group/skill relative p-4 bg-surface-elevated border border-border rounded-xl hover:border-primary/30 transition-all duration-300 cursor-pointer"
                        onHoverStart={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        whileHover={{ y: -4, scale: 1.02 }}
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-2xl">{skill.icon}</span>
                            <div className="text-right">
                              <div className="text-xs text-muted-foreground">{skill.years}</div>
                              <div className="text-xs text-primary font-mono">{skill.level}</div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-foreground group-hover/skill:text-primary transition-colors">
                              {skill.name}
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {skill.description}
                            </p>
                          </div>

                          {/* Animated underline */}
                          <div className="h-0.5 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                              initial={{ width: 0 }}
                              animate={
                                hoveredSkill === `${categoryIndex}-${skillIndex}` 
                                  ? { width: "100%" } 
                                  : { width: "0%" }
                              }
                              transition={{ duration: 0.3 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Showcase */}
          <motion.div 
            variants={categoryVariants}
            className="relative p-8 bg-gradient-to-r from-surface to-surface-elevated border border-border rounded-3xl"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                <span className="gradient-text">Favorite Stack</span>
              </h3>
              <p className="text-muted-foreground">The technologies I reach for when building something amazing</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "MERN Stack", icon: "⚛️", desc: "MongoDB, Express, React, Node.js" },
                { name: "TypeScript", icon: "🔷", desc: "Type-safe development" },
                { name: "Tailwind CSS", icon: "🎨", desc: "Rapid UI development" },
                { name: "Next.js", icon: "▲", desc: "Full-stack React framework" },
                { name: "Python + FastAPI", icon: "🐍", desc: "High-performance APIs" },
                { name: "AWS + Docker", icon: "☁️", desc: "Cloud deployment" },
              ].map((tech) => (
                <motion.div
                  key={tech.name}
                  className="group relative p-6 bg-surface border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 max-w-xs"
                  whileHover={{ y: -8, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-center space-y-3">
                    <div className="text-3xl">{tech.icon}</div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {tech.desc}
                    </p>
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
