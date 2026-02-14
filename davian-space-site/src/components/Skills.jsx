import PropTypes from "prop-types";
import { Cloud, Boxes, Container, Code2, Palette, Sparkles, Target, Shield, Wrench, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";

const categoryIcons = {
  "Cloud & AI": Cloud,
  "Architecture & Design": Boxes,
  "DevOps & Containerization": Container,
  "Backend Development": Code2,
  "Frontend Development": Palette,
  "AI Development Tools": Sparkles,
  "Agile & Project Management": Target,
  "Security & Integration": Shield,
  "Development Practices": Wrench,
  "Leadership & Soft Skills": Users
};

const Skills = ({ skills }) => {
  const categories = Object.keys(skills);

  return (
    <section id="skills" className="relative py-8 sm:py-12 scroll-mt-[1.5rem] sm:scroll-mt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 dark:from-night-950 dark:via-night-900/50 dark:to-night-950" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Expertise"
          title="Technical Skills & Expertise"
          subtitle="Comprehensive skill set across cloud architecture, AI, full-stack development, and Agile leadership"
        />
        
        <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-2">
          {categories.map((category) => {
            const IconComponent = categoryIcons[category] || Code2;
            const categorySkills = skills[category];
            
            return (
              <div
                key={category}
                className="glass-panel glow-border rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-glow-500/10 to-accent-500/10 border border-glow-500/20 dark:border-accent-500/20">
                    <IconComponent className="w-5 h-5 text-glow-600 dark:text-accent-400" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">
                    {category}
                  </h3>
                  <span className="ml-auto text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {categorySkills.length}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 text-xs sm:text-sm font-medium rounded-lg bg-gradient-to-r from-glow-500/5 to-accent-500/5 text-slate-700 dark:text-slate-300 border border-glow-500/20 dark:border-accent-500/20 hover:border-glow-500/50 dark:hover:border-accent-500/50 hover:scale-105 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-glow-600 dark:text-accent-400">
              {Object.values(skills).flat().length}+
            </span> technical skills and competencies across {categories.length} major domains
          </p>
        </div>
      </div>
    </section>
  );
};

Skills.propTypes = {
  skills: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired
};

export default Skills;
