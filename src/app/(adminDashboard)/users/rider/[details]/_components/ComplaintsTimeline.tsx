interface Complaint {
  date: string;
  time: string;
  description: string;
  status: 'resolved' | 'investigating' | 'reported';
}

interface ComplaintsTimelineProps {
  complaints: Complaint[];
}

export function ComplaintsTimeline({ complaints }: ComplaintsTimelineProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'bg-green-50 border-l-4 border-green-500';
      case 'investigating':
        return 'bg-blue-50 border-l-4 border-blue-500';
      case 'reported':
        return 'bg-red-50 border-l-4 border-red-500';
      default:
        return 'bg-gray-50';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'investigating':
        return 'bg-blue-100 text-blue-800';
      case 'reported':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 h-full">
      <h2 className="text-lg font-bold text-gray-900 mb-4">
        Complaints Timeline ({complaints.length})
      </h2>
      <div className="space-y-3">
        {complaints.map((complaint, index) => (
          <div key={index} className={`p-4 rounded ${getStatusColor(complaint.status)}`}>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {complaint.date}, {complaint.time}
                </p>
                <p className="text-sm text-gray-700 mt-2">{complaint.description}</p>
              </div>
              <span
                className={`px-2 py-1 text-xs font-semibold rounded whitespace-nowrap ml-2 ${getStatusBadge(
                  complaint.status
                )}`}
              >
                {complaint.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
