const Contact = () => {
  return (
    <>
      <section className="slide-up delay-300">
        <div className="px-6 md:px-8 py-8">
          {/* Centered Content */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-sm tracking-wide mb-8 text-gray-600 font-mono">
              GET IN TOUCH
            </h2>
            
            <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8">
              I'm currently <span className="hz-highlight font-semibold">open to new opportunities</span> and 
              interesting projects. Feel free to reach out!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <a 
                href="mailto:joshua.p.hermosura@gmail.com"
                className="px-4 py-3 border border-dark text-center hover:bg-white hover:text-dark transition-colors button-shadow font-mono text-sm"
              >
                Email
              </a>
              <a 
                href="https://linkedin.com/in/joshua-hermosura"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 border border-dark text-center hover:bg-white hover:text-dark transition-colors button-shadow font-mono text-sm"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/joshuahermosura"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 border border-dark text-center hover:bg-white hover:text-dark transition-colors button-shadow font-mono text-sm"
              >
                GitHub
              </a>
            </div>
            
            <div className="text-sm space-y-1 font-mono">
              <p> Malolos City, Bulacan, Philippines</p>
              <p> +639275454838</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
