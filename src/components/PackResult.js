import React from "react";

export function PackResult({ color, period, amount, scale }) {
  const incScale = 0.5 + (scale + 1) / 5;

  return (
    <div
      key={period}
      className="period"
      style={{ transform: `scale(${incScale})`, ...color }}
    >
      <div style={{ padding: "0 20px" }}>
        <h1 style={{ marginBottom: "5px" }}>{amount}</h1>
        <p style={{ margin: 0 }}>euro</p>
      </div>
      <hr className="separator" />
      <div>
        <p className="period-pack">A {period}</p>
      </div>
    </div>
  );
}
