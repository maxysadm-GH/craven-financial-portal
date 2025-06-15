
import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="fixed z-50 bottom-6 right-6 bg-blue-700 hover:bg-blue-800 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition"
        aria-label="Open Sales Assistant Chatbot"
      >
        <MessageCircle size={30} />
      </button>
      {open && (
        <div className="fixed bottom-24 right-6 max-w-xs w-[340px] bg-white shadow-2xl rounded-xl border border-gray-200 p-4 flex flex-col z-50 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <span className="font-medium text-blue-800">Sales Assistant</span>
            <button
              className="text-gray-400 hover:text-gray-600"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="flex-1 text-sm text-gray-600 mb-2">
            👋 Hi! I'm your Sales Assistant. Ask about services, pricing, scheduling, billing, or client onboarding!
          </div>
          <input
            className="w-full px-3 py-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Type a question..."
            disabled
          />
          <div className="text-xs text-gray-400 mt-2">Live AI chat coming soon!</div>
        </div>
      )}
    </>
  );
}
