import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { MusicalPalette } from '@/components/musical-palette'
import { Production } from '@/components/production'
import { Faq } from '@/components/faq'
import { BookingForm } from '@/components/booking-form'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <MusicalPalette />
      <Production />
      <Faq />
      <BookingForm />
      <SiteFooter />
    </main>
  )
}
