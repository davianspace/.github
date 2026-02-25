import {
  Server,
  Smartphone,
  Globe,
  Cloud,
  Wrench,
  Boxes,
} from "lucide-react";

const capabilities = [
  {
    icon: Server,
    title: "Enterprise Backend Systems",
    description:
      "Scalable, high-performance server-side platforms built on .NET. API design, data processing pipelines, and distributed service architectures.",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Applications",
    description:
      "Unified codebases targeting iOS, Android, web, and desktop through Flutter. Consistent interfaces backed by shared business logic layers.",
  },
  {
    icon: Globe,
    title: "Modern Web Frontends",
    description:
      "Component-driven web applications using React. Responsive, accessible, and optimized for performance across devices and network conditions.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Microsoft Azure deployments engineered for reliability. Resource provisioning, identity management, monitoring, and cost-optimized scaling.",
  },
  {
    icon: Boxes,
    title: "Modular Infrastructure Engineering",
    description:
      "Reusable infrastructure components designed as composable building blocks. Configuration systems, hosting frameworks, and service abstractions.",
  },
  {
    icon: Wrench,
    title: "Developer Tooling & Automation",
    description:
      "Internal tools, build pipelines, and automation systems that reduce operational overhead and enforce engineering standards across projects.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding border-t border-neutral-800/40">
      <div className="section-container">
        <h2 className="section-title">Capabilities</h2>
        <p className="section-subtitle mb-14">
          End-to-end engineering across the full system lifecycle.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item) => (
            <div key={item.title} className="card group">
              <item.icon
                size={28}
                className="text-brand-400 mb-4 group-hover:text-brand-300 transition-colors"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
