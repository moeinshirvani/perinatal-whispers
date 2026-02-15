import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Chat from "./pages/Chat";
import Coaches from "./pages/Coaches";
import CoachProfile from "./pages/CoachProfile";
import CoachOnboarding from "./pages/CoachOnboarding";
import CoachApply from "./pages/CoachApply";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Team from "./pages/Team";
import HowItWorks from "./pages/HowItWorks";
import Profile from "./pages/Profile";
import B2B from "./pages/B2B";
import Contact from "./pages/Contact";
import Vision from "./pages/Vision";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/coaches/:slug" element={<CoachProfile />} />
          <Route path="/coach-onboarding" element={<CoachOnboarding />} />
          <Route path="/coach-apply" element={<CoachApply />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/b2b" element={<B2B />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
