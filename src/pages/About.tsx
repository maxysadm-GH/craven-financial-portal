
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Link } from "react-router-dom";
import { MapPin, Users, Award, Target } from "lucide-react";

export default function About() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-slate-100 mb-6 tracking-tight">
            About <span className="text-emerald-400">Craven Financial Solutions</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-medium">
            America's premier financial advisory firm, delivering strategic excellence across multiple Texas locations and serving clients nationwide.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div className="space-y-8">
            <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/20 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <Award className="text-emerald-400 w-8 h-8" />
                <h2 className="text-2xl font-bold text-emerald-400">Our Legacy</h2>
              </div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Craven Financial Solutions stands as a beacon of strategic excellence in the financial advisory landscape. With over two decades of multidimensional business leadership, we've built our reputation on delivering transformative results for businesses across America.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Through our integrated network of services—including Craven Financial Solutions, Rudder Services, FAMC, and Craven Consulting—we bring together exceptional expertise in finance, operations, and executive consulting.
              </p>
            </section>

            <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/20 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <Target className="text-emerald-400 w-8 h-8" />
                <h2 className="text-2xl font-bold text-emerald-400">Our Mission</h2>
              </div>
              <ul className="space-y-4 text-slate-300 text-lg">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3 flex-shrink-0"></div>
                  Multi-disciplinary experience from startups to established enterprises
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3 flex-shrink-0"></div>
                  Proven leadership in organizational transformation and growth strategy
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3 flex-shrink-0"></div>
                  Financial coaching for companies seeking actionable clarity
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3 flex-shrink-0"></div>
                  Dedicated to empowering leaders and unlocking organizational success
                </li>
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/20 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <Users className="text-emerald-400 w-8 h-8" />
                <h2 className="text-2xl font-bold text-emerald-400">Leadership Excellence</h2>
              </div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Under the visionary leadership of Elida Craven, our firm combines entrepreneurial spirit with deep financial expertise. Elida's passion for impactful consulting drives our mission to help clients reach new heights with confidence and clarity.
              </p>
              <div className="bg-emerald-400/10 rounded-xl p-6 border border-emerald-400/30">
                <p className="text-emerald-300 font-semibold text-lg italic">
                  "Our entrepreneurial spirit and passion for impactful consulting are at the core of everything we do—helping clients transform their businesses with confidence and strategic clarity."
                </p>
              </div>
            </section>

            <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/20 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="text-emerald-400 w-8 h-8" />
                <h2 className="text-2xl font-bold text-emerald-400">Strategic Locations</h2>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-slate-700/50 rounded-lg border border-emerald-400/20">
                  <div className="text-emerald-400 font-bold">Dallas-Fort Worth</div>
                  <div className="text-slate-400 text-sm">Corporate Hub</div>
                </div>
                <div className="text-center p-4 bg-slate-700/50 rounded-lg border border-emerald-400/20">
                  <div className="text-emerald-400 font-bold">Austin</div>
                  <div className="text-slate-400 text-sm">Technology Center</div>
                </div>
                <div className="text-center p-4 bg-slate-700/50 rounded-lg border border-emerald-400/20">
                  <div className="text-emerald-400 font-bold">Houston</div>
                  <div className="text-slate-400 text-sm">Energy Sector</div>
                </div>
                <div className="text-center p-4 bg-slate-700/50 rounded-lg border border-emerald-400/20">
                  <div className="text-emerald-400 font-bold">San Antonio</div>
                  <div className="text-slate-400 text-sm">Regional Office</div>
                </div>
              </div>
              <p className="text-slate-300 text-center">
                Strategically positioned to serve clients across Texas and nationwide
              </p>
            </section>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-900/50 via-slate-800/80 to-emerald-900/50 backdrop-blur-sm rounded-3xl p-12 text-center border border-emerald-400/20 shadow-2xl">
          <h3 className="text-3xl font-black text-slate-100 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses who trust Craven Financial Solutions for their most critical financial decisions.
          </p>
          <div className="flex gap-6 justify-center flex-col sm:flex-row">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-slate-900 font-black px-10 py-4 text-lg rounded-2xl shadow-2xl transition-all duration-300 hover-scale"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/services" 
              className="bg-slate-800/80 backdrop-blur-sm border-2 border-emerald-400 text-emerald-400 font-black px-10 py-4 text-lg rounded-2xl shadow-xl hover:bg-slate-700/80 transition-all duration-300 hover-scale"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
