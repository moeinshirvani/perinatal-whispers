import { motion } from "framer-motion";
import { MessageCircle, HelpCircle, Heart, BookOpen, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    icon: MessageCircle,
    title: "Start a conversation",
    description: "Talk about what's on your mind: stress, sleep, emotions, or daily challenges.",
  },
  {
    icon: HelpCircle,
    title: "Personalize with a few questions",
    description: "We'll ask short questions about your stage (pregnancy or postpartum) and what you need.",
  },
  {
    icon: Heart,
    title: "Support that follows your journey",
    description: "As you continue, we remember your context — so support feels more personal.",
  },
  {
    icon: BookOpen,
    title: "Learn and explore",
    description: "Visit the Care Library for trusted reading, tools, and practices.",
  },
  {
    icon: Users,
    title: "Connect with coaches (optional)",
    description: "If you want human support, you can explore coach options.",
  },
];

const HowItWorks = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-8 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">How it works</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Mooie Geest is a gentle support space. You can start with one message — and build a more personal experience over time.
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 items-start"
            >
              <div className="w-12 h-12 rounded-xl gradient-accent text-primary-foreground flex items-center justify-center shrink-0">
                <section.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Step {i + 1}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground">{section.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{section.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-5 rounded-xl bg-muted border border-border">
          <p className="text-xs text-muted-foreground leading-relaxed text-center">
            Mooie Geest is not medical advice. For urgent concerns, contact your healthcare provider.
          </p>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default HowItWorks;
