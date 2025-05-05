
import React from 'react';
import { Button } from "@/components/ui/button";

const CallToAction: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-20 px-6 md:px-12 lg:px-24 bg-aim-blue text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Ready to Transform Literacy Instruction?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Take the first step toward enhancing literacy instruction capabilities for yourself
          or your educational community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-aim-blue hover:bg-gray-100 px-8 py-6 text-lg">
            Start Diagnostic
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
            Request Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
