import Navbar from "@/components/Navbar";
import PhotoPanels from "@/components/PhotoPanels";
import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex h-[calc(100vh-64px)] mt-16">
        <div className="flex w-[60%] flex-col p-6">
          <Terminal />
        </div>
        <div className="w-[40%] p-4">
          <PhotoPanels />
        </div>
      </div>
    </>
  );
}
