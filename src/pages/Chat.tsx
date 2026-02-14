import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Leaf, ArrowLeft, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content:
      "Welcome to Mooie Geest 🌿 I'm here to support you through your pregnancy and postpartum journey. Let's start with a few gentle questions so I can personalize your experience.\n\nAre you currently pregnant or in your postpartum period?",
  },
];

const intakeFlow = [
  "Which trimester are you in, or how many months postpartum?",
  "How would you describe your mood today? (You can say anything that feels right.)",
  "How has your sleep been lately? (Great / Okay / Struggling)",
  "What's your biggest concern right now? (anxiety, fatigue, loneliness, physical discomfort, or something else)",
];

const personalPlan = `Thank you for sharing all of that with me. 💛 Based on your answers, here's your personal wellness suggestion:

**Your Daily Blueprint:**
• 🧘 10-min prenatal breathwork (morning)
• 🎵 Sleep relaxation audio (evening)
• 📝 Quick mood check-in

**Recommended for you:**
• [Prenatal Yoga with Emma](/coaches/emma-van-der-berg) — Tuesdays & Thursdays
• [Breathwork Basics](/coaches/lisa-jansen) — guided series

You can come back here anytime to chat. I'll learn from our conversations and adapt your plan as you progress. 🌱`;

const safetyResponse = `I hear you, and I want you to know that your feelings are completely valid. 💛

**If you're in crisis or need immediate support:**
• 📞 113 Zelfmoordpreventie: 0900-0113 (24/7)
• 📞 Huisarts (GP): contact your local doctor
• 🌐 www.113.nl — online chat available

You are not alone. Please reach out to a professional who can support you right now. I'm always here for you when you're ready to talk again. 🌿`;

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [intakeStep, setIntakeStep] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = { id: Date.now().toString(), role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    const distressKeywords = ["suicide", "kill myself", "end it", "can't go on", "want to die", "hopeless"];
    const isDistress = distressKeywords.some((k) => text.toLowerCase().includes(k));

    setTimeout(() => {
      let aiContent: string;
      if (isDistress) {
        aiContent = safetyResponse;
      } else if (intakeStep < intakeFlow.length) {
        aiContent = intakeFlow[intakeStep];
        setIntakeStep((s) => s + 1);
      } else if (intakeStep === intakeFlow.length) {
        aiContent = personalPlan;
        setIntakeStep((s) => s + 1);
      } else {
        aiContent = "Thank you for sharing that with me. 💛 I want you to know that whatever you're feeling is completely valid. How are you feeling right now?";
      }

      setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), role: "assistant", content: aiContent }]);
      setIsTyping(false);
    }, 1200);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="flex items-center justify-between px-4 h-14 border-b border-border bg-card/80 backdrop-blur-md shrink-0">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/"><ArrowLeft className="h-4 w-4" /></Link>
          </Button>
          <Leaf className="h-5 w-5 text-secondary" />
          <div>
            <h1 className="text-sm font-semibold text-foreground">Mooie Geest</h1>
            <p className="text-xs text-muted-foreground">Your wellness companion</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <AlertTriangle className="h-3 w-3" />
          <span className="text-xs">Not medical advice</span>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[85%] md:max-w-[70%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                msg.role === "user"
                  ? "bg-chat-user text-chat-user-foreground rounded-br-md"
                  : "bg-chat-ai text-chat-ai-foreground rounded-bl-md shadow-soft"
              }`}>
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
            <div className="bg-chat-ai text-chat-ai-foreground rounded-2xl rounded-bl-md px-4 py-3 shadow-soft">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </motion.div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="shrink-0 border-t border-border bg-card/80 backdrop-blur-md p-3">
        <div className="container max-w-2xl mx-auto flex items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            rows={1}
            className="flex-1 resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <Button size="icon" onClick={handleSend} disabled={!input.trim()} className="shrink-0 rounded-xl">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
