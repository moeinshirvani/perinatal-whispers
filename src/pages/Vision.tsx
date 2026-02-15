import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roadmap = [
  {
    phase: "Phase 1", title: "Ideation & Validation", period: "Nov 2024 – Sep 2025",
    items: [
      "User interviews and needs assessment with expectant mothers in the Netherlands",
      "Competitor mapping across perinatal wellness solutions",
      "Early prototype development and concept validation",
      "Signed Memorandums of Understanding with initial coach partners",
    ],
  },
  {
    phase: "Phase 2", title: "R&D & Prototyping", period: "Nov 2025 – Dec 2026",
    items: [
      "Design and validate AI wellness questionnaire and NLP intent model",
      "Curate and vet content partnerships via co-founder coach network",
      "Develop low-fidelity dashboard prototypes for user flow testing",
      "Conduct user interviews and refine core recommendation logic",
    ],
    current: true,
  },
  {
    phase: "Phase 3", title: "MVP & Pilot", period: "Jan 2027 – Dec 2027",
    items: [
      "Launch production MVP with AI companion, dashboard, and coach directory",
      "Integrate verified instructor network with booking capabilities",
      "Onboard pilot users and gather real-world feedback",
      "Iterate on Adaptive Guidance Engine based on usage patterns",
    ],
  },
  {
    phase: "Phase 4", title: "Full Scale", period: "Jan 2028 – Dec 2029",
    items: [
      "Full dashboard with booking, payments, and subscription management",
      "Launch commission and affiliate revenue models",
      "Scale user base and coach network across the Netherlands",
      "Establish B2B partnerships with employers, insurers, and healthcare providers",
    ],
  },
];

const Vision = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-8 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Vision & Roadmap</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Our journey to make perinatal mental wellness accessible to every mother in the Netherlands.
          </p>
        </motion.div>

        <div className="mb-12 p-6 rounded-xl bg-primary/5 border border-primary/10">
          <h2 className="font-display text-xl font-bold text-foreground mb-3">Our Vision</h2>
          <p className="text-muted-foreground leading-relaxed">
            We envision a future where every expectant and new mother has immediate access to personalized,
            AI-guided wellness support — bridging the gap between occasional professional sessions and
            daily emotional needs. Mooie Geest aims to become the trusted digital companion for
            perinatal mental wellness across the Netherlands and beyond.
          </p>
        </div>

        <div className="space-y-8">
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
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{phase.title}</h3>
              <ul className="space-y-1.5">
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
    </section>

    <Footer />
  </div>
);

export default Vision;
