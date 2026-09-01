export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About DJ Prince
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Bringing energy, precision, and passion to every event. From intimate gatherings to high-energy dance floors, every set is crafted to create unforgettable moments.
              </p>
              <p>
                Specializing in curated track selections, seamless mixing, and top-tier sound to keep the room moving all night long.
              </p>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted border border-border">
            <img
              src="/placeholder.jpg"
              alt="DJ Prince"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
