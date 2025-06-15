
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function IdealClientProfileForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    industry: "",
    teamSize: "",
    needs: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    // Future: send form to backend/email
  }

  if (submitted) {
    return (
      <section className="w-full bg-emerald-50 border border-emerald-200 p-8 rounded-2xl shadow animate-scale-in text-center mt-12">
        <h2 className="text-2xl font-bold text-emerald-900 mb-3">
          Thank you for requesting your free assessment!
        </h2>
        <p className="text-gray-700 mb-6 max-w-lg mx-auto">
          Our team will review your information and connect to discuss custom solutions. Need immediate support?
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-700 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-bold shadow hover-scale mt-2"
        >
          Book Your Consultation
        </a>
      </section>
    );
  }

  return (
    <section className="w-full bg-blue-50 border border-blue-200 p-8 rounded-2xl my-12 shadow flex flex-col items-center animate-fade-in">
      <h2 className="text-2xl font-bold text-blue-900 mb-3 text-center">
        Schedule your free assessment
      </h2>
      <p className="mb-6 text-gray-700 text-center max-w-xl">
        Share a snapshot of your business or family office, and a Craven Financial Solutions expert will reach out to discuss a tailored plan.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-lg">
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="company"
          placeholder="Company / Organization"
          value={form.company}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="industry"
          placeholder="Industry (e.g., Retail, Real Estate)"
          value={form.industry}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="teamSize"
          placeholder="Team Size / Number of Employees"
          value={form.teamSize}
          onChange={handleChange}
        />
        <Textarea
          name="needs"
          placeholder="What are your most pressing challenges or needs?"
          value={form.needs}
          onChange={handleChange}
        />
        <Button
          type="submit"
          className="mt-2 bg-blue-700 hover:bg-blue-900 text-white rounded-lg font-bold"
        >
          Schedule my free assessment
        </Button>
      </form>
    </section>
  );
}
