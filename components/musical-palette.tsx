import { Music2, Wine, Radio, Flame } from 'lucide-react'

const styles = [
  {
    icon: Music2,
    name: 'Classical',
    moment: 'The Ceremony',
    description: 'Elegant ceremony processionals and prelude ambiance.',
  },
  {
    icon: Wine,
    name: 'Jazz, Chill & Lo-Fi',
    moment: 'Cocktail & Dinner',
    description: 'Smooth, laid-back grooves to set a relaxed, sophisticated mood.',
  },
  {
    icon: Radio,
    name: 'Funk & Pop',
    moment: 'The Transition',
    description: 'Upbeat, celebratory grooves that transition the room.',
  },
  {
    icon: Flame,
    name: 'High-Energy Floor-Fillers',
    moment: 'The Dance Floor',
    description:
      'Crowd favorites, 90s throwbacks, and modern hits to keep the dance floor packed all night.',
  },
]

export function MusicalPalette() {
  return (
    <section id="repertoire" className="border-t border-border/50 bg-card/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Musical Palette &amp; Repertoire
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Open-format curation for every moment
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Wide-ranging sound tailored to the arc of your day — from the first note of the
            processional to the final song on a packed floor.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2">
          {styles.map((style) => {
            const Icon = style.icon
            return (
              <div
                key={style.name}
                className="group flex flex-col gap-4 bg-card p-8 transition-colors hover:bg-secondary"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {style.moment}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-balance">{style.name}</h3>
                <p className="leading-relaxed text-muted-foreground text-pretty">
                  {style.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
