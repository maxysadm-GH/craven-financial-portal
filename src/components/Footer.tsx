
export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 mt-12 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-gradient-to-tr from-blue-800 via-gray-200 to-blue-400 flex items-center justify-center text-white font-extrabold text-xl">
            CF
          </div>
          <span className="text-gray-700 font-semibold">
            Craven Financial Solutions
          </span>
        </div>
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <a href="mailto:info@cravenfs.com" className="hover:text-blue-600 text-gray-700">info@cravenfs.com</a>
            </li>
            <li>
              <a href="tel:+18555555555" className="hover:text-blue-600 text-gray-700">+1 (855) 555-5555</a>
            </li>
            <li>
              <span className="hidden md:inline text-gray-400">|</span>
              <span className="ml-3 text-gray-500 text-sm">© {new Date().getFullYear()} CravenFS</span>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
