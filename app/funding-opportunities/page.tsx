import type { Metadata } from 'next';
import { FundingHero } from '@/components/sections/funding/FundingHero';
import { ProgramSection } from '@/components/sections/funding/ProgramSection';
import { FundingCTA } from '@/components/sections/funding/FundingCTA';

export const metadata: Metadata = {
  title: 'Funding Opportunities',
  description: 'Explore R&D grant programs including Israel Innovation Authority, Horizon Europe, EIC Accelerator, Innovate UK, and SEED programs.',
  openGraph: {
    title: 'Funding Opportunities | Telos',
    description: 'Comprehensive guide to R&D grant programs for deep-tech companies.',
  },
};

const programs = [
  {
    id: 'israel-innovation-authority',
    name: 'Israel Innovation Authority',
    shortName: 'IIA',
    description:
      'Israel\'s national innovation agency offers comprehensive R&D funding programs for companies at all stages, from early research to market expansion.',
    overview:
      'The Israel Innovation Authority (IIA) supports technological innovation and entrepreneurship through various grant programs. As the primary government agency for promoting innovation, IIA funds cover up to 50% of approved R&D expenses, with higher rates for certain programs and company profiles.',
    eligibility: [
      'Companies registered in Israel',
      'R&D activities conducted primarily in Israel',
      'All technology sectors eligible',
      'Various company stages from pre-seed to growth',
    ],
    benefits: [
      'Up to 50% of approved R&D expenses',
      'Higher rates for priority sectors',
      'Multiple program tracks available',
      'Ongoing support and guidance',
    ],
    telosHelp: [
      'Program selection and fit assessment',
      'R&D plan development and optimization',
      'Budget preparation and justification',
      'Application writing and submission',
      'Milestone reporting support',
    ],
  },
  {
    id: 'seed-programs',
    name: 'SEED Programs',
    shortName: 'SEED',
    description:
      'Pre-seed and early-stage funding programs designed to help validate breakthrough technologies and establish initial proof of concept.',
    overview:
      'SEED programs provide crucial early-stage funding for technology ventures that are too nascent for traditional venture capital. These programs typically focus on validating core technology assumptions, building initial prototypes, and establishing technical feasibility.',
    eligibility: [
      'Pre-seed and seed-stage companies',
      'Novel technology with differentiation',
      'Clear R&D milestones and objectives',
      'Dedicated founding team',
    ],
    benefits: [
      'Critical early-stage capital',
      'Validation before major fundraising',
      'Network and mentorship access',
      'Follow-on funding pathways',
    ],
    telosHelp: [
      'Program identification and selection',
      'Technology positioning and narrative',
      'Milestone definition and planning',
      'Application development',
      'Interview and pitch preparation',
    ],
  },
  {
    id: 'horizon-europe',
    name: 'Horizon Europe',
    shortName: 'HE',
    description:
      'The EU\'s flagship research and innovation program, with €95.5 billion in funding for collaborative projects addressing global challenges.',
    overview:
      'Horizon Europe is the European Union\'s key funding program for research and innovation. It supports collaborative projects that bring together organizations from multiple EU member states and associated countries to address major challenges in health, climate, digital, and other priority areas.',
    eligibility: [
      'Consortia from EU/associated countries',
      'Minimum 3 entities from 3 countries',
      'Research organizations and companies',
      'Alignment with specific call topics',
    ],
    benefits: [
      '100% funding for research activities',
      '70% for innovation activities (companies)',
      'Access to European networks',
      'Prestigious recognition',
    ],
    telosHelp: [
      'Call topic analysis and selection',
      'Consortium building support',
      'Work package design and planning',
      'Proposal writing and coordination',
      'Budget preparation and compliance',
    ],
  },
  {
    id: 'innovate-uk',
    name: 'Innovate UK',
    shortName: 'IUK',
    description:
      'The UK\'s innovation agency, providing funding for groundbreaking technologies that can drive economic growth and address societal challenges.',
    overview:
      'Innovate UK is part of UK Research and Innovation and drives growth by working with companies to de-risk, enable, and support innovation. Their funding programs cover a wide range of sectors with particular focus on areas where the UK can lead globally.',
    eligibility: [
      'UK-based businesses',
      'Collaborative projects often preferred',
      'Specific sector calls and competitions',
      'SMEs and larger companies',
    ],
    benefits: [
      'Up to 70% of project costs for SMEs',
      'Sector-specific expertise and networks',
      'Follow-on support programs',
      'Government procurement pathways',
    ],
    telosHelp: [
      'Competition selection and timing',
      'Partnership development',
      'Innovation narrative development',
      'Application and submission',
      'Project monitoring support',
    ],
  },
  {
    id: 'eic-accelerator',
    name: 'EIC Accelerator',
    shortName: 'EIC',
    description:
      'The flagship European program for high-impact innovations, offering grants up to €2.5 million combined with equity investments up to €15 million.',
    overview:
      'The EIC Accelerator is designed for high-risk, high-impact innovations that are too risky for private investors alone. It supports breakthrough technologies with the potential to create new markets or disrupt existing ones, providing both grant funding and equity investment.',
    eligibility: [
      'Single SMEs from EU/associated countries',
      'Technology Readiness Level 5-8',
      'High-growth potential innovations',
      'Clear market opportunity',
    ],
    benefits: [
      'Up to €2.5 million in grant funding',
      'Up to €15 million equity component',
      'Business acceleration services',
      'Network of EIC-funded companies',
    ],
    telosHelp: [
      'EIC fit assessment',
      'Innovation narrative and pitch development',
      'Business plan refinement',
      'Video pitch coaching',
      'Interview preparation',
    ],
  },
];

export default function FundingOpportunitiesPage() {
  return (
    <>
      <FundingHero />
      <nav className="sticky top-16 md:top-20 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-100 py-3">
        <div className="max-w-content mx-auto container-padding">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {programs.map((program) => (
              <a
                key={program.id}
                href={`#${program.id}`}
                className="flex-shrink-0 px-4 py-2 bg-neutral-50 hover:bg-navy-50 text-neutral-700 hover:text-navy-800 rounded-lg text-sm font-medium transition-colors"
              >
                {program.shortName}
              </a>
            ))}
          </div>
        </div>
      </nav>
      {programs.map((program, index) => (
        <ProgramSection key={program.id} program={program} index={index} />
      ))}
      <FundingCTA />
    </>
  );
}
