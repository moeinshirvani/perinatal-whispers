import { motion } from "framer-motion";
import { Heart, Moon, TrendingUp, Calendar, BookOpen, Users, Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const moodOptions = ["😊 Great", "🙂 Good", "😐 Okay", "😔 Low", "😢 Struggling"];

const weeklyBlueprints = [
  { title: "Morning Breathwork", duration: "10 min", type: "Breathwork" },
  { title: "Prenatal Yoga Flow", duration: "20 min", type: "Yoga" },
  { title: "Sleep Meditation", duration: "15 min", type: "Meditation" },
  { title: "Gentle Stretching", duration: "10 min", type: "Movement" },
];

const Profile = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-display font-bold text-foreground">Your Dashboard</h1>
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">Free Plan</span>
          </div>

          {/* Wellness Profile Summary */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-xl bg-card shadow-soft">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
                <h2 className="font-display text-lg font-semibold text-foreground">Wellness Profile</h2>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Stage</span><span className="text-foreground font-medium">Pregnant — 2nd Trimester</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Mood baseline</span><span className="text-foreground font-medium">Good</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Sleep quality</span><span className="text-foreground font-medium">Okay</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Main concern</span><span className="text-foreground font-medium">Anxiety</span></div>
              </div>
            </div>

            {/* Daily Check-in */}
            <div className="p-6 rounded-xl bg-card shadow-soft">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-5 w-5 text-primary" />
                <h2 className="font-display text-lg font-semibold text-foreground">Daily Check-in</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-3">How are you feeling today?</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {moodOptions.map((mood) => (
                  <button key={mood} className="px-3 py-1.5 rounded-full text-sm bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors">
                    {mood}
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="text-xs text-muted-foreground">Sleep hours</label>
                  <input type="number" placeholder="7" className="w-full mt-1 px-3 py-2 rounded-lg border border-input bg-background text-sm" />
                </div>
                <div className="flex-1">
                  <label className="text-xs text-muted-foreground flex items-center gap-1"><input type="checkbox" className="rounded" /> Stress today</label>
                </div>
              </div>
            </div>
          </div>

          {/* Trend Visualization (placeholder) */}
          <div className="p-6 rounded-xl bg-card shadow-soft mb-8 relative overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="font-display text-lg font-semibold text-foreground">Mood & Sleep Trends</h2>
            </div>
            <div className="flex gap-2 mb-4">
              {["7 days", "14 days", "30 days"].map((range) => (
                <button key={range} className="px-3 py-1 rounded-full text-xs bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors">{range}</button>
              ))}
            </div>
            {/* Placeholder chart */}
            <div className="h-32 bg-muted/50 rounded-lg flex items-center justify-center relative">
              <div className="absolute inset-0 backdrop-blur-sm bg-background/60 flex flex-col items-center justify-center rounded-lg">
                <Lock className="h-5 w-5 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">Full trends available on Premium</p>
                <Button variant="default" size="sm" className="mt-2" asChild>
                  <Link to="/pricing">Upgrade — €12/mo</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Weekly Blueprint */}
          <div className="p-6 rounded-xl bg-card shadow-soft mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-primary" />
              <h2 className="font-display text-lg font-semibold text-foreground">Weekly Blueprint</h2>
              <span className="text-xs text-muted-foreground">2nd Trimester</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {weeklyBlueprints.map((bp) => (
                <div key={bp.title} className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><Calendar className="h-4 w-4 text-primary" /></div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{bp.title}</p>
                    <p className="text-xs text-muted-foreground">{bp.duration} · {bp.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Saved Resources & Coach Recommendations */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-card shadow-soft">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-primary" />
                <h2 className="font-display text-lg font-semibold text-foreground">Saved Resources</h2>
              </div>
              <div className="space-y-2">
                {["Prenatal Breathing Guide", "Sleep Hygiene Tips", "Managing Anxiety"].map((r) => (
                  <div key={r} className="p-3 rounded-lg bg-background border border-border text-sm text-foreground">{r}</div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl bg-card shadow-soft">
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-primary" />
                <h2 className="font-display text-lg font-semibold text-foreground">Recommended Coaches</h2>
              </div>
              <div className="space-y-2">
                {[
                  { name: "Emma van der Berg", specialty: "Prenatal Yoga", slug: "emma-van-der-berg" },
                  { name: "Lisa Jansen", specialty: "Breathwork", slug: "lisa-jansen" },
                ].map((c) => (
                  <Link key={c.slug} to={`/coaches/${c.slug}`} className="flex items-center justify-between p-3 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors">
                    <div>
                      <p className="text-sm font-medium text-foreground">{c.name}</p>
                      <p className="text-xs text-muted-foreground">{c.specialty}</p>
                    </div>
                    <Button variant="outline" size="sm">View</Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Profile;
