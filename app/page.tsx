import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { ValueProposition } from '@/components/sections/ValueProposition';
import { ProcessOverview } from '@/components/sections/ProcessOverview';
import { TrustIndicators } from '@/components/sections/TrustIndicators';
import { ProgramsPreview } from '@/components/sections/ProgramsPreview';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Telos - R&D Grant Funding for Deep-Tech Companies',
  description: 'Strategic R&D grant funding services for deep-tech companies. Expert identification, preparation, and submission of grant applications for Israel Innovation Authority, Horizon Europe, EIC Accelerator, and more.',
  keywords: ['R&D grants', 'deep-tech funding', 'grant applications', 'Israel Innovation Authority', 'Horizon Europe', 'EIC Accelerator', 'Innovate UK', 'SEED programs'],
  openGraph: {
    title: 'Telos - R&D Grant Funding for Deep-Tech Companies',
    description: 'Strategic R&D grant funding services for deep-tech companies.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <ProcessOverview />
      <TrustIndicators />
      <ProgramsPreview />
      <FinalCTA />
    </>
  );
}
