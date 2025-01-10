import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mindful Med Foundation</h1>
        <div className="space-x-4">
          <Link href="/"><a className="hover:underline">Home</a></Link>
          <Link href="/about"><a className="hover:underline">About</a></Link>
          <Link href="/mission"><a className="hover:underline">Mission</a></Link>
          <Link href="/faq"><a className="hover:underline">FAQ</a></Link>
          <Link href="/resources"><a className="hover:underline">Resources</a></Link>
          <Link href="/contact"><a className="hover:underline">Contact</a></Link>
          <Link href="/ai-assistant"><a className="hover:underline">AI Assistant</a></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
