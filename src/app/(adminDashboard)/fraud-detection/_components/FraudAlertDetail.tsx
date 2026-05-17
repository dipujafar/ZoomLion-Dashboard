import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, CheckCircle2, XCircle, Ban } from "lucide-react"

export function FraudAlertDetail() {
  return (
    <div className="space-y-8 bg-white">
      {/* Header Section */}
      <section>
        <h1 className="text-xl font-semibold text-[#1F2937]">
          Multiple ride requests from same location within 5 minutes
        </h1>
        <div className="flex items-center gap-3 mt-4">
          <Badge className="bg-[#FEE2E2] text-[#EF4444] hover:bg-[#FEE2E2] border-transparent rounded-full px-4 py-1">
            Pending
          </Badge>
          <span className="text-sm text-[#9CA3AF]">Detected 10 min ago</span>
        </div>
      </section>

      {/* Alert Type Box */}
      <div className="bg-[#F9FAFB] border border-gray-100 rounded-xl p-6">
        <p className="text-sm text-[#9CA3AF] mb-1">Alert Type</p>
        <p className="text-lg font-medium text-[#1F2937]">Duplicate Ride</p>
      </div>

      {/* User Information */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-[#374151]">User Information</h2>
        <div className="bg-[#F9FAFB] border border-gray-100 rounded-xl p-6">
          <div className="grid grid-cols-[1fr,auto] gap-y-4 items-center">
            <span className="text-sm text-[#9CA3AF]">Name</span>
            <span className="text-sm font-medium text-[#1F2937]">John Doe</span>

            <span className="text-sm text-[#9CA3AF]">User Type</span>
            <Badge className="bg-[#F3E8FF] text-[#A855F7] hover:bg-[#F3E8FF] border-transparent rounded-full px-3 py-0.5 text-xs">
              Customer
            </Badge>

            <span className="text-sm text-[#9CA3AF]">Related Ride</span>
            <span className="text-sm font-medium text-[#3B82F6] hover:underline cursor-pointer">#R-5678</span>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-[#374151]">Details</h2>
        <div className="bg-[#FFFBEB] border border-[#FEF3C7] rounded-xl p-6">
          <p className="text-sm text-[#4B5563] leading-relaxed">
            Customer submitted 3 ride requests from the same pickup location to different destinations within 5 minutes.
            Possible attempt to game the system.
          </p>
        </div>
      </section>

      {/* Actions Section */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-[#374151]">Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Button className="bg-[#FBBF24] hover:bg-[#F59E0B] text-white rounded-lg px-6 gap-2">
            <Eye className="w-4 h-4" />
            Mark as Investigating
          </Button>
          <Button className="bg-[#10B981] hover:bg-[#059669] text-white rounded-lg px-6 gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Mark as Resolved
          </Button>
          <Button className="bg-[#4B5563] hover:bg-[#374151] text-white rounded-lg px-6 gap-2">
            <XCircle className="w-4 h-4" />
            Dismiss Alert
          </Button>
          <Button variant="destructive" className="bg-[#EF4444] hover:bg-[#DC2626] rounded-lg px-6 gap-2">
            <Ban className="w-4 h-4" />
            Suspend User
          </Button>
        </div>
      </section>
    </div>
  )
}
