import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src="/images/hero-dj.png"
        alt="Elegant wedding reception at night with warm gold uplighting and a sleek DJ setup"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Overlays for legibility */}
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Indianapolis Wedding DJ
        </span>

        <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl">
          DJ Prince of Rhythm
        </h1>

        <p className="mt-6 max-w-2xl font-serif text-xl italic text-primary/90 text-balance sm:text-2xl">
          Curated Sound &amp; Master of Ceremonies for Indianapolis Weddings
        </p>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
          Setting the perfect vibe, from the first toast to the last dance.
        </p>

        <div className="mt-10">
          <Button
            size="lg"
            className="h-12 gap-2 rounded-full px-8 text-base"
            nativeButton={false}
            render={<a href="#booking" />}
          >
            Check Availability
            <ArrowDown className="size-4" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-foreground/60">
        <ArrowDown className="size-5 animate-bounce" aria-hidden="true" />
      </div>
    </section>
  )
}
