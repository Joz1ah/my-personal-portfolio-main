import { useEffect, useRef } from "react";

interface Technology {
  name: string;
  url: string;
}

interface TechCategory {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
}

const techStack: TechCategory[] = [
  {
    title: "Frontend Development",
    description:
      "Building modern, responsive user interfaces with cutting-edge technologies and design systems.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
    technologies: [
      { name: "React", url: "https://react.dev" },
      { name: "TypeScript", url: "https://www.typescriptlang.org" },
      {
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      { name: "Tailwind CSS", url: "https://tailwindcss.com" },
      {
        name: "HTML/CSS",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "Blazor",
        url: "https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor",
      },
      { name: "React Native", url: "https://reactnative.dev" },
      { name: "SCSS", url: "https://sass-lang.com" },
      { name: ".NET MAUI", url: "https://dotnet.microsoft.com/apps/maui" },
      { name: "Bootstrap", url: "https://getbootstrap.com" },
    ],
  },
  {
    title: "Backend & Database",
    description:
      "Server-side development and database management for scalable, robust applications.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    technologies: [
      { name: "Node.js", url: "https://nodejs.org" },
      { name: "ASP.NET Core", url: "https://dotnet.microsoft.com/apps/aspnet" },
      { name: "Firebase", url: "https://firebase.google.com" },
      { name: "PostgreSQL", url: "https://www.postgresql.org" },
      { name: "MS SQL", url: "https://www.microsoft.com/sql-server" },
    ],
  },
  {
    title: "DevOps & Tools",
    description:
      "Development tools and workflows for efficient collaboration and deployment.",
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop",
    technologies: [
      { name: "Git", url: "https://git-scm.com" },
      {
        name: "Azure DevOps",
        url: "https://azure.microsoft.com/services/devops",
      },
      { name: "Azure", url: "https://azure.microsoft.com" },
      { name: "GitLab", url: "https://gitlab.com" },
      { name: "CI/CD", url: "https://about.gitlab.com/topics/ci-cd" },
      { name: "Jira", url: "https://www.atlassian.com/software/jira" },
      { name: "Postman", url: "https://www.postman.com" },
      { name: "Agile", url: "https://www.agilealliance.org" },
      { name: "REST API", url: "https://restfulapi.net" },
    ],
  },
];

const TechStack = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  // CRT Animation Observer
  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const imageWrapper = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          imageWrapper.classList.remove("crt-inactive");
          imageWrapper.classList.add("crt-active");
          observerRef.current?.unobserve(imageWrapper);
        }
      });
    }, options);

    const imageWrappers = document.querySelectorAll(
      ".tech-stack-image-wrapper"
    );
    imageWrappers.forEach((wrapper) => {
      if (observerRef.current) {
        observerRef.current.observe(wrapper);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="hz-border-single">
      <div className="px-6 md:px-0 py-6">
        <h2 className="text-sm tracking-wide mb-4 flex items-center gap-2 text-dark font-mono">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          TECHNOLOGY STACK
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 lg:divide-x divide-black">
          <article className="lg:col-span-5 pr-4 slide-up group">
            <div className="tech-stack-image-wrapper aspect-[4/3] mb-6 overflow-hidden bg-gray-100 relative">
              <img
                src={techStack[0].image}
                alt={techStack[0].title}
                className="tech-stack-image w-full h-full object-cover"
              />
              <div className="crt-overlay"></div>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-3">
              {techStack[0].title}
            </h3>
            <p className="text-sm text-gray-700 mb-6 font-mono leading-relaxed">
              {techStack[0].description}
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {techStack[0].technologies.map((tech, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg
                    className="w-3 h-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  <a
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono hz-highlight underline truncate"
                  >
                    {tech.name}
                  </a>
                </div>
              ))}
            </div>
          </article>

          <article className="lg:col-span-3 px-4 slide-up delay-100 group">
            <div className="tech-stack-image-wrapper aspect-[4/3] mb-6 overflow-hidden bg-gray-100 relative">
              <img
                src={techStack[1].image}
                alt={techStack[1].title}
                className="tech-stack-image w-full h-full object-cover"
              />
              <div className="crt-overlay"></div>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-3">
              {techStack[1].title}
            </h3>
            <p className="text-sm text-gray-700 mb-6 font-mono leading-relaxed">
              {techStack[1].description}
            </p>
            <div className="space-y-2">
              {techStack[1].technologies.map((tech, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg
                    className="w-3 h-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  <a
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono hz-highlight underline truncate"
                  >
                    {tech.name}
                  </a>
                </div>
              ))}
            </div>
          </article>

          <article className="lg:col-span-4 pl-4 slide-up delay-200 group">
            <div className="tech-stack-image-wrapper aspect-[4/3] mb-6 overflow-hidden bg-gray-100 relative">
              <img
                src={techStack[2].image}
                alt={techStack[2].title}
                className="tech-stack-image w-full h-full object-cover"
              />
              <div className="crt-overlay"></div>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-3">
              {techStack[2].title}
            </h3>
            <p className="text-sm text-gray-700 mb-6 font-mono leading-relaxed">
              {techStack[2].description}
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {techStack[2].technologies.map((tech, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg
                    className="w-3 h-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  <a
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono hz-highlight underline truncate"
                  >
                    {tech.name}
                  </a>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
