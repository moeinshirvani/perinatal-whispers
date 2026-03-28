import { motion } from "framer-motion";
import { Check, ArrowRight, Clock, CreditCard, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Free",
    price: "€0",
    period: "forever",
    description: "Start with the essentials — no commitment needed.",
    features: [
      "Personalized conversation support",
      "A few gentle questions to match your stage",
      "Browse the Care Library",
      "Explore coaches and resources",
    ],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Premium",
    price: "€12",
    period: "/month",
    description: "Deeper personalization and ongoing support.",
    features: [
      "Unlimited conversations",
      "Personalized support that remembers you",
      "Full access to the Care Library",
      "Priority coach matching",
      "Gentle routines and practices",
      "Priority support",
    ],
    cta: "Upgrade when you're ready",
    highlight: true,
  },
];

const Pricing = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Simple, transparent pricing
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Start free. Upgrade when you want more personalization and resources.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-xl p-6 ${
                plan.highlight
                  ? "bg-primary text-primary-foreground shadow-elevated ring-2 ring-primary"
                  : "bg-card shadow-card"
              }`}
            >
              <h3 className="font-display text-xl font-bold mb-1">{plan.name}</h3>
              <p className={`text-sm mb-4 ${plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-display font-bold">{plan.price}</span>
                <span className={`text-sm ml-1 ${plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${plan.highlight ? "text-primary-foreground" : "text-secondary"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.highlight ? "secondary" : "hero"}
                className="w-full"
                asChild
              >
                <Link to="/chat">{plan.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* For employers */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-10 p-5 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-between flex-wrap gap-4"
        >
          <div>
            <p className="text-sm font-semibold text-foreground">For employers & partners</p>
            <p className="text-xs text-muted-foreground">Custom options available for organizations supporting maternal wellbeing.</p>
          </div>
          <Button variant="hero-outline" size="sm" asChild>
            <Link to="/b2b" className="inline-flex items-center gap-1">Learn more <ArrowRight className="h-3 w-3" /></Link>
          </Button>
        </motion.div>

        {/* Exceptional Value */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-4">
            Exceptional Value
          </h2>
          <p className="text-sm text-muted-foreground text-center max-w-lg mx-auto mb-10">
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

        <div className="max-w-2xl mx-auto mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Mooie Geest is not medical advice. For urgent concerns, contact your healthcare provider.
          </p>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Pricing;
