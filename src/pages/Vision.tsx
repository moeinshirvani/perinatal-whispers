import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Vision = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-8 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Our vision</h1>
        </motion.div>

        <div className="mb-12 space-y-6">
          <p className="text-muted-foreground leading-relaxed text-lg">
            Pregnancy and postpartum can be beautiful — and also emotionally hard.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Support is often fragmented: appointments are occasional, but feelings happen daily.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            We want every mother to have a calm, trustworthy support space — for everyday moments.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">What we're building toward</h2>
          <ul className="space-y-3">
            {[
              "More personal insights over time",
              "More practical routines and guidance",
              "More access to trusted coaches and resources",
            ].map((item) => (
              <li key={item} className="text-muted-foreground flex items-start gap-2">
                <ArrowRight className="h-4 w-4 mt-1 shrink-0 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 p-5 rounded-xl bg-muted border border-border">
          <p className="text-xs text-muted-foreground leading-relaxed text-center">
            Mooie Geest is not medical advice. For urgent concerns, contact your healthcare provider.
          </p>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Vision;
