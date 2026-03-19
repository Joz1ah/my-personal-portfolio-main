interface ExperienceCard {
  title: string;
  company?: string;
  period?: string;
  description: string;
  tags?: string[];
  image: string;
  link?: string;
  size: 'small' | 'medium' | 'large';
}

const experienceCards: ExperienceCard[] = [
  {
    title: "Software Engineer (Frontend Focused)",
    company: "Akaza Technologies Inc.",
    period: "09/2024 - Present",
    description: "Built responsive job listing website UI from scratch using React, JavaScript, TypeScript, HTML, SCSS, and Tailwind CSS. Collaborated with UI/UX team to ensure accurate implementation of Figma designs.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    size: 'large',
  },
  {
    title: ".NET MAUI Developer",
    company: "Whales Secret",
    period: "07/2024 - 09/2024",
    description: "Built cryptocurrency MAUI application for trading bots using C#, .NET MAUI, and XAML. Translated Figma designs into functional UI components.",
    tags: [".NET MAUI", "C#", "XAML"],
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop",
    size: 'medium',
  },
  {
    title: "Associate Software Engineer",
    company: "Accenture Inc.",
    period: "11/2022 - 07/2024",
    description: "Delivered and maintained two .NET 7 and React projects simultaneously. Remediated security vulnerabilities and enhanced application security. Implemented CI/CD pipelines using Azure DevOps.",
    tags: [".NET 7", "React", "Azure DevOps"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    size: 'large',
  },
  {
    title: "Frontend Tech Stack",
    description: "Specialized in building modern, responsive web applications using React, TypeScript, and Tailwind CSS. Proficient in creating reusable component libraries and design systems with accessibility focus.",
    tags: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS", "Blazor"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    size: 'small',
  },
  {
    title: "Backend & Database",
    description: "Experience with Node.js, ASP.NET Core, and Firebase for building scalable backend services. Proficient in PostgreSQL and MS SQL database design and optimization.",
    tags: ["Node.js", "ASP.NET Core", "Firebase", "PostgreSQL", "MS SQL"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
    size: 'small',
  },
  {
    title: "Microsoft Certified",
    description: "Achieved multiple Microsoft Azure certifications including Security Fundamentals (SC-900), Azure Fundamentals (AZ-900), AI Fundamentals (AI-900), and Data Fundamentals (DP-900). Committed to continuous learning and professional development.",
    tags: ["SC-900", "AZ-900", "AI-900", "DP-900"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
    size: 'medium',
  },
];

const ExperienceShowcase = () => {
  return (
    <section className="hz-border-single animate-blur-fade" style={{ animationDelay: '0.3s' }}>
      <div className="px-6 md:px-16 py-16">
        <h2 className="text-sm font-medium mb-8 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Experience & Skills
        </h2>
        
        {/* Grid layout with masonry style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-dark">
          {experienceCards.map((card, index) => {
            const colSpan = card.size === 'large' ? 'lg:col-span-2' : card.size === 'medium' ? 'lg:col-span-1' : 'lg:col-span-1';
            const rowSpan = card.size === 'large' ? 'lg:row-span-2' : 'lg:row-span-1';
            
            return (
              <article 
                key={index}
                className={`${colSpan} ${rowSpan} bg-cream relative group overflow-hidden`}
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden border-b border-dark">
                  <img 
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {card.company && (
                    <div className="flex justify-between items-start mb-2 text-xs mono text-gray-600">
                      <span>{card.company}</span>
                      {card.period && <span>{card.period}</span>}
                    </div>
                  )}
                  
                  <h3 className="text-lg md:text-xl font-serif font-semibold mb-3">
                    {card.title}
                  </h3>
                  
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    {card.description}
                  </p>
                  
                  {card.tags && (
                    <div className="flex flex-wrap gap-1.5">
                      {card.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 text-xs border border-dark mono bg-cream"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {card.link && (
                    <a 
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-4 text-sm hz-highlight font-medium"
                    >
                      Read more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceShowcase;
