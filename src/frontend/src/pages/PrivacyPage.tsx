import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Privacy Policy – Stories.pk</CardTitle>
          <p className="text-sm text-muted-foreground">Effective Date: [Insert Date]</p>
          <p className="text-sm text-muted-foreground">Website: stories.pk</p>
        </CardHeader>
        <CardContent className="prose prose-slate max-w-none dark:prose-invert">
          <p className="text-base leading-relaxed">
            At Stories.pk, we respect your privacy. This Privacy Policy explains how we collect, use, and protect your
            information when you visit our website to read stories.
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-foreground">1. Information We Collect</h2>
            <p className="mt-3 text-muted-foreground">We may collect:</p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>
                <strong>Personal Information:</strong> Information you voluntarily provide, such as your email address
                for newsletters or contact forms.
              </li>
              <li>
                <strong>Non-Personal Information:</strong> Automatically collected data, such as your IP address,
                browser type, pages visited, and time spent reading stories.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-foreground">2. How We Use Your Information</h2>
            <p className="mt-3 text-muted-foreground">We use the information to:</p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>Improve our website and story content.</li>
              <li>Respond to messages or inquiries.</li>
              <li>Send updates or newsletters if you have subscribed.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-foreground">3. Cookies and Tracking Technologies</h2>
            <p className="mt-3 text-muted-foreground">We may use cookies or similar technologies to:</p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>Enhance your reading experience.</li>
              <li>Track website performance and visitor behavior.</li>
            </ul>
            <p className="mt-3 text-muted-foreground">
              You can disable cookies in your browser, but some features of the website may not function properly.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-foreground">4. Third-Party Services</h2>
            <p className="mt-3 text-muted-foreground">
              We may use third-party services, such as Google AdSense and analytics providers, which may automatically
              collect information. These services have their own privacy policies, and we encourage you to review them.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-foreground">5. Data Protection</h2>
            <p className="mt-3 text-muted-foreground">
              We take reasonable steps to protect your information. However, no method of online storage or transmission
              is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-foreground">6. Sharing Your Information</h2>
            <p className="mt-3 text-muted-foreground">
              We do not sell, trade, or share your personal information with outside parties, except as required by law
              or trusted third-party service providers who help us operate the website.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-foreground">7. External Links</h2>
            <p className="mt-3 text-muted-foreground">
              Our website may contain links to other websites. We are not responsible for the privacy practices or
              content of those websites.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-foreground">8. Children's Privacy</h2>
            <p className="mt-3 text-muted-foreground">
              Stories.pk is not intended for children under 13. We do not knowingly collect information from children
              under 13.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-foreground">9. Updates to This Privacy Policy</h2>
            <p className="mt-3 text-muted-foreground">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated
              date.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
