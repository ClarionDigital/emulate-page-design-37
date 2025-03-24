
import React from "react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header 
      className={cn(
        "w-full bg-g1-red text-white p-0 flex items-center animate-fade-in",
        className
      )}
    >
      <div className="flex items-center p-3">
        <span className="font-bold text-3xl mr-6">g1</span>
        <span className="font-medium text-lg">ECONOMIA</span>
      </div>
    </header>
  );
};

export default Header;
