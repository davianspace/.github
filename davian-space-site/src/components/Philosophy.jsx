import { Shield, Layers, Activity, Code2, Lock } from "lucide-react";

const principles = [
  {
    icon: Layers,
    title: "Clean Architecture",
    description:
      "Strict separation of concerns with clearly defined boundaries between layers. Business logic remains isolated from infrastructure and delivery mechanisms.",
  },
  {
    icon: Shield,
    title: "Security-First Design",
    description:
      "Security is integrated from the earliest design phases, not applied as an afterthought. Authentication, authorization, and data protection are foundational requirements.",
  },
  {
    icon: Activity,
    title: "Reliability & Resilience",
    description:
      "Systems are designed to degrade gracefully under failure conditions. Circuit breakers, retry policies, and health monitoring are standard components of every deployment.",
  },
  {
    icon: Code2,
    title: "Maintainable & Modular Systems",
    description:
      "Codebases are structured for long-term evolution. Modular boundaries, consistent conventions, and comprehensive documentation ensure that systems remain understandable over time.",
  },
  {
    icon: Lock,
    title: "Infrastructure-Level Components",
    description:
      "Shared infrastructure is built as independent, versioned packages. Configuration, logging, hosting, and resilience layers are reusable across projects and teams.",
  },
];

const Philosophy = () => {
  return (
    <section id="philosophy" className="section-padding border-t border-neutral-800/40">
      <div className="section-container">
        <h2 className="section-title">Engineering Philosophy</h2>
        <p className="section-subtitle mb-14">
          Principles that govern how we design, build, and operate systems.
        </p>

        <div className="space-y-6">
          {principles.map((p) => (
            <div
              key={p.title}
              className="flex gap-5 items-start card"
            >
              <p.icon
                size={24}
                className="text-brand-400 flex-shrink-0 mt-0.5"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="text-base font-semibold text-white mb-1">
                  {p.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
