import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Badge {
    label: string;
    variant: "primary" | "success" | "warning" | "info";
}

interface LeaderboardCardProps {
    rank: number;
    name: string;
    points: number;
    rides: number;
    rating: number;
    badges?: Badge[];
    isTopPerformer?: boolean;
    type?: string
}

const badgeStyles = {
    primary: "bg-[#F3E8FF] text-[#6E11B0]",
    success: "bg-[#DBEAFE] text-[#193CB8]",
    warning: "bg-[#FEF9C2] text-[#894B00]",
    info: "bg-[#DBEAFE] text-[#193CB8]",
};

const RiderIncentivesCard = ({
    rank,
    name,
    points,
    rides,
    rating,
    badges = [],
    isTopPerformer = false,
    type
}: LeaderboardCardProps) => {
    const isTop3 = rank <= 3;
    const initials = name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();

    return (
        <div
            className={cn(
                "group relative flex items-center gap-4 rounded-lg border p-4 transition-all duration-200",
                isTop3
                    ? "border-[#2400f0] bg-[#f4f2fa] shadow-gold hover:shadow-lg"
                    : "border-border bg-card shadow-soft hover:shadow-card hover:border-gold/20"
            )}
            style={{
                animationDelay: `${rank * 50}ms`,
            }}
        >
            {/* Rank Badge */}
            <div
                className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold",
                    isTop3
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                )}
            >
                #{rank}
            </div>

            {/* Avatar */}
            <div
                className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-semibold",
                    isTop3
                        ? "bg-[#1A0D83] text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                )}
            >
                {initials}
            </div>

            {/* Info */}
            <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                <h3 className="font-semibold text-foreground truncate">{name}</h3>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{points.toLocaleString()} points</span>
                    <span className="text-border">•</span>
                    <span>{rides} {type == "customer" ? "Rides" : "Booking"}</span>
                    <span className="text-border">•</span>
                    <span className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 fill-[#F0B100] text-[#F0B100]" />
                        {rating.toFixed(1)}
                    </span>
                </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 justify-end">
                {badges.map((badge, index) => (
                    <span
                        key={index}
                        className={cn(
                            "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium transition-transform group-hover:scale-105",
                            badgeStyles[badge.variant]
                        )}
                    >
                        {badge.label}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default RiderIncentivesCard;
