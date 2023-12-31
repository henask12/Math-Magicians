import React from 'react';

export default function Homepage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gray-700 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to My Calculator Website</h1>
          <p className="text-xl text-white">
            We offer amazing services to our users. Check out our features below!
          </p>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
            >
              <h3 className="text-xl font-bold mb-2">Feature 1</h3>
              <p>Simple Home page is developed</p>
            </div>

            {/* Feature 2 */}
            <div
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
            >
              <h3 className="text-xl font-bold mb-2">Feature 2</h3>
              <p>Calculator is integrated on the Website</p>
            </div>

            {/* Feature 3 */}
            <div
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
            >
              <h3 className="text-xl font-bold mb-2">Feature 3</h3>
              <p>Qoute is generated and displayed on the Website</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
