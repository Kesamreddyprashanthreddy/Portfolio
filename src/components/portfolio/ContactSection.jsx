import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "prashanthreddy0601@gmail.com",
      href: "mailto:prashanthreddy0601@gmail.com",
      description: "Send me an email directly"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7032037747",
      href: "tel:+917032037747",
      description: "Give me a call"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#",
      description: "Based in India"
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
    <section id="contact" ref={ref} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, 
              or simply chat about technology and innovation. Reach out to me directly!
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Skip the contact form and reach out to me directly! I prefer personal communication 
                  and typically respond within a few hours during business days.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-surface-elevated rounded-lg hover:bg-surface border border-border hover:border-primary/30 transition-all duration-200 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-foreground">{info.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{info.description}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Direct Contact Actions */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                  <Mail className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Prefer Direct Communication?</h3>
                <p className="text-muted-foreground">
                  I believe in keeping things simple. Choose your preferred way to connect with me:
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full h-14 text-lg group"
                >
                  <a href="mailto:prashanthreddy0601@gmail.com" className="flex items-center justify-center space-x-3">
                    <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span>Send Email</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>

                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="w-full h-14 text-lg group border-primary/30 hover:border-primary hover:bg-primary/10"
                >
                  <a 
                    href="https://www.linkedin.com/in/kesam-reddy-prashanth-reddy-857ab6267/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3"
                  >
                    <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span>Connect on LinkedIn</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>

              <div className="p-6 bg-surface-elevated rounded-xl border border-border text-center">
                <h4 className="font-semibold text-foreground mb-3">Quick Response Guaranteed!</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  I typically respond to all inquiries within 24 hours. For urgent matters, 
                  don't hesitate to reach out directly via phone.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    "Full-stack Development",
                    "Technical Consulting", 
                    "Code Reviews",
                    "Freelance Projects"
                  ].map((item) => (
                    <span 
                      key={item} 
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
