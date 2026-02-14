import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "How it Works", to: "/how-it-works" },
  { label: "Coaches", to: "/coaches" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Team", to: "/team" },
  { label: "B2B Licensing", to: "/b2b" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container flex items-center justify-between h-16 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-secondary" />
          <span className="font-display text-xl font-semibold text-foreground">
            Mooie Geest
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="default" size="sm" asChild>
            <Link to="/coach-onboarding">Join as a Verified Coach</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/chat">Log in</Link>
          </Button>
          <Button variant="secondary" size="sm" asChild>
            <Link to="/chat">Get Started</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium py-2 transition-colors ${
                    location.pathname === link.to
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="default" size="sm" asChild>
                  <Link to="/coach-onboarding" onClick={() => setOpen(false)}>Join as a Verified Coach</Link>
                </Button>
                <div className="flex gap-3">
                  <Button variant="ghost" size="sm" asChild className="flex-1">
                    <Link to="/chat" onClick={() => setOpen(false)}>Log in</Link>
                  </Button>
                  <Button variant="secondary" size="sm" asChild className="flex-1">
                    <Link to="/chat" onClick={() => setOpen(false)}>Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
