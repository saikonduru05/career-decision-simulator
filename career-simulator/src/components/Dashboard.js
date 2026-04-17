import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

function Dashboard({ result }) {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>

      <h2>📊 Career Dashboard</h2>

      {/* SALARY GRAPH */}
      <h3>Salary Growth</h3>

      <LineChart width={500} height={300} data={
        result.salary.map((s, i) => ({
          year: `Year ${i + 1}`,
          salary: s
        }))
      }>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="salary" />
      </LineChart>

      {/* JOB DEMAND */}
      <h3>Job Demand</h3>
      <p>{result.jobDemand}% 🔥 High Demand</p>

      {/* AUTOMATION RISK */}
      <h3>Automation Risk</h3>
      <p>{result.automationRisk}% ⚠️</p>

      {/* COMPARISON */}
      <h3>Career Comparison</h3>
      {result.comparison.map((c, i) => (
        <p key={i}>
          {c.role} → Score: {c.score}
        </p>
      ))}

      {/* SUGGESTIONS */}
      <h3>Suggestions to Improve</h3>
      {result.suggestions.map((s, i) => (
        <p key={i}>✔ {s}</p>
      ))}

    </div>
  );
}

export default Dashboard;