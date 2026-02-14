import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Leaf, Shield, Brain, TrendingUp, Zap, ArrowRight, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const innovationPillars = [
  { icon: Brain, title: "Context-Aware AI", description: "Understands pregnancy-specific language, emotional cues, and stress signals." },
  { icon: TrendingUp, title: "Self-Evolving Care Plans", description: "Learns from your mood patterns and engagement to refine recommendations." },
  { icon: AlertTriangle, title: "Anticipatory Risk Detection", description: "Spots subtle trend shifts early so you can seek support proactively." },
  { icon: Zap, title: "Instant Insight-to-Action", description: "Recommendations link directly to coaches and scheduling for seamless follow-through." },
];

const roadmap = [
  { phase: "Phase 1", title: "Ideation & Validation", period: "Nov 2024 – Sep 2025", items: ["User interviews & competitor mapping", "Early prototype development", "MOUs with first coaches"] },
  { phase: "Phase 2", title: "R&D & Prototyping", period: "Nov 2025 – Dec 2026", items: ["Design & validate AI wellness questionnaire", "Curate content partnerships", "Develop dashboard prototypes", "Refine recommendation logic"], current: true },
  { phase: "Phase 3", title: "MVP & Pilot", period: "Jan 2027 – Dec 2027", items: ["Launch MVP product", "Integrate instructor network", "Onboard pilot users"] },
  { phase: "Phase 4", title: "Full Scale", period: "Jan 2028 – Dec 2029", items: ["Dashboard + booking + payments", "Subscription + commission model", "Grow users, coaches, B2B partnerships"] },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-8 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 text-center">
            About Mooie Geest
          </h1>

          {/* Our Story */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Mooie Geest — "Beautiful Mind" in Dutch — was born from a deeply personal journey.
              Our founders experienced firsthand the gap in accessible perinatal mental wellness support
              in the Netherlands. We set out to build a calm, intelligent companion that every
              mother deserves — combining AI technology with genuine human expertise.
            </p>
          </div>

          {/* Mission */}
          <div className="mb-12 p-6 rounded-xl bg-primary/5 border border-primary/10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">Our Mission</h2>
            <p className="text-lg text-foreground leading-relaxed font-medium italic">
              "Empowering every expectant mother in the Netherlands with accessible, personalized mental wellness support."
            </p>
          </div>

          {/* Core values */}
          <div className="grid gap-6 mb-12">
            {[
              { icon: Heart, title: "Compassionate Support", text: "Every interaction is designed to make mothers feel heard, supported, and empowered — never judged." },
              { icon: Leaf, title: "Holistic Approach", text: "We're not a medical service. We offer a safe space for daily reflection, guided routines, and connection to certified wellness coaches." },
              { icon: Shield, title: "Privacy First", text: "Your conversations are private and encrypted. We never share personal data with third parties." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Why Mooie Geest */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Why Mooie Geest</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Mooie Geest is the <span className="font-semibold text-foreground">only platform</span> combining:
              Adaptive Guidance Engine, AI-driven onboarding, mood analytics, trimester-aware routines,
              yoga & meditation library, dashboard tracking, and one-tap booking — in one integrated perinatal solution.
            </p>
          </div>

          {/* Innovation Pillars */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Innovation Pillars</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {innovationPillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-xl bg-card shadow-soft"
                >
                  <pillar.icon className="h-5 w-5 text-primary mb-3" />
                  <h3 className="font-display text-base font-semibold text-foreground mb-1">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Vision & Roadmap */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Vision & Roadmap</h2>
            <div className="space-y-6">
              {roadmap.map((phase, i) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative pl-8 border-l-2 ${phase.current ? "border-primary" : "border-border"}`}
                >
                  <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full ${phase.current ? "bg-primary" : "bg-border"}`} />
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-semibold text-primary">{phase.phase}</span>
                    <span className="text-xs text-muted-foreground">{phase.period}</span>
                    {phase.current && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Current</span>
                    )}
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-2">{phase.title}</h3>
                  <ul className="space-y-1">
                    {phase.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                        <ArrowRight className="h-3 w-3 mt-1 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Safety */}
          <div className="p-5 rounded-xl bg-muted border border-border">
            <h3 className="font-display text-base font-semibold text-foreground mb-2">Safety Note</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mooie Geest is not a medical service and does not provide medical advice or diagnosis.
              If you are in crisis, please contact your healthcare provider or the Dutch crisis line
              (113 Zelfmoordpreventie: 0900-0113).
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
