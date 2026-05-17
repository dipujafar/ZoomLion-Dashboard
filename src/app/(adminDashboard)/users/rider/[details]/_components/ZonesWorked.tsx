interface Zone {
  name: string;
  jobs: number;
}

interface ZonesWorkedProps {
  zones: Zone[];
}

export function ZonesWorked({ zones }: ZonesWorkedProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h2 className="text-lg font-bold text-gray-900 mb-3">Zones Worked (Last 30 Days)</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {zones.map((zone, index) => (
          <div key={index} className="text-center bg-[#F8FAFC] py-1 rounded-md">
            <p className="text-4xl font-bold text-gray-900">{zone.jobs}</p>
            <p className="text-sm text-gray-600 mt-2">{zone.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
