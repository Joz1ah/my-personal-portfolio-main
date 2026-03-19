import { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import namelessSpaceImg from '../assets/images/nameless space.png';
import fruitOfTheSpiritImg from '../assets/images/fruit of the spirit.png';
import littleMindImg from '../assets/images/little mind.png';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "The Nameless Space",
    description: "A personal blog and digital diary where thoughts, reflections, and stories find a home. Features a clean writing experience with persistent entries powered by Supabase, giving every post a quiet, lasting place on the web.",
    tags: ["JavaScript", "HTML", "CSS", "Supabase", "Vite"],
    image: namelessSpaceImg,
    link: "https://the-nameless-space.vercel.app/",
    github: "https://github.com/Joz1ah/the-nameless-space.git"
  },
  {
    title: "Fruit of the Spirit",
    description: "A spirituality-rooted personality test inspired by MBTI and similar frameworks. Users answer reflective questions across three zones and receive an AI-generated profile revealing how they love, handle tension, and serve — based on the Fruit of the Spirit.",
    tags: ["JavaScript", "HTML", "CSS", "Supabase", "AI", "Vite"],
    image: fruitOfTheSpiritImg,
    link: "https://fruit-of-the-spirit-3a39.vercel.app/",
    github: "https://github.com/Joz1ah/fruit-of-the-spirit.git"
  },
  {
    title: "Little Mind Hub",
    description: "An interactive learning platform designed for children. Parents and students can browse curated learning materials, discover nearby learning centers, and schedule sessions with tutors — all in one kid-friendly, accessible interface.",
    tags: ["TypeScript", "JavaScript", "Tailwind CSS", "HTML", "Vite"],
    image: littleMindImg,
    link: "https://little-mind-hub.vercel.app/",
    github: "https://github.com/Joz1ah/little-mind-hub.git"
  },
  {
    title: "Fitness Tracker Mobile App",
    description: "Cross-platform mobile application for tracking workouts, nutrition, and fitness goals with social features and progress analytics.",
    tags: ["React Native", "Firebase", "Redux"],
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
    link: "#",
    github: "#"
  },
  {
    title: "Weather Forecast Dashboard",
    description: "Interactive weather dashboard with detailed forecasts, maps, and historical data visualization using real-time weather APIs.",
    tags: ["Vue.js", "Chart.js", "Node.js"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
    link: "#",
    github: "#"
  },
  {
    title: "E-Commerce Dashboard",
    description: "Analytics dashboard for e-commerce platforms with real-time sales tracking, inventory management, and customer insights. Features interactive charts and data visualization.",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    link: "#",
    github: "#"
  }
];

