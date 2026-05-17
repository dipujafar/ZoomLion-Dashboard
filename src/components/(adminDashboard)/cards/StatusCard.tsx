import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusCardProps {
  icon: LucideIcon;
  count: number;
  label: string;
  variant?: "warning" | "success" | "pending";
}

const StatusCard = ({ icon: Icon, count, label, variant = "warning" }: StatusCardProps) => {
  const variantStyles = {
    warning: {
      bg: "bg-[#1A0D83]",
      icon: "text-white",
      label: "text-status-warning",
    },
    success: {
      bg: "bg-[#16A34A]",
      icon: "text-white",
      label: "text-foreground",
    },
    pending: {
      bg: "bg-[#EA580C] text-white",
      icon: "text-status-pending",
      label: "text-foreground",
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className="flex flex-col gap-3 rounded-xl bg-card p-5 shadow-card border border-border/50 w-full">
      <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", styles.bg)}>
        <Icon className={cn("w-5 h-5", styles.icon)} />
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="text-2xl font-semibold text-foreground">{count}</span>
        <span className={cn("text-sm", styles.label)}>{label}</span>
      </div>
    </div>
  );
};

export default StatusCard;
