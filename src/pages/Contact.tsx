import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Building2 } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container px-4 md:px-8 max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Contact Us</h1>
            <p className="text-muted-foreground">We'd love to hear from you.</p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Company Details */}
            <div className="md:col-span-2 space-y-4">
              <div className="p-5 rounded-xl bg-card shadow-soft">
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">Company Details</h3>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">Mooie Geest</p>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 text-accent" />
                    <p>Reaal 189, Leiderdorp<br />The Netherlands, 2353TK</p>
                  </div>
                  <p className="text-xs">VAT: NL005202551B81</p>
                  <div className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-accent" />
                    <a href="mailto:hello@mooiegeest.com" className="text-primary hover:underline">hello@mooiegeest.com</a>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-card shadow-soft">
                <p className="text-sm text-muted-foreground mb-3">Are you a wellness coach?</p>
                <Button variant="hero-outline" size="sm" asChild className="w-full">
                  <Link to="/coach-onboarding">Join as a Verified Coach</Link>
                </Button>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              {submitted ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 rounded-xl bg-card shadow-soft text-center">
                  <Mail className="h-8 w-8 text-secondary mx-auto mb-4" />
                  <h2 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h2>
                  <p className="text-sm text-muted-foreground">Thank you — we've received your message and will get back to you shortly.</p>
                </motion.div>
              ) : (
                <div className="p-6 rounded-xl bg-card shadow-soft">
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4" action="https://formsubmit.co/moeinshirvani90@gmail.com" method="POST">
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
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
