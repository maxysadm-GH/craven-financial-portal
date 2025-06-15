
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

const services = [
  {
    category: "Strategic Advisory",
    details: [
      "Business & financial strategy development",
      "Leadership and transformation consulting",
      "Organizational design and growth planning"
    ]
  },
  {
    category: "Financial Coaching",
    details: [
      "1-on-1 and team coaching for financial clarity",
      "Investment guidance and planning",
      "Cash flow, budgeting, and risk management"
    ]
  },
  {
    category: "Business Solutions",
    details: [
      "Operational systems and process improvement",
      "Business formation, compliance, and scaling",
      "Vendor and partnership management"
    ]
  }
];

export default function Services() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map(service => (
            <div key={service.category} className="bg-white border rounded-xl p-8 shadow flex flex-col">
              <h2 className="font-semibold text-xl mb-3 text-blue-800">{service.category}</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                {service.details.map(detail => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
