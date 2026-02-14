import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container px-4 md:px-8 max-w-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Contact Us</h1>
            <p className="text-muted-foreground">We'd love to hear from you.</p>
          </motion.div>

          {submitted ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 rounded-xl bg-card shadow-soft text-center">
              <Mail className="h-8 w-8 text-secondary mx-auto mb-4" />
              <h2 className="font-display text-xl font-bold text-foreground mb-2">Message Sent!</h2>
              <p className="text-sm text-muted-foreground">Thank you for reaching out. We'll get back to you soon.</p>
            </motion.div>
          ) : (
            <div className="p-6 rounded-xl bg-card shadow-soft">
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground">Name</label>
                  <input type="text" required className="w-full mt-1 px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <input type="email" required className="w-full mt-1 px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">I am a...</label>
                  <select className="w-full mt-1 px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>User / Mother</option>
                    <option>Coach / Instructor</option>
                    <option>Business / Organization</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <textarea required rows={4} className="w-full mt-1 px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                </div>
                <Button type="submit" variant="hero" className="w-full">Send Message</Button>
              </form>

              <div className="mt-6 pt-4 border-t border-border text-center">
                <p className="text-sm text-muted-foreground mb-2">Are you a coach?</p>
                <Button variant="hero-outline" size="sm" asChild>
                  <Link to="/coach-onboarding">Join as a Verified Coach</Link>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Email: hello@mooiegeest.nl (placeholder)
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
