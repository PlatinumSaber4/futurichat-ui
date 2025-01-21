import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChatLayout from "../components/ChatLayout";

const Chat = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // For guest users, redirect to login after 30 minutes of inactivity
    const isGuest = true; // TODO: Implement actual guest check
    if (isGuest) {
      const inactivityTimeout = setTimeout(() => {
        navigate("/");
      }, 30 * 60 * 1000); // 30 minutes

      return () => clearTimeout(inactivityTimeout);
    }
  }, [navigate]);

  return <ChatLayout />;
};

export default Chat;