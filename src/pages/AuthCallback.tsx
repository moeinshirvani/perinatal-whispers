import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("[AuthCallback] Processing auth callback...");
    console.log("[AuthCallback] Current URL:", window.location.href);

    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (error) {
        console.error("[AuthCallback] Error restoring session:", error);
      } else if (session) {
        console.log("[AuthCallback] Session restored successfully");
        console.log("[AuthCallback] User:", session.user.id, session.user.email);
      } else {
        console.log("[AuthCallback] No session found");
      }
      navigate("/", { replace: true });
    });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <p className="text-muted-foreground">Verifying your account...</p>
    </div>
  );
};

export default AuthCallback;
