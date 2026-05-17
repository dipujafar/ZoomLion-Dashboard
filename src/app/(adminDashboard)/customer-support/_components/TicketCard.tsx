"use client"

import { AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

interface TicketCardProps {
  name: string
  status: string
  time: string
  isActive?: boolean
  onClick?: () => void
}

export function TicketCard({ name, status, time, isActive, onClick }: TicketCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "p-4 rounded-xl border mb-3 cursor-pointer transition-colors",
        isActive ? "bg-[#ebf0ff] border-blue-100 shadow-sm" : "bg-white border-slate-100 hover:border-slate-200",
      )}
    >
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-slate-900">{name}</h3>
        <div className="flex items-center gap-2 ">
          <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
          <span className="text-xs font-medium">{status}</span>
        </div>
        <span className="text-[10px] text-slate-400 font-medium">{time}</span>
      </div>
    </div>
  )
}
