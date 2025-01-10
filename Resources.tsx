import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ResourcesPage = () => (
  <div>
    <Navbar />
    <main className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Resources</h2>
      <p>Access internships, volunteer opportunities, and medical resources here.</p>
    </main>
    <Footer />
  </div>
);

export default ResourcesPage;
