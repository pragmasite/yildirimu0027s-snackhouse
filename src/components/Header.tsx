import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, otherLangs } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.services, href: "#speisen" },
    { label: t.about.label, href: "#ueber-uns" },
    { label: t.gallery.label, href: "#galerie" },
    { label: t.hours.label, href: "#oeffnungszeiten" },
    { label: t.contact.label, href: "#kontakt" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="flex flex-col">
          <span className={`font-serif text-xl font-bold ${
            isScrolled ? "text-primary" : "text-white"
          }`}>
            Yildirim's
          </span>
          <span className={`text-xs tracking-widest ${
            isScrolled ? "text-muted-foreground" : "text-white/70"
          }`}>
            {t.nav.profession}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side - Language and Call */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1.5 text-sm font-medium ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/90 hover:text-white"
            }`}>
              <Globe className="h-4 w-4" />
              {otherLangs.length > 0 && (
                <span className="hidden sm:inline">Language</span>
              )}
            </button>
            <div className="absolute right-0 mt-2 w-32 bg-background rounded-lg shadow-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              {otherLangs.map((lang) => (
                <Link
                  key={lang.code}
                  to={lang.path}
                  className="block px-4 py-2 text-sm text-foreground hover:bg-primary hover:text-primary-foreground first:rounded-t-lg last:rounded-b-lg"
                >
                  {lang.name}
                </Link>
              ))}
            </div>
          </div>

          <Button asChild size="sm" variant="default">
            <a href="tel:+41629222627">
              <Phone className="h-4 w-4 mr-2" />
              {t.nav.call}
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-foreground hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t space-y-3">
              {otherLangs.map((lang) => (
                <Link
                  key={lang.code}
                  to={lang.path}
                  className="block text-sm text-foreground hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {lang.name}
                </Link>
              ))}
              <Button asChild size="sm" variant="default" className="w-full">
                <a href="tel:+41629222627">
                  <Phone className="h-4 w-4 mr-2" />
                  {t.nav.call}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
