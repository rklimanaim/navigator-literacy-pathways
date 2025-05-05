
import React from 'react';
import { Button } from "@/components/ui/button";
import { Users, UserRound, ChevronRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-aim-blue mb-6 leading-tight">
            Empowering Educators with Personalized Literacy Instruction Insights
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            AIM Knowledge Navigator provides AI-powered diagnostics and personalized learning pathways 
            for educators to enhance literacy instruction based on the science of reading.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-aim-lightBlue/10 flex items-center justify-center mr-4">
                  <UserRound className="h-6 w-6 text-aim-lightBlue" />
                </div>
                <h2 className="text-xl font-semibold text-aim-blue">For Individual Educators</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Assess your literacy instruction knowledge and receive personalized learning recommendations tailored to your professional growth.
              </p>
              <Button className="bg-aim-lightBlue hover:bg-opacity-90 text-white w-full md:w-auto px-6 py-5 text-base group">
                Take the Educator Diagnostic
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-aim-blue/10 flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-aim-blue" />
                </div>
                <h2 className="text-xl font-semibold text-aim-blue">For System Leaders</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Gain insights into your educational community's literacy instruction proficiency and receive systems-level recommendations.
              </p>
              <Button className="bg-aim-blue hover:bg-opacity-90 text-white w-full md:w-auto px-6 py-5 text-base group">
                Access Leadership Tools
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-20 lg:mt-24 relative animate-slide-in">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-center">
              <div className="w-full h-64 md:h-72 bg-gray-100 rounded-xl flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-aim-blue/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-aim-blue"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    </div>
                  </div>
                  <h3 className="text-aim-blue text-xl font-medium mb-2">Interactive Diagnostic Tool</h3>
                  <p className="text-gray-500">Visualize your assessment and receive personalized learning recommendations</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 h-32 w-32 bg-aim-gold/20 rounded-full blur-2xl z-0"></div>
          <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 h-32 w-32 bg-aim-lightBlue/20 rounded-full blur-2xl z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
