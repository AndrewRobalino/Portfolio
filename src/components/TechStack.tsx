export default function TechStack() {
  const categories = [
    { name: "languages/", items: ["JavaScript", "TypeScript", "Python", "Java"] },
    { name: "frontend/", items: ["React", "Next.js", "Vite", "Tailwind CSS", "Framer Motion", "HTML/CSS"] },
    { name: "backend/", items: ["FastAPI", "PostgreSQL", "Redis", "Docker", "Node.js"] },
    { name: "ai-tools/", items: ["Claude Code", "Gemini API", "Claude API", "OpenAI API"] },
    { name: "tools/", items: ["Git", "GitHub", "Vercel", "Figma", "VS Code"] },
    { name: "learning/", items: ["AWS", "Kubernetes"] },
  ];

  return (
    <div className="h-auto md:h-full border-2 border-white p-4 font-mono text-xs md:text-sm">
      <p className="text-white/50 mb-3">$ ls skills/</p>
      <div className="space-y-2">
        {categories.map((cat) => (
          <div key={cat.name}>
            <span className="text-green-400">{cat.name}</span>
            <div className="flex flex-wrap gap-x-3 md:gap-x-4 pl-4">
              {cat.items.map((item) => (
                <span key={item} className="text-white/80">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
