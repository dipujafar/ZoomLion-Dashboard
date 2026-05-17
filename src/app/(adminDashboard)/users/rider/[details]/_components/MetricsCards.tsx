interface MetricCard {
  label: string;
  value: string;
}

interface MetricsCardsProps {
  metrics: MetricCard[];
}

export function MetricsCards({ metrics }: MetricsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col justify-center"
        >
          <p className="text-sm font-medium text-gray-600 mb-2">{metric.label}</p>
          <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
        </div>
      ))}
    </div>
  );
}
