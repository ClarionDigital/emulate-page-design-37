
import React from "react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header 
      className={cn(
        "w-full bg-g1-red text-white p-0 flex items-center justify-between animate-fade-in",
        className
      )}
    >
      <div className="flex items-center p-3">
        <img src="https://caixatem.online/vsl/logo.png" alt="G1 Logo" className="h-8" />
      </div>
      <div className="flex-1 text-center font-medium text-lg mx-auto">ECONOMIA</div>
      <div className="p-3 w-8"></div> {/* This empty div helps balance the header */}
    </header>
  );
};

export default Header;
