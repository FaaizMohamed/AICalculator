import { motion } from "framer-motion";
import { useEffect } from "react";
import logo from "./logo.png";

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
        className="flex items-center space-x-6" // increased spacing
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      > 
        <img src={logo} alt="AI Sketch Calculator Logo" className="w-24 h-24" />
        <h1 className="text-4xl font-bold text-black">
          AI Sketch Calculator
        </h1>
      </motion.div>
    </div>
  );
}
