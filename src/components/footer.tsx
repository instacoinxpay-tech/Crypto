import { Button } from "../components/ui/button";
import { Sparkles } from "lucide-react";
import { SiAppstore, SiGoogleplay } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                D<span className="text-primary">e</span>mo
              </span>
            </div>

            <div className="flex gap-3">
              <button
                className="flex items-center gap-2 bg-sidebar-accent px-3 py-2 rounded-lg hover:bg-sidebar-accent/80 transition-colors"
                data-testid="button-app-store"
              >
                <SiAppstore className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-[10px] opacity-70">Download on the</div>
                  <div className="text-xs font-semibold">App Store</div>
                </div>
              </button>
              <button
                className="flex items-center gap-2 bg-sidebar-accent px-3 py-2 rounded-lg hover:bg-sidebar-accent/80 transition-colors"
                data-testid="button-google-play"
              >
                <SiGoogleplay className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-[10px] opacity-70">GET IT ON</div>
                  <div className="text-xs font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          <div className="space-y-4 text-center sm:text-left">
            <h4 className="font-semibold text-lg">Join Our Telegram Channel</h4>
            <Button variant="default" size="sm" data-testid="button-join-telegram">
              Join
            </Button>
          </div>

          <div className="space-y-4 lg:col-span-2 lg:text-right">
            <h4 className="font-semibold text-lg" data-testid="text-contact-title">Contact</h4>
            <div className="space-y-2 text-sm opacity-80">
              <p data-testid="text-contact-email">info@geodbcoin.com</p>
              <p data-testid="text-contact-phone">Tel: +1 (872) 282-4046</p>
              <p data-testid="text-contact-address">124 Finchley Road, London,</p>
              <p>United Kingdom, NW3 5JS</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-sidebar-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm opacity-70">
            <p>
              Copyright{" "}
              <span className="text-primary">ProFigmaTemplates.com</span>. All
              Rights Reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-primary transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
