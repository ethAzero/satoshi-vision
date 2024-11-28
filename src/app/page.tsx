import AboutPage from "./components/about-page";
import HomePage from "./components/home-page";
import LitepaperPage from "./components/llitepaper";
import RoadmapPage from "./components/roadmap-page";
import TokenomicPage from "./components/tokenomic-page";

export default function Home() {
  return (
    <>
      <HomePage />
      <AboutPage />
      <RoadmapPage />
      <TokenomicPage />
      <LitepaperPage />
    </>
  );
}
