import { useEffect, useRef } from "react";

interface Certification {
  code: string;
  name: string;
  description: string;
  image: string;
  link: string;
}

const certifications: Certification[] = [
  {
    code: "SC-900",
    name: "Security, Compliance, and Identity Fundamentals",
    description:
      "Achieved Microsoft Azure Security Fundamentals certification, demonstrating knowledge of security, compliance, and identity concepts across cloud-based and related Microsoft services.",
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1000&h=400&fit=crop",
    link: "https://learn.microsoft.com/en-us/certifications/security-compliance-and-identity-fundamentals/",
  },
  {
    code: "AZ-900",
    name: "Azure Fundamentals",
    description:
      "Certified in Azure Fundamentals with comprehensive understanding of cloud concepts, core Azure services, security, privacy, compliance, and Azure pricing and support.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&h=400&fit=crop",
    link: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
  },
  {
    code: "AI-900",
    name: "Azure AI Fundamentals",
    description:
      "Earned AI Fundamentals certification demonstrating knowledge of machine learning, artificial intelligence workloads, and considerations for Azure AI services.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000&h=400&fit=crop",
    link: "https://learn.microsoft.com/en-us/certifications/azure-ai-fundamentals/",
  },
  {
    code: "DP-900",
    name: "Azure Data Fundamentals",
    description:
      "Certified in Data Fundamentals with expertise in core data concepts, relational and non-relational data, analytics workloads, and data analytics on Azure.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=400&fit=crop",
    link: "https://learn.microsoft.com/en-us/certifications/azure-data-fundamentals/",
  },
];

const Certifications = () => {
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
      ".certification-image-wrapper"
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
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          MICROSOFT CERTIFICATIONS
        </h2>

        <div className="-mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:divide-x lg:divide-x divide-black">
          {certifications.map((cert, index) => (
            <article
              key={index}
              className="group slide-up px-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="certification-image-wrapper aspect-[16/9] mb-6 overflow-hidden bg-gray-100 relative">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="certification-image w-full h-full object-cover"
                />
                <div className="crt-overlay"></div>
              </div>

              {/* Content */}
              <div>
                <div className="mb-3">
                  <span className="px-3 py-1 text-xs tracking-wide border border-dark font-mono">
                    {cert.code}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-semibold mb-4 leading-tight">
                  {cert.name}
                </h3>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-dark hz-highlight underline font-mono"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 transform rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
