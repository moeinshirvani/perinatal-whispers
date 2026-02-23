import { motion } from "framer-motion";
import { MapPin, Star, BadgeCheck, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import mahboobehImg from "@/assets/mahboobeh.png";

const categories = ["All", "Yoga", "Meditation", "Breathwork", "Sound Healing", "More"];
const subcategories: Record<string, string[]> = {
  Yoga: ["Prenatal Yoga", "Postnatal Yoga", "Power Yoga"],
  Meditation: ["Guided Meditation", "Mindfulness"],
  Breathwork: ["Prenatal Breathwork", "Recovery Breathwork"],
  "Sound Healing": ["Sound Bath", "Singing Bowls"],
};

const coaches = [
  {
    id: 0, slug: "mahboobeh-habibi", name: "Mahboobeh Habibi", specialty: "Prenatal & Postnatal Yoga", category: "Yoga",
    location: "Leiderdorp", language: "EN, NL", rating: 5.0, verified: true,
    bio: "Prenatal and postnatal yoga teacher with 7+ years of holistic wellness experience. E-RYT 500 certified, Reiki Master, and meditation instructor.",
    image: mahboobehImg, cta: "Book a Yoga Class",
  },
  {
    id: 1, slug: "emma-van-der-berg", name: "Emma van der Berg", specialty: "Prenatal Yoga", category: "Yoga",
    location: "Amsterdam", language: "EN, NL", rating: 4.9, verified: true,
    bio: "Certified prenatal yoga instructor with 8 years of experience supporting mothers through mindful movement.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 2, slug: "sofie-de-vries", name: "Sofie de Vries", specialty: "Meditation & Mindfulness", category: "Meditation",
    location: "Rotterdam", language: "EN, NL", rating: 4.8, verified: true,
    bio: "Mindfulness teacher specializing in pregnancy-related anxiety and postpartum emotional wellbeing.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 3, slug: "lisa-jansen", name: "Lisa Jansen", specialty: "Breathwork", category: "Breathwork",
    location: "Utrecht", language: "NL", rating: 4.7, verified: true,
    bio: "Breathwork facilitator helping mothers prepare for birth and manage postpartum stress.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 4, slug: "anna-bakker", name: "Anna Bakker", specialty: "Sound Healing", category: "Sound Healing",
    location: "Den Haag", language: "EN, NL", rating: 5.0, verified: true,
    bio: "Sound healing practitioner creating nurturing sonic experiences for expectant and new mothers.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 5, slug: "mira-patel", name: "Mira Patel", specialty: "Postnatal Yoga", category: "Yoga",
    location: "Amsterdam", language: "EN", rating: 4.9, verified: true,
    bio: "Postnatal recovery specialist combining gentle yoga with pelvic floor restoration techniques.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 6, slug: "julia-smit", name: "Julia Smit", specialty: "Guided Meditation", category: "Meditation",
    location: "Eindhoven", language: "NL", rating: 4.8, verified: false,
    bio: "Guided meditation specialist focused on relaxation techniques for expectant and new mothers.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
  },
];

const Coaches = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = coaches.filter((c) => {
    const matchCategory = activeCategory === "All" || c.category === activeCategory;
    const matchSearch = !searchQuery || c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Meet Our Coaches
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Certified wellness professionals specialized in perinatal care.
            </p>
          </motion.div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by name, specialty, or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/20 text-secondary hover:bg-secondary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Coach grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((coach, i) => (
              <motion.div
                key={coach.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl bg-card shadow-soft hover:shadow-card transition-shadow overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={coach.image} alt={coach.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-foreground">{coach.name}</h3>
                      {coach.verified && <BadgeCheck className="h-4 w-4 text-secondary" />}
                    </div>
                    <div className="flex items-center gap-1 text-primary">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <span className="text-xs font-medium">{coach.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-secondary mb-1">{coach.specialty}</p>
                  <div className="flex items-center gap-1 text-muted-foreground mb-3">
                    <MapPin className="h-3 w-3" />
                    <span className="text-xs">{coach.location}</span>
                    <span className="text-xs ml-2">{coach.language}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{coach.bio}</p>
                  <Button variant={coach.cta ? "hero" : "outline"} size="sm" className="w-full" asChild>
                    <Link to={`/coaches/${coach.slug}`}>{coach.cta || "View Profile"}</Link>
                  </Button>
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

export default Coaches;
