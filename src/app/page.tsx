import HeroSection from "@/components/sections/HeroSection";
import GroupEntitiesSection from "@/components/sections/GroupEntitiesSection";
import LifecycleSection from "@/components/sections/LifecycleSection";
import IndustriesTeaserSection from "@/components/sections/IndustriesTeaserSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GroupEntitiesSection />
      <IndustriesTeaserSection />
      <LifecycleSection />
      <CTASection />
    </>
  );
}
