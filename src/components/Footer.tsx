import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container px-4 md:px-8 py-12">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-3">
            <img src={logo} alt="Mooie Geest logo" className="h-7 w-auto" />
            <span className="text-lg font-semibold text-foreground">Mooie Geest</span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Empowering every expectant mother in the Netherlands with accessible, personalized mental wellness support.
          </p>
          <div className="text-xs text-muted-foreground space-y-0.5">
            <p>Reaal 189, Leiderdorp</p>
            <p>The Netherlands, 2353TK</p>
            <p>VAT: NL005202551B81</p>
            <p>
              <a href="mailto:hello@mooiegeest.com" className="hover:text-accent transition-colors">hello@mooiegeest.com</a>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Explore</h4>
          <div className="flex flex-col gap-2">
            <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-accent transition-colors">How it Works</Link>
            <Link to="/chat" className="text-sm text-muted-foreground hover:text-accent transition-colors">Chat</Link>
            <Link to="/pricing" className="text-sm text-muted-foreground hover:text-accent transition-colors">Pricing</Link>
            <Link to="/vision" className="text-sm text-muted-foreground hover:text-accent transition-colors">Vision</Link>
            <Link to="/b2b" className="text-sm text-muted-foreground hover:text-accent transition-colors">B2B Licensing</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Company</h4>
          <div className="flex flex-col gap-2">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">About</Link>
            <Link to="/team" className="text-sm text-muted-foreground hover:text-accent transition-colors">Team</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Legal</h4>
          <div className="flex flex-col gap-2">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-accent transition-colors">Terms of Service</Link>
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
