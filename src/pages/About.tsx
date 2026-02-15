import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Leaf, Shield, Brain, TrendingUp, Zap, AlertTriangle } from "lucide-react";

const innovationPillars = [
  { icon: Brain, title: "Context-Aware AI", description: "Understands pregnancy-specific language, emotional cues, and stress signals." },
  { icon: TrendingUp, title: "Self-Evolving Care Plans", description: "Learns from your mood patterns and engagement to refine recommendations over time." },
  { icon: AlertTriangle, title: "Anticipatory Risk Detection", description: "Spots subtle trend shifts early so you can seek support proactively." },
  { icon: Zap, title: "Instant Insight-to-Action", description: "Recommendations link directly to coaches and scheduling for seamless follow-through." },
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

          {/* What We Do */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">What We Do</h2>
            <p className="text-muted-foreground leading-relaxed">
              Mooie Geest is a chat-first AI companion for pregnancy and postpartum mental wellness.
              We combine AI-guided onboarding and ongoing support with an Adaptive Guidance Engine
              that delivers trimester-aware routines evolving with your feedback. Daily check-ins
              track mood, sleep, and stress, while curated resources and a light marketplace of
              vetted coaches provide actionable pathways to real support.
            </p>
          </div>

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
              { icon: Leaf, title: "Holistic Approach", text: "We offer a safe space for daily reflection, guided routines, and connection to certified wellness coaches. We are not a medical service." },
              { icon: Shield, title: "Privacy First", text: "Your conversations are private and encrypted. We never sell personal data to third parties." },
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

          {/* Competitive Differentiation */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Why Mooie Geest</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Mooie Geest is the <span className="font-semibold text-foreground">only platform</span> combining
              an Adaptive Guidance Engine, AI-driven onboarding, mood analytics, trimester-aware routines,
              yoga & meditation library, dashboard tracking, and one-tap booking — in one integrated perinatal solution.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Unlike generic chatbots or single-session coaching, Mooie Geest provides continuous, evolving support
              that adapts to your pregnancy stage and daily wellbeing. Our curated content and verified coach
              network ensure you always have actionable pathways to real help.
            </p>
          </div>

          {/* Innovation Pillars */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Innovation</h2>
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

          {/* Safety */}
          <div className="p-5 rounded-xl bg-muted border border-border">
            <h3 className="font-display text-base font-semibold text-foreground mb-2">Safety & Disclaimer</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mooie Geest is not a medical service and does not provide medical advice or diagnosis.
              If you are in crisis, please contact your healthcare provider, call 112, or reach the
              Dutch crisis line 113 Zelfmoordpreventie (0900-0113, available 24/7).
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
