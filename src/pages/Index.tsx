
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import Hero from "@/components/sections/Hero";
import BusinessLines from "@/components/sections/BusinessLines";
import CTASection from "@/components/sections/CTASection";
import CaseStudies from "@/components/sections/CaseStudies";
import IndustryArticles from "@/components/sections/IndustryArticles";
import ROIcalculator from "@/components/ROIcalculator";
import IdealClientProfileForm from "@/components/IdealClientProfileForm";
import FinancialTools from "@/components/sections/FinancialTools";

const Index = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <BusinessLines />
        <FinancialTools />
        <ROIcalculator />
        <CaseStudies />
        <IndustryArticles />
        <IdealClientProfileForm />
        <CTASection />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default Index;
