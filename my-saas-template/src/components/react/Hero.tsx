import React from 'react';

const Hero = () => {
  return (
    <section className="container mx-auto py-12 md:py-24 px-4 text-center bg-background-light">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-dark mb-6"> {/* Responsive text size */}
        When Pigs Fly
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-text-light mb-8"> {/* Responsive text size */}
        
      </p>
      <button className="bg-primary-blue hover:bg-blue-700 text-white font-bold py-3 px-6 sm:px-8 rounded-lg text-md sm:text-lg transition-colors"> {/* Responsive padding/text */}
        Get Started
      </button>
    </section>
  );
};

export default Hero;
