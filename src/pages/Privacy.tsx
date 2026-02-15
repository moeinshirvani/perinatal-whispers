import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-8 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2 text-center">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground text-center mb-10">Last updated: February 2026</p>

          <div className="prose-sm space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">1. Who We Are</h2>
              <p>
                Mooie Geest is operated from Reaal 189, Leiderdorp, The Netherlands, 2353TK.
                VAT number: NL005202551B81. Email: hello@mooiegeest.com.
                We provide a digital wellness companion for pregnancy and postpartum mental wellbeing.
                Mooie Geest is <strong>not a medical service</strong> and does not provide medical advice, diagnosis, or treatment.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">2. What Data We Collect</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Account data:</strong> name, email address, and language preference when you create an account.</li>
                <li><strong>Wellness profile data:</strong> pregnancy stage, mood, sleep quality, and concerns you share during onboarding or daily check-ins.</li>
                <li><strong>Chat messages:</strong> conversations with the AI companion are stored to personalize your experience.</li>
                <li><strong>Usage data:</strong> pages visited, features used, and device type — collected via privacy-friendly analytics.</li>
                <li><strong>Coach applications:</strong> professional credentials and contact information submitted by coaches.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">3. How We Use Your Data</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>To provide and personalize the Mooie Geest wellness experience.</li>
                <li>To generate tailored recommendations, routines, and coach suggestions.</li>
                <li>To improve our AI models and service quality (using anonymized and aggregated data only).</li>
                <li>To communicate with you about your account, updates, or support requests.</li>
                <li>To process coach verification applications.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">4. Data Sharing</h2>
              <p>
                We do <strong>not</strong> sell your personal data. We may share data only with:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Infrastructure providers:</strong> hosting and database services necessary to run the platform, bound by data processing agreements.</li>
                <li><strong>Payment processors:</strong> when you subscribe to Premium, your payment is processed by a third-party provider. We do not store your card details.</li>
                <li><strong>Legal obligations:</strong> if required by Dutch or EU law.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">5. Your Rights (GDPR)</h2>
              <p>Under the General Data Protection Regulation (GDPR), you have the right to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Access</strong> your personal data and receive a copy.</li>
                <li><strong>Rectify</strong> inaccurate or incomplete data.</li>
                <li><strong>Delete</strong> your account and all associated data ("right to be forgotten").</li>
                <li><strong>Restrict or object</strong> to certain types of processing.</li>
                <li><strong>Data portability:</strong> receive your data in a structured, machine-readable format.</li>
                <li><strong>Withdraw consent</strong> at any time without affecting prior processing.</li>
              </ul>
              <p className="mt-2">
                To exercise any of these rights, email us at <strong>hello@mooiegeest.com</strong>. We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">6. Data Security</h2>
              <p>
                We use industry-standard encryption (TLS/SSL) for data in transit and at rest.
                Access to personal data is restricted to authorized personnel only.
                We regularly review our security practices and update them as needed.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">7. Data Retention</h2>
              <p>
                We retain your data for as long as your account is active.
                If you delete your account, all personal data will be permanently removed within 30 days.
                Anonymized, aggregated data may be retained for service improvement purposes.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">8. Cookies</h2>
              <p>
                Mooie Geest uses essential cookies required for the app to function (e.g., session management).
                We do not use advertising or third-party tracking cookies.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">9. Children</h2>
              <p>
                Mooie Geest is intended for adults (18+). We do not knowingly collect data from minors.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. Material changes will be communicated via email or in-app notification. Continued use of the service constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">11. Contact</h2>
              <p>
                For privacy-related questions or requests, contact us at:
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

export default Privacy;
