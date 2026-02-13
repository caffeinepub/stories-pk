import { BookOpen, Heart, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background py-12 sm:py-16">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">About stories.pk</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Connecting readers with stories that inspire, inform, and transform
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Our Mission</h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              At stories.pk, we believe in the transformative power of storytelling. Our platform serves as a bridge
              between talented writers and curious readers, creating a space where narratives come alive and
              perspectives are broadened.
            </p>
            <p>
              We curate a diverse collection of stories spanning multiple genres and themes—from personal essays and
              cultural insights to thought-provoking articles and creative fiction. Each piece is carefully selected to
              ensure quality, authenticity, and the ability to resonate with our global audience.
            </p>
            <p>
              Our commitment extends beyond simply publishing content. We strive to foster a community where stories
              spark conversations, challenge assumptions, and inspire positive change. Whether you're here to discover
              new voices, find inspiration, or simply enjoy a well-crafted narrative, stories.pk is your destination for
              meaningful content.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">What We Value</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Quality Content</h3>
              <p className="text-muted-foreground">
                Every story is carefully curated to ensure it meets our high standards for writing, authenticity, and
                impact.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Diverse Voices</h3>
              <p className="text-muted-foreground">
                We celebrate diversity by featuring stories from writers of all backgrounds, cultures, and perspectives.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Community Impact</h3>
              <p className="text-muted-foreground">
                Stories have the power to change hearts and minds. We're committed to sharing narratives that make a
                difference.
              </p>
            </div>
          </div>
        </section>

        {/* Creator Section */}
        <section className="rounded-lg bg-muted/30 p-8">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Behind the Platform</h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              stories.pk was created with a simple vision: to make quality storytelling accessible to everyone. What
              started as a passion project has grown into a thriving platform that connects thousands of readers with
              compelling narratives every day.
            </p>
            <p>
              We're constantly evolving, adding new features, and expanding our collection to better serve our
              community. Your feedback and engagement help shape the future of stories.pk, and we're grateful for every
              reader who joins us on this journey.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
