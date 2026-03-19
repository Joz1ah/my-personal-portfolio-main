import SimpsonAvatarWithEyes from "./SimpsonAvatarWithEyes";

const Hero = () => {
  return (
    <section className="hz-border-bottom group">
      <div className="px-6 md:px-16 pb-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-10">
          
          {/* Avatar */}
          <SimpsonAvatarWithEyes />

          {/* Bio text */}
          <div className="flex-1">
            <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-serif">
              Joshua is a <span className="font-semibold">software engineer</span> with{" "}
              <span className="font-semibold">2+ years of experience</span> building web applications 
              and mobile solutions. Most recently, he worked at{" "}
              <a
                href="https://www.accenture.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold"
              >
                Accenture
              </a>
              . He's passionate about creating{" "}
              <span className="font-semibold">intuitive user interfaces</span> and crafting 
              efficient, scalable solutions (like{" "}
              <span className="font-semibold">React applications</span> and{" "}
              <span className="font-semibold">modern web experiences</span>) for the industry.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
