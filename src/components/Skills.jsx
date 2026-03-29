import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "../data/constants";
import {
  FaReact,
  FaDatabase,
  FaDocker,
  FaPuzzlePiece,
} from "react-icons/fa";

const categoryIcons = [
  <FaReact />,
  <FaDatabase />,
  <FaDocker />,
  <FaPuzzlePiece />,
];

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="02" title="Skills & Technologies" />

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative rounded-xl p-6 bg-dark-light border border-dark-lighter hover:border-accent/40 transition-all duration-300 overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-accent text-2xl">
                    {categoryIcons[i]}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-200">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-500 mb-4">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-dark border border-dark-lighter text-accent/80 hover:border-accent/50 hover:text-accent transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}