import React from "react";
import "../styles/StatBox.css";

interface StatBoxProps {
  value: string;
  label: string;
}

export default function StatBox({ value, label }: StatBoxProps) {
  return (
    <div className="statBoxWrapper">
      <p className="statValue">{value}</p>
      <p className="statLabel">{label}</p>
    </div>
  );
}
