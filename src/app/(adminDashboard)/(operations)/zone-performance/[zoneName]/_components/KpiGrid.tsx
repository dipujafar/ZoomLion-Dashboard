"use client"

import React from "react";
import { KpiItem, KpiCard } from "./KpiCard";

type Props = {
  items: KpiItem[];
  className?: string;
};

export default function KpiGrid({ items, className }: Props) {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((it) => (
          <KpiCard key={String(it.id ?? it.label)} {...it} />
        ))}
      </div>
    </div>
  );
}
