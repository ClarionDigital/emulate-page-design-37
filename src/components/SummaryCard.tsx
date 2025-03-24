
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";

const SummaryCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-md p-4 my-6 bg-white transition-all duration-300 animate-fade-in">
      <button 
        className="w-full flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-left">Ver resumo</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      
      {isOpen && (
        <div className="mt-4 animate-fade-in">
          <div className="text-sm text-gray-700 mb-4">
            <p>- O consignado CLT começa sem regulamentação do FGTS como garantia</p>
            <p>- Normas devem ser publicadas em junho</p>
            <p>- Trabalhadores poderão usar até 10% do saldo do FGTS</p>
            <p>- Previsão de queda de 40% nos juros do crédito consignado</p>
            <p>- Sistema entra em operação a partir desta sexta-feira (21)</p>
          </div>
          
          <a 
            href="http://caixatem.online?ref=resumo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block w-full"
          >
            <Button 
              className="w-full bg-g1-red hover:bg-g1-red/90 font-bold py-3 text-white rounded"
            >
              SOLICITAR EMPRÉSTIMO
            </Button>
          </a>
        </div>
      )}
    </div>
  );
};

export default SummaryCard;
