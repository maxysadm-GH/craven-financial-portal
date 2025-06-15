
import { Link } from "react-router-dom";

const articles = [
  // Retail
  {
    industry: "Retail",
    title: "Retail Accounting: Reduce Costs and Improve Inventory Accuracy",
    summary:
      "Discover strategies for automated bookkeeping, sales tax management, and compliance that help Texas retail chains stay profitable year-round.",
    path: "/blog/retail-accounting-strategies",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=700&q=80",
    imgAlt: "Retail store showing modern accounting software on computers for Texas businesses",
  },
  {
    industry: "Retail",
    title: "Franchise Tax Tips for Texas Retailers",
    summary:
      "A guide to understanding and minimizing your state franchise tax burden, tailored for Texas retail store owners.",
    path: "/blog/franchise-tax-tips-texas-retail",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80",
    imgAlt: "Tax compliance expert reviewing Texas franchise tax forms for local retailers",
  },
  // Service Businesses
  {
    industry: "Service Businesses",
    title: "Why Service Businesses Need Outsourced Payroll & CFOs",
    summary:
      "From onboarding to direct deposit to compliance: how Texas service providers grow with the right financial partner.",
    path: "/blog/service-business-payroll-cfo",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=700&q=80",
    imgAlt: "Cloud payroll and business consulting for Texas service firms",
  },
  {
    industry: "Service Businesses",
    title: "Bookkeeping Mistakes Service Businesses Make (and How to Avoid Them)",
    summary:
      "Common pitfalls in recordkeeping for service-based companies and the CravenFS approach to accuracy.",
    path: "/blog/bookkeeping-mistakes-service-business",
    img: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=700&q=80",
    imgAlt: "Texas bookkeeping professional correcting financial records on computer",
  },
  // Ranching
  {
    industry: "Ranching",
    title: "Managing Accounting & Payroll on Texas Ranches",
    summary:
      "Unique challenges ranch owners face for W-9s, payroll, and state tax; solutions for the agricultural sector.",
    path: "/blog/ranching-accounting-payroll-texas",
    img: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=700&q=80",
    imgAlt: "Ranch accounting expert managing farm payroll for Texas agriculture",
  },
  {
    industry: "Ranching",
    title: "Outsourcing IT & Financial Operations for Ranches",
    summary:
      "Integrating IT systems and financial reporting to streamline ranch business management.",
    path: "/blog/ranching-outsourcing-it-financials",
    img: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=700&q=80",
    imgAlt: "Modern ranch office with tech and financial reporting tools",
  },
  // High Net Worth Individuals
  {
    industry: "High Net Worth Individuals",
    title: "Wealth Preservation Strategies for High Net Worth Texans",
    summary:
      "Custom advisory on income tax, family estate management, and asset protection for high net worth families.",
    path: "/blog/wealth-preservation-texas",
    img: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=700&q=80",
    imgAlt: "Texas wealth management advisor consulting with high net worth client",
  },
  {
    industry: "High Net Worth Individuals",
    title: "How a CFO Service Simplifies Complex Holdings",
    summary:
      "From real estate to private investments—why wealthy clients prefer centralized, professional financial management.",
    path: "/blog/cfo-service-complex-holdings",
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=700&q=80",
    imgAlt: "CFO service consolidating reporting for complex Texas investments",
  },
  // Family Offices
  {
    industry: "Family Offices",
    title: "Modern Family Office Solutions: Beyond the Balance Sheet",
    summary:
      "Full-scope advisory, consolidated payroll, and reporting designed for intergenerational Texas families.",
    path: "/blog/family-office-modern-solutions",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80",
    imgAlt: "Texas family office staff planning with digital financial dashboards",
  },
  {
    industry: "Family Offices",
    title: "Tax Compliance Solutions for Family Offices",
    summary:
      "Best practices for federal, franchise, and sales tax filings for large family-managed portfolios.",
    path: "/blog/family-office-tax-compliance",
    img: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&w=700&q=80",
    imgAlt: "Family office advisory with compliance charts and CPA in Texas",
  },
  // Real Estate Holdings
  {
    industry: "Real Estate Holdings",
    title: "Texas Real Estate Bookkeeping Made Easy",
    summary:
      "Streamline cash flow tracking, tenant payments, and state tax compliance with proven CPA tools.",
    path: "/blog/real-estate-bookkeeping-texas",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=700&q=80",
    imgAlt: "Texas real estate property management with modern bookkeeping systems",
  },
  {
    industry: "Real Estate Holdings",
    title: "Maximizing Rental Property ROI Through Proactive Accounting",
    summary:
      "Monthly insights and direct deposit solutions keep real estate holdings profitable and compliant.",
    path: "/blog/maximize-rental-roi-accounting",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80",
    imgAlt: "Texas CPA reviewing real estate ROI reporting with clients",
  },
  // Rental Property
  {
    industry: "Rental Property",
    title: "Rental Property Tax Deduction Opportunities in Texas",
    summary:
      "Learn about often-missed deductions for Texas landlords and how a CPA can help increase returns.",
    path: "/blog/rental-property-tax-deductions-texas",
    img: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=700&q=80",
    imgAlt: "Rental property CPA in Texas calculating landlord tax deductions",
  },
  {
    industry: "Rental Property",
    title: "How to Handle 1099s and W-9s for Rental Owners",
    summary:
      "Essential year-end reporting steps for landlords and property managers.",
    path: "/blog/handling-1099s-w9s-rentals",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=700&q=80",
    imgAlt: "Texas property manager preparing 1099s and W-9s for rental properties",
  },
];

export default function IndustryArticles() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-8 text-center tracking-tight">
        Popular Insights by Industry
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map(article => (
          <div
            key={article.path}
            className="bg-white border border-blue-100 rounded-2xl shadow-xl hover:shadow-2xl group overflow-hidden transition flex flex-col h-full animate-fade-in"
          >
            <div className="relative h-60 w-full overflow-hidden">
              <img
                src={article.img}
                alt={article.imgAlt}
                title={article.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/25 to-transparent pointer-events-none" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="text-xs text-blue-700 mb-2 font-bold tracking-wide uppercase">
                {article.industry}
              </div>
              <h3 className="text-lg md:text-xl font-extrabold mb-1 text-blue-900 group-hover:underline">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-3 text-sm flex-1">{article.summary}</p>
              <Link
                to={article.path}
                className="story-link text-blue-700 font-semibold mt-auto"
                aria-label={`Read article: ${article.title}`}
              >
                Read Article →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
