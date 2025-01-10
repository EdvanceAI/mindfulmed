import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => (
  <div>
    <Navbar />
    <main className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p>Reach out through our social media channels or email us at contact@mindfulmed.org.</p>
    </main>
    <Footer />
  </div>
);

export default ContactPage;
