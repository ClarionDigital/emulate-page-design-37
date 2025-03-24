
import React, { useEffect } from "react";
import Header from "@/components/Header";
import ShareButtons from "@/components/ShareButtons";
import SummaryCard from "@/components/SummaryCard";
import ArticleBody from "@/components/ArticleBody";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll to top when page loads
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f8f8] font-opensans">
      <Header />
      
      <main className="flex-1 max-w-3xl mx-auto w-full bg-white shadow-sm">
        <div className="p-4">
          <h1 className="text-3xl font-bold leading-tight mt-2 mb-4 text-[#111111]">
            Consignado CLT começa nesta sexta-feira sem regulamentação do FGTS como garantia
          </h1>
          
          <p className="text-base text-[#555555] mb-4">
            Expectativa é de que normas sobre o tema sejam publicadas apenas em junho. Febraban prevê primeiros dias de operação 'mais modestos'.
          </p>
          
          <div className="flex items-center text-sm text-gray-600 border-b pb-4">
            <p>Por <span className="text-g1-red font-medium">Alexandro Martello, g1</span> — Brasília</p>
          </div>
          
          <div className="text-sm text-gray-500 mt-2 mb-4">
            21/03/2025 00h00 · Atualizado há um dia
          </div>
          
          <img 
            src="https://s2-g1.glbimg.com/_2PMmnXW8r-cChMI28e5uvSQfvU=/0x0:1080x549/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/p/b/ecrmX9TbW7V04AXSW2cg/captura-de-tela-2025-03-12-121610.png" 
            alt="Consignado CLT" 
            className="w-full h-auto mb-4 rounded"
          />
          
          <ShareButtons />
          
          <SummaryCard />
          
          <ArticleBody />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
