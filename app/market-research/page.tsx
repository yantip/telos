import type { Metadata } from 'next';
import { MarketResearchHero } from '@/components/sections/market-research/MarketResearchHero';
import { ResearchServices } from '@/components/sections/market-research/ResearchServices';
import { ResearchCTA } from '@/components/sections/market-research/ResearchCTA';

export const metadata: Metadata = {
  title: 'Market Research',
  description: 'Data-driven market research services including quantitative analysis, target audience research, and competitive intelligence for strategic decision-making.',
  openGraph: {
    title: 'Market Research | Telos',
    description: 'Comprehensive market intelligence services to understand your market, identify opportunities, and outpace competitors.',
  },
};

export default function MarketResearchPage() {
  return (
    <>
      <MarketResearchHero />
      <ResearchServices />
      <ResearchCTA />
    </>
  );
}

