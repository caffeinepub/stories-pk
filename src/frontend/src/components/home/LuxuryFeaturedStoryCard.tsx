import { Link } from '@tanstack/react-router';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import type { Story } from '@/data/stories';

interface LuxuryFeaturedStoryCardProps {
  story: Story;
  thumbnailIndex: number;
}

export default function LuxuryFeaturedStoryCard({ story, thumbnailIndex }: LuxuryFeaturedStoryCardProps) {
  return (
    <Card className="group overflow-hidden border-border/50 shadow-card-enhanced transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover hover:scale-[1.02]">
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs font-medium">
            {story.category}
          </Badge>
          {story.date && (
            <span className="text-xs text-muted-foreground">{story.date}</span>
          )}
        </div>
        <h3 className="font-serif text-xl font-bold leading-tight text-foreground transition-colors duration-300 group-hover:text-primary">
          {story.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {story.excerpt}
        </p>
        <Button
          asChild
          className="bg-black text-white hover:bg-black/90 focus-visible:ring-black font-semibold transition-all duration-300 hover:scale-105"
        >
          <Link to="/stories/$slug" params={{ slug: story.slug }}>
            Read More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
