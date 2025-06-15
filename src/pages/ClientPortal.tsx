
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ClientPortal() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // Demo auth: for production, replace with real authentication and Databox embed logic.
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (loginForm.email.trim() && loginForm.password.trim()) {
      setLoggedIn(true);
    } else {
      setError("Please enter email & password.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20">
        <div className="w-full max-w-md">
          {!loggedIn ? (
            <form
              className="bg-white border rounded-xl p-6 shadow flex flex-col gap-6"
              onSubmit={handleLogin}
              autoComplete="off"
            >
              <h1 className="text-2xl font-bold text-blue-800 mb-3">Client Login</h1>
              <input
                className="w-full px-4 py-2 rounded border border-gray-200 focus:ring-2 focus:ring-blue-100 outline-none"
                type="email"
                placeholder="Email"
                required
                value={loginForm.email}
                onChange={e => setLoginForm({ ...loginForm, email: e.target.value })}
                autoComplete="username"
              />
              <input
                className="w-full px-4 py-2 rounded border border-gray-200 focus:ring-2 focus:ring-blue-100 outline-none"
                type="password"
                placeholder="Password"
                required
                value={loginForm.password}
                onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}
                autoComplete="current-password"
              />
              {error && <span className="text-red-600 text-sm">{error}</span>}
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg px-6 py-3 transition"
              >
                Log In
              </button>
              <span className="text-xs text-gray-400 mt-2">
                (Demo only. Your dashboard will be revealed here after login.)
              </span>
            </form>
          ) : (
            <section className="bg-white shadow border rounded-xl p-8 flex flex-col items-center">
              <h2 className="text-xl font-semibold text-blue-900 mb-3">Welcome!</h2>
              <div className="bg-gray-100 rounded-lg p-6 text-gray-700 text-center min-h-[180px] w-full max-w-sm mb-6 flex flex-col items-center justify-center">
                {/* Placeholder for Databox dashboard */}
                <span>Your private Databox dashboard will be displayed here.</span>
              </div>
              <button
                className="text-blue-700 hover:text-blue-900 underline font-semibold"
                onClick={() => setLoggedIn(false)}
              >
                Log out
              </button>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
