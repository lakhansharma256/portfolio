import { NavBar } from "./components/NavBar";
import { PortfolioContent } from "./components/PortfolioContent";
import { PortfolioEffects } from "./components/PortfolioEffects";

export default function Home() {
  return (
    <>
      <a href="#home" className="skip-link">
        Skip to content
      </a>
      <PortfolioEffects />
      <div className="main-content">
        <NavBar />
        <PortfolioContent />
      </div>
    </>
  );
}
