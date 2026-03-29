import { motion } from "framer-motion";

export default function SectionHeading({ number, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 mb-12"
    >
      <span className="font-mono text-accent text-lg md:text-xl">
        {number}.
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-200 whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-1 h-px bg-dark-lighter ml-4 max-w-xs" />
    </motion.div>
  );
}