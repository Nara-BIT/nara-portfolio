import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { aspirations } from "../data/constants";
import { FiTarget, FiTrendingUp, FiGlobe, FiBookOpen } from "react-icons/fi";

const icons = [
  <FiTarget />,
  <FiTrendingUp />,
  <FiGlobe />,
  <FiBookOpen />,
];

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Aspirations() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="05" title="What Drives Me" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 leading-relaxed max-w-2xl mb-10"
        >
          My ultimate goal is to become a skilled Software Engineer who builds
          reliable, large-scale systems. Here's what keeps me motivated every
          day:
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-5">
          {aspirations.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group rounded-xl p-6 bg-dark-light border border-dark-lighter hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />

              <span className="relative text-accent text-2xl mb-3 block">
                {icons[i]}
              </span>
              <h3 className="relative text-lg font-semibold text-gray-200 mb-2">
                {item.title}
              </h3>
              <p className="relative text-sm text-gray-500 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}