import { Card } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

interface Station {
    id: string;
    name: string;
    address: string;
}

const stations: Station[] = [
    {
        id: '1',
        name: 'Uptown Hub A',
        address: '12 Uptown Blvd, Block A',
    },
    {
        id: '2',
        name: 'Uptown Sub B',
        address: '45 North Ave, Block B',
    },
    {
        id: '3',
        name: 'Uptown Express C',
        address: '78 Heights Rd, Block C',
    },
    {
        id: '4',
        name: 'Uptown Express C',
        address: '70 Heights Rd, Block C',
    },
    {
        id: '5',
        name: 'Uptown Sub B',
        address: '45 North Ave, Block B',
    },
];

export function StationList() {
    return (
        <Card className="w-full  p-6">
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Stations</h2>
                <p className="text-sm text-gray-500">5 stations in Uptown Zone</p>
            </div>
            <br />
            <div className="space-y-4">
                {stations.map((station) => (
                    <div key={station.id} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-md bg-[#efe7fb] flex items-center justify-center">
                            <span className="text-sm font-semibold text-[#1A0D83]"><MapPin size={16} /></span>
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className=" font-semibold text-gray-900">{station.name}</p>
                            <p className="text-xs text-gray-500">{station.address}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
