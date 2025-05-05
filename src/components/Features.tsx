
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Individual Educator Diagnostics",
    description: "Assess your literacy instruction knowledge and receive personalized recommendations for professional growth.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-aim-blue"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
    ),
    color: "bg-aim-lightBlue/10"
  },
  {
    title: "Leadership & Systems-Level Insights",
    description: "Gain comprehensive understanding of your team's literacy instruction proficiency and tailor professional development.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-aim-blue"><circle cx="18" cy="16" r="3"></circle><circle cx="6" cy="16" r="3"></circle><path d="M6 13V9a6 6 0 0 1 12 0v4"></path></svg>
    ),
    color: "bg-aim-gold/10"
  },
  {
    title: "AI-Powered Recommendations",
    description: "Receive tailored learning pathways and resources based on your current knowledge and instructional goals.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-aim-blue"><path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path><path d="M12 13v9"></path><path d="M12 2v4"></path></svg>
    ),
    color: "bg-aim-green/10"
  },
  {
    title: "Science of Reading Framework",
    description: "Built on evidence-based instructional practices to ensure effective literacy education.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-aim-blue"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
    ),
    color: "bg-aim-orange/10"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-aim-blue mb-4">Key Features</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            AIM Knowledge Navigator offers comprehensive tools for both individual educators and leadership teams
            to enhance literacy instruction capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className={`p-2 rounded-lg ${feature.color}`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-medium">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
