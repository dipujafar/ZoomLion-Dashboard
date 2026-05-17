interface HeaderProps {
  name: string;
  status: 'Active' | 'Inactive';
  riskLevel: 'LOW RISK' | 'MEDIUM RISK' | 'HIGH RISK';
}

export function Header({ name, status, riskLevel }: HeaderProps) {
  const statusColor = status === 'Active' ? 'bg-green-500' : 'bg-gray-500';
  const riskColor = 
    riskLevel === 'LOW RISK' ? 'bg-green-100 text-green-800' :
    riskLevel === 'MEDIUM RISK' ? 'bg-blue-100 text-blue-800' :
    'bg-red-100 text-red-800';

  return (
    <div className="flex items-center justify-between bg-white p-6 rounded-lg border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${statusColor}`}></div>
          <span className="text-sm font-medium text-gray-700">{status}</span>
        </div>
        <span className={`px-3 py-1 rounded text-sm font-semibold ${riskColor}`}>
          {riskLevel}
        </span>
      </div>
    </div>
  );
}
