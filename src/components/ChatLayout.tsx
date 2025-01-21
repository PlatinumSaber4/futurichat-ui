import { useState } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sent: boolean;
}

const ChatLayout = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How can I help you today?", sent: false },
  ]);
  const [isDark, setIsDark] = useState(false);

  const sendMessage = (text: string) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      sent: true,
    };
    setMessages([...messages, newMessage]);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300`}>
      <div className="container mx-auto max-w-4xl h-screen py-8 px-4">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg h-full flex flex-col">
          <div className="p-4 border-b flex justify-between items-center">
            <h1 className="text-xl font-semibold">Chat Assistant</h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
          </div>
          <ChatInput onSend={sendMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;