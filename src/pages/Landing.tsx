import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, Heart, Users, Sparkles, Shield, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-image.jpg";

const features = [
  {
    icon: MessageCircle,
    title: "AI Chat Companion",
    description: "Daily conversations tailored to your pregnancy stage and emotional needs.",
  },
  {
    icon: Heart,
    title: "Personalized Insights",
    description: "Track your mood and wellbeing with gentle, non-clinical guidance.",
  },
  {
    icon: Users,
    title: "Expert Coaches",
    description: "Connect with certified prenatal yoga, meditation, and breathwork coaches.",
  },
  {
    icon: Sparkles,
    title: "Curated Content",
    description: "Articles, videos, and routines designed for each stage of your journey.",
  },
  {
    icon: Shield,
    title: "Safe & Private",
    description: "Your conversations are private. We never share your personal data.",
  },
  {
    icon: BookOpen,
    title: "Evidence-Based",
    description: "Content reviewed by perinatal wellness professionals.",
  },
];

const steps = [
  { step: "1", title: "Sign Up", description: "Create your free account in seconds." },
  { step: "2", title: "Tell Us About You", description: "Our AI learns your stage and needs through a gentle intake chat." },
  { step: "3", title: "Chat Daily", description: "Get personalized support, routines, and coach recommendations." },
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
                A Beautiful Mind Starts{" "}
                <span className="text-primary italic">Here</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                AI-powered emotional support for your pregnancy and postpartum journey.
                Chat daily, discover coaches, and nurture your wellbeing — all in one calm space.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/chat">Start Chatting Free</Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/coaches">Browse Coaches</Link>
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

      {/* Features */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Everything You Need
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Support designed around your unique journey, from pregnancy through postpartum.
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

      {/* How It Works */}
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

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full gradient-accent text-primary-foreground flex items-center justify-center mx-auto mb-4 font-display font-bold text-lg">
                  {s.step}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-card">
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
              Join thousands of mothers finding calm, clarity, and community.
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
