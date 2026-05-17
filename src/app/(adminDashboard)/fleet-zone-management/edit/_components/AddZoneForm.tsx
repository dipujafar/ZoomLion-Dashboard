'use client'
import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Plus, MapPin, Dot } from 'lucide-react'

const stationSchema = z.object({
  stationName: z.string().min(1, 'Station name is required'),
  address: z.string().min(1, 'Address is required'),
})

const zoneFormSchema = z.object({
  zoneName: z.string().min(1, 'Zone name is required'),
  stations: z.array(stationSchema).min(1, 'At least one station is required'),
})

type ZoneFormValues = z.infer<typeof zoneFormSchema>

export function AddZoneForm() {
  const form = useForm<ZoneFormValues>({
    resolver: zodResolver(zoneFormSchema),
    defaultValues: {
      zoneName: '',
      stations: [
        { stationName: '', address: '' },
        { stationName: '', address: '' },
      ],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'stations',
  })

  function onSubmit(values: ZoneFormValues) {
    console.log(values)
  }

  return (
    <div className="w-full  p-6 bg-background rounded-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Zone Name Field */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded">
                <MapPin className="w-4 h-4 text-blue-600" />
              </div>
              <h2 className="text-sm font-semibold text-foreground">Zone Name</h2>
            </div>
            <FormField
              control={form.control}
              name="zoneName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="e.g. Madina, East Legon, Tema..."
                      className="bg-muted border-0 text-foreground placeholder:text-muted-foreground"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Stations Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded">
                  <Dot className="w-4 h-4 text-blue-600" />
                </div>
                <h2 className="text-sm font-semibold text-foreground">Stations</h2>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => append({ stationName: '', address: '' })}
                className="gap-2 text-blue-600 border-blue-200 hover:bg-blue-50"
              >
                <Plus className="w-4 h-4" />
                Add Station
              </Button>
            </div>

            {/* Stations List */}
            <div className="space-y-4">
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="p-4 border border-border rounded-lg bg-card space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-muted rounded-full text-muted-foreground text-sm font-medium">
                      {index + 1}
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      Station {index + 1}
                    </span>
                    {fields.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => remove(index)}
                        className="ml-auto text-destructive hover:bg-destructive/10"
                      >
                        Remove
                      </Button>
                    )}
                  </div>

                  {/* Station Name Field */}
                  <FormField
                    control={form.control}
                    name={`stations.${index}.stationName`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Station name *"
                            className="bg-muted border-0 text-foreground placeholder:text-muted-foreground"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Address Field */}
                  <FormField
                    control={form.control}
                    name={`stations.${index}.address`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Address"
                            className="bg-muted border-0 text-foreground placeholder:text-muted-foreground"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full bg-main-color" >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}
