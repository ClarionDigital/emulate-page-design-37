
import React from "react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header 
      className={cn(
        "w-full bg-g1-red text-white p-3 flex items-center animate-fade-in",
        className
      )}
    >
      <div className="flex items-center">
        <span className="font-bold text-2xl mr-6">g1</span>
        <span className="font-medium text-lg">ECONOMIA</span>
      </div>
    </header>
  );
};

export default Header;
