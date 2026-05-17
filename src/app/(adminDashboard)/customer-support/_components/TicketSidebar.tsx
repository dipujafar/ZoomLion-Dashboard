"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { TicketCard } from "./TicketCard"


const tickets = [
  { id: 1, name: "Sarah Johnson", status: "Complaint", time: "2 hours ago" },
  { id: 2, name: "Mike Chen", status: "Complaint", time: "2 hours ago" },
  { id: 3, name: "Emma Davis", status: "Complaint", time: "2 hours ago" },
  { id: 4, name: "Emma Davis", status: "Complaint", time: "2 hours ago" },
]

export function TicketSidebar() {
  const [activeId, setActiveId] = useState(1)

  return (
    <div className="w-[300px] border-r h-full bg-white flex flex-col p-6 overflow-y-auto">
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <Input
          placeholder="Search tickets..."
          className="pl-10 h-10 bg-slate-50 border-none rounded-xl text-xs placeholder:text-slate-400"
        />
      </div>
      <div className="flex flex-col">
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            {...ticket}
            isActive={activeId === ticket.id}
            onClick={() => setActiveId(ticket.id)}
          />
        ))}
      </div>
    </div>
  )
}
