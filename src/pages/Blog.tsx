
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function Blog() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        <section className="bg-white border rounded-xl p-8 shadow text-center">
          <div className="text-xl text-gray-700 mb-6">
            Valuable resources and insights from Craven Financial Solutions—coming soon!
          </div>
          <div className="bg-gray-100 rounded-xl h-28 flex items-center justify-center text-blue-600 font-semibold">
            Blog automation for n8n/Databox integration planned.
          </div>
        </section>
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
