import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const ALERTS = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Customer",
        title: "Multiple ride requests from same location within 5 minutes",
        status: "Pending",
        time: "2 hours ago",
        active: true,
    },
    {
        id: 2,
        name: "Sarah Johnson",
        role: "Customer",
        title: "Multiple ride requests from same location within 5 minutes",
        status: "Investigating",
        time: "2 hours ago",
    },
    {
        id: 3,
        name: "Sarah Johnson",
        role: "Rider",
        title: "Rider took significantly longer route than necessary",
        status: "Pending",
        time: "2 hours ago",
    },
    {
        id: 4,
        name: "Sarah Johnson",
        role: "Rider",
        title: "Unusual ride acceptance pattern detected",
        status: "Resolved",
        time: "2 hours ago",
    },
]

export function FraudAlertSidebar() {
    return (
        <div className="w-[33%] border-r bg-white flex flex-col p-4 gap-4 overflow-y-auto">
            {ALERTS.map((alert) => (
                <div
                    key={alert.id}
                    className={cn(
                        "p-4 rounded-xl border transition-colors cursor-pointer",
                        alert.active ? "bg-[#FFFBEB] border-[#FEF3C7]" : "bg-white border-gray-100 hover:border-gray-200",
                    )}
                >
                    <h3 className="font-bold text-[#1F2937] text-sm">
                        {alert.name}({alert.role})
                    </h3>
                    <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">{alert.title}</p>
                    <div className="mt-3 flex items-center gap-2">
                        <StatusBadge status={alert.status} />
                    </div>
                    <p className="text-[10px] text-[#9CA3AF] mt-2">{alert.time}</p>
                </div>
            ))}
        </div>
    )
}

function StatusBadge({ status }: { status: string }) {
    const styles = {
        Pending: "bg-[#FEE2E2] text-[#EF4444] border-transparent",
        Investigating: "bg-[#FEF3C7] text-[#D97706] border-transparent",
        Resolved: "bg-[#D1FAE5] text-[#10B981] border-transparent",
    }

    return (
        <Badge
            variant="outline"
            className={cn("px-2 py-0.5 text-[10px] font-medium rounded-full", styles[status as keyof typeof styles])}
        >
            {status}
        </Badge>
    )
}
