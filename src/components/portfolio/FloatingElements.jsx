import { motion } from "framer-motion";

export const FloatingElements = () => {
  const elements = [
    { size: "w-2 h-2", delay: 0, duration: 20 },
    { size: "w-1 h-1", delay: 5, duration: 25 },
    { size: "w-3 h-3", delay: 10, duration: 15 },
    { size: "w-1.5 h-1.5", delay: 15, duration: 30 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-1">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} bg-primary/20 rounded-full`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Geometric shapes */}
      <motion.div
        className="absolute top-1/4 right-10 w-4 h-4 border border-secondary/30 rotate-45"
        animate={{ rotate: [45, 225, 45] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-10 w-6 h-6 border border-primary/30"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};