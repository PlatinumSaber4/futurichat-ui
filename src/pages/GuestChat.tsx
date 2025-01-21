import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChatLayout from "../components/ChatLayout";

const GuestChat = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to login after 30 minutes of inactivity
    const inactivityTimeout = setTimeout(() => {
      navigate("/");
    }, 30 * 60 * 1000); // 30 minutes

    return () => clearTimeout(inactivityTimeout);
  }, [navigate]);

  return <ChatLayout isGuest={true} />;
};

export default GuestChat;