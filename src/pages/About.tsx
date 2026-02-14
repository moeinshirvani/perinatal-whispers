import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Leaf, Shield } from "lucide-react";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-8 max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 text-center">
            About Mooie Geest
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-8 text-center">
            Mooie Geest — "Beautiful Mind" in Dutch — was created to bring calm, 
            clarity, and connection to the perinatal experience. We believe every 
            mother deserves accessible emotional support.
          </p>

          <div className="grid gap-8 mt-12">
            {[
              { icon: Heart, title: "Our Mission", text: "To make perinatal mental wellness accessible, personalized, and free from stigma. We combine AI technology with human expertise to support mothers at every stage." },
              { icon: Leaf, title: "Our Approach", text: "We're not a medical service. We offer a safe space for daily reflection, guided routines, and connection to certified wellness coaches — all through a gentle, conversational experience." },
              { icon: Shield, title: "Your Privacy", text: "Your conversations are private and encrypted. We never share personal data with third parties. Your wellbeing journey is yours alone." },
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
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
