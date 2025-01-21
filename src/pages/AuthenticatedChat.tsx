import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChatLayout from "../components/ChatLayout";

const AuthenticatedChat = () => {
  const navigate = useNavigate();
  
  // Mock user data - in a real app, this would come from your auth context
  const user = {
    name: "John Doe",
    isGuest: false,
    hasCompletedProfile: true, // This should come from your auth context
  };

  useEffect(() => {
    // Redirect to dashboard if profile is incomplete
    if (!user.hasCompletedProfile) {
      navigate("/dashboard");
    }
  }, [navigate, user.hasCompletedProfile]);

  if (!user.hasCompletedProfile) {
    return null;
  }

  return <ChatLayout isGuest={false} />;
};

export default AuthenticatedChat;