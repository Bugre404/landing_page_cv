import { motion } from "motion/react";
import { useMemo } from "react";

export const AnimatedBackground = () => {
  // Generate random stars once
  const stars = useMemo(() => {
    return Array.from({ length: 200 }).map((_, i) => ({
      id: i,
      size: Math.random() * 1.5 + 0.5,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 5,
    }));
  }, []);

  // Generate shooting stars config
  const shootingStars = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 50}%`,
      left: `${Math.random() * 90 + 5}%`,
      duration: Math.random() * 3 + 2.5,
      delay: Math.random() * 15,
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Scanner Line */}
      <motion.div
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[1px] bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.3)] pointer-events-none z-10"
      />

      {/* Noise Texture Layer */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>

      {/* Very faint Deep Space Nebulas */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.01, 0.02, 0.01],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] h-[1000px] w-[1000px] rounded-full bg-blue-900 blur-[150px] pointer-events-none"
      />
      
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] right-[10%] h-[700px] w-[700px] rounded-full bg-purple-900 blur-[140px] pointer-events-none"
      />

      {/* Star Field */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ opacity: 0.1 }}
            animate={{ 
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            className="rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          />
        ))}
      </div>

      {/* Shooting Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {shootingStars.map((sStar) => (
          <motion.div
            key={sStar.id}
            initial={{ 
              top: sStar.top, 
              left: sStar.left, 
              opacity: 0, 
              scale: 0,
              x: 0,
              y: 0
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              x: [0, -400],
              y: [0, 400],
            }}
            transition={{
              duration: sStar.duration,
              delay: sStar.delay,
              repeat: Infinity,
              repeatDelay: Math.random() * 8 + 4,
              ease: "circOut",
            }}
            className="absolute w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_12px_2px_rgba(255,255,255,0.9)]"
          >
            {/* Tail */}
            <div className="absolute top-1/2 left-1/2 -translate-x-[20%] -translate-y-[20%] w-[120px] h-[1.5px] bg-gradient-to-r from-white to-transparent rotate-[-45deg] origin-left" />
          </motion.div>
        ))}
      </div>

      {/* Parallax Stars (Moving slowly) */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: "radial-gradient(1.5px 1.5px at 10% 20%, #ffffff, transparent), radial-gradient(1px 1px at 30% 50%, #ffffff, transparent), radial-gradient(1.2px 1.2px at 70% 80%, #ffffff, transparent), radial-gradient(1px 1px at 85% 15%, #ffffff, transparent)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Radial soft shadow for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_0%,rgba(0,0,0,0.7)_100%)]" />
    </div>
  );
};
