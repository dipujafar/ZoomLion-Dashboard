"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


const formSchema = z.object({
  rate: z.number()
    .min(0, { message: "Commission rate must be at least 0%" })
    .max(100, { message: "Commission rate cannot exceed 100%" }),
})

type FormValues = z.infer<typeof formSchema>

export function CommissionRateForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rate: 1,
    },
  })


  function onSubmit(values: FormValues) {
    console.log( values)
  }

  return (
    <Card className="w-full  border-none shadow-none bg-[#FFFFFF] p-10">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-xl font-semibold text-slate-800">Set Commission Rate</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="rate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-slate-700">Admin Commission (%)</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="number"
                        placeholder="Commission Rate : 1%"
                        className="h-12 border-slate-200 focus-visible:ring-blue-200 pr-10"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button
                type="submit"
                className="w-full max-w-xs h-12 bg-[#efe7fb] hover:bg-blue-100 text-[#1A0D83] font-semibold border-none shadow-none rounded-lg flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save Commission
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
