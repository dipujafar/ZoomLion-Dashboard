import { MapPin } from "lucide-react";

interface WorkEntry {
  date: string;
  location: string;
  jobs: number;
  ghs: string;
}

interface RecentWorkHistoryProps {
  entries: WorkEntry[];
}

export function RecentWorkHistory({ entries }: RecentWorkHistoryProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Work History</h2>
      <div className="space-y-4">
        {entries.map((entry, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-900">{entry.date}</p>
                <div className="flex items-center gap-x-1">
                  <MapPin className="size-3 text-gray-600 mt-1" />
                  <p className="text-xs text-gray-600 mt-1">{entry.location}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{entry.jobs} jobs</p>
                <p className="text-xs text-green-600 mt-1">{entry.ghs}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
