import { motion } from "framer-motion";
import { Smartphone, MessageCircle, BarChart3, Calendar, CreditCard } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  {
    icon: Smartphone,
    title: "Instant PWA Access",
    description: "No app store downloads needed. Simply add Mooie Geest to your home screen from your browser for instant, native-app-like access.",
  },
  {
    icon: MessageCircle,
    title: "AI-Powered Onboarding",
    description: "A friendly 10-question chat learns your pregnancy stage, mood, sleep patterns, and concerns — generating your personal Wellness Profile in under 2 minutes.",
  },
  {
    icon: BarChart3,
    title: "Daily Check-ins & Dashboard",
    description: "Track your mood, sleep quality, and stress signals daily. See clear real-time trends over 7, 14, and 30 days so you always know how you're doing.",
  },
  {
    icon: Calendar,
    title: "Adaptive Guidance Engine",
    description: "Receive trimester-aware weekly blueprints with yoga, breathwork, and meditation routines that evolve automatically based on your feedback and stage.",
  },
  {
    icon: CreditCard,
    title: "One-Tap Booking & Tiered Service",
    description: "Find vetted prenatal coaches and schedule sessions with a single tap. Start free, or unlock unlimited features for just €12/month.",
  },
];

const HowItWorks = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-8 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">How It Works</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            From first visit to daily support — here's how Mooie Geest guides your perinatal wellness journey.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 items-start"
            >
              <div className="w-12 h-12 rounded-xl gradient-accent text-primary-foreground flex items-center justify-center shrink-0">
                <step.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Step {i + 1}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default HowItWorks;
