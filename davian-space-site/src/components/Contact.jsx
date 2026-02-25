import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding border-t border-neutral-800/40">
      <div className="section-container">
        <div className="max-w-xl">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle mb-10">
            For engineering inquiries, collaboration, or enterprise engagements.
          </p>

          <a
            href="mailto:developers@davian.space"
            className="inline-flex items-center gap-3 px-6 py-3 bg-neutral-900 border border-neutral-800 hover:border-neutral-600 rounded-lg text-neutral-200 hover:text-white transition-colors group"
          >
            <Mail
              size={18}
              className="text-brand-400 group-hover:text-brand-300 transition-colors"
              strokeWidth={1.5}
            />
            <span className="text-sm font-mono">developers@davian.space</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
