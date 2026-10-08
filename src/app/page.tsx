import HeroSection from "@/components/home/HeroSection";
import TheGapSection from "@/components/home/TheGapSection";
import DontSellPostsSection from "@/components/home/DontSellPostsSection";
import CapabilitySystemSection from "@/components/home/CapabilitySystemSection";
import IndustrySwitcherSection from "@/components/home/IndustrySwitcherSection";
import WorkArchiveSection from "@/components/home/WorkArchiveSection";
import PanknoxMethodSection from "@/components/home/PanknoxMethodSection";
import AiEraSection from "@/components/home/AiEraSection";
import TeamSection from "@/components/home/TeamSection";
import ContactExperienceSection from "@/components/home/ContactExperienceSection";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 01 / SIGNAL */}
      <HeroSection />

      {/* 02 / THE GAP */}
      <TheGapSection />

      {/* 03 / THE SYSTEM // WE DON'T SELL POSTS */}
      <DontSellPostsSection />

      {/* 04 / WHAT WE BUILD // CAPABILITY ARCHITECTURE */}
      <CapabilitySystemSection />

      {/* 05 / INDUSTRIES // DYNAMIC OPERATING ENVIRONMENTS */}
      <IndustrySwitcherSection />

      {/* 06 / WORK // EDITORIAL ARCHIVE */}
      <WorkArchiveSection />

      {/* 07 / HOW IT WORKS // THE CONTINUOUS LOOP */}
      <PanknoxMethodSection />

      {/* 08 / THE AI ERA */}
      <AiEraSection />

      {/* 09 / THE TEAM // CREATIVE OPERATING UNIT */}
      <TeamSection />

      {/* 10 / CONVERSATION */}
      <ContactExperienceSection />
    </div>
  );
}
