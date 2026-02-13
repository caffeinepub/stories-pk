import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Terms & Conditions for stories.com</CardTitle>
          <p className="text-sm text-muted-foreground">Effective Date: [Insert Date]</p>
        </CardHeader>
        <CardContent className="prose prose-slate max-w-none dark:prose-invert">
          <p className="text-base leading-relaxed">
            Welcome to stories.com. By accessing or using our website, you agree to comply with and be bound by the
            following terms:
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-foreground">1. Use of Content</h2>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>
                All content on stories.com, including stories, images, and text, is for personal and non-commercial use
                only.
              </li>
              <li>You may not copy, distribute, or modify content without our written permission.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-foreground">2. User Conduct</h2>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>
                Users must not post or share content that is illegal, offensive, or infringes on others' rights.
              </li>
              <li>Harassment, spamming, or misuse of the site is strictly prohibited.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-foreground">3. Intellectual Property</h2>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>All stories and website design elements are the property of stories.com.</li>
              <li>Trademarks, logos, and brand names may not be used without explicit consent.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-foreground">4. Privacy</h2>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>User information collected is governed by our Privacy Policy.</li>
              <li>We respect your privacy and never sell personal data.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-foreground">5. Disclaimer</h2>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>
                stories.com is provided "as-is." We do not guarantee content accuracy or availability at all times.
              </li>
              <li>We are not liable for any damages arising from the use of our website.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-foreground">6. Modifications</h2>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>We may update these Terms & Conditions at any time.</li>
              <li>Continued use of the site constitutes acceptance of the updated terms.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-foreground">Contact:</h2>
            <p className="mt-3 text-muted-foreground">
              For questions regarding these terms, email us at{' '}
              <a
                href="mailto:meesamali6829@gmail.com"
                className="font-medium text-primary transition-colors hover:text-primary/80"
              >
                meesamali6829@gmail.com
              </a>
              .
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
