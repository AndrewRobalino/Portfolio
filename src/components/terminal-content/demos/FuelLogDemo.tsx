"use client";

import { useState } from "react";

interface FuelEntry {
  gallons: number;
  miles: number;
  mpg: number;
}

function parseEntries(input: string): FuelEntry[] {
  const entries: FuelEntry[] = [];
  const lines = input.trim().split("\n");

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const parts = trimmed.split(/\s+/);
    if (parts.length < 2) continue;

    const gallons = parseFloat(parts[0]);
    const miles = parseFloat(parts[1]);

    if (isNaN(gallons) || isNaN(miles) || gallons <= 0) continue;

    entries.push({
      gallons,
      miles,
      mpg: miles / gallons,
    });
  }

  return entries;
}

export default function FuelLogDemo() {
  const [input, setInput] = useState("12.5 350\n10.2 290\n8.7 310\n11.0 275");
  const [output, setOutput] = useState<string[]>([]);

  const handleParse = () => {
    const entries = parseEntries(input);

    if (entries.length === 0) {
      setOutput(["error: no valid entries found", 'format: "gallons miles" per line']);
      return;
    }

    const lines: string[] = [];
    lines.push("─── fuel log report ───");
    lines.push("");
    lines.push("  gal      mi      mpg");
    lines.push("  ───────────────────────");

    let totalGallons = 0;
    let totalMiles = 0;

    for (const entry of entries) {
      totalGallons += entry.gallons;
      totalMiles += entry.miles;
      const g = entry.gallons.toFixed(1).padStart(6);
      const m = entry.miles.toFixed(0).padStart(7);
      const mpg = entry.mpg.toFixed(1).padStart(8);
      lines.push(`  ${g}  ${m}  ${mpg}`);
    }

    const avgMpg = totalMiles / totalGallons;

    lines.push("  ───────────────────────");
    lines.push(
      `  ${totalGallons.toFixed(1).padStart(6)}  ${totalMiles
        .toFixed(0)
        .padStart(7)}  ${avgMpg.toFixed(1).padStart(8)}`
    );
    lines.push("");
    lines.push(`  entries:  ${entries.length}`);
    lines.push(`  total:    ${totalGallons.toFixed(1)} gal / ${totalMiles.toFixed(0)} mi`);
    lines.push(`  avg mpg:  ${avgMpg.toFixed(1)}`);

    setOutput(lines);
  };

  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      <div style={{ marginBottom: 8 }}>
        <div
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.4)",
            marginBottom: 4,
          }}
        >
          {">"} enter fuel data (gallons miles):
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={5}
          style={{
            width: "100%",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: "#fff",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.1)",
            padding: 8,
            resize: "vertical",
            outline: "none",
            boxSizing: "border-box",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "rgba(74,222,128,0.3)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "rgba(255,255,255,0.1)";
          }}
          spellCheck={false}
        />
      </div>

      <button
        onClick={handleParse}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12,
          color: "#4ade80",
          background: "transparent",
          border: "1px solid rgba(74,222,128,0.3)",
          padding: "5px 16px",
          cursor: "pointer",
          marginBottom: 12,
        }}
      >
        parse
      </button>

      {output.length > 0 && (
        <div
          style={{
            marginTop: 8,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 10,
          }}
        >
          {output.map((line, i) => (
            <div
              key={i}
              style={{
                fontSize: 12,
                color: line.startsWith("error")
                  ? "#ef4444"
                  : line.startsWith("─") || line.includes("───")
                  ? "rgba(255,255,255,0.2)"
                  : "#fff",
                lineHeight: 1.6,
                whiteSpace: "pre",
              }}
            >
              {line || "\u00A0"}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
