import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Story } from '@/data/stories';

interface FeaturedStoriesCarouselProps {
  stories: Story[];
}

export default function FeaturedStoriesCarousel({ stories }: FeaturedStoriesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!stories || stories.length === 0) {
    return null;
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const currentStory = stories[currentIndex];

  return (
    <div className="relative w-full">
      <Card className="overflow-hidden border-primary/20 bg-background/50 backdrop-blur-sm transition-all hover:border-primary/40">
        <CardContent className="p-6">
          <Link
            to="/stories/$slug"
            params={{ slug: currentStory.slug }}
            className="block space-y-3 transition-opacity hover:opacity-90"
          >
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="text-xs">
                {currentStory.category}
              </Badge>
              <span className="text-xs text-muted-foreground">
                {currentIndex + 1} / {stories.length}
              </span>
            </div>
            <h3 className="line-clamp-2 text-lg font-semibold text-foreground">{currentStory.title}</h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">{currentStory.excerpt}</p>
          </Link>
        </CardContent>
      </Card>

      {stories.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevious}
            className="h-8 w-8"
            aria-label="Previous story"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex gap-1.5">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex ? 'w-6 bg-primary' : 'w-1.5 bg-muted-foreground/30'
                }`}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="h-8 w-8"
            aria-label="Next story"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
