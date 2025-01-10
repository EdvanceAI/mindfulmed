import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => (
  <div>
    <Navbar />
    <main className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <p>
        Mindful Med Foundation is a student-led organization committed to academic success in the medical field. We promote internships, volunteer opportunities, and provide college advice.
      </p>
    </main>
    <Footer />
  </div>
);

export default AboutPage;
