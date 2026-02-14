import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle2 } from 'lucide-react';

export default function NewsletterStrip() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }
  };

  return (
    <section className="bg-foreground py-20 text-background sm:py-24">
      <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-background/10">
          <Mail className="h-8 w-8 text-background" />
        </div>
        <h2 className="font-serif text-4xl font-bold tracking-tight text-background sm:text-5xl">
          Stay Inspired.
        </h2>
        <p className="mt-4 text-lg text-background/80">
          Subscribe to receive our latest stories directly to your inbox.
        </p>

        {!isSubscribed ? (
          <form onSubmit={handleSubscribe} className="mt-10">
            <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 flex-1 border-background/20 bg-background/10 text-background placeholder:text-background/60 focus:border-background/40 focus:ring-background/40"
              />
              <Button
                type="submit"
                size="lg"
                className="h-12 bg-background text-foreground hover:bg-background/90"
              >
                Subscribe
              </Button>
            </div>
          </form>
        ) : (
          <div className="mt-10 flex flex-col items-center justify-center space-y-3">
            <div className="flex items-center gap-2 text-background">
              <CheckCircle2 className="h-6 w-6" />
              <span className="text-lg font-semibold">Thank you for subscribing!</span>
            </div>
            <p className="text-sm text-background/80">
              You'll receive our latest stories in your inbox soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
