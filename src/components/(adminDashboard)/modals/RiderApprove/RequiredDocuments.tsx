import { FileText, AlertTriangle, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DocumentItemProps {
  name: string
  fileName: string
  status: "Pending" | "Approved" | "Rejected"
}

const downloadFile = () => {
    const link = document.createElement('a');
    link.href = '/document.pdf';
    link.download = 'document.pdf';
    link.click();
}


function DocumentItem({ name, fileName, status }: DocumentItemProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-4">
        <div className="bg-[#f1eaf5] p-2.5 rounded-full">
          <FileText className="w-6 h-6 text-[#072cff]" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 leading-tight">{name}</h3>
          <p className="text-sm text-gray-400 font-normal mt-0.5">{fileName}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {status === "Pending" && (
          <div className="bg-[#eae8f6] text-[#894B00] border border-[#c9cafa] px-3 py-1.5 rounded-md flex items-center gap-1.5 text-xs font-medium">
            <AlertTriangle className="w-3.5 h-3.5" />
            Pending
          </div>
        )}
        <Button
          variant="outline"
          size="sm"
          onClick={downloadFile}
          className="h-9 px-4 text-[#484848] border-gray-200 hover:bg-gray-50 flex items-center gap-2 bg-transparent"
        >
          <Download className="w-4 h-4" />
          View
        </Button>
      </div>
    </div>
  )
}

export function RequiredDocuments() {
  return (
    <div className="bg-[#F8F9FA] border border-gray-200 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <FileText className="w-5 h-5 text-gray-500" />
        <h2 className="text-lg font-semibold text-[#484848]">Required Documents</h2>
      </div>
      <div className="space-y-4">
        <DocumentItem name="Ghana Card ID" fileName="id_card.jpg" status="Pending" />
      </div>
    </div>
  )
}
