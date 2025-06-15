
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import Hero from "@/components/sections/Hero";
import BusinessLines from "@/components/sections/BusinessLines";
import CTASection from "@/components/sections/CTASection";
import CaseStudies from "@/components/sections/CaseStudies";
import IndustryArticles from "@/components/sections/IndustryArticles";

const Index = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <BusinessLines />
        <CaseStudies />
        <IndustryArticles />
        <CTASection />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
};
export default Index;
