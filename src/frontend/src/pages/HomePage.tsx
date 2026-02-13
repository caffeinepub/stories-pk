import { Link } from '@tanstack/react-router';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StoryCard from '@/components/stories/StoryCard';
import FeaturedStoriesCarousel from '@/components/home/FeaturedStoriesCarousel';
import { getFeaturedStories } from '@/data/stories';

export default function HomePage() {
  const featuredStories = getFeaturedStories();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(74,222,128,0.1),transparent_50%)]" />
        <div className="container relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center space-x-2 text-sm font-medium text-primary">
                <BookOpen className="h-5 w-5" />
                <span>Welcome to stories.pk</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Explore Amazing Stories Every Day
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                Discover a curated collection of compelling narratives, insightful articles, and inspiring tales from
                writers around the world. Every story has the power to change perspectives.
              </p>
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button asChild size="lg" className="group">
                  <Link to="/stories">
                    Read Stories
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>

              {/* Featured Stories Carousel */}
              <div className="pt-4">
                <p className="mb-3 text-sm font-medium text-muted-foreground">Featured Stories</p>
                <FeaturedStoriesCarousel stories={featuredStories} />
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/storiespk-hero.dim_1600x600.png"
                alt="Stories Hero"
                className="h-full w-full rounded-lg object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="bg-background py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Featured Stories</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hand-picked stories that showcase the best of our collection
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredStories.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/stories">View All Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Stay Connected</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a story to share or want to get in touch? We'd love to hear from you.
          </p>
          <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
