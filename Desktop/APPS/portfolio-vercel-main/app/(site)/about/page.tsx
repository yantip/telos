import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Miki Yaron',
  description: 'Learn more about Miki Yaron - Director and Editor based in Israel.',
}

export default function AboutPage() {
  return (
    <div className="container-wide pb-24">
      {/* Hero Headline */}
      <section className="py-16 md:py-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight">
          <span className="text-[#f7291e] italic">Heyyo,</span>
        </h1>
      </section>

      {/* Bio Section */}
      <section className="py-16 max-w-4xl">
        <p className="text-xl leading-relaxed mb-8 font-medium">
          The name&apos;s Miki - I am a freelance director and editor based in Israel.
        </p>
        <p className="text-xl leading-relaxed mb-8">
          Over the past decade, I have honed my skills by creating videos and content for a diverse array of clients large and small. My experience has allowed me to experiment with my craft across various industries, including tech, media, film, broadcast & advertising.
        </p>
        <p className="text-xl leading-relaxed mb-8">
          In my work, I strive to infuse a playful energy and intentional choices into each project, while also adding a hint of foolery.
        </p>
        <p className="text-xl leading-relaxed">
          I also enjoy performing card magic. Let&apos;s create something magical.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-12 border-t border-neutral-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Repped By */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Repped By
            </h2>
            <div className="space-y-2 text-lg text-neutral-700">
              <p className="font-medium">Tami Har-Lev</p>
              <p>
                <a 
                  href="mailto:tami@tamidir.co.il" 
                  className="hover:text-[#f7291e] transition-colors"
                >
                  tami@tamidir.co.il
                </a>
              </p>
              <p>
                <a 
                  href="https://www.tamidir.co.il" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#f7291e] transition-colors"
                >
                  www.tamidir.co.il
                </a>
              </p>
              <p>
                <a 
                  href="tel:+97297467658" 
                  className="hover:text-[#f7291e] transition-colors"
                >
                  +972.9.7467658
                </a>
              </p>
            </div>
          </div>

          {/* Direct */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Direct
            </h2>
            <div className="space-y-2 text-lg text-neutral-700">
              <p>
                <a 
                  href="mailto:hello@mikiyaron.com" 
                  className="hover:text-[#f7291e] transition-colors"
                >
                  hello@mikiyaron.com
                </a>
              </p>
              <p>
                <a 
                  href="https://www.instagram.com/mikiyaron" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#f7291e] transition-colors underline"
                >
                  @mikiyaron
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Work */}
      <section className="py-12 border-t border-neutral-200">
        <Link 
          href="/"
          className="inline-block text-[#f7291e] font-semibold text-lg hover:underline"
        >
          ← View all work
        </Link>
      </section>
    </div>
  )
}
