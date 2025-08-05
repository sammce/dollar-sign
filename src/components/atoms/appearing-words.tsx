import { motion } from "motion/react";

export default function AppearingWords() {
  return (
    <div className="flex flex-row gap-2 min-h-screen bg-primary">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="h-3 w-3 bg-white rounded-full"
      >
        Hey
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="h-3 w-3 bg-white rounded-full"
      >
        There
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="h-3 w-3 bg-white rounded-full"
      >
        Delilah
      </motion.div>
    </div>
  );
}
