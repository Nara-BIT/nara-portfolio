import { motion } from "framer-motion";
import { socials } from "../data/constants";

export default function SocialSidebar() {
  return (
    <>
      {/* Left — Social icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="fixed bottom-0 left-6 xl:left-10 z-30 hidden md:flex flex-col items-center gap-5"
      >
        {socials.map(({ name, url, Icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={name}
            data-cursor="pointer"
            className="text-gray-400 hover:text-accent hover:-translate-y-1 transition-all duration-200 text-xl"
          >
            <Icon />
          </a>
        ))}
        <div className="w-px h-24 bg-gray-500" />
      </motion.div>

      {/* Right — Email */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="fixed bottom-0 right-6 xl:right-10 z-30 hidden md:flex flex-col items-center gap-5"
      >
        <a
          href="mailto:narasinghjadhav03@gmail.com"
          data-cursor="pointer"
          className="font-mono text-xs tracking-widest text-gray-400 hover:text-accent hover:-translate-y-1 transition-all duration-200"
          style={{ writingMode: "vertical-rl" }}
        >
          narasinghjadhav03@gmail.com
        </a>
        <div className="w-px h-24 bg-gray-500" />
      </motion.div>
    </>
  );
}