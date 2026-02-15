import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-8 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2 text-center">Terms of Service</h1>
          <p className="text-sm text-muted-foreground text-center mb-10">Last updated: February 2026</p>

          <div className="prose-sm space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">1. About These Terms</h2>
              <p>
                These Terms of Service ("Terms") govern your use of the Mooie Geest web application and related services
                operated by Mooie Geest, located at Reaal 189, Leiderdorp, The Netherlands, 2353TK
                (VAT: NL005202551B81). By using Mooie Geest, you agree to these Terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">2. Non-Medical Disclaimer</h2>
              <p>
                Mooie Geest is a <strong>wellness support tool</strong>. It is <strong>not</strong> a medical service and
                does not provide medical advice, diagnosis, or treatment. The AI companion offers general wellness
                suggestions and emotional support only. Always consult a qualified healthcare provider (e.g., your
                GP, midwife, or mental health professional) for medical concerns.
              </p>
              <p className="mt-2">
                If you are in crisis, please contact emergency services (112 in the Netherlands),
                your GP, or the Dutch crisis line 113 Zelfmoordpreventie (0900-0113, 24/7).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">3. Account & Eligibility</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>You must be at least 18 years old to use Mooie Geest.</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You agree to provide accurate information when creating your account.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">4. Free and Premium Plans</h2>
              <p>
                Mooie Geest offers a free plan with limited features and a Premium plan at €12 per month.
                Premium features include unlimited AI chat, full trend insights, exclusive content, and priority
                coach matching. Subscription details and billing are managed through our payment provider.
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>You may cancel your Premium subscription at any time. Access continues until the end of the current billing period.</li>
                <li>Refunds are handled on a case-by-case basis. Contact hello@mooiegeest.com for requests.</li>
                <li>We reserve the right to adjust pricing with at least 30 days' notice.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">5. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use the service for any unlawful purpose.</li>
                <li>Attempt to reverse-engineer, exploit, or interfere with the platform's infrastructure.</li>
                <li>Share your account credentials with others.</li>
                <li>Submit false information in coach applications or user profiles.</li>
                <li>Use the AI companion to generate harmful, abusive, or misleading content.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">6. Coach Directory</h2>
              <p>
                Mooie Geest provides a directory of wellness coaches who have applied and been verified.
                Verification confirms that credentials have been reviewed; it does not constitute a
                medical or professional endorsement. You engage coaches at your own discretion.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">7. Intellectual Property</h2>
              <p>
                All content, design, code, and AI models powering Mooie Geest are the intellectual property
                of Mooie Geest. You may not copy, distribute, or create derivative works without prior
                written consent. Your personal data and chat messages remain yours.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">8. Limitation of Liability</h2>
              <p>
                Mooie Geest is provided "as is" without warranties of any kind. We are not liable for
                any damages arising from your use of the service, including but not limited to reliance
                on AI-generated content. Our total liability is limited to the amount you have paid for
                Premium services in the 12 months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">9. Privacy</h2>
              <p>
                Your use of Mooie Geest is also governed by our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>,
                which describes how we collect, use, and protect your data.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">10. Termination</h2>
              <p>
                You may delete your account at any time. We reserve the right to suspend or terminate
                accounts that violate these Terms. Upon termination, your personal data will be deleted
                in accordance with our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">11. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the Netherlands. Any disputes will be resolved
                in the courts of The Hague, the Netherlands.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">12. Contact</h2>
              <p>
                For questions about these Terms, contact us at:
              </p>
              <p className="font-medium text-foreground mt-1">
                Mooie Geest<br />
                Reaal 189, Leiderdorp, The Netherlands, 2353TK<br />
                hello@mooiegeest.com
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Terms;
