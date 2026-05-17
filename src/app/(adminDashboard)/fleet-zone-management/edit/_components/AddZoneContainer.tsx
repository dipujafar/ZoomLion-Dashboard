"use client";
import { AddZoneForm } from './AddZoneForm'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { SelectArea } from './SelectArea';


export default function AddZoneContainer() {
    const router = useRouter();
    return (
        <div className='space-y-5'>
            <div className="flex justify-between items-center">
                <div className="flex  gap-x-2">
                    <div className="mt-1">
                        <ArrowLeft className="h-5 w-5" onClick={() => router.back()} />
                    </div>
                    <div>
                        <h4 className="text-2xl text-[#111827] font-bold">Update Zone</h4>
                        <p className="text-[#6B7280]">Fill in zone details, add stations, then draw the boundary on the map</p>
                    </div>
                </div>
            </div>
            <div className="grid xl:grid-cols-3 gap-5">
                <AddZoneForm />
                <div className='xl:col-span-2'>
                    <SelectArea />
                </div>
            </div>
        </div>
    )
}
