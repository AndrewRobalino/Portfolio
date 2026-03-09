import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex h-[calc(100vh-64px)] mt-16">
        <div className="flex w-[60%] flex-col items-center justify-center p-8">
          <p className="font-mono text-white/40">Terminal goes here</p>
        </div>
        <div className="flex w-[40%] flex-col items-center justify-center p-8">
          <p className="font-mono text-white/40">Photo panels go here</p>
        </div>
      </div>
    </>
  );
}
