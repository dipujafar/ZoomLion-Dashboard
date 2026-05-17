import React from 'react'
import map_pin from "@/assets/map_pin.png"
import Image from 'next/image'
import growth_icon from '@/assets/growth_icon.png'

export default function ZoneName() {
    return (
        <div className='flex items-center gap-4'>
            <div className='bg-[#10B981] size-12 rounded-xl flex items-center justify-center'>
                <Image src={map_pin} alt="map pin" className='inline-block mr-2 w-4 h-5 object-cover translate-x-1' />
            </div>
            <div>
                <h4 className='text-lg font-medium'>Central Zone</h4>
                <div className='flex items-center gap-x-5 text-[#00A63E]'>
                    <div className='bg-[#DCFCE7] text-[#008236] rounded-full px-3 py-0.5'>
                        <p>High Performance</p>
                    </div>
                    <p> <Image src={growth_icon} alt="growth icon" className='inline-block mr-0.5 w-4 h-4 object-cover' /> +12.5%</p>
                </div>
            </div>
        </div>
    )
}
