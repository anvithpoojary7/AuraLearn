import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
          aria-label="AuraLearn home"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold">
            A
          </div>
          <span className="hidden sm:inline text-foreground">AuraLearn</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8"
          role="navigation"
          aria-label="Main navigation"
        >
          <Link
            to="/text-to-speech"
            className="text-sm font-medium hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-2 py-1"
          >
            Text-to-Speech
          </Link>
          <Link
            to="/speech-to-text"
            className="text-sm font-medium hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-2 py-1"
          >
            Speech-to-Text
          </Link>
          <a
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-2 py-1"
          >
            Features
          </a>
          <a
            href="#accessibility"
            className="text-sm font-medium hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-2 py-1"
          >
            Accessibility
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            asChild
            variant="default"
            className="bg-primary hover:bg-primary/90"
          >
            <Link to="/text-to-speech">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav
          className="md:hidden border-t border-border bg-card"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="container py-4 flex flex-col gap-3">
            <Link
              to="/text-to-speech"
              className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Text-to-Speech
            </Link>
            <Link
              to="/speech-to-text"
              className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Speech-to-Text
            </Link>
            <a
              href="#features"
              className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#accessibility"
              className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Accessibility
            </a>
            <Button
              asChild
              variant="default"
              className="bg-primary hover:bg-primary/90 mt-2"
            >
              <Link to="/text-to-speech">Get Started</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
