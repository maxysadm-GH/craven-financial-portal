
import { useState } from "react";
import { MessageCircle, HelpCircle, DollarSign, CalendarDays, FileText, Users, ArrowLeft } from "lucide-react";

const topics = [
  { key: "services", label: "Services Offered", icon: <HelpCircle className="mr-2" /> },
  { key: "pricing", label: "Pricing Info", icon: <DollarSign className="mr-2" /> },
  { key: "scheduling", label: "Schedule a Call", icon: <CalendarDays className="mr-2" /> },
  { key: "billing", label: "Billing & Payments", icon: <FileText className="mr-2" /> },
  { key: "onboarding", label: "Client Onboarding", icon: <Users className="mr-2" /> },
];

const FAQ_ANSWERS: Record<string, string> = {
  services:
    "Craven Financial Solutions offers accounting, bookkeeping, tax preparation, payroll, vendor management, IT consulting, and outsourced CFO services for organizations nationwide. Let me know what you need help with!",
  pricing:
    "Pricing is tailored to each client’s needs. We offer fixed monthly packages and project-based rates. Schedule a free assessment to receive a custom proposal.",
  scheduling:
    "You can easily schedule a call with our team via the Contact page, or let me know your preferred times and I’ll pass it on!",
  billing:
    "We provide clear, monthly billing via invoice. For questions about payments or billing details, please contact our accounting team.",
  onboarding:
    "New clients are assigned a dedicated onboarding specialist for a smooth experience. We’ll gather info securely, set up your client portal, and guide you every step of the way.",
  default:
    "Hi! I'm Tammy, your helpful assistant. Ask about services, pricing, scheduling, billing, or onboarding—or select a topic below.",
};

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState([
    {
      type: "bot",
      content: FAQ_ANSWERS.default,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTopicView, setIsTopicView] = useState(true);

  const handleSelectTopic = (topicKey: string) => {
    setChat((c) => [
      ...c,
      { type: "user", content: topics.find(t => t.key === topicKey)?.label || "" },
      { type: "bot", content: FAQ_ANSWERS[topicKey] ?? FAQ_ANSWERS.default },
    ]);
    setIsTopicView(false);
    setInput("");
  };

  const handleInputSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    // For demo purposes, basic keyword matching
    let reply = FAQ_ANSWERS.default;
    const lower = input.toLowerCase();
    if (lower.includes("service")) reply = FAQ_ANSWERS.services;
    else if (lower.includes("price") || lower.includes("cost") || lower.includes("fee")) reply = FAQ_ANSWERS.pricing;
    else if (lower.includes("schedule") || lower.includes("call") || lower.includes("consult")) reply = FAQ_ANSWERS.scheduling;
    else if (lower.includes("bill") || lower.includes("pay")) reply = FAQ_ANSWERS.billing;
    else if (lower.includes("onboard") || lower.includes("new client")) reply = FAQ_ANSWERS.onboarding;
    setChat((c) => [
      ...c,
      { type: "user", content: input },
      { type: "bot", content: reply },
    ]);
    setInput("");
    setIsTopicView(false);
  };

  const handleOpen = () => {
    setOpen(o => !o);
    if (!open) {
      setChat([
        {
          type: "bot",
          content: FAQ_ANSWERS.default,
        },
      ]);
      setInput("");
      setIsTopicView(true);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className="fixed z-50 bottom-6 right-6 bg-blue-700 hover:bg-blue-800 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition"
        aria-label="Open Tammy Chatbot"
      >
        <MessageCircle size={30} />
      </button>
      {open && (
        <div className="fixed bottom-24 right-6 max-w-xs w-[350px] bg-white shadow-2xl rounded-xl border border-gray-200 p-4 flex flex-col z-50 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Tammy, your assistant"
                className="w-10 h-10 rounded-full border border-blue-200 shadow"
                loading="lazy"
              />
              <span className="font-bold text-blue-800">Tammy</span>
            </div>
            <button
              className="text-gray-400 hover:text-gray-600 ml-2"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="flex-1 min-h-[120px] max-h-64 overflow-y-auto text-sm text-gray-800 mb-2 px-1">
            {chat.map((msg, i) =>
              <div
                key={i}
                className={msg.type === "bot" ? "flex gap-2 items-start mb-3" : "flex justify-end mb-3"}
              >
                {msg.type === "bot" && (
                  <img
                    src="https://randomuser.me/api/portraits/women/65.jpg"
                    alt="Tammy"
                    className="w-7 h-7 rounded-full border"
                  />
                )}
                <div className={msg.type === "bot"
                  ? "bg-blue-50 border border-blue-100 text-blue-900 rounded-xl px-3 py-2 max-w-[220px] text-left shadow"
                  : "bg-primary text-white rounded-xl px-3 py-2 max-w-[220px] text-right ml-auto shadow"}
                >
                  {msg.content}
                </div>
              </div>
            )}
          </div>
          {isTopicView && (
            <div className="mb-2">
              <div className="text-sm text-gray-700 mb-2 font-semibold px-1">What can Tammy help you with?</div>
              <div className="flex flex-wrap gap-2 mb-1">
                {topics.map(t => (
                  <button
                    key={t.key}
                    className="flex items-center bg-blue-100 hover:bg-blue-200 text-blue-900 font-medium text-xs px-3 py-2 rounded-full border border-blue-200 transition"
                    onClick={() => handleSelectTopic(t.key)}
                    aria-label={t.label}
                  >
                    {t.icon} {t.label}
                  </button>
                ))}
              </div>
            </div>
          )}
          {!isTopicView && (
            <button
              onClick={() => setIsTopicView(true)}
              className="flex items-center text-xs text-blue-700 hover:underline mb-2"
            >
              <ArrowLeft size={16} className="mr-1" /> Back to topics
            </button>
          )}
          <form
            onSubmit={handleInputSend}
            className="flex items-center gap-2 mt-1"
            autoComplete="off"
          >
            <input
              className="w-full px-3 py-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Type a question or select a topic..."
              value={input}
              onChange={e => setInput(e.target.value)}
              aria-label="Ask a question"
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-800 transition"
              disabled={!input.trim()}
              aria-label="Send"
            >
              Send
            </button>
          </form>
          {/* No "coming soon" text */}
        </div>
      )}
    </>
  );
}
