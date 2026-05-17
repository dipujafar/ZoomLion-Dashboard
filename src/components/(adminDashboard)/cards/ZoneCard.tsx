import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface ZoneCardProps {
    name: string
    totalRiders: number
    activeNow: number
}

export function ZoneCard({ name, totalRiders, activeNow }: ZoneCardProps) {
    return (
        <Card className="border-gray-100 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
                <CardTitle className="text-base font-semibold text-gray-900">{name}</CardTitle>
                <Link href={"/fleet-zone-management/zone"}><button className="flex items-center gap-1 text-xs font-semibold text-main-color transition-colors hover:text-main-color/40">
                    View Zone <ArrowRight className="h-3 w-3" />
                </button></Link>
            </CardHeader>
            <CardContent className="flex gap-4">
                <div className="flex-1 rounded-xl bg-gray-50 p-4">
                    <p className="text-sm font-medium tracking-tight text-gray-500 uppercase">Total Riders</p>
                    <p className="mt-1 text-2xl font-bold text-gray-900">{totalRiders}</p>
                </div>
                <div className="flex-1 rounded-xl bg-gray-50 p-4">
                    <p className="text-sm font-medium tracking-tight text-[#16A34A] uppercase">Active Now</p>
                    <p className="mt-1 text-2xl font-bold text-[#15803D]">{activeNow}</p>
                </div>
            </CardContent>
        </Card>
    )
}
