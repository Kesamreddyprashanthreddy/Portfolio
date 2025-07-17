import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Heart, Lightbulb, Zap } from "lucide-react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and pushing creative boundaries"
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Designing experiences that users love and find intuitive"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing every interaction for speed and efficiency"
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4 text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  I'm a passionate Full Stack Developer and ML Engineer with a love for creating intelligent 
                  digital experiences that solve real-world problems. My journey began with curiosity about 
                  how algorithms can transform data into actionable insights, which led me to explore both 
                  web development and machine learning.
                </p>
                
                <p className="text-muted-foreground">
                  I specialize in building end-to-end solutions that seamlessly integrate machine learning 
                  models with scalable web applications. From predictive analytics to intelligent user 
                  interfaces, I bridge the gap between data science and software engineering to create 
                  impactful, AI-powered applications.
                </p>
                
                <p className="text-muted-foreground">
                  When I'm not coding or training models, you'll find me exploring the latest in AI research, 
                  contributing to open-source ML projects, or experimenting with new frameworks. 
                  I believe the future lies in intelligent applications that understand and adapt to user needs.
                </p>
                
                <p className="text-muted-foreground">
                  Currently focused on building scalable web applications that combine 
                  beautiful design with robust functionality. Always excited to tackle 
                  new challenges and collaborate with fellow creators.
                </p>
              </div>

              <motion.div
                className="flex flex-wrap gap-3"
                variants={itemVariants}
              >
                {["Full Stack Developer", "ML Engineer", "Data Scientist", "AI Enthusiast", "Problem Solver", "Continuous Learner"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};