import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const founders = [
  {
    name: "Moein Shirvani",
    role: "CEO & Co-Founder",
    location: "Leiden, The Netherlands",
    linkedin: "https://linkedin.com/in/moeinshirvani",
    bio: "Experienced web developer building Mooie Geest to guide mothers to practices that truly work. Passionate about leveraging technology for maternal wellness.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Mahboobeh Habibi",
    role: "Chief Wellness Officer & Co-Founder",
    location: "Leiden, The Netherlands",
    linkedin: "https://linkedin.com/in/mahboobehhabibi",
    bio: "7+ years in yoga & holistic wellness. E-RYT 500, Reiki Master Teacher, Life Coach, and Meditation Instructor — bringing deep expertise to every aspect of the platform.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
];

const team = [
  {
    name: "Majid Seyedmiri",
    role: "Lead Developer",
    location: "Istanbul, Türkiye",
    linkedin: "https://linkedin.com/in/majidseyedmiri",
    bio: "Full-stack developer bringing technical excellence to the Mooie Geest platform.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
];

const Team = () => {
  const [activeTab, setActiveTab] = useState<"founders" | "team">("founders");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container px-4 md:px-8 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Our Team</h1>
            <p className="text-muted-foreground max-w-md mx-auto">The people behind Mooie Geest.</p>
          </motion.div>

          <div className="flex justify-center gap-2 mb-10">
            {(["founders", "team"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                  activeTab === tab ? "bg-primary text-primary-foreground" : "bg-secondary/20 text-secondary hover:bg-secondary/30"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {(activeTab === "founders" ? founders : team).map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl bg-card shadow-soft overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-0.5">{person.name}</h3>
                  <p className="text-sm font-medium text-primary mb-1">{person.role}</p>
                  <p className="text-xs text-muted-foreground mb-3">{person.location}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{person.bio}</p>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-secondary transition-colors"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
