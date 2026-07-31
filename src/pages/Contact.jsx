import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";

// TODO: Replace with your real Formspree form ID.
// 1. Create a free account at https://formspree.io
// 2. Create a new form, point it at this site
// 3. Copy the form ID from the endpoint Formspree gives you
//    (looks like https://formspree.io/f/abcduvwx) and paste it below.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/meeywayn";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | MiTools</title>
        <meta
          name="description"
          content="Get in touch with the MiTools team — questions, feedback, or corrections on any calculator or guide."
        />
        <link rel="canonical" href="https://mitools.app/contact" />
        <meta property="og:title" content="Contact Us | MiTools" />
        <meta
          property="og:description"
          content="Get in touch with the MiTools team — questions, feedback, or corrections."
        />
        <meta property="og:url" content="https://mitools.app/contact" />
        <meta property="og:image" content="https://mitools.app/og-image.png" />
      </Helmet>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,163,67,0.12),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(78,155,110,0.14),transparent_24%)]" />

        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="inline-flex items-center rounded-full border border-[#D6A343]/20 bg-white/5 px-4 py-2 text-sm text-[#E8C685] backdrop-blur">
            Contact Us
          </div>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Questions, feedback, or found something wrong?
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Send us a message directly, or email us — we read every message
            personally, especially anything flagging an error in a
            calculation.
          </p>

          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
            <Mail size={20} className="shrink-0 text-[#E8C685]" />
            <a
              href="mailto:mitechsolutionsza@gmail.com"
              className="text-sm font-medium text-white hover:text-[#E8C685]"
            >
              mitechsolutionsza@gmail.com
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
          >
            {/* Honeypot field for basic spam protection — left blank by real users */}
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-200">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#171F1B] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-[#D6A343]/50 focus:outline-none focus:ring-2 focus:ring-[#D6A343]/20"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-200">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#171F1B] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-[#D6A343]/50 focus:outline-none focus:ring-2 focus:ring-[#D6A343]/20"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-xl border border-white/10 bg-[#171F1B] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-[#D6A343]/50 focus:outline-none focus:ring-2 focus:ring-[#D6A343]/20"
                placeholder="What's on your mind?"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C68F2A] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#D6A343] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              <Send size={16} />
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            {status === "success" && (
              <div className="flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-3 text-sm text-emerald-300">
                <CheckCircle2 size={16} />
                Thanks — your message has been sent. We'll get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-2 rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-300">
                <AlertCircle size={16} />
                Something went wrong sending that. Please try again, or email
                us directly at mitechsolutionsza@gmail.com.
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
