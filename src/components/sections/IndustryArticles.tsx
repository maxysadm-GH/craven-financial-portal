
import { Link } from "react-router-dom";

const articles = [
  // Retail
  {
    industry: "Retail",
    title: "Retail Accounting: Reduce Costs and Improve Inventory Accuracy",
    summary: "Discover strategies for automated bookkeeping, sales tax management, and compliance that help Texas retail chains stay profitable year-round.",
    path: "/blog/retail-accounting-strategies",
    img: "/photo-1488590528505-98d2b5aba04b.jpg",
    imgAlt: "Retail store accounting with modern technology, Craven Financial Solutions Texas"
  },
  {
    industry: "Retail",
    title: "Franchise Tax Tips for Texas Retailers",
    summary: "A guide to understanding and minimizing your state franchise tax burden, tailored for Texas retail store owners.",
    path: "/blog/franchise-tax-tips-texas-retail",
    img: "/photo-1518770660439-4636190af475.jpg",
    imgAlt: "Texas franchise tax consulting for retail, business CPA tips"
  },
  // Service Businesses
  {
    industry: "Service Businesses",
    title: "Why Service Businesses Need Outsourced Payroll & CFOs",
    summary: "From onboarding to direct deposit to compliance: how Texas service providers grow with the right financial partner.",
    path: "/blog/service-business-payroll-cfo",
    img: "/photo-1581091226825-a6a2a5aee158.jpg",
    imgAlt: "Service industry professionals using cloud payroll, Texas business consulting"
  },
  {
    industry: "Service Businesses",
    title: "Bookkeeping Mistakes Service Businesses Make (and How to Avoid Them)",
    summary: "Common pitfalls in recordkeeping for service-based companies and the CravenFS approach to accuracy.",
    path: "/blog/bookkeeping-mistakes-service-business",
    img: "/photo-1483058712412-4245e9b90334.jpg",
    imgAlt: "Bookkeeping for Texas service business, accuracy tips, financial solutions"
  },
  // Ranching
  {
    industry: "Ranching",
    title: "Managing Accounting & Payroll on Texas Ranches",
    summary: "Unique challenges ranch owners face for W-9s, payroll, and state tax; solutions for the agricultural sector.",
    path: "/blog/ranching-accounting-payroll-texas",
    img: "/photo-1517022812141-23620dba5c23.jpg",
    imgAlt: "Texas ranch payroll and farm accounting, agricultural financial services"
  },
  {
    industry: "Ranching",
    title: "Outsourcing IT & Financial Operations for Ranches",
    summary: "Integrating IT systems and financial reporting to streamline ranch business management.",
    path: "/blog/ranching-outsourcing-it-financials",
    img: "/photo-1466721591366-2d5fba72006d.jpg",
    imgAlt: "Modern ranching with tech and financial tools, outsourced CFO for agriculture"
  },
  // High Net Worth Individuals
  {
    industry: "High Net Worth Individuals",
    title: "Wealth Preservation Strategies for High Net Worth Texans",
    summary: "Custom advisory on income tax, family estate management, and asset protection for high net worth families.",
    path: "/blog/wealth-preservation-texas",
    img: "/photo-1500673922987-e212871fec22.jpg",
    imgAlt: "Wealth management and estate planning, Texas CPA services"
  },
  {
    industry: "High Net Worth Individuals",
    title: "How a CFO Service Simplifies Complex Holdings",
    summary: "From real estate to private investments—why wealthy clients prefer centralized, professional financial management.",
    path: "/blog/cfo-service-complex-holdings",
    img: "/photo-1486312338219-ce68d2c6f44d.jpg",
    imgAlt: "CFO managing complex investments, family office financial expertise, Texas"
  },
  // Family Offices
  {
    industry: "Family Offices",
    title: "Modern Family Office Solutions: Beyond the Balance Sheet",
    summary: "Full-scope advisory, consolidated payroll, and reporting designed for intergenerational Texas families.",
    path: "/blog/family-office-modern-solutions",
    img: "/photo-1519389950473-47ba0277781c.jpg",
    imgAlt: "Family office financial planning, Texas generational wealth CPA"
  },
  {
    industry: "Family Offices",
    title: "Tax Compliance Solutions for Family Offices",
    summary: "Best practices for federal, franchise, and sales tax filings for large family-managed portfolios.",
    path: "/blog/family-office-tax-compliance",
    img: "/photo-1452378174528-3090a4bba7b2.jpg",
    imgAlt: "Family office tax compliance, Texas CPA, estate and wealth advisory"
  },
  // Real Estate Holdings
  {
    industry: "Real Estate Holdings",
    title: "Texas Real Estate Bookkeeping Made Easy",
    summary: "Streamline cash flow tracking, tenant payments, and state tax compliance with proven CPA tools.",
    path: "/blog/real-estate-bookkeeping-texas",
    img: "/photo-1488590528505-98d2b5aba04b.jpg",
    imgAlt: "Real estate investment bookkeeping, Texas property accountants"
  },
  {
    industry: "Real Estate Holdings",
    title: "Maximizing Rental Property ROI Through Proactive Accounting",
    summary: "Monthly insights and direct deposit solutions keep real estate holdings profitable and compliant.",
    path: "/blog/maximize-rental-roi-accounting",
    img: "/photo-1518770660439-4636190af475.jpg",
    imgAlt: "Rental investment accounting, Texas ROI maximization CPA"
  },
  // Rental Property
  {
    industry: "Rental Property",
    title: "Rental Property Tax Deduction Opportunities in Texas",
    summary: "Learn about often-missed deductions for Texas landlords and how a CPA can help increase returns.",
    path: "/blog/rental-property-tax-deductions-texas",
    img: "/photo-1500673922987-e212871fec22.jpg",
    imgAlt: "Texas rental property tax solutions, landlord accounting, CPA tips"
  },
  {
    industry: "Rental Property",
    title: "How to Handle 1099s and W-9s for Rental Owners",
    summary: "Essential year-end reporting steps for landlords and property managers.",
    path: "/blog/handling-1099s-w9s-rentals",
    img: "/photo-1581091226825-a6a2a5aee158.jpg",
    imgAlt: "Landlord 1099 and W-9 reporting Texas, property management finance"
  },
];

export default function IndustryArticles() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
        Popular Insights by Industry
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {articles.map(article => (
          <div key={article.path} className="bg-white border border-blue-100 rounded-lg p-0 shadow hover:shadow-xl transition group overflow-hidden">
            <div className="relative h-44 w-full overflow-hidden">
              <img
                src={article.img}
                alt={article.imgAlt}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent pointer-events-none" />
            </div>
            <div className="p-5">
              <div className="text-xs text-blue-700 mb-1 font-semibold tracking-wide uppercase">
                {article.industry}
              </div>
              <h3 className="text-lg font-bold mb-1">{article.title}</h3>
              <p className="text-gray-600 mb-2">{article.summary}</p>
              <Link
                to={article.path}
                className="story-link text-blue-700 font-medium"
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
