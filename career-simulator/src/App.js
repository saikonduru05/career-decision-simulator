import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar
} from "recharts";

function App() {
  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState("");
  const [interest, setInterest] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    let base = 50;

    if (skill === "Python") base += 15;
    if (skill === "AI/ML") base += 25;
    if (skill === "Data Science") base += 20;

    if (level === "Intermediate") base += 10;
    if (level === "Advanced") base += 20;

    if (interest === "High") base += 10;
    if (interest === "Low") base -= 10;

    const data = {
      salary: [
        { year: "1", value: base / 10 },
        { year: "2", value: base / 7 },
        { year: "3", value: base / 5 },
        { year: "4", value: base / 3.5 },
        { year: "5", value: base / 2 }
      ],

      jobDemand: [
        { role: "AI Engineer", value: base + 20 },
        { role: "Data Scientist", value: base + 10 },
        { role: "Web Dev", value: base }
      ],

      automationRisk: 100 - base,

      comparison: [
        { role: "AI Engineer", score: base + 25 },
        { role: "Data Scientist", score: base + 15 },
        { role: "Web Dev", score: base }
      ],

      suggestions: [
        `Improve ${skill || "your skills"}`,
        "Build real-world projects",
        "Practice DSA daily",
        "Learn system design basics"
      ]
    };

    setResult(data);
  };

  return (
    <div style={styles.page}>

      <h1 style={styles.title}>Career Decision Simulator 🚀</h1>

      {/* INPUT CARD */}
      <form style={styles.card} onSubmit={handleSubmit}>

        <select style={styles.input} value={skill} onChange={(e) => setSkill(e.target.value)}>
          <option value="">Select Skill</option>
            <option>Python</option>
  <option>Java</option>
  <option>JavaScript</option>
  <option>C++</option>

          <option>C</option>
  <option>Go</option>
  <option>Rust</option>
  <option>SQL</option>
  <option>NoSQL</option>
  <option>HTML/CSS</option>

  <option>React</option>
  <option>Angular</option>
  <option>Vue</option>
  <option>Node.js</option>
  <option>Express.js</option>

  <option>Machine Learning</option>
  <option>Deep Learning</option>
  <option>Artificial Intelligence</option>
  <option>Data Science</option>
  <option>Data Analytics</option>

  <option>Cloud Computing</option>
  <option>AWS</option>
  <option>Azure</option>
  <option>Google Cloud</option>
  <option>DevOps</option>
  <option>Docker</option>
  <option>Kubernetes</option>

  <option>Cyber Security</option>
  <option>Ethical Hacking</option>
  <option>Blockchain</option>
  <option>Web3</option>
  <option>Cryptography</option>

  <option>UI/UX Design</option>
  <option>Graphic Design</option>
  <option>Product Design</option>

  <option>Mobile App Development</option>
  <option>Android Development</option>
  <option>iOS Development</option>

  <option>Game Development</option>
  <option>Unity</option>
  <option>Unreal Engine</option>

  <option>Business Analytics</option>
  <option>Finance Tech</option>
  
        </select>

        <select style={styles.input} value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="">Select Level</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <select style={styles.input} value={interest} onChange={(e) => setInterest(e.target.value)}>
          <option value="">Select Interest</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button style={styles.button}>Predict Career 🚀</button>

      </form>

      {/* RESULT DASHBOARD */}
      {result && (
        <div style={styles.resultContainer}>

          <div style={styles.cardBox}>
            <h2>📊 Career Score</h2>
            <h1>{100 - result.automationRisk}/100</h1>
          </div>

          <div style={styles.cardBox}>
            <h2>⚠ Automation Risk</h2>
            <h1>{result.automationRisk}%</h1>
          </div>

          <div style={styles.chartBox}>
            <h3>Salary Growth</h3>
            <LineChart width={500} height={250} data={result.salary}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#38bdf8" />
            </LineChart>
          </div>

          <div style={styles.chartBox}>
            <h3>Job Demand</h3>
            <BarChart width={500} height={250} data={result.jobDemand}>
              <XAxis dataKey="role" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#22c55e" />
            </BarChart>
          </div>

          <div style={styles.cardBox}>
            <h3>Suggestions</h3>
            {result.suggestions.map((s, i) => (
              <p key={i}>✔ {s}</p>
            ))}
          </div>

        </div>
      )}

    </div>
  );
}

const styles = {
  page: {
    background: "#0f172a",
    minHeight: "100vh",
    color: "white",
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial"
  },

  title: {
    color: "#38bdf8",
    marginBottom: "20px"
  },

  card: {
    width: "320px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "20px",
    background: "#1e293b",
    borderRadius: "12px"
  },

  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "none"
  },

  button: {
    padding: "10px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"
  },

  resultContainer: {
    marginTop: "30px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px"
  },

  cardBox: {
    background: "#1e293b",
    padding: "15px",
    borderRadius: "10px",
    width: "250px"
  },

  chartBox: {
    background: "#1e293b",
    padding: "15px",
    borderRadius: "10px"
  }
};

export default App;