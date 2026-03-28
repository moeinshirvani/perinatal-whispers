import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import moeinPhoto from "@/assets/moein.png";
import mahboobehPhoto from "@/assets/mahboobeh.png";

const founders = [
  {
    name: "Moein Shirvani",
    role: "CEO & Co-Founder",
    location: "Leiderdorp, The Netherlands",
    linkedin: "https://linkedin.com/in/moeinshirvani",
    bio: "Experienced web developer building Mooie Geest to help mothers find practices that truly work. Passionate about using technology to make compassionate support more accessible.",
    image: moeinPhoto,
  },
  {
    name: "Mahboobeh Habibi",
    role: "Chief Wellness Officer & Co-Founder",
    location: "Leiderdorp, The Netherlands",
    linkedin: "https://www.linkedin.com/in/mahboobeh-habibi-b64b93338/",
    bio: "7+ years in yoga and holistic wellness. E-RYT 200, Reiki Master Teacher, Life Coach, and Meditation Instructor — bringing deep expertise in prenatal and postnatal care to every aspect of the platform.",
    image: mahboobehPhoto,
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container px-4 md:px-8 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Our Team</h1>
            <p className="text-muted-foreground max-w-md mx-auto">The people behind Mooie Geest.</p>
          </motion.div>

          <div className="text-center mb-10 p-5 rounded-xl bg-primary/5 border border-primary/10">
            <p className="text-sm text-muted-foreground italic">
              "Compassion first. Practical support. Respect for every mother's experience."
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {founders.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl bg-card shadow-soft overflow-hidden"
              >
                <div className="aspect-square overflow-hidden bg-muted">
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
