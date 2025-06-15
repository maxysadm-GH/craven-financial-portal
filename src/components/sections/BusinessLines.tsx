
const lines = [
  {
    name: "Rudder Services",
    description: "Specialized business operations support, helping you chart a clear course to success with expert systems and process design.",
    link: "https://rudderservices.com",
  },
  {
    name: "FAMC",
    description: "Comprehensive financial advisory & coaching—empowering clients to understand, grow, and protect their financial health.",
    link: "https://famc.com",
  },
  {
    name: "Craven Consulting",
    description: "Executive-level consulting for strategic planning, leadership, and organizational transformation.",
    link: "https://craven.consulting",
  }
];

export default function BusinessLines() {
  return (
    <section className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-6 pb-16">
      {lines.map(line => (
        <a
          key={line.name}
          href={line.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group hover-scale bg-white border border-gray-200 rounded-xl p-8 shadow hover:shadow-xl transition flex flex-col h-full"
        >
          <h3 className="text-xl font-semibold mb-2 text-blue-800 group-hover:underline">{line.name}</h3>
          <p className="text-gray-600 mb-2 flex-1">{line.description}</p>
          <span className="text-blue-700 mt-3 font-medium story-link">Learn more →</span>
        </a>
      ))}
    </section>
  );
}
