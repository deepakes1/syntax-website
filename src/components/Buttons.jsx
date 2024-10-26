import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Buttons() {
  const buttonVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const floatAnimation = {
    y: ["0%", "-10%", "0%"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const rotateAnimation = {
    rotate: [0, 5, 0, -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div 
      className="flex flex-col flex-wrap items-center justify-center h-[15vh] p-4"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div variants={buttonVariants}>
          <motion.div animate={pulseAnimation}>
            <Link to="/events">
              <Button className="w-40 h-16 text-lg font-semibold bg-black hover:bg-pink-600 text-white">
                Events
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div variants={buttonVariants}>
          <motion.div animate={floatAnimation}>
            <Link to="/Instructions">
              <Button className="w-40 h-16 text-lg font-semibold bg-black hover:bg-yellow-600 text-white">
                Instruction
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div variants={buttonVariants}>
          <motion.div animate={floatAnimation}>
            <Link to="/Schedule">
              <Button className="w-40 h-16 text-lg font-semibold bg-black hover:bg-yellow-600 text-white">
                Event Schedule
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div variants={buttonVariants}>
          <motion.div animate={rotateAnimation}>
            <Link to="/Faq">
              <Button className="w-40 h-16 text-lg font-semibold bg-black hover:bg-yellow-600 text-white">
                FAQ
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
