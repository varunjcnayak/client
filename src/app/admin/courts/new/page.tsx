"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const courtSchema = z.object({
    name: z.string().min(2, { message: "Court name is required" }),
    description: z.string().optional(),
    location: z.string().min(2, { message: "Location is required" }),
    hourlyRate: z.string().min(1, { message: "Hourly rate is required" }),
});

type CourtFormValues = z.infer<typeof courtSchema>;

export default function NewCourtPage() {
    const router = useRouter();

    const form = useForm<CourtFormValues>({
        resolver: zodResolver(courtSchema),
        defaultValues: {
            name: "",
            description: "",
            location: "",
            hourlyRate: "20.00"
        },
    });

    function onSubmit(data: CourtFormValues) {
        const payload = { ...data, hourlyRate: parseFloat(data.hourlyRate) };
        console.log("Create Court Payload:", payload);
        // FIXME: API call to create court
        router.push("/admin/courts");
    }

    return (
        <div className="space-y-6 max-w-2xl mx-auto pb-10">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/admin/courts">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Add New Court</h1>
                    <p className="text-muted-foreground">Fill in the details to list a new court for booking.</p>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Court Details</CardTitle>
                    <CardDescription>
                        These details will be shown to users when they browse for courts.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Court Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. Premium Badminton Court A" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Location</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. Building C, 2nd Floor" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <textarea
                                                placeholder="Describe the amenities, flooring type, etc."
                                                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Optional details to help users choose.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="hourlyRate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Hourly Rate ($)</FormLabel>
                                        <FormControl>
                                            <Input type="number" step="0.01" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex justify-end gap-4">
                                <Button variant="outline" type="button" onClick={() => router.push("/admin/courts")}>
                                    Cancel
                                </Button>
                                <Button type="submit">Create Court</Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
