import { useEffect, useState } from 'react';

const ModernBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-space via-surface to-surface-elevated">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
      </div>

      {/* Floating geometric shapes with CSS animations */}
      <div className={`transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        {/* Large floating circle */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-primary/20 floating-animation">
          <div className="absolute inset-4 rounded-full border border-primary/10" />
          <div className="absolute inset-8 rounded-full bg-gradient-to-r from-primary/5 to-secondary/5" />
        </div>

        {/* Geometric squares */}
        <div className="absolute top-3/4 left-1/4 w-32 h-32 rotate-45 border border-secondary/30 floating-animation stagger-1">
          <div className="absolute inset-2 border border-secondary/20 bg-secondary/5" />
        </div>

        {/* Small floating dots */}
        <div className="absolute top-1/2 left-1/3 w-4 h-4 rounded-full bg-primary/40 pulse-glow" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-secondary/40 pulse-glow stagger-2" />
        <div className="absolute bottom-1/3 left-2/3 w-2 h-2 rounded-full bg-accent/50 pulse-glow stagger-3" />

        {/* Hexagon shape */}
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 floating-animation stagger-2">
          <div className="w-full h-full bg-gradient-to-r from-primary/10 to-secondary/10 clip-path-hexagon border border-primary/20" />
        </div>

        {/* Animated lines */}
        <div className="absolute top-1/2 left-0 w-full h-px">
          <div className="h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse" />
        </div>
        <div className="absolute top-1/3 left-0 w-full h-px">
          <div className="h-full bg-gradient-to-r from-transparent via-secondary/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-2/3 right-1/4 w-16 h-16 rounded-full bg-primary/20 blur-xl floating-animation" />
        <div className="absolute top-1/4 left-2/3 w-12 h-12 rounded-full bg-secondary/20 blur-lg floating-animation stagger-3" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
    </div>
  );
};

export const Scene3D = ModernBackground;
