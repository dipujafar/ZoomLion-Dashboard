import RiderIncentivesCard from "@/components/(adminDashboard)/cards/RiderIncentivesCard";
import PaginationSection from "@/components/shared/PaginationSection";
import { Trophy } from "lucide-react";

interface LeaderboardEntry {
    id: number;
    rank: number;
    name: string;
    points: number;
    rides: number;
    rating: number;
    badges: { label: string; variant: "primary" | "success" | "warning" | "info" }[];
}

const mockData: LeaderboardEntry[] = [
    {
        id: 1,
        rank: 1,
        name: "John Smith",
        points: 2450,
        rides: 245,
        rating: 5.0,
        badges: [
            { label: "Top Performer", variant: "primary" },
            { label: "100 Rides", variant: "info" }
        ],
    },
    {
        id: 2,
        rank: 2,
        name: "Sarah Johnson",
        points: 2380,
        rides: 232,
        rating: 4.9,
        badges: [
            { label: "100 Rides", variant: "info" },
        ],
    },
    {
        id: 3,
        rank: 3,
        name: "Michael Chen",
        points: 2290,
        rides: 218,
        rating: 4.9,
        badges: [
            { label: "100 Rides", variant: "info" },
        ],
    },
    {
        id: 4,
        rank: 4,
        name: "Emily Davis",
        points: 2150,
        rides: 198,
        rating: 5.0,
        badges: [
            { label: "100 Rides", variant: "info" }
        ],
    },
    {
        id: 5,
        rank: 5,
        name: "David Wilson",
        points: 2080,
        rides: 187,
        rating: 4.8,
        badges: [
            { label: "100 Rides", variant: "info" }
        ],
    },
    {
        id: 6,
        rank: 6,
        name: "Jessica Brown",
        points: 1950,
        rides: 176,
        rating: 5.0,
        badges: [
            { label: "100 Rides", variant: "info" }
        ],
    },
];

const CustomerLoyaltyTable = () => {
    return (
        <div className="w-full px-5 pb-5">
            {/* Cards */}
            <div className="flex flex-col gap-3">
                {mockData.map((entry) => (
                    <div
                        key={entry.id}
                        className="animate-fade-in"
                        style={{ animationDelay: `${entry.rank * 60}ms` }}
                    >
                        <RiderIncentivesCard
                            rank={entry.rank}
                            name={entry.name}
                            points={entry.points}
                            rides={entry.rides}
                            rating={entry.rating}
                            badges={entry.badges}
                            isTopPerformer={entry.rank === 1}
                            type={"customer"}
                        />
                    </div>
                ))}
            </div>
            {/* pagination */}
            <PaginationSection total={20} current={1} />
        </div>
    );
};

export default CustomerLoyaltyTable;
