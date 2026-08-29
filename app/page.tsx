import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
    </main>
  );
}
