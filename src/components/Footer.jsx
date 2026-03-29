import { motion } from "framer-motion";
import { socials } from "../data/constants";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-dark-lighter">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        {/* Social icons — visible on mobile only (sidebar handles desktop) */}
        <div className="flex items-center gap-5 md:hidden">
          {socials.map(({ name, url, Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={name}
              className="text-gray-500 hover:text-accent transition-colors text-lg"
            >
              <Icon />
            </a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-mono text-gray-600 leading-relaxed"
        >
          Designed &amp; Built by{" "}
          <a
            href="https://github.com/Nara-BIT"
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline"
          >
            Narasingh S Jadhav
          </a>
          <br />
          &copy; {new Date().getFullYear()} — All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}