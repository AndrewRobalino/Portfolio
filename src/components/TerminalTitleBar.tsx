export default function TerminalTitleBar() {
  return (
    <div className="flex items-center bg-[#1a1a1a] px-4 py-2 border-b border-white/10">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
      </div>
      <span className="ml-auto font-mono text-sm text-white/40">
        andrew@portfolio:~$
      </span>
    </div>
  );
}
