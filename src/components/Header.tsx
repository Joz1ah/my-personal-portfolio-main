const Header = () => {
  return (
    <header className="w-full py-6">
      {/* Top Header */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6 px-6 md:px-16">
        
        {/* Left - Listening */}
        <div className="flex items-center justify-center md:justify-start gap-2 whitespace-nowrap">
          <span className="text-sm font-mono"> Status: Open for opportunities</span>
        </div>

        {/* Center - Name with double lines */}
        <div className="flex items-center justify-center w-full">
          {/* Left outer line */}
          <div className="hidden md:block flex-1 h-[1px] bg-black" />

          {/* Inner group with longer lines */}
          <div className="flex items-center">
            <div className="hidden md:block w-24 h-[1px] bg-black" /> 
            <h1 className="mx-8 text-lg md:text-xl font-serif font-bold whitespace-nowrap">
              Joshua Hermosura
            </h1>
            <div className="hidden md:block w-24 h-[1px] bg-black" /> 
          </div>

          {/* Right outer line */}
          <div className="hidden md:block flex-1 h-[1px] bg-black" />
        </div>

        {/* Right - Socials */}
        <nav className="flex items-center justify-center md:justify-end gap-3 text-sm font-mono flex-wrap">
          <a
            href="https://medium.com/@joshuahermosura"
            target="_blank"
            rel="noopener noreferrer"
            className="hz-highlight underline"
          >
            Reddit
          </a>
          <span className="hidden sm:inline">–</span>
          <a
            href="https://github.com/joshuahermosura"
            target="_blank"
            rel="noopener noreferrer"
            className="hz-highlight underline"
          >
            GitHub
          </a>
          <span className="hidden sm:inline">–</span>
          <a
            href="https://linkedin.com/in/joshua-hermosura"
            target="_blank"
            rel="noopener noreferrer"
            className="hz-highlight underline"
          >
            LinkedIn
          </a>
        </nav>
      </div>

      {/* Username Badge Line */}
      <div className="mt-6 relative px-6 md:px-16">
        <div className="absolute inset-x-0 top-1/2 h-[4px] bg-black" />
        <div className="relative flex justify-center">
          <span className="bg-white px-6 py-2 border border-black text-xs font-mono">
            @joshuahermosura
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
