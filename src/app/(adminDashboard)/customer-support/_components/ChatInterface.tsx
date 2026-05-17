"use client"

import { AlertTriangle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChatBubble } from "./ChatBubble"


export function ChatInterface() {
  return (
    <div className="flex-1 flex flex-col h-full bg-white">
      {/* Header */}
      <div className="px-8 py-4 flex items-center justify-between border-b">
        <div className="flex flex-col">
          <h2 className="text-base font-bold text-slate-900">Sarah Johnson</h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
              <span className="text-xs font-semibold">Complaint</span>
            </div>
            <span className="text-xs text-slate-400 font-medium">Kwame Owusu • 5 mins ago</span>
          </div>
        </div>
        <Button
          variant="outline"
          className="text-[#22C55E] border-[#F0FDF4] bg-[#F0FDF4] hover:bg-[#DCFCE7] hover:text-[#16A34A] rounded-xl px-6 h-9 text-xs font-bold"
        >
          Resolve
        </Button>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 px-8 py-6">
        <div className="flex flex-col">
          <ChatBubble isCustomer message="Hello, my scheduled collection was missed this morning." time="10:45 AM" />
          <ChatBubble
            message="We apologize for the inconvenience. Let me check your collection details."
            time="10:47 AM"
          />
          <ChatBubble
            message="I can see your collection was scheduled for 9 AM. We will send a rider to your location within the next 30 minutes."
            time="10:48 AM"
          />
          <ChatBubble isCustomer message="Thank you! Will there be any compensation for the delay?" time="10:50 AM" />
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="p-8 border-t bg-white">
        <div className="flex gap-4 items-center">
          <div className="relative flex-1">
            <Input
              placeholder="Type your message..."
              className="h-12 bg-white border-slate-200 rounded-xl px-4 text-sm focus-visible:ring-blue-400 placeholder:text-slate-400"
            />
          </div>
          <Button className="bg-main-color hover:bg-blue-700 text-white rounded-xl px-8 h-12 flex items-center gap-2 font-bold transition-all shadow-sm group">
            <Send className="w-4 h-4 fill-white group-hover:rotate-45 transition-all duration-500" />
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}
