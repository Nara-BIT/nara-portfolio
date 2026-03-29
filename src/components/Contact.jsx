import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setSending(true);

    const subject = encodeURIComponent(
      `Portfolio Contact from ${form.name}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:narasinghjadhav303@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      toast.success("Opening your email client!");
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading number="06" title="Get In Touch" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 leading-relaxed mb-10"
        >
          I'm always open to new opportunities, collaborations, or just a
          friendly hello. Whether you have a question or simply want to
          connect — my inbox is open!
        </motion.p>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5 text-left"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-gray-400 mb-1 font-mono">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-dark-light border border-dark-lighter text-gray-200 placeholder-gray-600 focus:border-accent focus:outline-none transition-colors duration-200"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1 font-mono">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-dark-light border border-dark-lighter text-gray-200 placeholder-gray-600 focus:border-accent focus:outline-none transition-colors duration-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1 font-mono">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={onChange}
              placeholder="What would you like to say?"
              className="w-full px-4 py-3 rounded-lg bg-dark-light border border-dark-lighter text-gray-200 placeholder-gray-600 focus:border-accent focus:outline-none transition-colors duration-200 resize-none"
            />
          </div>

          <div className="text-center pt-2">
            <button
              type="submit"
              disabled={sending}
              data-cursor="pointer"
              className="group relative px-10 py-3 rounded border border-accent text-accent font-mono text-sm overflow-hidden hover:shadow-[0_0_25px_rgba(100,255,218,0.25)] transition-shadow duration-300 disabled:opacity-50"
            >
              <span className="absolute inset-0 bg-accent/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              <span className="relative">
                {sending ? "Sending..." : "Send Message"}
              </span>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}