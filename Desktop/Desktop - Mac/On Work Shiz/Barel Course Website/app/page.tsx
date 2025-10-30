import ThemeToggle from '@/components/ThemeToggle';
import Hero from '@/components/Hero';
import Header from '@/components/Header';
import CourseHighlights from '@/components/CourseHighlights';
import Stats from '@/components/Stats';
import InstructorBio from '@/components/InstructorBio';
import Curriculum from '@/components/Curriculum';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <Header />
      <Hero />
      <CourseHighlights />
      <Stats />
      <InstructorBio />
      <Curriculum />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
