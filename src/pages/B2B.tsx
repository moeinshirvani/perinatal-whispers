import { motion } from "framer-motion";
import { Building2, Globe, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const offerings = [
  { icon: Building2, title: "Workplace Wellbeing", description: "Support expectant and new mothers in your workforce with personalized, compassionate wellbeing tools." },
  { icon: Shield, title: "Healthcare Partnerships", description: "Integrate perinatal wellbeing support into care packages — helping mothers between appointments." },
  { icon: Globe, title: "White-Label Options", description: "Offer the Mooie Geest experience under your own brand, with content and design tailored to your needs." },
  { icon: Users, title: "Flexible Arrangements", description: "We work with you to find the right fit for your organization's size and goals." },
];

const B2B = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-8 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">For Organizations</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Bring compassionate perinatal wellbeing support to the people in your organization.
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

        <div className="text-center p-8 rounded-xl bg-primary/5 border border-primary/10">
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">Interested?</h2>
          <p className="text-muted-foreground mb-6">
            We'd love to explore how Mooie Geest can support the mothers in your organization.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get in touch</Link>
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default B2B;
