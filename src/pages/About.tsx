
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function About() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Elida Craven</h1>
        <section className="bg-white rounded-xl p-8 border shadow">
          <p className="text-xl text-gray-700 mb-5">
            Elida Craven is a strategic advisor and entrepreneur with over two decades of multidimensional business leadership. Through Craven Financial Solutions, Rudder Services, FAMC, and Craven Consulting, Elida brings together  exceptional expertise in finance, operations, and executive consulting.
          </p>
          <ul className="list-disc ml-7 text-gray-700 space-y-3 mb-5">
            <li>Multi-disciplinary experience from startups to established enterprises</li>
            <li>Proven leadership in organizational transformation, growth, and business strategy</li>
            <li>Financial coaching for individuals and companies seeking actionable clarity</li>
            <li>Dedicated to empowering leaders and unlocking organizational success</li>
          </ul>
          <div className="pt-4 text-gray-600 text-lg">
            Elida’s entrepreneurial spirit and passion for impactful consulting are at the core of Craven Financial Solutions’ mission—to help clients reach new heights with confidence and clarity.
          </div>
        </section>
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
