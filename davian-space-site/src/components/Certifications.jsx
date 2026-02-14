import PropTypes from "prop-types";
import { Award } from "lucide-react";
import SectionHeading from "./SectionHeading";

const Certifications = ({ certifications }) => {
  return (
    <section id="certifications" className="relative py-8 sm:py-12 scroll-mt-[1.5rem] sm:scroll-mt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-night-950 dark:via-night-900 dark:to-night-950" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & Credentials"
          subtitle="Professional certifications in cloud architecture, AI, and modern development practices"
        />
        
        <div className="mt-12 grid gap-4 sm:gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-panel glow-border rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:scale-[1.02] transition-transform group"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 p-2 sm:p-3 rounded-lg bg-gradient-to-br from-glow-500/10 to-accent-500/10 border border-glow-500/20 dark:border-accent-500/20">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-glow-600 dark:text-accent-400" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-glow-600 dark:group-hover:text-accent-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                    {cert.issuer}
                  </p>
                  
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {cert.skills.slice(0, 4).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-0.5 text-xs font-medium rounded-full bg-gradient-to-r from-glow-500/10 to-accent-500/10 text-slate-700 dark:text-slate-300 border border-glow-500/30 dark:border-accent-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 4 && (
                        <span className="px-2 py-0.5 text-xs font-medium text-slate-500 dark:text-slate-500">
                          +{cert.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-glow-600 dark:text-accent-400">{certifications.length}</span> professional certifications spanning cloud architecture, AI/ML, DevOps, and Agile methodologies
          </p>
        </div>
      </div>
    </section>
  );
};

Certifications.propTypes = {
  certifications: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      issuer: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      credentialId: PropTypes.string,
      skills: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired
};

export default Certifications;
