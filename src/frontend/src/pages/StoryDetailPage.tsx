import { useParams, Link } from '@tanstack/react-router';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getStoryBySlug } from '@/data/stories';

export default function StoryDetailPage() {
  const { slug } = useParams({ from: '/stories/$slug' });
  const story = getStoryBySlug(slug);

  if (!story) {
    return (
      <div className="bg-background py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Story Not Found</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            The story you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild className="mt-8" size="lg">
            <Link to="/stories">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Stories
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background py-12 sm:py-16">
      <article className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8">
          <Link to="/stories">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Stories
          </Link>
        </Button>

        {/* Story Header */}
        <header className="mb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{story.category}</Badge>
            {story.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                <Tag className="mr-1 h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{story.title}</h1>
          {story.author && (
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>By {story.author}</span>
              {story.date && (
                <>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={story.date}>{new Date(story.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</time>
                  </div>
                </>
              )}
            </div>
          )}
        </header>

        {/* Story Content */}
        <div className="prose prose-lg max-w-none">
          {story.body.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 leading-relaxed text-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Footer Navigation */}
        <footer className="mt-12 border-t border-border/40 pt-8">
          <Button asChild variant="outline" size="lg">
            <Link to="/stories">
              <ArrowLeft className="mr-2 h-4 w-4" />
              View All Stories
            </Link>
          </Button>
        </footer>
      </article>
    </div>
  );
}
