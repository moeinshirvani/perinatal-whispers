import { motion } from "framer-motion";
import { Building2, Globe, Shield, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const offerings = [
  { icon: Building2, title: "Corporate Wellness Portals", description: "Embed Mooie Geest into your employee wellness program. Support expectant and new mothers in your workforce with personalized AI guidance." },
  { icon: Shield, title: "Insurer Partnerships", description: "Integrate perinatal mental wellness into insurance packages. Reduce claims through proactive, preventive support." },
  { icon: Globe, title: "White-Label Licensing", description: "License the Mooie Geest platform under your own brand. Full customization of content, coaches, and design." },
  { icon: Users, title: "Custom Contracts", description: "Flexible per-user pricing tailored to your organization's size and needs. Contact us for a custom quote." },
];

const B2B = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-8 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">B2B Licensing</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Bring perinatal wellness support to your organization, insurance plan, or platform.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card shadow-soft"
            >
              <item.icon className="h-6 w-6 text-primary mb-3" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Pricing model */}
        <div className="mb-12 p-6 rounded-xl bg-card shadow-soft">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">Pricing</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              B2B licensing is available through custom contracts tailored to your organization's needs and scale.
              Pricing is based on the number of users and level of customization required.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mt-4">
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <p className="font-semibold text-foreground text-sm">User Subscription</p>
                <p className="text-xs">€12/mo per individual user</p>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <p className="font-semibold text-foreground text-sm">Booking Commission</p>
                <p className="text-xs">15% per session booked</p>
                <span className="text-[10px] text-accent">Planned</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border text-center">
                <p className="font-semibold text-foreground text-sm">Affiliate Revenue</p>
                <p className="text-xs">~10% on partner products</p>
                <span className="text-[10px] text-accent">Planned</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center p-8 rounded-xl bg-primary/5 border border-primary/10">
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">Interested?</h2>
          <p className="text-muted-foreground mb-6">
            Let's discuss how Mooie Geest can support your organization's perinatal wellness needs.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Request a B2B Demo</Link>
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default B2B;
