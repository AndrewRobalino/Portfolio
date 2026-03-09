import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center font-mono">
        <p className="text-terminal-green text-lg">
          andrew@portfolio:~$ <span className="text-white">setup complete</span>
        </p>
      </div>
    </>
  );
}
