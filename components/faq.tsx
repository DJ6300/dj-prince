'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Do you travel outside of Indianapolis?',
    answer:
      'Yes, based in downtown Indy and available for travel throughout Indiana and surrounding areas.',
  },
  {
    question: 'Are you insured?',
    answer:
      'Yes, fully insured. A Certificate of Insurance (COI) can be provided directly to your venue upon request.',
  },
  {
    question: 'Do you take song requests from guests?',
    answer:
      'Yes, as long as they align with the vibe of the evening and respect your custom Must-Play and Do-Not-Play lists.',
  },
  {
    question: 'When do you arrive to set up?',
    answer:
      'I arrive 90 to 120 minutes prior to scheduled start times to set up and run full sound checks at no extra charge, ensuring everything is ready before the first guest walks in.',
  },
  {
    question: 'Do you handle announcements and keep the timeline on track?',
    answer:
      'Yes. In addition to music, I serve as your professional Master of Ceremonies, making formal announcements and coordinating with your venue staff, caterer, and photographer for a seamless flow.',
  },
  {
    question: 'Can you provide sound for our ceremony as well as the reception?',
    answer:
      'Yes, ceremony audio coverage is available as an add-on service, including prelude music, processional/recessional cues, and dedicated wireless microphones for clear vows and readings.',
  },
  {
    question: 'What is your attire for the wedding?',
    answer:
      "Polished, professional formal attire suited to your event's dress code, ensuring a sharp and sophisticated appearance behind the booth.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative border-t border-border/50 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Frequently Asked
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Everything you want to know
          </h2>
        </div>

        <div className="divide-y divide-border/60 border-y border-border/60">
          {faqs.map((faq, index) => {
            const isOpen = open === index
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-primary"
                  >
                    <span className="font-serif text-lg font-medium text-pretty sm:text-xl">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="min-h-0">
                    <p className="pr-9 text-base leading-relaxed text-muted-foreground text-pretty">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
