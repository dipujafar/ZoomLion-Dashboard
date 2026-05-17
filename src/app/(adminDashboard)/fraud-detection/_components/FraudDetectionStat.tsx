import StatusCard from "@/components/(adminDashboard)/cards/StatusCard";
import { MessageSquare, CheckCircle, Clock } from "lucide-react";

const FraudDetectionStat = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-5 gap-3">
            <StatusCard
                icon={MessageSquare}
                count={24}
                label="Investigating"
                variant="warning"
            />
            <StatusCard
                icon={CheckCircle}
                count={18}
                label="Resolved Today"
                variant="success"
            />
            <StatusCard
                icon={Clock}
                count={12}
                label="Pending reply"
                variant="pending"
            />
        </div>
    );
};

export default FraudDetectionStat;
