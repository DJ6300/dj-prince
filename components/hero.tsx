import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-[90svh] items-center justify-center overflow-hidden py-16 px-6">
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Photo Container */}
        <div className="mb-8 overflow-hidden rounded-2xl border border-primary/20 shadow-2xl w-48 h-48 sm:w-56 sm:h-56">
          <img
            src="/images/hero-dj.png"
            alt="DJ Prince of Rhythm"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Tagline */}
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium tracking-wide text-primary">
          Indianapolis Wedding & Event DJ
        </span>

        {/* Main Title */}
        <h1 className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl text-foreground">
          DJ Prince of Rhythm
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
          Bespoke soundtracks, seamless transitions, and unforgettable dance floors tailored to your celebration.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full px-8 shadow-lg">
            <a href="#booking">Check Availability</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <a href="#about">
              Learn More <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
