
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
          >
            <img 
              src="/mandarin-logo.png" 
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
              Cześć! <br/>
              🧡 Już niedługo pojawi się tutaj pełna wersja sklepu! 🧡 <br/>
              Nasza strona jest jeszcze w budowie, ale już teraz możesz zamówić unikalne chińskie i japońskie zwoje z ręcznie wykonaną kaligrafią. <br/>
              Jeśli jesteś zainteresowany/a, napisz do mnie:
            </p>
            
            <a 
              href="mailto: mandarynka.kaligrafia@gmail.com" 
              className="inline-block mt-4 text-mandarin-600 font-medium text-lg md:text-xl hover:text-mandarin-700 transition-colors underline decoration-mandarin-300 underline-offset-4 hover:decoration-mandarin-500"
            >
              📧 mandarynka.kaligrafia@gmail.com 📧
            </a>
          </motion.div>

          <motion.div 
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <p className="text-mandarin-700 font-medium text-lg">
              Handmade Calligraphy
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
