
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-grid pb-20">
      <div className="pt-16 md:pt-24 px-6 max-w-5xl mx-auto">
        <motion.div 
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <motion.div 
            className="relative"
            variants={itemVariants}
            whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }}
          >
            <img 
              src="/mandarin-logo.svg" 
              alt="Mandarynek Logo" 
              className="w-32 h-32 md:w-44 md:h-44 animate-float"
            />
            <div className="absolute inset-0 bg-mandarin-500/20 blur-3xl rounded-full -z-10 animate-pulse-gentle" />
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold mt-8 mb-4 text-mandarin-900 tracking-tight text-shadow-sm"
            variants={itemVariants}
          >
            MANDARYNEK.COM
          </motion.h1>

          <motion.div 
            className="mandarin-glass rounded-2xl p-8 md:p-10 mt-8 max-w-2xl text-center"
            variants={itemVariants}
          >
            <p className="text-lg md:text-xl text-mandarin-950 leading-relaxed">
              Hi! The website is still under construction. If you're interested in our offer or want to order a personalized calligraphy piece, contact me at:
            </p>
            
            <a 
              href="mailto:mandarynka.kaligrafia@gmail.com" 
              className="inline-block mt-4 text-mandarin-600 font-medium text-lg md:text-xl hover:text-mandarin-700 transition-colors underline decoration-mandarin-300 underline-offset-4 hover:decoration-mandarin-500"
            >
              mandarynka.kaligrafia@gmail.com
            </a>
          </motion.div>

          <motion.div 
            className="mt-16 flex gap-2 items-center"
            variants={itemVariants}
          >
            <div className="h-[1px] w-12 bg-mandarin-300"></div>
            <p className="text-mandarin-700 text-sm font-medium">Handmade Calligraphy</p>
            <div className="h-[1px] w-12 bg-mandarin-300"></div>
          </motion.div>

          <motion.div 
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={itemVariants}
          >
            {['Elegance', 'Tradition', 'Craftsmanship'].map((value, index) => (
              <div 
                key={index} 
                className="mandarin-blur rounded-xl px-6 py-4 text-center transform hover:scale-105 transition-transform"
              >
                <p className="text-mandarin-800 font-medium">{value}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
