import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Free",
    price: "€0",
    period: "forever",
    description: "Core AI features to get you started.",
    features: [
      "AI intake questionnaire & basic recommendations",
      "Limited chat messages per day",
      "Browse coaches & content",
      "Basic mood tracking",
      "Community access",
    ],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Premium",
    price: "€12",
    period: "/month",
    description: "Full support for your entire journey.",
    features: [
      "Unlimited AI chat & personalized plans",
      "Advanced analytics & full trend insights",
      "Exclusive expert content library",
      "Priority coach matching & booking discounts",
      "Full dashboard & weekly blueprints",
      "Priority support",
    ],
    cta: "Upgrade to Premium",
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
            Simple, Transparent Pricing
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Start free. Upgrade when you're ready for deeper support.
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

        {/* Future Monetization */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-16 p-6 rounded-xl bg-card shadow-soft"
        >
          <h3 className="font-display text-lg font-bold text-foreground mb-4 text-center">Coming Next</h3>
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">Booking Commission</p>
              <p className="text-xs text-muted-foreground">15% of session fee when booking is live</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">Affiliate Revenue</p>
              <p className="text-xs text-muted-foreground">~10% on curated partner products</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">B2B Licensing</p>
              <p className="text-xs text-muted-foreground">Enterprise / white-label contracts</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Pricing;
