const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-dark border-t-transparent rounded-full spinner"></div>
        </div>
        <p className="font-serif text-xl">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
