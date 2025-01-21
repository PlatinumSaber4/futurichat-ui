import { useState } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import { Button } from "@/components/ui/button";
import { Moon, Sun, MessageSquare, Plus } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar";

interface Message {
  id: number;
  text: string;
  sent: boolean;
}

interface Chat {
  id: number;
  title: string;
  messages: Message[];
}

const ChatLayout = () => {
  const [chats, setChats] = useState<Chat[]>([
    {
      id: 1,
      title: "First Conversation",
      messages: [{ id: 1, text: "Hello! How can I help you today?", sent: false }],
    },
  ]);
  const [currentChatId, setCurrentChatId] = useState(1);
  const [isDark, setIsDark] = useState(false);

  const currentChat = chats.find((chat) => chat.id === currentChatId) || chats[0];

  const sendMessage = (text: string) => {
    const newMessage = {
      id: currentChat.messages.length + 1,
      text,
      sent: true,
    };
    
    const updatedChats = chats.map((chat) => {
      if (chat.id === currentChatId) {
        return {
          ...chat,
          messages: [...chat.messages, newMessage],
        };
      }
      return chat;
    });
    
    setChats(updatedChats);
  };

  const createNewChat = () => {
    const newChat = {
      id: chats.length + 1,
      title: "New Chat",
      messages: [{ id: 1, text: "Hello! How can I help you today?", sent: false }],
    };
    setChats([...chats, newChat]);
    setCurrentChatId(newChat.id);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <Sidebar>
          <SidebarHeader className="p-4">
            <Button
              onClick={createNewChat}
              className="w-full justify-start gap-2"
              variant="outline"
            >
              <Plus className="h-4 w-4" />
              New Chat
            </Button>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {chats.map((chat) => (
                    <SidebarMenuItem key={chat.id}>
                      <SidebarMenuButton
                        onClick={() => setCurrentChatId(chat.id)}
                        className={currentChatId === chat.id ? "bg-accent" : ""}
                      >
                        <MessageSquare className="h-4 w-4" />
                        <span>{chat.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <div className="flex-1 container max-w-4xl h-screen py-8 px-4">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg h-full flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h1 className="text-xl font-semibold">{currentChat.title}</h1>
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
              {currentChat.messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}
            </div>
            <ChatInput onSend={sendMessage} />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ChatLayout;