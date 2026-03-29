import { motion } from "framer-motion";

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.8, ease: "easeInOut" },
  },
};

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-center gap-6">
        {/* Animated hexagon */}
        <motion.svg
          width="80"
          height="90"
          viewBox="0 0 80 90"
          initial="hidden"
          animate="visible"
        >
          <motion.polygon
            points="40,2 76,23 76,67 40,88 4,67 4,23"
            fill="none"
            stroke="#64ffda"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={pathVariants}
          />
          <motion.text
            x="40"
            y="55"
            textAnchor="middle"
            fill="#64ffda"
            fontFamily="monospace"
            fontSize="32"
            fontWeight="bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            N
          </motion.text>
        </motion.svg>

        {/* Loading bar */}
        <div className="w-40 h-[2px] bg-dark-lighter rounded overflow-hidden">
          <motion.div
            className="h-full bg-accent rounded"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}