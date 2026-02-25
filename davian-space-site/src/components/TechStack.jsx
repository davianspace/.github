const categories = [
  {
    label: "Backend",
    technologies: [".NET", "ASP.NET Core", "C#", "Entity Framework"],
  },
  {
    label: "Frontend",
    technologies: ["React", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Mobile & Cross-Platform",
    technologies: ["Flutter", "Dart"],
  },
  {
    label: "Cloud & Infrastructure",
    technologies: ["Microsoft Azure", "Docker", "CI/CD Pipelines", "GitHub Actions"],
  },
  {
    label: "Data & Storage",
    technologies: ["SQL Server", "PostgreSQL", "Azure Storage", "Redis"],
  },
  {
    label: "Practices",
    technologies: ["Clean Architecture", "Domain-Driven Design", "REST APIs", "gRPC"],
  },
];

const TechStack = () => {
  return (
    <section id="technology" className="section-padding border-t border-neutral-800/40">
      <div className="section-container">
        <h2 className="section-title">Technology Stack</h2>
        <p className="section-subtitle mb-14">
          Production-tested tools and frameworks chosen for reliability and long-term support.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.label}>
              <h3 className="text-sm font-mono text-brand-400 uppercase tracking-wider mb-4">
                {cat.label}
              </h3>
              <ul className="space-y-2">
                {cat.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="text-neutral-300 text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-neutral-600 flex-shrink-0" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
