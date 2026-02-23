import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const desktopLinks = [
  { label: "Home", to: "/" },
  { label: "Coaches", to: "/coaches" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const mobileLinks = [
  { label: "Home", to: "/" },
  { label: "Coaches", to: "/coaches" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "How it Works", to: "/how-it-works" },
  { label: "Chat", to: "/chat" },
  { label: "Pricing", to: "/pricing" },
  { label: "Vision", to: "/vision" },
  { label: "B2B Licensing", to: "/b2b" },
  { label: "Team", to: "/team" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container flex items-center justify-between h-16 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img alt="Mooie Geest logo" className="h-8 w-auto" src={logo} />
          <span className="text-xl font-semibold text-foreground">Mooie Geest</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {desktopLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="hero-outline" size="sm" asChild>
            <Link to="/coach-onboarding">Join as a Verified Coach</Link>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <Link to="/chat">Get Started</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <Button variant="hero" size="sm" asChild className="text-xs px-3">
            <Link to="/chat">Get Started</Link>
          </Button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container px-4 py-4 flex flex-col gap-3">
              {mobileLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium py-2 transition-colors ${
                    location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="hero-outline" size="sm" asChild>
                  <Link to="/coach-onboarding" onClick={() => setOpen(false)}>Join as a Verified Coach</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
