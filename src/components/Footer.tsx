import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      {/* Wave SVG */}
      <div className="relative -mb-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-background"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <span className="text-2xl font-serif font-bold">Inner</span>
              <span className="text-2xl font-serif italic text-aqua">Sense</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Inner Sense is a calm space for emotional intelligence, self-awareness, and mindful reflection. <strong>Flow gently and find inner balance.</strong>
            </p>
            <div className="flex gap-4 pt-2">
              <a href="@innersense_et" className="text-primary-foreground/80 hover:text-aqua transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://t.me/InnerSense_et" className="text-primary-foreground/80 hover:text-aqua transition-colors">
                <Send size={20} />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Explore</h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/articles"
                className="text-sm text-primary-foreground/80 hover:text-aqua transition-colors"
              >
                All Articles
              </Link>

              <Link
                to="/category/short-stories"
                className="text-sm text-primary-foreground/80 hover:text-aqua transition-colors"
              >
                Short Stories
              </Link>

              <Link
                to="/category/practices"
                className="text-sm text-primary-foreground/80 hover:text-aqua transition-colors"
              >
                Practices
              </Link>
            </nav>

          </div>
          {/* Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Info</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-aqua transition-colors">
                About
              </Link>
              <Link to="https://t.me/InnerSense_help" className="text-sm text-primary-foreground/80 hover:text-aqua transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Inner Sense. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
