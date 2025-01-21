import { useState } from "react";
import ChatLayout from "../components/ChatLayout";
import LoginPage from "../components/LoginPage";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return isAuthenticated ? (
    <ChatLayout />
  ) : (
    <LoginPage onLogin={handleLogin} />
  );
};

export default Index;