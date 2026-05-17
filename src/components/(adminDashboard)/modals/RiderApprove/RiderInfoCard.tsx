import { User } from "lucide-react"

interface RiderInfoProps {
  fullName: string
  location: string
  phoneNumber: string
  submissionDate: string
}

export function RiderInfoCard({ fullName, location, phoneNumber, submissionDate }: RiderInfoProps) {
  return (
    <div className="bg-[#f4f5f7] border border-[#d7d4ef] rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <User className="w-5 h-5 text-[#1A0D83]" />
        <h2 className="text-lg font-semibold text-[#1A0D83]">Rider Information</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-900">
            Full Name: <span className="text-gray-500 font-normal">{fullName}</span>
          </p>
          <p className="text-sm font-medium text-gray-900">
            Location: <span className="text-gray-500 font-normal">{location}</span>
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-900">
            Phone Number: <span className="text-gray-500 font-normal">{phoneNumber}</span>
          </p>
          <p className="text-sm font-medium text-gray-900">
            Submission Date: <span className="text-gray-500 font-normal">{submissionDate}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