const Projects = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3 // Trigger when 30% of image is visible
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const imageWrapper = entry.target as HTMLElement;
        
        if (entry.isIntersecting) {
          // Image is entering viewport - turn ON once
          imageWrapper.classList.remove('crt-inactive');
          imageWrapper.classList.add('crt-active');
          observerRef.current?.unobserve(imageWrapper);
        }
      });
    }, options);

    // Observe all image wrappers
    const imageWrappers = document.querySelectorAll('.project-image-wrapper');
    imageWrappers.forEach(wrapper => {
      if (observerRef.current) {
        observerRef.current.observe(wrapper);
      }
    });

    // Cleanup
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
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          FEATURED PROJECTS
        </h2>

        {/* First Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:divide-x divide-black border-b border-black pb-6">
          <article className="lg:col-span-5 pr-4 slide-up group">
            <div className="project-image-wrapper aspect-[4/3] mb-6 overflow-hidden bg-gray-100 relative">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="project-image w-full h-full object-cover"
              />
              <div className="crt-overlay"></div>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 leading-tight">{projects[0].title}</h3>
            <p className="text-sm mb-6 leading-relaxed font-mono">{projects[0].description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {projects[0].tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 text-xs tracking-wide border border-dark font-mono">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <a href={projects[0].link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-dark underline font-mono">
                <ExternalLink className="w-4 h-4" />
                <span className='hz-highlight'>View Project</span>
              </a>
              <a href={projects[0].github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-dark underline font-mono">
                <Github className="w-4 h-4" />
                <span className='hz-highlight'>View Code</span>
              </a>
            </div>
          </article>

          <article className="lg:col-span-3 px-4 slide-up delay-100 group">
            <div className="project-image-wrapper aspect-[4/3] mb-6 overflow-hidden bg-gray-100 relative">
              <img
                src={projects[1].image}
                alt={projects[1].title}
                className="project-image w-full h-full object-cover"
              />
              <div className="crt-overlay"></div>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 leading-tight">{projects[1].title}</h3>
            <p className="text-sm mb-6 leading-relaxed font-mono">{projects[1].description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {projects[1].tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 text-xs tracking-wide border border-dark font-mono">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <a href={projects[1].link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-dark underline font-mono">
                <ExternalLink className="w-4 h-4" />
                <span className='hz-highlight'>View Project</span>
              </a>
              <a href={projects[1].github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-dark underline font-mono">
                <Github className="w-4 h-4" />
                <span className='hz-highlight'>View Code</span>
              </a>
            </div>
          </article>

          <article className="lg:col-span-4 pl-4 slide-up delay-200 group">
            <div className="project-image-wrapper aspect-[4/3] mb-6 overflow-hidden bg-gray-100 relative">
              <img
                src={projects[2].image}
                alt={projects[2].title}
                className="project-image w-full h-full object-cover"
              />
              <div className="crt-overlay"></div>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 leading-tight">{projects[2].title}</h3>
            <p className="text-sm mb-6 leading-relaxed font-mono">{projects[2].description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {projects[2].tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 text-xs tracking-wide border border-dark font-mono">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <a href={projects[2].link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-dark underline font-mono">
                <ExternalLink className="w-4 h-4" />
                <span className='hz-highlight'>View Project</span>
              </a>
              <a href={projects[2].github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-dark underline font-mono">
                <Github className="w-4 h-4" />
                <span className='hz-highlight'>View Code</span>
              </a>
            </div>
          </article>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:divide-x divide-black pt-6">
          <article className="lg:col-span-3 pr-4 slide-up delay-300 group">
            <div className="project-image-wrapper aspect-[4/3] mb-6 overflow-hidden bg-gray-100 relative">
              <img
                src={projects[3].image}
                alt={projects[3].title}
                className="project-image w-full h-full object-cover"
              />
              <div className="crt-overlay"></div>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 leading-tight">{projects[3].title}</h3>
            <p className="text-sm mb-6 leading-relaxed font-mono">{projects[3].description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {projects[3].tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 text-xs tracking-wide border border-dark font-mono">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <a href={projects[3].link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-dark underline font-mono">
                <ExternalLink className="w-4 h-4" />
                <span className='hz-highlight'>View Project</span>
              </a>
              <a href={projects[3].github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-dark underline font-mono">
                <Github className="w-4 h-4" />
                <span className='hz-highlight'>View Code</span>
              </a>
            </div>
          </article>

          <article className="lg:col-span-5 px-8 slide-up delay-400 group">
            <div className="project-image-wrapper aspect-[4/3] mb-6 overflow-hidden bg-gray-100 relative">
              <img
                src={projects[4].image}
                alt={projects[4].title}
                className="project-image w-full h-full object-cover"
              />
              <div className="crt-overlay"></div>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 leading-tight">{projects[4].title}</h3>
            <p className="text-sm mb-6 leading-relaxed font-mono">{projects[4].description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {projects[4].tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 text-xs tracking-wide border border-dark font-mono">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <a href={projects[4].link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-dark underline font-mono">
                <ExternalLink className="w-4 h-4" />
                <span className='hz-highlight'>View Project</span>
              </a>
              <a href={projects[4].github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-dark underline font-mono">
                <Github className="w-4 h-4" />
                <span className='hz-highlight'>View Code</span>
              </a>
            </div>
          </article>

          <article className="lg:col-span-4 px-8 slide-up delay-500 group">
            <div className="project-image-wrapper aspect-[4/3] mb-6 overflow-hidden bg-gray-100 relative">
              <img
                src={projects[5].image}
                alt={projects[5].title}
                className="project-image w-full h-full object-cover"
              />
              <div className="crt-overlay"></div>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 leading-tight">{projects[5].title}</h3>
            <p className="text-sm mb-6 leading-relaxed font-mono">{projects[5].description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {projects[5].tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 text-xs tracking-wide border border-dark font-mono">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <a href={projects[5].link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-dark underline font-mono">
                <ExternalLink className="w-4 h-4" />
                <span className='hz-highlight'>View Project</span>
              </a>
              <a href={projects[5].github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-dark underline font-mono">
                <Github className="w-4 h-4" />
                <span className='hz-highlight'>View Code</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;