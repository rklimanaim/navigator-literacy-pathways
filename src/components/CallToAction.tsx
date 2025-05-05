
import React from 'react';
import { Button } from "@/components/ui/button";
import { Users, UserRound } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-20 px-6 md:px-12 lg:px-24 bg-aim-blue text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Ready to Transform Literacy Instruction?
        </h2>
        <p className="text-lg md:text-xl mb-12 text-blue-100 max-w-3xl mx-auto">
          Take the first step toward enhancing literacy instruction capabilities for yourself
          or your educational community.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/15 transition-all flex flex-col h-full">
            <div className="flex flex-col items-center flex-grow">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <UserRound className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Individual Educators</h3>
              <p className="text-blue-100 mb-6 text-sm">
                Discover your strengths and growth areas in literacy instruction
              </p>
            </div>
            <Button className="bg-white text-aim-blue hover:bg-gray-100 px-8 py-6 text-lg w-full">
              Start Educator Diagnostic
            </Button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/15 transition-all flex flex-col h-full">
            <div className="flex flex-col items-center flex-grow">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">System Leaders</h3>
              <p className="text-blue-100 mb-6 text-sm">
                Gain insights into your community's literacy instruction proficiency
              </p>
            </div>
            <Button className="bg-white text-aim-blue hover:bg-gray-100 px-8 py-6 text-lg w-full">
              Request Leadership Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
