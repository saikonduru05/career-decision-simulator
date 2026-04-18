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

/* ---------------- GALAXY BACKGROUND ---------------- */
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
body {
  margin: 0;
  font-family: Arial;
  background: radial-gradient(circle at top, #0b1026, #050816);
  overflow-x: hidden;
}

@keyframes starsMove {
  from { transform: translateY(0); }
  to { transform: translateY(-2000px); }
}

.stars {
  position: fixed;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  animation: starsMove 60s linear infinite;
  box-shadow:
    20px 40px white,
    120px 200px white,
    220px 350px white,
    320px 500px white,
    420px 650px white,
    520px 800px white,
    620px 950px white,
    720px 1100px white;
}
`;
document.head.appendChild(styleSheet);

function App() {
  const [login, setLogin] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState("");
  const [interest, setInterest] = useState("");

  const [result, setResult] = useState(null);

  /* ---------------- LOGIN ---------------- */
  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) setLogin(true);
  };

  /* ---------------- AI SIMULATION ---------------- */
  const handleSubmit = (e) => {
    e.preventDefault();

    let score = 50;

    const map = {
      "AI/ML": 20,
      "Machine Learning": 18,
      "Data Science": 15,
      "Python": 12,
      "Cloud Computing": 10,
      "Cyber Security": 12,
      "Web Development": 10,
      "App Development": 10,
      "Java": 8,
      "JavaScript": 8,
      "DevOps": 10
    };

    if (map[skill]) score += map[skill];

    if (level === "Advanced") score += 15;
    else if (level === "Intermediate") score += 8;
    else score += 3;

    if (interest === "High") score += 10;
    else if (interest === "Medium") score += 5;

    // HARD LIMIT FIX
    score = Math.min(100, Math.max(0, score));

    const data = {
      score,

      salary: [
        { year: "1", value: score / 10 },
        { year: "2", value: score / 7 },
        { year: "3", value: score / 5 },
        { year: "4", value: score / 3.5 },
        { year: "5", value: score / 2 }
      ],

      jobDemand: [
        { role: "AI Engineer", value: score },
        { role: "Data Scientist", value: score - 5 },
        { role: "Software Engineer", value: score - 8 },
        { role: "Cyber Security", value: score - 10 }
      ],

      automationRisk: 100 - score,

      comparison: [
        { role: "AI Engineer", score },
        { role: "Data Scientist", score: score - 5 },
        { role: "Software Engineer", score: score - 8 },
        { role: "Cyber Security", score: score - 10 }
      ],

      suggestions:
        score > 80
          ? ["Excellent profile", "Focus on AI projects", "Build real systems"]
          : score > 60
          ? ["Good progress", "Improve coding skills", "Build projects"]
          : ["Start basics", "Practice daily", "Learn fundamentals"]
    };

    setResult(data);
  };

  /* ---------------- LOGIN PAGE ---------------- */
  if (!login) {
    return (
      <div style={styles.center}>
        <div className="stars"></div>

        <form style={styles.card} onSubmit={handleLogin}>
          <h1 style={styles.title}>🌌 Career Simulator</h1>
          <p style={styles.subtitle}>AI Career Guidance System</p>

          <input
            style={styles.input}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            style={styles.input}
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button style={styles.button}>Login 🚀</button>
        </form>
      </div>
    );
  }

  /* ---------------- DASHBOARD ---------------- */
  return (
    <div style={styles.page}>
      <div className="stars"></div>

      <h1 style={{ color: "#38bdf8" }}>Career Decision Simulator 🚀</h1>

      <form style={styles.card} onSubmit={handleSubmit}>

        <select style={styles.input} value={skill} onChange={(e) => setSkill(e.target.value)}>
          <option>Select Skill</option>
          <option>Python</option>
          <option>Java</option>
          <option>JavaScript</option>
          <option>AI/ML</option>
          <option>Machine Learning</option>
          <option>Data Science</option>
          <option>Cloud Computing</option>
          <option>Cyber Security</option>
          <option>Web Development</option>
          <option>App Development</option>
          <option>DevOps</option>
          <option>Blockchain</option>
          <option>Android Development</option>
          <option>Graphic Design</option>
<option>IoT</option>
<option>Robotics</option>
<option>Embedded Systems</option>
<option>Mathematics</option>
<option>Statistics</option>
<option>Physics</option>

<option>Finance</option>
<option>Accounting</option>
<option>Cloud Computing</option>
<option>AWS</option>
<option>Azure</option>
<option>Google Cloud</option>

<option>DevOps</option>
<option>Docker</option>
<option>Kubernetes</option>
<option>CI/CD</option>
<option>Cyber Security</option>
<option>Ethical Hacking</option>
<option>Blockchain</option>
<option>Web3</option>
<option>Smart Contracts</option>

        </select>

        <select style={styles.input} value={level} onChange={(e) => setLevel(e.target.value)}>
          <option>Select Level</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <select style={styles.input} value={interest} onChange={(e) => setInterest(e.target.value)}>
          <option>Select Interest</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button style={styles.button}>Analyze Career</button>
      </form>

      {/* ---------------- OUTPUT ---------------- */}
      {result && (
        <div style={styles.result}>

          <h2>🎯 Career Score</h2>
          <h1 style={{ color: "#38bdf8" }}>{result.score}/100</h1>

          {/* SALARY */}
          <h3>📈 Salary Growth</h3>
          <LineChart width={500} height={250} data={result.salary}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line dataKey="value" stroke="#38bdf8" />
          </LineChart>

          {/* DEMAND */}
          <h3>📊 Job Demand</h3>
          <BarChart width={500} height={250} data={result.jobDemand}>
            <XAxis dataKey="role" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#22c55e" />
          </BarChart>

          {/* RISK */}
          <h3>⚠ Automation Risk</h3>
          <p>{result.automationRisk}%</p>

          {/* COMPARISON */}
          <h3>🔥 Multi Comparison</h3>
          {result.comparison.map((c, i) => (
            <p key={i}>{c.role} → {c.score}</p>
          ))}

          {/* SUGGESTIONS */}
          <h3>💡 Suggestions</h3>
          {result.suggestions.map((s, i) => (
            <p key={i}>✔ {s}</p>
          ))}

        </div>
      )}
    </div>
  );
}

/* ---------------- STYLES ---------------- */
const styles = {
  center: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white"
  },

  page: {
    textAlign: "center",
    minHeight: "100vh",
    color: "white"
  },

  card: {
    width: "360px",
    margin: "auto",
    padding: "20px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(12px)",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },

  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "none"
  },

  button: {
    padding: "10px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold"
  },

  title: {
    color: "#38bdf8"
  },

  subtitle: {
    color: "#94a3b8",
    fontSize: "13px"
  },

  result: {
    marginTop: "30px"
  }
};

export default App;