import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Leaf, Shield } from "lucide-react";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-8 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 text-center">
            About Mooie Geest
          </h1>

          {/* Why we exist */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Why Mooie Geest exists</h2>
            <p className="text-muted-foreground leading-relaxed">
              Mooie Geest — "Beautiful Mind" in Dutch — was created because too many mothers face a gap between occasional appointments and the daily reality of pregnancy and postpartum life. Feelings don't follow a schedule, and support shouldn't either. We built Mooie Geest to offer a calm, trustworthy space where mothers can find gentle support for everyday moments — not just scheduled ones.
            </p>
          </div>

          {/* What we offer */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">What we offer</h2>
            <p className="text-muted-foreground leading-relaxed">
              Mooie Geest is a supportive companion for pregnancy and postpartum wellbeing. Through a private, conversational space, you can share what you're feeling, get personalized support, and explore trusted resources and gentle practices — all at your own pace. We also connect you with verified wellness coaches when you're ready for extra support.
            </p>
          </div>

          {/* Mission */}
          <div className="mb-12 p-6 rounded-xl bg-primary/5 border border-primary/10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">Our mission</h2>
            <p className="text-lg text-foreground leading-relaxed font-medium italic">
              "To give every mother accessible, compassionate support for her emotional wellbeing — whenever she needs it."
            </p>
          </div>

          {/* Core values */}
          <div className="grid gap-6 mb-12">
            {[
              { icon: Heart, title: "Compassion first", text: "Every interaction is designed to make you feel heard, supported, and respected — never judged." },
              { icon: Leaf, title: "Evidence-informed care", text: "We work alongside perinatal wellness professionals to keep guidance safe, practical, and grounded. We are not a medical service." },
              { icon: Shield, title: "Privacy and safety", text: "Your conversations are private. We never sell personal data to third parties." },
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
