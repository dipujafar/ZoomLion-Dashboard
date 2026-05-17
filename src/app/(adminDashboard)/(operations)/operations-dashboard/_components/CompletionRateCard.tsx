"use client"

import * as React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export const CompletionRateCard = ({
    className,
    value = 88,
}: {
    className?: string
    value?: number
}) => {
    return (
        <Card className={className}>
            <CardHeader>
                <div>
                    <CardTitle>Overall Completion Rate</CardTitle>
                    {/* <CardDescription>Success Rate</CardDescription> */}
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-4">
                        <div className="text-4xl font-bold text-[#00A63E]">{value}%</div>
                        <div className=" lg:w-[1350px] md:w-[800px] w-[200px] ">
                            <Progress value={value} />
                        </div>
                    </div>
                </div>
                {/* <div className=" text-sm text-muted-foreground">Current: 89%</div> */}
            </CardContent>
            <CardFooter />
        </Card>
    )
}

export default CompletionRateCard
