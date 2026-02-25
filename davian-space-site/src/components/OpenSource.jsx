import { GitBranch } from "lucide-react";

const packages = [
  {
    name: "Application Hosting Frameworks",
    description:
      "Structured entry points and lifecycle management for Dart server applications. Consistent start-up, shutdown, and configuration binding.",
  },
  {
    name: "Dependency Injection Systems",
    description:
      "Service registration and resolution with scoped lifetimes. Supports constructor injection, factory patterns, and hierarchical containers.",
  },
  {
    name: "Configuration & Options Frameworks",
    description:
      "Layered configuration from multiple sources — environment variables, JSON files, and in-memory providers — with strongly-typed option binding.",
  },
  {
    name: "Structured Logging Infrastructure",
    description:
      "Logging abstractions with provider support, log levels, and structured output. Designed for integration with external observability platforms.",
  },
  {
    name: "HTTP Resilience & Rate Limiting",
    description:
      "Middleware and client-side policies for retry, circuit breaking, timeout, and rate limiting. Protects both inbound and outbound HTTP communication.",
  },
];

const OpenSource = () => {
  return (
    <section id="open-source" className="section-padding border-t border-neutral-800/40">
      <div className="section-container">
        <h2 className="section-title">Open-Source Ecosystem</h2>
        <p className="section-subtitle mb-4">
          A Dart infrastructure ecosystem maintained by Davian Space.
        </p>
        <p className="text-sm text-neutral-500 mb-14">
          These packages provide foundational infrastructure primitives for
          Dart and Flutter applications, modeled after proven patterns from the
          .NET ecosystem.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.name} className="card flex gap-4 items-start">
              <GitBranch
                size={20}
                className="text-brand-400 flex-shrink-0 mt-1"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="text-base font-semibold text-white mb-1">
                  {pkg.name}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {pkg.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
