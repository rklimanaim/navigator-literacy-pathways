
import React from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 md:px-12 lg:px-24 flex items-center justify-between bg-white">
      <div className="flex items-center gap-3">
        <img 
          src="/lovable-uploads/a2fa784a-1169-466f-b800-32b5e6446333.png" 
          alt="AIM Logo" 
          className="h-14 w-auto" 
        />
        <span className="text-aim-blue font-medium text-xl md:text-2xl">AIM Knowledge Navigator</span>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-gray-700 hover:text-aim-blue transition-colors">Features</a>
        <a href="#benefits" className="text-gray-700 hover:text-aim-blue transition-colors">Benefits</a>
        <a href="https://institute.aimpa.org/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-aim-blue transition-colors">About</a>
        <a href="https://institute.aimpa.org/meet-us/contact-us" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-aim-blue transition-colors">Contact</a>
      </nav>
      <div className="flex items-center gap-4">
        <Button variant="outline" className="hidden md:flex">Log In</Button>
        <Button className="bg-aim-blue text-white hover:bg-opacity-90">Get Started</Button>
      </div>
    </header>
  );
};

export default Header;
