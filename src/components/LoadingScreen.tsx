
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * 10;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => {
          onLoadComplete();
        }, 1000);
      }, 500);
    }
  }, [progress, onLoadComplete]);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    },
    exit: {
      y: -20,
      opacity: 0
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-portfolio-dark"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-center"
        variants={container}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div
          variants={item}
          className="mb-6 text-4xl md:text-6xl font-bold text-gradient"
        >
          K<span className="text-white">S</span>
        </motion.div>

        <motion.div
          variants={item}
          className="relative w-64 md:w-80 h-[2px] bg-gray-800 rounded-full mb-6 overflow-hidden"
        >
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-portfolio-blue to-portfolio-teal"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          variants={item}
          className="text-portfolio-gray"
        >
          {progress === 100 ? "Welcome to my portfolio" : "Loading..."}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
