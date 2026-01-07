import { useLanguage } from "@/hooks/useLanguage";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-2">Yildirim's</h3>
            <p className="text-background/80 text-sm mb-4">{t.footer.description}</p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/people/Yildirims-Snack-House/100057107393835"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              >
                <Facebook className="h-5 w-5 text-background" />
              </a>
              <a
                href="https://www.instagram.com/yildirims_snack_house_1992"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              >
                <Instagram className="h-5 w-5 text-background" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#speisen"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#galerie"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  {t.gallery.label}
                </a>
              </li>
              <li>
                <a
                  href="#oeffnungszeiten"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  {t.hours.label}
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  {t.contact.label}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">{t.contact.label}</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-background/80">
                <a href="tel:+41629222627" className="hover:text-background transition-colors">
                  +41 62 922 26 27
                </a>
              </li>
              <li className="text-background/80">
                <a href="mailto:info@yildirim.ch" className="hover:text-background transition-colors">
                  info@yildirim.ch
                </a>
              </li>
              <li className="text-background/80">Spitalgasse 1</li>
              <li className="text-background/80">4900 Langenthal, CH</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>
            © 2024 Yildirim's SnackHouse. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
