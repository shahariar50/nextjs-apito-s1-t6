import MainLayout from "components/layout/MainLayout";
import AboutSection from "components/page/homepage/AboutSection";
import DownloadSection from "components/page/homepage/DownloadSection";
import HeroSection from "components/page/homepage/HeroSection";
import PressSection from "components/page/homepage/PressSection";
import ServiceSection from "components/page/homepage/ServiceSection";
import TestemonialSection from "components/page/homepage/TestemonialSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <DownloadSection />
      <TestemonialSection />
      <PressSection />
    </MainLayout>
  );
}
