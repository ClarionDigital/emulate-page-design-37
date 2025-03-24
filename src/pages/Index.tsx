
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
    <div className="min-h-screen flex flex-col bg-[#f8f8f8]">
      <Header />
      
      <main className="flex-1 max-w-3xl mx-auto w-full p-4 bg-white shadow-sm my-4 rounded-md animate-fade-in">
        <article className="space-y-4">
          <h1 className="text-3xl font-bold leading-tight mt-4 animate-fade-up">
            Consignado CLT começa nesta sexta-feira sem regulamentação do FGTS como garantia
          </h1>
          
          <p className="text-base text-gray-700 my-4 animate-fade-up">
            Expectativa é de que normas sobre o tema sejam publicadas apenas em junho. Febraban prevê primeiros dias de operação 'mais modestos'.
          </p>
          
          <div className="flex items-center text-sm text-gray-600 border-b pb-4 animate-fade-up">
            <p>Por <span className="text-g1-red font-medium">Alexandro Martello, g1</span> — Brasília</p>
          </div>
          
          <div className="text-sm text-gray-500 animate-fade-up">
            21/03/2025 00h00 · Atualizado há um dia
          </div>
          
          <ShareButtons />
          
          <SummaryCard />
          
          <ArticleBody />
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
