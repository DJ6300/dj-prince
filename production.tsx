import { Volume2, Lightbulb, Mic } from 'lucide-react'

const features = [
  {
    icon: Volume2,
    title: 'Concert-Grade Sound',
    description:
      'Powered by the Electro-Voice (EV) 50 column array system for crystal-clear, room-filling sound with a sleek, minimalist visual footprint.',
  },
  {
    icon: Lightbulb,
    title: 'Ambient & Uplighting',
    description:
      'Room uplighting packages to transform ballrooms and reception spaces with custom warmth.',
  },
  {
    icon: Mic,
    title: 'Master of Ceremonies (MC)',
    description:
      'Seamless timeline coordination, introductions, and announcements with a polished, professional, and hospitable presence.',
  },
]

export function Production() {
  return (
    <section id="production" className="border-t border-border/50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            The Production Experience
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Everything your celebration needs
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="flex flex-col gap-5 rounded-2xl border border-border/60 bg-card p-8 transition-all hover:border-primary/40"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-2xl font-semibold text-balance">{feature.title}</h3>
                <p className="leading-relaxed text-muted-foreground text-pretty">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
