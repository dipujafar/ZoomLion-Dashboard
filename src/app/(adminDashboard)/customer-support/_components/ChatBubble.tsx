import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User } from "lucide-react"
import { cn } from "@/lib/utils"

interface ChatBubbleProps {
  message: string
  time: string
  isCustomer?: boolean
}

export function ChatBubble({ message, time, isCustomer }: ChatBubbleProps) {
  return (
    <div className={cn("flex gap-3 mb-6", isCustomer ? "flex-row" : "flex-row-reverse")}>
      {isCustomer && (
        <Avatar className="w-8 h-8 bg-blue-400">
          <AvatarFallback className="bg-blue-400">
            <User className="w-4 h-4 text-white" />
          </AvatarFallback>
        </Avatar>
      )}
      <div className={cn("flex flex-col max-w-[80%]", isCustomer ? "items-start" : "items-end")}>
        <div
          className={cn(
            "px-4 py-3 rounded-2xl text-sm leading-relaxed",
            isCustomer
              ? "bg-[#F1F5F9] text-slate-900 rounded-tl-none"
              : "bg-blue-800 text-white rounded-tr-none font-medium",
          )}
        >
          {message}
        </div>
        <span className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">{time}</span>
      </div>
    </div>
  )
}