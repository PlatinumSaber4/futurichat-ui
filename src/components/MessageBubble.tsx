import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  message: {
    text: string;
    sent: boolean;
  };
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  return (
    <div
      className={cn(
        "flex animate-message-in opacity-0",
        message.sent ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[70%] rounded-2xl px-4 py-2",
          message.sent
            ? "bg-chat-sent text-white dark:bg-chat-sentDark"
            : "bg-chat-received dark:bg-chat-receivedDark"
        )}
      >
        <p className="text-sm">{message.text}</p>
      </div>
    </div>
  );
};

export default MessageBubble;