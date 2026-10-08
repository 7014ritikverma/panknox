import HeroSection from "@/components/home/HeroSection";
import SectionTransition from "@/components/common/SectionTransition";
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
      {/* 01 / SIGNAL // HERO (DARK: #04262F) */}
      <HeroSection />

      {/* TRANSITION: DARK -> WHITE */}
      <SectionTransition
        theme="dark-to-light"
        label="CHAPTER 01 // THE MARKET GAP DIAGNOSTIC"
      />

      {/* 02 / THE GAP (WHITE: #FFFFFF) */}
      <TheGapSection />

      {/* TRANSITION: WHITE -> DARK */}
      <SectionTransition
        theme="light-to-dark"
        label="CHAPTER 02 // THE FOUNDATIONAL LAW"
      />

      {/* 03 / THE SYSTEM // WE DON'T SELL POSTS (DARK: #04262F) */}
      <DontSellPostsSection />

      {/* TRANSITION: DARK -> WHITE */}
      <SectionTransition
        theme="dark-to-light"
        label="CHAPTER 03 // CAPABILITY ARCHITECTURE"
      />

      {/* 04 / WHAT WE BUILD // CAPABILITIES (WHITE: #FFFFFF) */}
      <CapabilitySystemSection />

      {/* TRANSITION: WHITE -> DARK */}
      <SectionTransition
        theme="light-to-dark"
        label="CHAPTER 04 // SECTOR OPERATING ENVIRONMENTS"
      />

      {/* 05 / INDUSTRIES // DYNAMIC ENVIRONMENTS (DARK: #04262F) */}
      <IndustrySwitcherSection />

      {/* TRANSITION: DARK -> WHITE */}
      <SectionTransition
        theme="dark-to-light"
        label="CHAPTER 05 // EDITORIAL WORK ARCHIVE"
      />

      {/* 06 / WORK // EDITORIAL ARCHIVE (WHITE: #FFFFFF) */}
      <WorkArchiveSection />

      {/* 07 / HOW AN ENGAGEMENT ACTUALLY WORKS (LIGHT/SURFACE: #F4F7F6) */}
      <PanknoxMethodSection />

      {/* TRANSITION: LIGHT -> DARK */}
      <SectionTransition
        theme="light-to-dark"
        label="CHAPTER 06 // INTELLIGENCE & RESTRAINT"
      />

      {/* 08 / THE AI ERA // OUTPUT IS CHEAP, JUDGEMENT IS VALUABLE (DARK: #04262F) */}
      <AiEraSection />

      {/* TRANSITION: DARK -> WHITE */}
      <SectionTransition
        theme="dark-to-light"
        label="CHAPTER 07 // THE CREATIVE OPERATING UNIT"
      />

      {/* 09 / THE TEAM // CREATIVE OPERATING UNIT (WHITE: #FFFFFF) */}
      <TeamSection />

      {/* TRANSITION: WHITE -> DARK */}
      <SectionTransition
        theme="light-to-dark"
        label="CHAPTER 08 // CONVERSATION PORTAL"
      />

      {/* 10 / CONVERSATION // QUALIFICATION BRIEFING (DARK -> WHITE CHAMBER) */}
      <ContactExperienceSection />
    </div>
  );
}
