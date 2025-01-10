import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fetchOpenAIResponse, fetchPubMedArticles } from "../utils/api";

const AIAssistantPage = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleQuery = async () => {
    if (input.toLowerCase().includes("pubmed")) {
      const articles = await fetchPubMedArticles(input);
      setResponse(`Found ${articles.length} articles: ${articles.join(", ")}`);
    } else {
      const aiResponse = await fetchOpenAIResponse(input);
      setResponse(aiResponse);
    }
  };

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Ask the AI Assistant</h2>
        <input
          type="text"
          className="border p-2 w-full mb-4"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleQuery}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Ask
        </button>
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <strong>Response:</strong>
          <p>{response || "Ask something to see a response!"}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIAssistantPage;
