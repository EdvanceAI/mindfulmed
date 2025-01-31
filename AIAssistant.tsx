import React, { useState, useEffect } from "react";

const fields = [
  "Neuroscience",
  "Pediatrics",
  "Radiology",
  "Cardiology",
  "Oncology",
  // add other fields as needed
];

const fetchAIDetails = async (field) => {
  // Mock function to simulate AI summary fetching
  // Use your Gemini API key to request summaries based on the field
  const response = await fetch(`https://api.gemini.com/summarize?field=${field}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer AIzaSyCJHHtLmEC1mynL4fVOC9O2QaausTjpKzs`,
    },
  });
  const data = await response.json();
  return data;
};

const AIFieldSummary = () => {
  const [selectedField, setSelectedField] = useState("");
  const [summary, setSummary] = useState(null);

  const handleFieldChange = async (field) => {
    setSelectedField(field);
    const aiData = await fetchAIDetails(field);
    setSummary(aiData);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-4">Explore Medical Fields</h1>
      
      <div className="flex justify-center mb-6">
        {fields.map((field) => (
          <button
            key={field}
            className="bg-blue-500 text-white p-2 m-2 rounded-lg"
            onClick={() => handleFieldChange(field)}
          >
            {field}
          </button>
        ))}
      </div>

      {summary && (
        <div className="bg-gray-800 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold">{selectedField} Summary</h2>
          <p>{summary.summary}</p>
          
          <h3 className="mt-4 font-semibold">Career Pathway:</h3>
          <ul>
            {summary.careerPathway.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
          
          <h3 className="mt-4 font-semibold">Resources to Explore:</h3>
          <ul>
            {summary.resources.map((resource, index) => (
              <li key={index}>
                <a href={resource.link} target="_blank" className="text-blue-400">{resource.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AIFieldSummary;
