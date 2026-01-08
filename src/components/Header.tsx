import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <span className="text-2xl md:text-3xl font-serif font-bold text-primary">
                Inner
              </span>
              <span className="text-2xl md:text-3xl font-serif italic text-aqua">
                Sense
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/articles" className="nav-link">Articles</Link>
            <Link to="/featured" className="nav-link">Featured</Link>
            <Link to="/short-stories" className="nav-link">Short Stories</Link>
            <Link to="/practices" className="nav-link">Practices</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link to="/" className="nav-link text-lg py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/articles" className="nav-link">Articles</Link>
              <Link to="/featured" className="nav-link text-lg py-2" onClick={() => setIsMenuOpen(false)}>Featured</Link>
              <Link to="/short-stories" className="nav-link text-lg py-2" onClick={() => setIsMenuOpen(false)}>Short Stories</Link>
              <Link to="/practices" className="nav-link text-lg py-2" onClick={() => setIsMenuOpen(false)}>Practices</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
