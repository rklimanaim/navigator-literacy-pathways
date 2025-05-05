
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
      </div>
    </section>
  );
};

export default Hero;
