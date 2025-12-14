import Image from "next/image";
import Hero from "@/components/hero";
import Programs from "@/components/programs";
import Trainer from "@/components/trainer";
import About from "@/components/about";
import Book from "@/components/book";
import Footer from "@/components/footer";
import LoadingScreen from "@/components/loading-screen";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <LoadingScreen />
      <Hero />
      <Programs />
      <Trainer />
      <About />
      <Book />
      <Footer />
    </main>
  );
}
