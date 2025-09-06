import { Header } from "./components/Header";
import { HeroCarousel } from "./components/HeroCarousel";
import { ApplicationCards } from "./components/ApplicationCards";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      <Header />
      <HeroCarousel />
      <ApplicationCards />
      <Footer />
    </div>
  );
}