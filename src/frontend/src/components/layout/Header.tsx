import { Link, useNavigate } from '@tanstack/react-router';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Stories', path: '/stories' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Terms', path: '/terms' },
    { label: 'Privacy Policy', path: '/privacy' },
  ];

  const handleNavClick = (path: string) => {
    navigate({ to: path });
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur shadow-sm supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/assets/generated/storiespk-logo.dim_512x192.png"
            alt="stories.pk"
            className="h-8 w-auto sm:h-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-2 md:flex">
          {navLinks.map((link) => (
            <Button
              key={link.path}
              variant="ghost"
              asChild
              className="text-sm font-medium transition-all duration-300 hover:text-primary px-4"
            >
              <Link to={link.path}>{link.label}</Link>
            </Button>
          ))}
          <div className="ml-4 flex items-center space-x-3 border-l border-border/40 pl-4">
            <Button variant="ghost" size="sm" asChild className="transition-all duration-300">
              <Link to="/login">
                <LogIn className="mr-1.5 h-4 w-4" />
                Login
              </Link>
            </Button>
            <Button size="sm" asChild className="transition-all duration-300 hover:scale-105">
              <Link to="/signup">
                <UserPlus className="mr-1.5 h-4 w-4" />
                Sign Up
              </Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <nav className="container mx-auto flex flex-col space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className="rounded-md px-3 py-2 text-left text-sm font-medium transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                {link.label}
              </button>
            ))}
            <div className="border-t border-border/40 pt-2">
              <button
                onClick={() => handleNavClick('/login')}
                className="flex w-full items-center rounded-md px-3 py-2 text-left text-sm font-medium transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </button>
              <button
                onClick={() => handleNavClick('/signup')}
                className="flex w-full items-center rounded-md px-3 py-2 text-left text-sm font-medium transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
