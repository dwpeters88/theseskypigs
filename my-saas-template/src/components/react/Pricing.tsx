import React from 'react';

const Pricing = () => {
  return (
    <section className="container mx-auto py-12 md:py-16 px-4 bg-background-light">
      <h2 className="text-3xl sm:text-4xl font-bold text-text-dark text-center mb-12">Pricing</h2> {/* Responsive text size */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="pricing-plan bg-light-gray p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border border-gray-200">
          <h3 className="text-2xl sm:text-3xl font-semibold text-text-dark mb-4">Basic Plan</h3> {/* Responsive text size */}
          <p className="text-3xl sm:text-4xl font-bold text-primary-blue mb-6">$10<span className="text-md sm:text-lg text-text-light">/month</span></p> {/* Responsive text size */}
          <ul className="text-text-light mb-8 space-y-2">
            <li>✓ Feature A</li>
            <li>✓ Feature B</li>
            <li>✓ Feature C</li>
          </ul>
          <button className="w-full bg-primary-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-md sm:text-lg transition-colors"> {/* Responsive text size */}
            Choose Plan
          </button>
        </div>
        <div className="pricing-plan bg-primary-blue text-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform md:scale-105">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Pro Plan</h3> {/* Responsive text size */}
          <p className="text-3xl sm:text-4xl font-bold mb-6">$25<span className="text-md sm:text-lg opacity-90">/month</span></p> {/* Responsive text size */}
          <ul className="mb-8 space-y-2 opacity-90">
            <li>✓ Feature A</li>
            <li>✓ Feature B</li>
            <li>✓ Feature C</li>
            <li>✓ Feature D</li>
          </ul>
          <button className="w-full bg-white hover:bg-gray-100 text-primary-blue font-bold py-3 px-6 rounded-lg text-md sm:text-lg transition-colors"> {/* Responsive text size */}
            Choose Plan
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
