import type { Metadata } from 'next';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { WhyGrants } from '@/components/sections/about/WhyGrants';
import { Approach } from '@/components/sections/about/Approach';
import { Expertise } from '@/components/sections/about/Expertise';
import { Team } from '@/components/sections/about/Team';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Telos - our mission, approach, and expertise in R&D grant funding for deep-tech companies.',
  openGraph: {
    title: 'About Us | Telos',
    description: 'Strategic R&D grant funding experts for deep-tech companies.',
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhyGrants />
      <Approach />
      <Expertise />
      <Team />
    </>
  );
}
