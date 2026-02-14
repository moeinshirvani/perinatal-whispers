import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, Heart, Users, Sparkles, Shield, BookOpen, Smartphone, Brain, BarChart3, Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-image.jpg";

const features = [
  {
    icon: Brain,
    title: "Adaptive Guidance Engine",
    description: "Trimester-aware routines that evolve with your feedback and pregnancy stage.",
  },
  {
    icon: MessageCircle,
    title: "AI-Powered Onboarding",
    description: "A friendly 10-question chat builds your personal Wellness Profile in under 2 minutes.",
  },
  {
    icon: BarChart3,
    title: "Mood & Sleep Analytics",
    description: "Track daily mood, sleep, and stress with clear real-time trend visualization.",
  },
  {
    icon: Sparkles,
    title: "Yoga & Meditation Library",
    description: "Curated prenatal and postnatal yoga, breathwork, and meditation routines.",
  },
  {
    icon: Heart,
    title: "Dashboard Tracking",
    description: "See your wellness journey at a glance with personalized insights and goals.",
  },
  {
    icon: Calendar,
    title: "One-Tap Coach Booking",
    description: "Find vetted prenatal coaches and schedule sessions with a single tap.",
  },
];

const steps = [
  { step: "1", title: "Instant PWA Access", description: "Add to Home Screen — no downloads needed." },
  { step: "2", title: "AI Onboarding", description: "10-question friendly chat generates your Wellness Profile." },
  { step: "3", title: "Daily Dashboard", description: "Mood & sleep tracking with clear real-time trends." },
  { step: "4", title: "Weekly Blueprints", description: "Trimester-aware yoga, breathwork & meditation routines." },
  { step: "5", title: "Book & Upgrade", description: "Seamless booking + tiered service: free or €12/mo premium." },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-60" />
        <div className="container relative px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                Your perinatal wellness companion
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-3">
                Mooie Geest
              </h1>
              <p className="text-xl md:text-2xl font-display italic text-primary mb-6">
                Mindful Pregnancy, Beautiful Motherhood
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                AI-powered emotional support for your pregnancy and postpartum journey.
                Chat daily, discover coaches, and nurture your wellbeing — all in one calm space.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/chat">Start Free</Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/how-it-works">How it Works</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={heroImage}
                  alt="Peaceful pregnant woman in a serene garden"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              What Makes Us Different
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The only platform combining Adaptive Guidance Engine, AI onboarding, mood analytics,
              trimester-aware routines, yoga & meditation library, dashboard tracking, and one-tap booking.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-background shadow-soft hover:shadow-card transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Teaser */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              How It Works
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full gradient-accent text-primary-foreground flex items-center justify-center mx-auto mb-4 font-display font-bold text-lg">
                  {s.step}
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="hero-outline" asChild>
              <Link to="/how-it-works" className="inline-flex items-center gap-2">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact / Value */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Exceptional Value
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Traditional prenatal wellness sessions cost €80–€120 per session. Mooie Geest provides
              on-demand, tailored support for just <span className="font-semibold text-primary">€12/month</span> —
              saving you time, money, and stress.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { label: "On-Demand Support", value: "24/7", desc: "AI companion available anytime" },
                { label: "Premium Plan", value: "€12/mo", desc: "vs. €80–€120 per session" },
                { label: "Personalized", value: "100%", desc: "Tailored to your stage & needs" },
              ].map((stat) => (
                <div key={stat.label} className="p-5 rounded-xl bg-background shadow-soft">
                  <p className="text-3xl font-display font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-sm font-semibold text-foreground mb-1">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Ready to Begin?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join mothers finding calm, clarity, and community.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/chat">Start Your Free Journey</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
