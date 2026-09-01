import { Button } from '@/components/ui/button'

export function About() {
  return (
    <section id="about" className="relative border-t border-border/50 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-8">
          <div className="relative mx-auto w-[35%] overflow-hidden rounded-lg border border-primary/20 lg:mx-0">
            <img
              src="/images/dj-portrait-bw.jpg"
              alt="Zackary Prince, wedding DJ based in Indianapolis"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-primary/10" />
          </div>
          <p className="mt-4 text-center text-xs font-medium uppercase tracking-[0.25em] text-primary lg:text-left">
            Zackary Prince &middot; DJ Prince of Rhythm
          </p>
        </div>

        <div>
          <div className="mb-8">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              About &amp; Philosophy
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              The night is yours. You are the conductor.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground text-pretty">
          <p>
            My name is Zackary Prince, and I&apos;m a wedding DJ based in downtown Indianapolis,
            keeping the dance floor moving from the Circle City to anywhere your event takes us
            (travel options available).
          </p>
          <p>
            I could tell you that music is my great passion, that I just finished listening to a
            thousand albums during the last year, or that I have state-of-the-art speakers with
            pristine sound. It is true that I&apos;ve worked hundreds of weddings as a bartender and
            a server. For every one of them, I was obsessed with making them magical. My favorite
            thing, though, will always be DJing for weddings.
          </p>
          <p>
            But the most important thing is what you want your wedding to sound like. I want to know
            what kind of experience you want, because your special day should have an awesome
            soundtrack. You deserve the exact experience you want for your wedding. Whether
            that&apos;s wild and crazy, quiet and conservative, or somewhere in the middle, you can
            and should have it.{' '}
            <span className="font-medium text-foreground">
              The night is yours, and you are the conductor.
            </span>
          </p>
          <p>
            Feel free to click the contact button below so together we can create the perfect
            playlist for your amazing wedding.
          </p>
        </div>

          <div className="mt-12">
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-primary/40 px-8 text-base text-primary hover:bg-primary/10 hover:text-primary"
              nativeButton={false}
              render={<a href="#booking" />}
            >
              Start Planning Your Soundtrack
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
