import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Box, User, MapPin, Package, Scale } from "lucide-react"
import { cn } from "@/lib/utils"
import PaginationSection from "@/components/shared/PaginationSection"

type ActivityStatus = "In Progress" | "Pickup" | "Assigned" | "Pending"

interface Activity {
    id: string
    status: ActivityStatus
    assignee: string
    time: string
    rider: string
    location: string
    type: string
    weight: string
    progress?: number
}

const activities: Activity[] = [
    {
        id: "1",
        status: "In Progress",
        assignee: "Kwadwo Owusu",
        time: "5 mins ago",
        rider: "Ama Serwaa",
        location: "Osu, Accra",
        type: "General",
        weight: "15 kg",
        progress: 65,
    },
    {
        id: "2",
        status: "In Progress",
        assignee: "Grace Mensah",
        time: "3 mins ago",
        rider: "Kofi Asante",
        location: "Airport Residential",
        type: "Organic",
        weight: "22 kg",
        progress: 80,
    },
    {
        id: "3",
        status: "Pickup",
        assignee: "First Atlantic Bank",
        time: "2 mins ago",
        rider: "Kwame Mensah",
        location: "Ridge",
        type: "General",
        weight: "50 kg",
    },
    {
        id: "4",
        status: "Pickup",
        assignee: "First Atlantic Bank",
        time: "2 mins ago",
        rider: "Kwame Mensah",
        location: "Ridge",
        type: "General",
        weight: "50 kg",
    },
    {
        id: "5",
        status: "Assigned",
        assignee: "Sarah Boateng",
        time: "12 mins ago",
        rider: "Assigned",
        location: "Tema",
        type: "Paper",
        weight: "5 kg",
    },
    {
        id: "6",
        status: "Pending",
        assignee: "Sarah Boateng",
        time: "12 mins ago",
        rider: "Unassigned",
        location: "Tema",
        type: "Paper",
        weight: "5 kg",
    },
]

const statusStyles: Record<ActivityStatus, { badge: string; iconBg: string; iconColor: string }> = {
    "In Progress": {
        badge: "bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-50",
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
    },
    Pickup: {
        badge: "bg-purple-50 text-purple-600 border-purple-100 hover:bg-purple-50",
        iconBg: "bg-purple-50",
        iconColor: "text-purple-600",
    },
    Assigned: {
        badge: "bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-50",
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
    },
    Pending: {
        badge: "bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-50",
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
    },
}

function ActivityCard({ activity }: { activity: Activity }) {
    const styles = statusStyles[activity.status]

    return (
        <Card className="mb-4 border-slate-100 shadow-sm overflow-hidden">
            <CardContent className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-4">
                        <div className={cn("p-2.5 rounded-lg", styles.iconBg)}>
                            <Box className={cn("w-5 h-5", styles.iconColor)} />
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <Badge
                                    variant="outline"
                                    className={cn("font-medium px-2.5 py-0.5 border-0 rounded-full", styles.badge)}
                                >
                                    {activity.status}
                                </Badge>
                            </div>
                            <p className="text-sm font-medium text-slate-600">{activity.assignee}</p>
                        </div>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">{activity.time}</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 mb-6">
                    <InfoItem icon={User} label="Rider" value={activity.rider} />
                    <InfoItem icon={MapPin} label="Location" value={activity.location} />
                    <InfoItem icon={Package} label="Type" value={activity.type} />
                    <InfoItem icon={Scale} label="Est. Weight" value={activity.weight} />
                </div>

                {activity.progress !== undefined && (
                    <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs font-semibold text-slate-400">
                            <span>Progress</span>
                            <span className="text-slate-600">{activity.progress}%</span>
                        </div>
                        <Progress value={activity.progress} className="h-1.5 bg-slate-100 [&>div]:bg-blue-600" />
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

function InfoItem({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
    return (
        <div className="flex items-start gap-2">
            <Icon className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
            <div className="space-y-0.5">
                <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">{label}</p>
                <p className="text-sm font-semibold text-slate-700 leading-tight">{value}</p>
            </div>
        </div>
    )
}

export function RecentActivity() {
    return (
        <div className="p-6 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-xl font-bold">Recent Activity</h2>
                    <p className="text-sm text-[#898989] mt-1 font-medium">Live updates on ride activities</p>
                </div>
                <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100/50">
                    <div className="size-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-emerald-700">Live</span>
                </div>
            </div>

            <div className="space-y-4">
                {activities.map((activity) => (
                    <ActivityCard key={activity.id} activity={activity} />
                ))}
            </div>

            <PaginationSection total={20} current={1} />
        </div>
    )
}
