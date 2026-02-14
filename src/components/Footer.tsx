import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-3">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="font-display text-lg font-semibold text-foreground">Mooie Geest</span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            AI-powered emotional support for your pregnancy and postpartum journey.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Product</h4>
          <div className="flex flex-col gap-2">
            <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
            <Link to="/coaches" className="text-sm text-muted-foreground hover:text-primary transition-colors">Coaches</Link>
            <Link to="/chat" className="text-sm text-muted-foreground hover:text-primary transition-colors">Chat</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Company</h4>
          <div className="flex flex-col gap-2">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Legal</h4>
          <div className="flex flex-col gap-2">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-8 pt-6 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mooie Geest. All rights reserved. This is not medical advice.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
