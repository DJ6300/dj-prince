'use client'

import type React from 'react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

const fieldClass =
  'w-full rounded-lg border border-input bg-background/60 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30'

const labelClass = 'mb-2 block text-sm font-medium text-foreground'

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="booking"
      className="relative overflow-hidden border-t border-border/50 py-24 sm:py-32"
    >
      <img
        src="/images/uplighting.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        <div className="mb-10 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Booking Inquiry
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Let&apos;s check your date
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Tell me about your celebration and we&apos;ll start building your soundtrack together.
          </p>
        </div>

        <div className="rounded-3xl border border-border/60 bg-card/80 p-8 backdrop-blur-sm sm:p-10">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                <CheckCircle2 className="size-7" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-2xl font-semibold">Request received</h3>
              <p className="max-w-md leading-relaxed text-muted-foreground text-pretty">
                Thank you! Your inquiry is in. Zackary will be in touch shortly to check your date
                and schedule a consultation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full Name
                  </label>
                  <input id="name" name="name" type="text" required className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address
                  </label>
                  <input id="email" name="email" type="email" required className={fieldClass} />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number
                  </label>
                  <input id="phone" name="phone" type="tel" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="date" className={labelClass}>
                    Event Date
                  </label>
                  <input id="date" name="date" type="date" className={fieldClass} />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="venue" className={labelClass}>
                    Venue / City
                  </label>
                  <input id="venue" name="venue" type="text" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="guests" className={labelClass}>
                    Estimated Guest Count
                  </label>
                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    min="0"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="notes" className={labelClass}>
                  Musical Vision / Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  placeholder="Wild and crazy, quiet and conservative, or somewhere in between — tell me what you're imagining."
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <Button type="submit" size="lg" className="mt-2 h-12 rounded-full text-base">
                Check Date &amp; Request Consultation
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
