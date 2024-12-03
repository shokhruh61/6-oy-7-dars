import React, { useState } from "react";

function Four() {
  const [advice, setAdvice] = useState(""); 
  const [adviceHistory, setAdviceHistory] = useState([]);  


  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      const newAdvice = data.slip.advice;

      setAdvice(newAdvice);
      setAdviceHistory([newAdvice, ...adviceHistory]);  
    } catch (error) {
      console.error("Maslahat olishda xatolik:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Tasodifiy Maslahatlar Generatori</h1>
      <p className="mb-4 p-4 bg-gray-100 border rounded-lg">
        <strong>Maslahat:</strong> {advice || "Maslahatni olish uchun tugmani bosing."}
      </p>
      <button 
        onClick={fetchAdvice} 
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Yangi maslahat
      </button>

      <h2 className="mt-8 text-xl font-semibold">Maslahatlar Tarixi:</h2>
      <ul className="list-disc pl-6 mt-2 space-y-2">
        {adviceHistory.map((advice, index) => (
          <li key={index} className="bg-gray-50 p-3 rounded-lg shadow-md">
            {advice}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Four;
