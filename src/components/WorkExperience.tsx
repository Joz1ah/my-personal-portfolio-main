import { useState, useEffect, useRef } from "react";

interface Experience {
  title: string;
  company: string;
  period: string;
  summary: string;
  fullDetails: string[];
  tags: string[];
  image: string;
}

const experiences: Experience[] = [
  {
    title: "Software Engineer (Frontend Focused)",
    company: "Akaza Technologies Inc.",
    period: "09/2024 - Present",
    summary:
      "Built a responsive job listing website UI from scratch using React, JavaScript, TypeScript, HTML, SCSS, and Tailwind CSS. Collaborated closely with UI/UX team and backend developers for seamless integration.",
    fullDetails: [
      "Built a responsive job listing website UI from scratch using React, JavaScript, TypeScript, HTML, SCSS, and Tailwind CSS",
      "Collaborated closely with the UI/UX team to ensure the implementation accurately followed the Figma web design",
      "Continuously added new features and enhancements to improve platform functionality, user experience, and overall performance",
      "Worked with backend developers to integrate API, enabling dynamic rendering and real-time data updates",
      "Identified and resolved UI bugs to maintain a seamless and intuitive user interface",
      "Optimized components for responsiveness and cross-browser compatibility",
      "Used version control (Git) and collaborative workflows (e.g., GitLab, Jira) to ensure smooth and organized development processes",
      "Worked in an Agile environment, contributing to sprint planning, daily stand-ups, and iterative product releases",
      "Utilized AI tools to streamline the development process",
    ],
    tags: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "SCSS",
      "Git",
      "Agile",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  },
  {
    title: ".NET MAUI Developer",
    company: "Whales Secret",
    period: "07/2024 - 09/2024",
    summary:
      "Built a cryptocurrency MAUI application for trading bots using C#, .NET MAUI, and XAML. Translated Figma designs into functional UI components while continuously developing and fixing issues.",
    fullDetails: [
      "Helped build a cryptocurrency MAUI application that allows users to add trading bots using C#, .NET MAUI, XAML",
      "Followed Figma designs and translated them into functional UI components",
      "Continuously developing and fixing any issues with the application as requested by the client",
    ],
    tags: [".NET MAUI", "C#", "XAML", "Figma"],
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop",
  },
  {
    title: "Associate Software Engineer",
    company: "Accenture Inc.",
    period: "11/2022 - 07/2024",
    summary:
      "Successfully delivered and maintained two .NET 7 and React projects simultaneously. Remediated security vulnerabilities, implemented CI/CD pipelines using Azure DevOps, and managed Azure AD for authentication.",
    fullDetails: [
      "Successfully delivered and maintained two .NET 7 and React projects simultaneously: one using ASP.NET Core MVC with React (JavaScript) for the frontend, and the other built with Blazor WebAssembly",
      "Responsibilities included bug fixing, feature development, API integration, and performance optimization to ensure both applications met business and user requirements",
      "Remediated security related vulnerabilities such as security enhancement, breaches, and prevent possible security attacks that leads to a more secure application environment",
      "Improved and enhanced the web application's user interface using HTML, CSS, Bootstrap, and JavaScript, Blazor WebAssembly resulting in an intuitive and visually appealing user experience",
      "Collaborated with security and operations teams to mitigate security incidents and ensure a secure application environment",
      "Utilized Azure DevOps for comprehensive version control, project planning, development, testing, integration, and deployment",
      "Implemented CI/CD pipelines to automate the software delivery process, resulting in increased efficiency and reliability",
      "Managed Microsoft Azure Active Directory (Azure AD) for authentication and authorization within cloud-based applications",
      "Configured and integrated Azure AD services to enable single sign-on (SSO) functionality, enhancing application security and user experience",
    ],
    tags: [".NET 7", "React", "Blazor", "Azure DevOps", "CI/CD", "Azure AD"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
];

const WorkExperience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
      ".work-experience-image-wrapper"
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
  }, [expandedIndex]);

  return (
    <section className="hz-border-single blur-fade-section">
      <div className="px-6 md:px-0 pt-6">
        <h2 className="text-sm tracking-wide mb-4 flex items-center gap-2 text-dark font-mono">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          WORK EXPERIENCE
        </h2>

        <div className="space-y-0">
          {experiences.map((experience, index) => {
            const isExpanded = expandedIndex === index;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid grid-cols-1 ${
                  isExpanded ? "" : "lg:grid-cols-12"
                } bg-cream ${
                  index !== 0 ? "border-t border-dark pt-8 md:py-4" : "md:py-4"
                } group`}
              >
                {!isExpanded && (
                  <div
                    className={`lg:col-span-4 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="work-experience-image-wrapper aspect-[4/3] overflow-hidden mx-8 md:mx-0 relative">
                      <img
                        src={experience.image}
                        alt={experience.title}
                        className="work-experience-image w-full h-full object-cover"
                      />
                      <div className="crt-overlay"></div>
                    </div>
                  </div>
                )}

                <div
                  className={`p-8 md:p-12 ${
                    isExpanded
                      ? ""
                      : `lg:col-span-8 ${isEven ? "lg:order-2" : "lg:order-1"}`
                  } ${isExpanded ? "animate-expand" : ""}`}
                >
                  <div className="flex justify-between items-start mb-2 text-xs mono text-gray-600">
                    <span>{experience.company}</span>
                    <span>{experience.period}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
                    {experience.title}
                  </h3>

                  {isExpanded ? (
                    <div className="animate-expand">
                      <ul className="space-y-3 mb-6">
                        {experience.fullDetails.map((detail, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-700 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-dark before:font-bold"
                          >
                            {detail}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {experience.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs border border-dark mono bg-cream"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => toggleExpand(index)}
                        className="inline-flex items-center gap-2 underline font-mono text-sm"
                      >
                        <span className="hz-highlight">Show Less</span>
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
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div className="animate-collapse">
                      <p className="text-base text-gray-700 leading-relaxed mb-6">
                        {experience.summary}
                      </p>

                      <button
                        onClick={() => toggleExpand(index)}
                        className="inline-flex items-center gap-2 underline font-mono text-sm"
                      >
                        <span className="hz-highlight">See Full Details</span>
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
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
