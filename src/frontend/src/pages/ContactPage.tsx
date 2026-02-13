import { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useContactSubmit } from '@/hooks/useContactSubmit';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const { submitContact, isSubmitting, isSuccess, isError, error } = useContactSubmit();

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    await submitContact(name, email, message);

    if (!isError) {
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  };

  return (
    <div className="bg-background py-12 sm:py-16">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question or want to share your story? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a
                      href="tel:+923240109287"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      +92 324 0109287
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a
                      href="mailto:meesamali6829@gmail.com"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      meesamali6829@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-muted/30 p-6">
              <h3 className="mb-3 font-semibold text-foreground">Office Hours</h3>
              <p className="text-sm text-muted-foreground">
                We typically respond to all inquiries within 24-48 hours during business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={errors.name ? 'border-destructive' : ''}
                  disabled={isSubmitting}
                />
                {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={errors.email ? 'border-destructive' : ''}
                  disabled={isSubmitting}
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us what's on your mind..."
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={errors.message ? 'border-destructive' : ''}
                  disabled={isSubmitting}
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
              </div>

              {isSuccess && (
                <div className="rounded-lg bg-primary/10 p-4 text-sm text-foreground">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              {isError && (
                <div className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
                  {error?.message || 'Failed to send message. Please try again.'}
                </div>
              )}

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
