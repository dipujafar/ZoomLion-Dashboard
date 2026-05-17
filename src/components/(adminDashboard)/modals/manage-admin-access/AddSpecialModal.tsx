'use client';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
} from '@/components/ui/dialog'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { formSchema } from './AddSpecialAdminFormSchema';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

type FormValues = z.infer<typeof formSchema>

const AddSpecialModal = ({ open, setOpen }: { open: boolean, setOpen: (collapsed: boolean) => void }) => {
    const [showPassword, setShowPassword] = useState(false);
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            teamName: '',
        },
    })

    function onSubmit(values: FormValues) {
        console.log(values)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <Input placeholder="Enter name" {...field} type="text" className="py-5 bg-[#f7f7f7]" />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        type="email"
                                        placeholder="Enter email address"
                                        className="py-5 bg-[#f7f7f7]"
                                        {...field}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <div className='relative'>
                                        <Input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Enter a password"
                                            className="py-5 bg-[#f7f7f7]"
                                            {...field}
                                        />
                                        {
                                            showPassword ? (
                                                <Eye
                                                    className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                />
                                            ) : (
                                                <EyeOff
                                                    className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                />
                                            )
                                        }
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <Input
                                        type="text"
                                        placeholder="Enter your phone number"
                                        className="py-5 bg-[#f7f7f7]"
                                        {...field}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                        <FormField
                            control={form.control}
                            name="teamName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Team Name</FormLabel>

                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value || ''}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="w-full py-5 bg-[#f7f7f7]">
                                                <SelectValue placeholder="Select a user team role" />
                                            </SelectTrigger>
                                        </FormControl>

                                        <SelectContent>
                                            <SelectItem value="support">Support Team</SelectItem>
                                            <SelectItem value="finance">Finance Team</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full bg-[#1A0D83] hover:bg-[#e6ac00] py-5">
                            Submit
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default AddSpecialModal;
