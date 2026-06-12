import Navbar from "../Navbar/Navbar";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import AboutSection from "../components/AboutSection/AboutSection";
import VideoSection from "../components/VideoSection/VideoSection";
import CategoryTabs from "../components/CategoryTabs/CategoryTabs";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider/>
    <AboutSection/>
    <VideoSection />
    <CategoryTabs />
      <Footer />
    </>
  );
}

export default Home;