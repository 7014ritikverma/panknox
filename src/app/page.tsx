import HeroSection from "@/components/home/HeroSection";
import SectionTransition from "@/components/common/SectionTransition";
import TheGapSection from "@/components/home/TheGapSection";
import DontSellPostsSection from "@/components/home/DontSellPostsSection";
import PanknoxSystemSignature from "@/components/home/PanknoxSystemSignature";
import CapabilitySystemSection from "@/components/home/CapabilitySystemSection";
import IndustrySwitcherSection from "@/components/home/IndustrySwitcherSection";
import PanknoxMethodSection from "@/components/home/PanknoxMethodSection";
import AiEraSection from "@/components/home/AiEraSection";
import TeamSection from "@/components/home/TeamSection";
import PanknoxCTAIsland from "@/components/common/PanknoxCTAIsland";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* 01 / HERO (DARK ATMOSPHERIC CENTERED EXPERIENCE) */}
      <HeroSection />

      {/* TRANSITION: DARK HERO -> WHITE CONTENT */}
      <SectionTransition
        theme="dark-to-light"
        label="Chapter 01 · The perception gap"
      />

      {/* 02 / THE GAP (WHITE: #FFFFFF) */}
      <TheGapSection />

      {/* TRANSITION: WHITE -> DARK ATMOSPHERIC MOMENT */}
      <SectionTransition
        theme="light-to-dark"
        label="Chapter 02 · The philosophical reversal"
      />

      {/* 03 / WE DON'T SELL POSTS (DARK ATMOSPHERIC CHAPTER) */}
      <DontSellPostsSection />

      {/* 04 / THE PANKNOX SYSTEM (SIGNATURE 02) (ATMOSPHERIC DARK) */}
      <PanknoxSystemSignature />

      {/* TRANSITION: DARK -> WHITE */}
      <SectionTransition
        theme="dark-to-light"
        label="Chapter 03 · Capability architecture"
      />

      {/* 05 / WHAT WE BUILD // CAPABILITIES (WHITE: #FFFFFF) */}
      <CapabilitySystemSection />

      {/* 06 / INDUSTRIES // MORPHING ENVIRONMENTS (LIGHT NEUTRAL) */}
      <IndustrySwitcherSection />

      {/* 07 / HOW WE WORK // CLIENT EXPERIENCE (WHITE: #FFFFFF) */}
      <PanknoxMethodSection />

      {/* TRANSITION: LIGHT -> DARK ATMOSPHERIC MOMENT */}
      <SectionTransition
        theme="light-to-dark"
        label="Chapter 04 · The AI filter"
      />

      {/* 08 / THE AI ERA (SIGNATURE 03) (ATMOSPHERIC DARK) */}
      <AiEraSection />

      {/* TRANSITION: DARK -> WHITE */}
      <SectionTransition
        theme="dark-to-light"
        label="Chapter 05 · The creative operating unit"
      />

      {/* 09 / THE TEAM (WHITE: #FFFFFF) */}
      <TeamSection />

      {/* 10 / SIGNATURE DYNAMIC ISLAND CTA (WHITE BACKGROUND #FFFFFF) */}
      <PanknoxCTAIsland variant="home" />
    </div>
  );
}
