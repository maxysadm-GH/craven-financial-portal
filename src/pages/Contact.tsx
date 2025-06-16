
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";

const initialForm = { name: "", email: "", company: "", phone: "", service: "", message: "" };

const locations = [
  {
    city: "Dallas-Fort Worth",
    type: "Corporate Headquarters",
    address: "1234 Business Blvd, Dallas, TX 75201",
    phone: "(214) 555-0100",
    email: "dallas@cravenfs.com"
  },
  {
    city: "Austin", 
    type: "Technology Center",
    address: "5678 Innovation Dr, Austin, TX 78701",
    phone: "(512) 555-0200",
    email: "austin@cravenfs.com"
  },
  {
    city: "Houston",
    type: "Energy Sector Hub",
    address: "9012 Energy Plaza, Houston, TX 77001", 
    phone: "(713) 555-0300",
    email: "houston@cravenfs.com"
  },
  {
    city: "San Antonio",
    type: "Regional Office", 
    address: "3456 Commerce St, San Antonio, TX 78201",
    phone: "(210) 555-0400",
    email: "sanantonio@cravenfs.com"
  }
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setForm(initialForm);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-slate-100 mb-6 tracking-tight">
            Connect With <span className="text-emerald-400">Our Experts</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-medium">
            Ready to transform your business? Our team of financial experts is standing by to help you achieve your goals. Reach out today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6">Get Started Today</h2>
            
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">Thank You!</h3>
                <p className="text-slate-300">Your message has been sent successfully. We'll be in touch within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-emerald-400 hover:text-emerald-300 font-semibold underline"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-emerald-400 font-semibold mb-2">Full Name *</label>
                    <input
                      className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-slate-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all"
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-emerald-400 font-semibold mb-2">Email Address *</label>
                    <input
                      className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-slate-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all"
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-emerald-400 font-semibold mb-2">Company Name</label>
                    <input
                      className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-slate-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all"
                      type="text"
                      value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-emerald-400 font-semibold mb-2">Phone Number</label>
                    <input
                      className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-slate-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all"
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-emerald-400 font-semibold mb-2">Service Interest</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-slate-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all"
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="">Select a service</option>
                    <option value="cfo">Outsourced CFO Services</option>
                    <option value="accounting">Accounting & Bookkeeping</option>
                    <option value="tax">Tax Preparation & Compliance</option>
                    <option value="payroll">Payroll Services</option>
                    <option value="it">IT Services</option>
                    <option value="consulting">Business Consulting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-emerald-400 font-semibold mb-2">Message *</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-slate-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all resize-none"
                    rows={4}
                    required
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your business needs and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-slate-900 font-black py-4 rounded-lg shadow-xl transition-all duration-300 hover-scale disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-emerald-400 mb-6">Get In Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-400/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-slate-100 font-semibold">Call Us</div>
                    <div className="text-slate-300">+1 (855) 555-5555</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-400/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-slate-100 font-semibold">Email Us</div>
                    <div className="text-slate-300">info@cravenfs.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-400/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-slate-100 font-semibold">Business Hours</div>
                    <div className="text-slate-300">Mon-Fri: 8AM - 6PM CST</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendly Integration Placeholder */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-400/20 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-400">Schedule a Call</h3>
                  <p className="text-slate-300">Book a free 30-minute consultation</p>
                </div>
              </div>
              <div className="bg-slate-700/50 rounded-lg border border-slate-600 p-8 text-center min-h-[200px] flex flex-col items-center justify-center">
                <Calendar className="w-16 h-16 text-emerald-400 mb-4" />
                <div className="text-slate-300 mb-4">
                  Calendly widget will be integrated here
                </div>
                <div className="text-sm text-slate-400">
                  <!-- Calendly inline widget begin -->
                  <div className="calendly-inline-widget" data-url="https://calendly.com/your-link" style={{minWidth: '320px', height: '200px'}}></div>
                  <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                  <!-- Calendly inline widget end -->
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-400/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-emerald-400">Our Locations</h3>
              </div>
              <div className="bg-slate-700/50 rounded-lg border border-slate-600 p-4 min-h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                  <div className="text-slate-300 mb-2">Interactive map will be displayed here</div>
                  <div className="text-sm text-slate-400">Showing all Texas locations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-center mb-12 text-slate-100">
            Our <span className="text-emerald-400">Strategic Locations</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location) => (
              <div key={location.city} className="bg-slate-800/50 backdrop-blur-sm border border-emerald-400/20 rounded-xl p-6 shadow-xl">
                <h3 className="text-emerald-400 font-bold text-lg mb-2">{location.city}</h3>
                <p className="text-slate-400 text-sm mb-4">{location.type}</p>
                <div className="space-y-2 text-sm">
                  <div className="text-slate-300">{location.address}</div>
                  <div className="text-slate-300">{location.phone}</div>
                  <div className="text-emerald-400">{location.email}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
