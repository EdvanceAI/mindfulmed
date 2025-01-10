import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => (
  <div>
    <Navbar />
    <main className="container mx-auto p-6">
      <section className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to Mindful Med Foundation</h1>
        <p>
          We are dedicated to empowering aspiring medical professionals through mentorship, resources, and opportunities. Explore our website to learn more!
        </p>
      </section>
    </main>
    <Footer />
  </div>
);

export default HomePage;


// Mission Page
export const MissionPage = () => (
  <div className="bg-gray-100 min-h-screen">
    <header className="bg-blue-400 text-white py-5 text-center">
      <h1 className="text-3xl font-bold">Our Mission</h1>
    </header>
    <main className="container mx-auto px-4 py-8">
      <section className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Mission Statement</h2>
        <p>We aim to empower aspiring medical professionals by offering mentorship, resources, and hands-on opportunities.</p>
      </section>
    </main>
  </div>
);

// FAQ Page
export const FAQPage = () => (
  <div className="bg-gray-100 min-h-screen">
    <header className="bg-blue-400 text-white py-5 text-center">
      <h1 className="text-3xl font-bold">FAQ</h1>
    </header>
    <main className="container mx-auto px-4 py-8">
      <section className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <p>Coming soon! Stay tuned for more updates.</p>
      </section>
    </main>
  </div>
);

// Resources Page
export const ResourcesPage = () => (
  <div className="bg-gray-100 min-h-screen">
    <header className="bg-blue-400 text-white py-5 text-center">
      <h1 className="text-3xl font-bold">Resources</h1>
    </header>
    <main className="container mx-auto px-4 py-8">
      <section className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Helpful Links</h2>
        <p>
          Visit our <a href="https://linktr.ee/MindFul_Med" target="_blank" className="text-blue-500 hover:underline">Linktree</a> for valuable resources, internships, and opportunities.
        </p>
      </section>
    </main>
  </div>
);

// Contact Page
export const ContactPage = () => (
  <div className="bg-gray-100 min-h-screen">
    <header className="bg-blue-400 text-white py-5 text-center">
      <h1 className="text-3xl font-bold">Contact Us</h1>
    </header>
    <main className="container mx-auto px-4 py-8">
      <section className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p>
          Follow us on Instagram: <a href="https://www.instagram.com/mindfulmedfoundation/" target="_blank" className="text-blue-500 hover:underline">@mindfulmedfoundation</a>
        </p>
      </section>
    </main>
  </div>
);

// AI Assistant Page
export const AIAssistantPage = () => (
  <div className="bg-gray-100 min-h-screen">
    <header className="bg-blue-400 text-white py-5 text-center">
      <h1 className="text-3xl font-bold">AI Assistant</h1>
    </header>
    <main className="container mx-auto px-4 py-8">
      <section className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Interactive Learning</h2>
        <p>Ask me anything about medical concepts or resources! (Feature under development.)</p>
      </section>
    </main>
  </div>
);

// Export all pages
export { AboutPage, MissionPage, FAQPage, ResourcesPage, ContactPage, AIAssistantPage };
