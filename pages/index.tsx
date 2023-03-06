import MainLayout from "components/layout/MainLayout";
import AboutSection from "components/page/homepage/AboutSection";
import ContactForm from "components/page/homepage/ContactForm";
import DownloadSection from "components/page/homepage/DownloadSection";
import HeroSection from "components/page/homepage/HeroSection";
import NewsLetterSection from "components/page/homepage/NewsLetterSection";
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
      <ContactForm />
      <NewsLetterSection />
    </MainLayout>
  );
}
