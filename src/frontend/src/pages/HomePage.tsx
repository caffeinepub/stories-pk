import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import LuxuryFeaturedStoryCard from '@/components/home/LuxuryFeaturedStoryCard';
import HomeCategoriesGrid from '@/components/home/HomeCategoriesGrid';
import NewsletterStrip from '@/components/home/NewsletterStrip';
import { getFeaturedStories } from '@/data/stories';

export default function HomePage() {
  const featuredStories = getFeaturedStories();

  const handleExploreCategoriesClick = () => {
    const categoriesSection = document.getElementById('categories-section');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section - Luxury Banner */}
      <section className="relative overflow-hidden bg-background">
        <div className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Side - Text Content */}
            <div className="flex flex-col space-y-8">
              <div className="space-y-6">
                <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                  Where Stories Come to Life.
                </h1>
                <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                  Discover powerful narratives, timeless wisdom, and stories that inspire the world.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-black text-white hover:bg-black/90 focus-visible:ring-black text-base font-semibold shadow-lg"
                >
                  <Link to="/stories">Read Stories</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleExploreCategoriesClick}
                  className="text-base font-semibold"
                >
                  Explore Categories
                </Button>
              </div>
            </div>

            {/* Right Side - Luxury Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-luxury">
                <img
                  src="/assets/generated/storiespk-hero-luxury.dim_1600x600.png"
                  alt="Elegant storytelling scene with books and warm lighting"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="bg-background py-20 sm:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Featured Stories
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hand-picked narratives that showcase the best of our collection
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredStories.map((story, index) => (
              <LuxuryFeaturedStoryCard
                key={story.slug}
                story={story}
                thumbnailIndex={index + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories-section" className="bg-muted/30 py-20 sm:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Explore by Category
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Find stories that resonate with your interests
            </p>
          </div>
          <HomeCategoriesGrid />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-background py-20 sm:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left - Image */}
            <div className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl shadow-luxury">
                <img
                  src="/assets/generated/storiespk-about-minimal.dim_1200x800.png"
                  alt="Professional storytelling workspace"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 space-y-6 lg:order-2">
              <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                About Stories.pk
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                stories.pk is a modern storytelling platform dedicated to powerful narratives that educate,
                inspire, and connect readers worldwide.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We believe in the transformative power of stories to bridge cultures, spark imagination, and
                create meaningful connections across communities.
              </p>
              <div className="pt-4">
                <Button asChild size="lg" variant="outline" className="text-base font-semibold">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterStrip />
    </div>
  );
}
