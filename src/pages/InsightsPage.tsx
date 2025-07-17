import React from 'react';

const InsightsPage = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#1B365D] to-[#2C5282] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Insights
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Thought leadership and industry insights on digital transformation
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#1B365D] mb-8">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600">
              Insights and thought leadership content is under development
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;