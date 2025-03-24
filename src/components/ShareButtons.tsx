
import React from "react";
import { Facebook, Share2, MessageCircle } from "lucide-react";

const ShareButtons: React.FC = () => {
  return (
    <div className="flex space-x-4 my-6 animate-fade-in">
      <button 
        className="text-blue-600 hover:opacity-80 transition-opacity"
        aria-label="Compartilhar no Facebook"
      >
        <Facebook size={24} />
      </button>
      <button 
        className="text-green-600 hover:opacity-80 transition-opacity"
        aria-label="Compartilhar no WhatsApp"
      >
        <MessageCircle size={24} />
      </button>
      <button 
        className="text-gray-600 hover:opacity-80 transition-opacity"
        aria-label="Mais opções de compartilhamento"
      >
        <Share2 size={24} />
      </button>
    </div>
  );
};

export default ShareButtons;
