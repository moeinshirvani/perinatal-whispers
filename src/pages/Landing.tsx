import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, Heart, Users, Sparkles, Shield, BookOpen, ArrowRight, Clock, CreditCard } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    icon: MessageCircle,
    title: "A safe space to talk",
    description: "Share what's on your mind — without judgment, whenever you need it."
  },
  {
    icon: Heart,
    title: "Support for anxiety, overwhelm, and mood swings",
    description: "Gentle guidance for the emotional ups and downs of pregnancy and postpartum."
  },
  {
    icon: Sparkles,
    title: "Help with sleep and rest",
    description: "Practical support for restless nights and finding calm before bed."
  },
  {
    icon: Shield,
    title: "Gentle routines for calmer days",
    description: "Breathing, grounding, and mindfulness practices that fit into your day."
  },
  {
    icon: BookOpen,
    title: "Trusted resources in one place",
    description: "A curated library of reading and learning for pregnancy and motherhood."
  },
  {
    icon: Users,
    title: "Optional coach support",
    description: "Connect with verified wellness professionals when you're ready for extra support."
  },
];

const steps = [
  { step: "1", title: "Start where you are", description: "Share what you're feeling or what you need today." },
  { step: "2", title: "A few gentle questions", description: "So support can match your stage and situation." },
  { step: "3", title: "Personal support over time", description: "We remember what matters, so you don't repeat yourself." },
  { step: "4", title: "Small practices, real relief", description: "Breathing, grounding, sleep support, and emotional wellbeing." },
  { step: "5", title: "Extra support when you want it", description: "Explore coaches and resources as you're ready." },
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
              transition={{ duration: 0.6 }}>

              <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                Your perinatal wellness companion
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
                You don't have to go through this alone.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Gentle support for pregnancy and the first months after birth — whenever you need it.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/chat">Start a conversation</Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="https://library.mooiegeest.com/">Explore the Care Library</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Start with one message. No perfect words needed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative">

              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  alt="Peaceful pregnant woman in a serene garden"
                  className="w-full h-auto object-cover"
                  loading="lazy" src="/lovable-uploads/0c6c73a4-72ba-4351-8485-a9de4fb35d42.png" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-8 bg-card border-y border-border/50">
        <div className="container px-4 md:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              "Calm, judgment-free support",
              "Personalized to your stage and needs",
              "Built for everyday moments — not only appointments",
              "Privacy and care-first design",
            ].map((item) => (
              <p key={item} className="text-sm text-muted-foreground font-medium">{item}</p>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Find Here */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              What you'll find here
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) =>
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-background shadow-soft hover:shadow-card transition-shadow">

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
            )}
          </div>
        </div>
      </section>

      {/* How Mooie Geest supports you */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              How Mooie Geest supports you
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Simple steps, gentle guidance — at your pace.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {steps.map((s, i) =>
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center">

                <div className="w-12 h-12 rounded-full gradient-accent text-primary-foreground flex items-center justify-center mx-auto mb-4 font-display font-bold text-lg">
                  {s.step}
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </motion.div>
            )}
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

      {/* Exceptional Value */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center">

            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Exceptional Value
            </h2>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-10">
              Traditional prenatal wellness sessions often cost €80–€120 per session. Mooie Geest gives you calm, personalized support for €12/month — so you can feel supported between appointments, without extra stress.
            </p>

            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { icon: Clock, stat: "24/7", label: "On-Demand Support", desc: "Support whenever you need it" },
                { icon: CreditCard, stat: "€12/mo", label: "Premium Plan", desc: "vs. €80–€120 per session" },
                { icon: Sparkles, stat: "100%", label: "Personalized", desc: "Tailored to your stage & needs" },
              ].map((item, i) => (
                <motion.div
                  key={item.stat}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-2xl md:text-3xl font-display font-bold text-foreground">{item.stat}</p>
                  <p className="text-sm font-semibold text-foreground mt-1">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </motion.div>
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
            className="max-w-xl mx-auto text-center">

            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Ready to begin?
            </h2>
            <p className="text-muted-foreground mb-8">
              You might find it helpful to start with just one message.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/chat">Start a conversation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-8">
        <div className="container px-4 md:px-8 max-w-2xl mx-auto text-center">
          <p className="text-xs text-muted-foreground">
            Mooie Geest is not medical advice. If you feel at risk or in urgent distress, contact your healthcare provider or local emergency services.
          </p>
        </div>
      </section>

      <Footer />
    </div>);
};

export default Landing;
