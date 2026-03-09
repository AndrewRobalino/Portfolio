import TerminalTitleBar from "./TerminalTitleBar";

export default function Terminal() {
  return (
    <div className="flex flex-col h-full border border-white/10 overflow-hidden">
      <TerminalTitleBar />
      <div className="flex-1 bg-matte-black p-6 font-mono text-sm overflow-y-auto terminal-scrollbar">
        <p>
          <span className="text-terminal-green">$ </span>
          <span className="text-white">echo &quot;hello world&quot;</span>
          <span className="terminal-cursor">|</span>
        </p>
      </div>
    </div>
  );
}
