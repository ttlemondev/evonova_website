import HeroSection from "@/components/homepage/HeroSection";
import ProblemsSection from "@/components/homepage/ProblemsSection";
import SolutionsSection from "@/components/homepage/SolutionsSection";
import XWorkerSection from "@/components/homepage/XWorkerSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import CoursesSection from "@/components/homepage/CoursesSection";
import PackagesSection from "@/components/homepage/PackagesSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <section id="solutions">
        <SolutionsSection />
      </section>
      <XWorkerSection />
      <ServicesSection />
      <section id="courses">
        <CoursesSection />
      </section>
      <PackagesSection />
    </>
  );
}
