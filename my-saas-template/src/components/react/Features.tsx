import React from 'react';

const Features = () => {
  return (
    <section className="container mx-auto py-12 md:py-16 px-4 bg-light-gray">
      <h2 className="text-3xl sm:text-4xl font-bold text-text-dark text-center mb-12">Features</h2> {/* Responsive text size */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Feature items seem okay, padding is global (p-6) which is usually fine. Content within will wrap. */}
        <div className="feature-item bg-background-light p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-xl sm:text-2xl font-semibold text-text-dark mb-3">Feature One</h3> {/* Responsive text size */}
          <p className="text-text-light">[Description of feature one]</p>
        </div>
        <div className="feature-item bg-background-light p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-xl sm:text-2xl font-semibold text-text-dark mb-3">Feature Two</h3> {/* Responsive text size */}
          <p className="text-text-light">[Description of feature two]</p>
        </div>
        <div className="feature-item bg-background-light p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-xl sm:text-2xl font-semibold text-text-dark mb-3">Feature Three</h3> {/* Responsive text size */}
          <p className="text-text-light">[Description of feature three]</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
