import { Link } from '@tanstack/react-router';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Story } from '@/data/stories';

interface StoryCardProps {
  story: Story;
}

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <Card className="group flex h-full flex-col transition-all hover:shadow-lg">
      <CardHeader>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{story.category}</Badge>
          {story.date && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <time dateTime={story.date}>
                {new Date(story.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
            </div>
          )}
        </div>
        <CardTitle className="line-clamp-2 transition-colors group-hover:text-primary">
          <Link to="/stories/$slug" params={{ slug: story.slug }}>
            {story.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="line-clamp-3 text-sm text-muted-foreground">{story.excerpt}</p>
        {story.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {story.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="group/btn w-full justify-between">
          <Link to="/stories/$slug" params={{ slug: story.slug }}>
            Read More
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
