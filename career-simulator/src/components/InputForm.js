import React, { useState } from "react";

function InputForm({ setResult }) {
  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState("");
  const [interest, setInterest] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // MOCK AI OUTPUT (replace with backend later)
    const data = {
      salary: [4, 6, 9, 12, 18],
      jobDemand: 88,
      automationRisk: 25,

      comparison: [
        { role: "AI Engineer", score: 92 },
        { role: "Data Scientist", score: 85 },
        { role: "Web Developer", score: 75 }
      ],

      suggestions: [
        "Improve Python skills",
        "Learn Machine Learning",
        "Build real-world projects",
        "Practice DSA"
      ]
    };

    setResult(data);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Enter Your Details</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Skill (Python, Java...)"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <br /><br />

        <input
          placeholder="Skill Level (Beginner/Intermediate/Advanced)"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
        <br /><br />

        <input
          placeholder="Interest (AI, Web, Data...)"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        />
        <br /><br />

        <button type="submit">Predict Career 🚀</button>
      </form>
    </div>
  );
}

export default InputForm;