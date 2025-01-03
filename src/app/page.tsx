import Home from "../../components/home/Home";
import Footer from "../../components/layout/footer/Footer";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen row-start-2 items-center sm:items-start bg-black">
      <div className="w-full">
        <Home />
        <Footer />
      </div>
    </main>
    // <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
  );
}
