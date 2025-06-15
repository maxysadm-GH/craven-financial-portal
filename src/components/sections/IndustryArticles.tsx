
import { Link } from "react-router-dom";

const articles = [
  // Retail
  {
    industry: "Retail",
    title: "Retail Accounting: Reduce Costs and Improve Inventory Accuracy",
    summary: "Discover strategies for automated bookkeeping, sales tax management, and compliance that help Texas retail chains stay profitable year-round.",
    path: "/blog/retail-accounting-strategies",
  },
  {
    industry: "Retail",
    title: "Franchise Tax Tips for Texas Retailers",
    summary: "A guide to understanding and minimizing your state franchise tax burden, tailored for Texas retail store owners.",
    path: "/blog/franchise-tax-tips-texas-retail",
  },
  // Service Businesses
  {
    industry: "Service Businesses",
    title: "Why Service Businesses Need Outsourced Payroll & CFOs",
    summary: "From onboarding to direct deposit to compliance: how Texas service providers grow with the right financial partner.",
    path: "/blog/service-business-payroll-cfo",
  },
  {
    industry: "Service Businesses",
    title: "Bookkeeping Mistakes Service Businesses Make (and How to Avoid Them)",
    summary: "Common pitfalls in recordkeeping for service-based companies and the CravenFS approach to accuracy.",
    path: "/blog/bookkeeping-mistakes-service-business",
  },
  // Ranching
  {
    industry: "Ranching",
    title: "Managing Accounting & Payroll on Texas Ranches",
    summary: "Unique challenges ranch owners face for W-9s, payroll, and state tax; solutions for the agricultural sector.",
    path: "/blog/ranching-accounting-payroll-texas",
  },
  {
    industry: "Ranching",
    title: "Outsourcing IT & Financial Operations for Ranches",
    summary: "Integrating IT systems and financial reporting to streamline ranch business management.",
    path: "/blog/ranching-outsourcing-it-financials",
  },
  // High Net Worth Individuals
  {
    industry: "High Net Worth Individuals",
    title: "Wealth Preservation Strategies for High Net Worth Texans",
    summary: "Custom advisory on income tax, family estate management, and asset protection for high net worth families.",
    path: "/blog/wealth-preservation-texas",
  },
  {
    industry: "High Net Worth Individuals",
    title: "How a CFO Service Simplifies Complex Holdings",
    summary: "From real estate to private investments—why wealthy clients prefer centralized, professional financial management.",
    path: "/blog/cfo-service-complex-holdings",
  },
  // Family Offices
  {
    industry: "Family Offices",
    title: "Modern Family Office Solutions: Beyond the Balance Sheet",
    summary: "Full-scope advisory, consolidated payroll, and reporting designed for intergenerational Texas families.",
    path: "/blog/family-office-modern-solutions",
  },
  {
    industry: "Family Offices",
    title: "Tax Compliance Solutions for Family Offices",
    summary: "Best practices for federal, franchise, and sales tax filings for large family-managed portfolios.",
    path: "/blog/family-office-tax-compliance",
  },
  // Real Estate Holdings
  {
    industry: "Real Estate Holdings",
    title: "Texas Real Estate Bookkeeping Made Easy",
    summary: "Streamline cash flow tracking, tenant payments, and state tax compliance with proven CPA tools.",
    path: "/blog/real-estate-bookkeeping-texas",
  },
  {
    industry: "Real Estate Holdings",
    title: "Maximizing Rental Property ROI Through Proactive Accounting",
    summary: "Monthly insights and direct deposit solutions keep real estate holdings profitable and compliant.",
    path: "/blog/maximize-rental-roi-accounting",
  },
  // Rental Property
  {
    industry: "Rental Property",
    title: "Rental Property Tax Deduction Opportunities in Texas",
    summary: "Learn about often-missed deductions for Texas landlords and how a CPA can help increase returns.",
    path: "/blog/rental-property-tax-deductions-texas",
  },
  {
    industry: "Rental Property",
    title: "How to Handle 1099s and W-9s for Rental Owners",
    summary: "Essential year-end reporting steps for landlords and property managers.",
    path: "/blog/handling-1099s-w9s-rentals",
  },
];

export default function IndustryArticles() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Popular Insights by Industry</h2>
      <div className="grid md:grid-cols-2 gap-7">
        {articles.map(article => (
          <div key={article.path} className="bg-white border border-blue-100 rounded-lg p-5 shadow hover:shadow-lg transition">
            <div className="text-xs text-blue-700 mb-1 font-semibold tracking-wide uppercase">{article.industry}</div>
            <h3 className="text-lg font-bold mb-1">{article.title}</h3>
            <p className="text-gray-600 mb-2">{article.summary}</p>
            <Link to={article.path} className="story-link text-blue-700 font-medium">Read Article →</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
