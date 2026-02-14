import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["All", "Yoga", "Meditation", "Breathwork", "Sound Healing", "Nutrition"];

const coaches = [
  {
    id: 1,
    name: "Emma van der Berg",
    specialty: "Prenatal Yoga",
    category: "Yoga",
    location: "Amsterdam",
    rating: 4.9,
    bio: "Certified prenatal yoga instructor with 8 years of experience supporting mothers through mindful movement.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Sofie de Vries",
    specialty: "Meditation & Mindfulness",
    category: "Meditation",
    location: "Rotterdam",
    rating: 4.8,
    bio: "Mindfulness teacher specializing in pregnancy-related anxiety and postpartum emotional wellbeing.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Lisa Jansen",
    specialty: "Breathwork",
    category: "Breathwork",
    location: "Utrecht",
    rating: 4.7,
    bio: "Breathwork facilitator helping mothers prepare for birth and manage postpartum stress.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Anna Bakker",
    specialty: "Sound Healing",
    category: "Sound Healing",
    location: "Den Haag",
    rating: 5.0,
    bio: "Sound healing practitioner creating nurturing sonic experiences for expectant and new mothers.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Mira Patel",
    specialty: "Postnatal Yoga",
    category: "Yoga",
    location: "Amsterdam",
    rating: 4.9,
    bio: "Postnatal recovery specialist combining gentle yoga with pelvic floor restoration techniques.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Julia Smit",
    specialty: "Perinatal Nutrition",
    category: "Nutrition",
    location: "Eindhoven",
    rating: 4.8,
    bio: "Registered nutritionist focused on optimal nutrition for pregnancy, breastfeeding, and recovery.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
  },
];

import { useState } from "react";

const Coaches = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? coaches
      : coaches.filter((c) => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              Meet Our Coaches
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Certified wellness professionals specialized in perinatal care.
            </p>
          </motion.div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
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
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {coach.name}
                    </h3>
                    <div className="flex items-center gap-1 text-warm">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <span className="text-xs font-medium">{coach.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-primary mb-1">{coach.specialty}</p>
                  <div className="flex items-center gap-1 text-muted-foreground mb-3">
                    <MapPin className="h-3 w-3" />
                    <span className="text-xs">{coach.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {coach.bio}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Profile
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
