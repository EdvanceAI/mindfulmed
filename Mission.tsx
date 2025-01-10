import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MissionPage = () => (
  <div>
    <Navbar />
    <main className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
      <p>
        Our mission is to empower aspiring medical professionals by providing access to mentorship, resources, and hands-on opportunities. We aim to foster growth, inclusivity, and excellence in the medical field.
      </p>
    </main>
    <Footer />
  </div>
);

export default MissionPage;
