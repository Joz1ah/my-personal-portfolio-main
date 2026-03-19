interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  image: string;
  size: 'large' | 'medium' | 'small';
}

const experiences: Experience[] = [
  {
    title: "Software Engineer (Frontend Focused)",
    company: "Akaza Technologies Inc.",
    period: "09/2024 - Present",
    description: "Built responsive job listing website UI from scratch using React, JavaScript, TypeScript, HTML, SCSS, and Tailwind CSS. Collaborated with UI/UX team to ensure accurate implementation of Figma designs. Integrated APIs with backend developers for dynamic rendering and real-time updates.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    size: 'large'
  },
  {
    title: ".NET MAUI Developer",
    company: "Whales Secret",
    period: "07/2024 - 09/2024",
    description: "Built cryptocurrency MAUI application for trading bots using C#, .NET MAUI, and XAML. Translated Figma designs into functional UI components.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop",
    size: 'medium'
  },
  {
    title: "Associate Software Engineer",
    company: "Accenture Inc.",
    period: "11/2022 - 07/2024",
    description: "Delivered and maintained two .NET 7 and React projects simultaneously. Remediated security vulnerabilities and enhanced application security. Implemented CI/CD pipelines using Azure DevOps.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    size: 'medium'
  }
];

const Experience = () => {
  return (
    <section className="hz-border-single animate-blur-fade" style={{ animationDelay: '0.3s' }}>
      <div className="px-6 md:px-16 py-16">
        <h2 className="text-sm font-medium mb-8 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Work Experience
        </h2>
        
        {/* Article-style grid layout */}
        <div className="grid grid-cols-12 gap-px bg-dark">
          {/* First article - spans full width */}
          <article className="col-span-12 bg-cream p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src={experiences[0].image} 
                  alt={experiences[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="mono text-xs mb-2">{experiences[0].period}</span>
                <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-2">
                  {experiences[0].title}
                </h3>
                <p className="text-lg font-medium mb-3">{experiences[0].company}</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {experiences[0].description}
                </p>
              </div>
            </div>
          </article>
          
          {/* Second article - left side */}
          <article className="col-span-12 md:col-span-7 bg-cream p-6">
            <div className="aspect-video overflow-hidden bg-gray-100 mb-4">
              <img 
                src={experiences[1].image} 
                alt={experiences[1].title}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="mono text-xs mb-2 block">{experiences[1].period}</span>
            <h3 className="text-xl font-serif font-semibold mb-2">
              {experiences[1].title}
            </h3>
            <p className="font-medium mb-2">{experiences[1].company}</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              {experiences[1].description}
            </p>
          </article>
          
          {/* Third article - right side */}
          <article className="col-span-12 md:col-span-5 bg-cream p-6">
            <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
              <img 
                src={experiences[2].image} 
                alt={experiences[2].title}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="mono text-xs mb-2 block">{experiences[2].period}</span>
            <h3 className="text-lg font-serif font-semibold mb-2">
              {experiences[2].title}
            </h3>
            <p className="font-medium text-sm mb-2">{experiences[2].company}</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              {experiences[2].description}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
