"use client"

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type KpiItem = {
  id?: string | number;
  label: string;
  value: ReactNode;
  hint?: string;
  icon?: ReactNode;
  className?: string;
};

export function KpiCard({ label, value, hint, icon, className }: KpiItem) {
  return (
    <div className={cn("flex items-center gap-4 rounded-lg border bg-card p-3.5")}>
      <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600", className)}>{icon}</div>

      <div className="flex-1 min-w-0">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="mt-1 flex items-center gap-2">
          <div className="text-lg font-semibold truncate">{value}</div>
          {hint && <div className="text-xs text-muted-foreground">{hint}</div>}
        </div>
      </div>
    </div>
  );
}

export default KpiCard;
