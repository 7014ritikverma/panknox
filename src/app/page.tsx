import HeroSection from "@/components/home/HeroSection";
import SectionTransition from "@/components/common/SectionTransition";
import TheGapSection from "@/components/home/TheGapSection";
import DontSellPostsSection from "@/components/home/DontSellPostsSection";
import CapabilitySystemSection from "@/components/home/CapabilitySystemSection";
import PanknoxSystemSignature from "@/components/home/PanknoxSystemSignature";
import IndustrySwitcherSection from "@/components/home/IndustrySwitcherSection";
import WorkArchiveSection from "@/components/home/WorkArchiveSection";
import PanknoxMethodSection from "@/components/home/PanknoxMethodSection";
import AiEraSection from "@/components/home/AiEraSection";
import TeamSection from "@/components/home/TeamSection";
import ContactExperienceSection from "@/components/home/ContactExperienceSection";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col bg-brand-navy">
      {/* 01 / HERO (ATMOSPHERIC DARK) */}
      <HeroSection />

      {/* TRANSITION: DARK -> WHITE */}
      <SectionTransition
        theme="dark-to-light"
        label="CHAPTER 01 // THE MARKET GAP"
      />

      {/* 02 / THE GAP (WHITE: #FFFFFF) */}
      <TheGapSection />

      {/* TRANSITION: WHITE -> DARK */}
      <SectionTransition
        theme="light-to-dark"
        label="CHAPTER 02 // THE PHILOSOPHICAL REVERSAL"
      />

      {/* 03 / WE DON'T SELL POSTS (ATMOSPHERIC DARK) */}
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
        label="CHAPTER 04 // THE PANKNOX SYSTEM"
      />

      {/* 05 / THE PANKNOX SYSTEM (SIGNATURE 02) (ATMOSPHERIC DARK) */}
      <PanknoxSystemSignature />

      {/* 06 / INDUSTRIES // MORPHING ENVIRONMENTS (ATMOSPHERIC DARK) */}
      <IndustrySwitcherSection />

      {/* TRANSITION: DARK -> WHITE */}
      <SectionTransition
        theme="dark-to-light"
        label="CHAPTER 05 // EDITORIAL WORK ARCHIVE"
      />

      {/* 07 / WORK // EDITORIAL ARCHIVE (WHITE: #FFFFFF) */}
      <WorkArchiveSection />

      {/* 08 / HOW WE WORK // CLIENT EXPERIENCE (LIGHT: #F4F7F6) */}
      <PanknoxMethodSection />

      {/* TRANSITION: LIGHT -> DARK */}
      <SectionTransition
        theme="light-to-dark"
        label="CHAPTER 06 // THE AI FILTER"
      />

      {/* 09 / THE AI ERA (SIGNATURE 03) (ATMOSPHERIC DARK) */}
      <AiEraSection />

      {/* TRANSITION: DARK -> WHITE */}
      <SectionTransition
        theme="dark-to-light"
        label="CHAPTER 07 // THE CREATIVE OPERATING UNIT"
      />

      {/* 10 / THE TEAM (WHITE: #FFFFFF) */}
      <TeamSection />

      {/* TRANSITION: WHITE -> DARK */}
      <SectionTransition
        theme="light-to-dark"
        label="CHAPTER 08 // CONVERSATION"
      />

      {/* 11 / CONTACT // "LET'S BUILD SOMETHING WORTH NOTICING" (ATMOSPHERIC DARK) */}
      <ContactExperienceSection />
    </div>
  );
}
