import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VideoSection from "@/components/VideoSection";
import Install from "@/components/Install";
import Contribute from "@/components/Contribute";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <VideoSection />
        <Install />
        <Contribute />
      </main>
      <Footer />
    </>
  );
}
