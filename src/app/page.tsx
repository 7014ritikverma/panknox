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
        label="Chapter 01 · The market gap"
      />

      {/* 02 / THE GAP (WHITE: #FFFFFF) */}
      <TheGapSection />

      {/* TRANSITION: WHITE -> DARK */}
      <SectionTransition
        theme="light-to-dark"
        label="Chapter 02 · The philosophical reversal"
      />

      {/* 03 / WE DON'T SELL POSTS (ATMOSPHERIC DARK) */}
      <DontSellPostsSection />

      {/* TRANSITION: DARK -> WHITE */}
      <SectionTransition
        theme="dark-to-light"
        label="Chapter 03 · Capability architecture"
      />

      {/* 04 / WHAT WE BUILD // CAPABILITIES (WHITE: #FFFFFF) */}
      <CapabilitySystemSection />

      {/* TRANSITION: WHITE -> DARK */}
      <SectionTransition
        theme="light-to-dark"
        label="Chapter 04 · The Panknox system"
      />

      {/* 05 / THE PANKNOX SYSTEM (SIGNATURE 02) (ATMOSPHERIC DARK) */}
      <PanknoxSystemSignature />

      {/* 06 / INDUSTRIES // MORPHING ENVIRONMENTS (ATMOSPHERIC DARK) */}
      <IndustrySwitcherSection />

      {/* TRANSITION: DARK -> WHITE */}
      <SectionTransition
        theme="dark-to-light"
        label="Chapter 05 · Editorial work archive"
      />

      {/* 07 / WORK // EDITORIAL ARCHIVE (WHITE: #FFFFFF) */}
      <WorkArchiveSection />

      {/* 08 / HOW WE WORK // CLIENT EXPERIENCE (LIGHT: #F4F7F6) */}
      <PanknoxMethodSection />

      {/* TRANSITION: LIGHT -> DARK */}
      <SectionTransition
        theme="light-to-dark"
        label="Chapter 06 · The AI filter"
      />

      {/* 09 / THE AI ERA (SIGNATURE 03) (ATMOSPHERIC DARK) */}
      <AiEraSection />

      {/* TRANSITION: DARK -> WHITE */}
      <SectionTransition
        theme="dark-to-light"
        label="Chapter 07 · The creative operating unit"
      />

      {/* 10 / THE TEAM (WHITE: #FFFFFF) */}
      <TeamSection />

      {/* TRANSITION: WHITE -> DARK */}
      <SectionTransition
        theme="light-to-dark"
        label="Chapter 08 · Conversation"
      />

      {/* 11 / CONTACT // "LET'S BUILD SOMETHING WORTH NOTICING" (ATMOSPHERIC DARK) */}
      <ContactExperienceSection />
    </div>
  );
}
