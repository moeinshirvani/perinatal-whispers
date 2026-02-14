import { motion } from "framer-motion";
import { BadgeCheck, Users, Calendar, Star, TrendingUp, ArrowRight, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  { title: "Apply", description: "Submit your profile, credentials, and specializations." },
  { title: "Verification Review", description: "Our team reviews your qualifications and prenatal/postnatal expertise." },
  { title: "Profile Goes Live", description: "Your verified profile appears in the directory with a Verified badge." },
  { title: "Receive Referrals", description: "Get matched with users via AI recommendations and directory search." },
  { title: "Enable Booking & Payouts", description: "Future integration for seamless one-tap scheduling and payments." },
];

const benefits = [
  { icon: Users, title: "Pre-Qualified Clients", description: "Reach mothers actively seeking prenatal and postnatal wellness support." },
  { icon: BadgeCheck, title: "Verified Badge", description: "Build trust instantly with a visible verification on your profile." },
  { icon: Calendar, title: "Simplified Scheduling", description: "One-tap booking vision — less back-and-forth with clients." },
  { icon: Star, title: "Professional Profile", description: "Stand out in a categorized directory with ratings and reviews." },
  { icon: TrendingUp, title: "Growth Opportunities", description: "Featured placements, partner collaborations, and community visibility." },
];

const CoachOnboarding = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-8 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <BadgeCheck className="h-10 w-10 text-secondary mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Become a Verified Coach
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Join the Mooie Geest community and connect with mothers who need your expertise.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mb-14">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">How It Works</h2>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 items-start"
              >
                <div className="w-8 h-8 rounded-full gradient-accent text-primary-foreground flex items-center justify-center shrink-0 text-sm font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">Why Join?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-xl bg-card shadow-soft"
              >
                <b.icon className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-display text-base font-semibold text-foreground mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Membership & Pricing */}
        <div className="mb-14 p-6 rounded-xl bg-primary/5 border border-primary/10">
          <div className="flex items-center gap-2 mb-4">
            <CreditCard className="h-5 w-5 text-primary" />
            <h2 className="font-display text-xl font-bold text-foreground">Membership & Pricing</h2>
          </div>
          <div className="space-y-4 text-sm text-muted-foreground">
            <div className="p-4 rounded-lg bg-background border border-border">
              <p className="font-semibold text-foreground mb-1">Annual Membership</p>
              <p className="text-2xl font-display font-bold text-primary">€___ / year</p>
              <p className="text-xs mt-1">(Placeholder — final pricing to be determined)</p>
            </div>
            <p className="font-medium text-foreground">Alternative models under consideration:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><ArrowRight className="h-3 w-3 mt-1 shrink-0 text-accent" />Commission model: 15% per booking</li>
              <li className="flex items-start gap-2"><ArrowRight className="h-3 w-3 mt-1 shrink-0 text-accent" />Annual membership fee</li>
              <li className="flex items-start gap-2"><ArrowRight className="h-3 w-3 mt-1 shrink-0 text-accent" />Affiliate/referral to your own booking system</li>
            </ul>
            <p className="text-xs">Final model is flexible and may be adjusted based on community feedback.</p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/coach-apply">Apply to Become Verified</Link>
          </Button>
          <Button variant="hero-outline" size="lg" disabled>
            Pay Annual Membership (Coming Soon)
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default CoachOnboarding;
