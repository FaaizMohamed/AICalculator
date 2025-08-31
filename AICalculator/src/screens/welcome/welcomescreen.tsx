import { motion } from "framer-motion";
import { useEffect } from "react";

interface SplashProps {
  onFinish: () => void;
}

export default function Splash({ onFinish }: SplashProps) {
  useEffect(() => {
    // Match this timeout with the animation duration
    const timer = setTimeout(() => {
      onFinish();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <motion.div
        className="flex items-center space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Replace with your logo image if you prefer */}
        <img
          src="/logo.png"
          alt="AI Sketch Calculator Logo"
          className="w-16 h-16"
        />
        <h1 className="text-2xl font-bold text-black">AI Sketch Calculator</h1>
      </motion.div>
    </div>
  );
}
