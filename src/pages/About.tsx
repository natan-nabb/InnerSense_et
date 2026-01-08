import Layout from '@/components/Layout';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';

const About = () => (
  <Layout>
    <section className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-2xl bg-background/60 p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold">About Inner Sense</h1>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              A calm, minimalist space to explore mindfulness, emotional intelligence, and practical tools for living with more presence.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 items-start">
            <div className="md:col-span-2 space-y-6 text-lg leading-relaxed">
              <p>
                Inner Sense helps you navigate the fast-paced modern world with clarity and care. We believe emotional well-being is a practice — a gentle journey to understanding the rhythms of your inner life and building habits that foster resilience.
              </p>

              <blockquote className="rounded-lg border-l-4 border-primary pl-4 italic text-muted-foreground">
                “You cannot calm the ocean, but you can learn to sail.”
              </blockquote>

              <h3 className="text-xl font-semibold">Our Approach</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Emotional Intelligence</strong> — Learn to notice feelings without being swept away.</li>
                <li><strong>Self-Awareness</strong> — Become a compassionate observer of your inner currents.</li>
                <li><strong>Mindful Reflection</strong> — Create rhythms that prevent burnout and invite balance.</li>
              </ul>

              <p>
                We combine thoughtful essays, guided practices, and practical suggestions to help you weave mindfulness into everyday life. Browse our <Link to="/articles" className="text-primary font-medium">articles</Link> to get started.
              </p>

              <div className="flex items-center gap-4">
                <Link to="/articles" className="inline-block rounded-md bg-primary px-4 py-2 text-primary-foreground">Explore Articles</Link>
                <Link to="/contact" className="ml-3 inline-block text-primary">Contact Us →</Link>
              </div>
            </div>

            <aside className="flex flex-col items-center gap-4 rounded-xl border border-border p-6 text-center">
              <Avatar className="h-24 w-24">
                <AvatarFallback>RZ</AvatarFallback>
              </Avatar>

              <div>
                <h4 className="font-semibold">Rebira Zeleke</h4>
                <p className="text-sm text-muted-foreground">Founder · Mindfulness Guide</p>
              </div>

              <p className="text-sm text-muted-foreground">
                Rebira founded Inner Sense to share approachable practices that help people build emotional awareness and live more intentionally.
              </p>

              <Link to="https://t.me/InnerSense_help" className="text-sm text-primary mt-2">Say hello</Link>
            </aside>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
