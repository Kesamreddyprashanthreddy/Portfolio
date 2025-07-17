import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Scene3D } from "./Scene3D";

export const HeroSection = () => {
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

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
 
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Scene3D />
      
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 backdrop-blur-sm" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10"
           style={{ transform: 'perspective(1000px) rotateX(5deg)' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="inline-block">
              <motion.div
                className="text-sm font-mono text-primary border border-primary/20 px-4 py-2 rounded-full bg-primary/5"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Hello, I'm Prashanth Reddy
              </motion.div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <motion.span 
                className="block text-foreground"
                style={{ transform: 'translateZ(50px)' }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Full Stack Developer &
              </motion.span>
              <motion.span 
                className="block gradient-text"
                style={{ transform: 'translateZ(100px)' }}
                whileHover={{ scale: 1.1, rotateY: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                ML Engineer
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4"
          >
            Passionate about creating intelligent web applications that combine cutting-edge machine learning 
            with scalable full-stack development. From AI-powered features to robust backend systems, 
            I bring innovative ideas to life.
          </motion.p>

          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{ transform: 'translateZ(30px)' }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                boxShadow: "0 25px 50px -12px rgba(0, 245, 255, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl border border-primary/20 backdrop-blur-sm"
                style={{ transform: 'perspective(500px) rotateX(10deg)' }}
                onClick={scrollToProjects}
              >
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                rotateY: -10,
                boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 rounded-xl backdrop-blur-sm bg-background/10"
                onClick={scrollToAbout}
                style={{ transform: 'perspective(500px) rotateX(10deg)' }}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: "https://github.com/Kesamreddyprashanthreddy", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/kesam-reddy-prashanth-reddy-857ab6267/", label: "LinkedIn" },
              { icon: Mail, href: "#contact", label: "Contact" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="p-4 rounded-xl bg-surface/50 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: 15,
                  boxShadow: "0 10px 30px -10px rgba(0, 245, 255, 0.2)",
                  transform: "perspective(500px) rotateX(10deg) translateZ(20px)"
                }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
                style={{ transform: 'perspective(500px) rotateX(5deg)' }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} />
      </motion.button>

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
    </section>
  );
};