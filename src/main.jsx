import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import MemoriesSection from "./components/MemoriesSection";
import { CyberBackground } from "./components/CyberBackground";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { WhyParticipate } from "./components/WhyParticipate";
import { JourneyTimeline } from "./components/JourneyTimeline";
import { Rules } from "./components/Rules";
import { Leaderboard } from "./components/Leaderboard";
import { RegistrationModal } from "./components/RegistrationModal";
import QuerySection from "./components/QuerySection";
import { Footer } from "./components/Footer";

const defaultEvents = [
  [
    "Registration Opens",
    "Start your journey and submit your initial problem hypothesis.",
  ],
  [
    "Innovation Mixer",
    "Meet collaborators, brainstorm ideas, and form cross-disciplinary squads.",
  ],
  [
    "Market Validation Round",
    "Test relevance, user desirability, and commercial/real-world feasibility.",
  ],
  [
    "Innovation Sprint",
    "Build and iterate software/hardware prototypes through intense sprint cycles.",
  ],
  [
    "Milestone I",
    "Present intermediate working prototypes and receive jury feedback.",
  ],
  [
    "Milestone II",
    "Advance system architecture, refine user experience, and prepare for scale.",
  ],
  [
    "Semi-Finals",
    "Compete in the penultimate evaluation stage against shortlisted squads.",
  ],
  [
    "Grand-Finale with Mayukh",
    "Celebrate the final demo showcase, competitive pitch, and awards ceremony.",
  ],
].map(([name, description], i) => ({
  id: i + 1,
  name,
  description,
  date: "To Be Announced",
  status: i === 0 ? "Open" : "Upcoming",
}));

function App() {
  const [events, setEvents] = useState(defaultEvents);
  const [leaderboard, setLeaderboard] = useState([]);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  useEffect(() => {
    const apiUrl =
      import.meta.env.VITE_API_URL || "http://localhost:8787/api";

    fetch(`${apiUrl}/public`)
      .then((res) => res.json())
      .then((data) => {
        if (
          data.events &&
          Array.isArray(data.events) &&
          data.events.length > 0
        ) {
          setEvents(data.events);
        }

        if (data.leaderboard && Array.isArray(data.leaderboard)) {
          setLeaderboard(data.leaderboard);
        }
      })
      .catch((err) => {
        console.warn(
          "API offline or unreachable, using local default state:",
          err
        );
      });
  }, []);

  return (
    <div className="app-root">
      {/* Ambient Cybernetic Particle & Lighting Background */}
      <CyberBackground />

      {/* Futuristic Navbar */}
      <Navbar onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Main Experience */}
      <main>
        <Hero onOpenRegister={() => setIsRegisterOpen(true)} />

        <MemoriesSection />

        <About onOpenRegister={() => setIsRegisterOpen(true)} />

        <WhyParticipate
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        <JourneyTimeline events={events} />

        <Rules />

        <Leaderboard list={leaderboard} />

        {/* Query Section */}
        <QuerySection />
      </main>

      {/* Footer */}
      <Footer onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<App />);
}