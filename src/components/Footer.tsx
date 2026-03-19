const Footer = () => {
  return (
    <footer className="relative hz-border-top py-6">
      <div className="flex justify-between items-center text-sm font-mono pt-6 px-6 md:px-16">
        <span>© 2025 Joshua Hermosura</span>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="hz-highlight underline"
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
