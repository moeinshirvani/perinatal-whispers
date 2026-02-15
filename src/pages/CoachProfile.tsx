import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { MapPin, Star, BadgeCheck, ArrowLeft, Calendar, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const coachesData: Record<string, {
  name: string; specialty: string; location: string; rating: number; verified: boolean;
  bio: string; credentials: string; classes: { name: string; price: string }[];
  image: string; languages: string;
}> = {
  "emma-van-der-berg": {
    name: "Emma van der Berg", specialty: "Prenatal Yoga", location: "Amsterdam", rating: 4.9, verified: true,
    bio: "Certified prenatal yoga instructor with 8 years of experience supporting mothers through mindful movement. Emma's classes focus on building strength, flexibility, and emotional resilience throughout pregnancy.",
    credentials: "RYT 500, Prenatal Yoga Certification, CPR Certified",
    classes: [{ name: "Prenatal Yoga Flow", price: "€25/session" }, { name: "Gentle Birth Prep", price: "€30/session" }],
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&h=600&fit=crop", languages: "English, Dutch",
  },
  "sofie-de-vries": {
    name: "Sofie de Vries", specialty: "Meditation & Mindfulness", location: "Rotterdam", rating: 4.8, verified: true,
    bio: "Mindfulness teacher specializing in pregnancy-related anxiety and postpartum emotional wellbeing. Sofie combines evidence-based techniques with compassionate guidance.",
    credentials: "MBSR Certified, Psychology MSc, 6+ years experience",
    classes: [{ name: "Mindful Pregnancy", price: "€20/session" }, { name: "Postpartum Peace", price: "€20/session" }],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=600&fit=crop", languages: "English, Dutch",
  },
  "lisa-jansen": {
    name: "Lisa Jansen", specialty: "Breathwork", location: "Utrecht", rating: 4.7, verified: true,
    bio: "Breathwork facilitator helping mothers prepare for birth and manage postpartum stress through conscious breathing techniques.",
    credentials: "Certified Breathwork Facilitator, Doula Training",
    classes: [{ name: "Birth Breathwork", price: "€22/session" }, { name: "Stress Relief Breathing", price: "€18/session" }],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop", languages: "Dutch",
  },
  "anna-bakker": {
    name: "Anna Bakker", specialty: "Sound Healing", location: "Den Haag", rating: 5.0, verified: true,
    bio: "Sound healing practitioner creating nurturing sonic experiences for expectant and new mothers using singing bowls and harmonic instruments.",
    credentials: "Sound Healing Certification, Reiki Level 2",
    classes: [{ name: "Prenatal Sound Bath", price: "€35/session" }, { name: "Healing Harmonics", price: "€30/session" }],
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=600&fit=crop", languages: "English, Dutch",
  },
  "mira-patel": {
    name: "Mira Patel", specialty: "Postnatal Yoga", location: "Amsterdam", rating: 4.9, verified: true,
    bio: "Postnatal recovery specialist combining gentle yoga with pelvic floor restoration techniques for new mothers.",
    credentials: "RYT 200, Postnatal Specialist Certification",
    classes: [{ name: "Postnatal Recovery", price: "€25/session" }, { name: "Mom & Baby Yoga", price: "€22/session" }],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=600&fit=crop", languages: "English",
  },
  "julia-smit": {
    name: "Julia Smit", specialty: "Guided Meditation", location: "Eindhoven", rating: 4.8, verified: false,
    bio: "Guided meditation specialist focused on relaxation techniques for expectant and new mothers.",
    credentials: "Meditation Teacher Training, 4 years experience",
    classes: [{ name: "Deep Relaxation", price: "€18/session" }],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop", languages: "Dutch",
  },
};

const CoachProfile = () => {
  const { slug } = useParams<{ slug: string }>();
  const coach = slug ? coachesData[slug] : null;
  const [sessionRequested, setSessionRequested] = useState(false);

  if (!coach) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-display font-bold text-foreground mb-4">Coach not found</h1>
          <Button variant="outline" asChild><Link to="/coaches">Back to Coaches</Link></Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container px-4 md:px-8 max-w-3xl mx-auto">
          <Link to="/coaches" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Coaches
          </Link>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <div className="rounded-xl overflow-hidden shadow-card mb-8">
              <img src={coach.image} alt={coach.name} className="w-full h-64 object-cover" />
            </div>

            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-3xl font-display font-bold text-foreground">{coach.name}</h1>
                  {coach.verified && <BadgeCheck className="h-6 w-6 text-secondary" />}
                </div>
                <p className="text-lg font-medium text-secondary">{coach.specialty}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {coach.location}</span>
                  <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-primary fill-primary" /> {coach.rating}</span>
                  <span className="flex items-center gap-1"><Globe className="h-3.5 w-3.5" /> {coach.languages}</span>
                </div>
              </div>
              <Button variant="hero" size="lg" onClick={() => document.getElementById("request-form")?.scrollIntoView({ behavior: "smooth" })}>
                Request Booking
              </Button>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">About</h2>
                <p className="text-muted-foreground leading-relaxed">{coach.bio}</p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">Credentials</h2>
                <p className="text-sm text-muted-foreground">{coach.credentials}</p>
              </div>

              {coach.verified && (
                <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                  <div className="flex items-center gap-2 mb-1">
                    <BadgeCheck className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-semibold text-foreground">Verified Coach</span>
                  </div>
                  <p className="text-xs text-muted-foreground">This coach has been verified by Mooie Geest for their qualifications and expertise in perinatal wellness.</p>
                </div>
              )}

              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">Classes</h2>
                <div className="space-y-3">
                  {coach.classes.map((cls) => (
                    <div key={cls.name} className="flex items-center justify-between p-4 rounded-lg bg-card shadow-soft">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-foreground">{cls.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{cls.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div id="request-form" className="p-6 rounded-xl bg-card shadow-soft">
                <h2 className="font-display text-xl font-bold text-foreground mb-1">Request a Session</h2>
                <p className="text-xs text-muted-foreground mb-4">Pilot phase — the coach will follow up to confirm scheduling and payment.</p>
                {sessionRequested ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-4">
                    <p className="text-sm font-medium text-secondary">✓ Request sent! The coach will contact you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSessionRequested(true); }} className="space-y-3">
                    <input type="text" placeholder="Your name" required className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                    <input type="email" placeholder="Your email" required className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                    <textarea placeholder="Message (optional)" rows={3} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                    <Button variant="secondary" className="w-full" type="submit">Send Request</Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoachProfile;
