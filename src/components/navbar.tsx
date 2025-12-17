import { useState } from "react";
import { Button } from "../components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { Link } from "wouter";
import logo from "../../attached_assets/logo.png";


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

 const navLinks = [
  { name: "Connect Wallet", href: "/connect-wallet" },
  { name: "Support", href: "/support" },
  { name: "Send BTC", href: "/send" },
  { name: "Report", href: "/report" },
];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4 bg-white">
                <Link href="/" className="flex items-center">
  <img
    src={logo}
    alt="InstaCoinXPay Logo"
    className="
      w-32
      sm:w-36
      md:w-40
      lg:w-44
      h-auto
      object-contain
    "
  />
</Link>



          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
             <Link
  key={link.name}
  href={link.href}
  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
  data-testid={`link-nav-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
>
  {link.name}
</Link>

            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login">
              <Button variant="outline" size="sm" data-testid="button-login">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" data-testid="button-signup">
                Signup
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-md hover:bg-accent"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
             <Link
  key={link.name}
  href={link.href}
  className="block text-muted-foreground hover:text-foreground transition-colors py-2"
  onClick={() => setIsOpen(false)}
>
  {link.name}
</Link>

            ))}
            <div className="flex gap-3 pt-4 border-t border-border">
              <Link href="/login" className="flex-1">
                <Button variant="outline" className="w-full" data-testid="button-login-mobile">
                  Login
                </Button>
              </Link>
              <Link href="/signup" className="flex-1">
                <Button className="w-full" data-testid="button-signup-mobile">
                  Signup
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
