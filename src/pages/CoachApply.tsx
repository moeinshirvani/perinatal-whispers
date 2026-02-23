import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const specialtyOptions = ["Prenatal Yoga", "Postnatal Yoga", "Power Yoga", "Meditation", "Breathwork", "Sound Healing", "Nutrition", "Life Coaching", "Other"];

const CoachApply = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);

  const toggleSpecialty = (s: string) => {
    setSelectedSpecialties((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container px-4 md:px-8 max-w-md mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-8 rounded-xl bg-card shadow-soft text-center">
              <CheckCircle className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h1 className="text-2xl font-semibold text-foreground mb-2">Application Submitted!</h1>
              <p className="text-sm text-muted-foreground">Thank you — we've received your message and will get back to you shortly.</p>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container px-4 md:px-8 max-w-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Coach Application</h1>
            <p className="text-muted-foreground">Tell us about your experience and expertise.</p>
          </motion.div>

          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="p-6 rounded-xl bg-card shadow-soft space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground">Full Name *</label>
                <input type="text" required className="w-full mt-1 px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Email *</label>
                <input type="email" required className="w-full mt-1 px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground">Phone</label>
                <input type="tel" className="w-full mt-1 px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">City / Country *</label>
                <input type="text" required className="w-full mt-1 px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Specialties *</label>
              <div className="flex flex-wrap gap-2">
                {specialtyOptions.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => toggleSpecialty(s)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                      selectedSpecialties.includes(s)
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary/10 text-secondary hover:bg-secondary/20"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Credentials</label>
              <div className="mt-1 p-4 rounded-lg border-2 border-dashed border-border text-center text-sm text-muted-foreground cursor-pointer hover:border-primary/40 transition-colors">
                Drag & drop or click to upload your certificates (PDF, JPG)
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground">Years of Experience</label>
                <input type="number" min="0" className="w-full mt-1 px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Languages</label>
                <input type="text" placeholder="e.g. English, Dutch" className="w-full mt-1 px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Website / Booking Link</label>
              <input type="url" placeholder="https://" className="w-full mt-1 px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Short Motivation *</label>
              <textarea required rows={3} placeholder="Why do you want to join Mooie Geest?" className="w-full mt-1 px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" required className="mt-1 rounded border-input" />
              <label className="text-sm text-muted-foreground">
                I consent to Mooie Geest processing my data for verification purposes. I confirm that the information provided is accurate.
              </label>
            </div>

            <Button type="submit" variant="hero" className="w-full">Submit Application</Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoachApply;
