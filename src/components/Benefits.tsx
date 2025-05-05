
import React from 'react';

const benefits = [
  {
    title: "Personalized Learning Pathways",
    description: "Receive customized recommendations based on your specific knowledge gaps and learning goals.",
    icon: "🎯",
    color: "bg-aim-blue"
  },
  {
    title: "Non-Evaluative Approach",
    description: "Focus on growth and improvement in a supportive environment without judgment.",
    icon: "🌱",
    color: "bg-aim-green"
  },
  {
    title: "Data-Driven Insights",
    description: "Make informed decisions about professional development using comprehensive analytics.",
    icon: "📊",
    color: "bg-aim-lightBlue"
  },
  {
    title: "Continuous Evolution",
    description: "Access an evolving system that adapts to the latest research and methodologies.",
    icon: "🔄",
    color: "bg-aim-gold"
  },
  {
    title: "Practical Implementation",
    description: "Translate knowledge into effective classroom practices with actionable recommendations.",
    icon: "🧩",
    color: "bg-aim-orange"
  },
  {
    title: "Community-Wide Impact",
    description: "Create cohesive literacy instruction approaches across your educational community.",
    icon: "🌍",
    color: "bg-aim-blue"
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-aim-blue mb-4">Benefits</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover how AIM Knowledge Navigator transforms professional development
            for literacy educators and educational leaders.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className={`text-2xl p-2 rounded-lg ${benefit.color} text-white`}>{benefit.icon}</span>
                <h3 className="text-lg font-medium text-gray-800">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
