"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Info } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock slots data
const TIME_SLOTS = [
    { id: 1, time: "06:00 AM", available: true },
    { id: 2, time: "07:00 AM", available: true },
    { id: 3, time: "08:00 AM", available: false }, // Booked
    { id: 4, time: "09:00 AM", available: true },
    { id: 5, time: "10:00 AM", available: true },
    { id: 6, time: "04:00 PM", available: true },
    { id: 7, time: "05:00 PM", available: true },
    { id: 8, time: "06:00 PM", available: false }, // Booked
    { id: 9, time: "07:00 PM", available: true },
];

export default function CourtDetailsPage({ params }: { params: { id: string } }) {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [selectedSlot, setSelectedSlot] = React.useState<number | null>(null);

    return (
        <div className="container mx-auto py-10 px-4">
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Court Info */}
                <div className="lg:col-span-2 space-y-6">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">Badminton Court 1</h1>
                        <div className="flex items-center text-muted-foreground gap-4">
                            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Downtown Sports Complex</span>
                            <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> $20/hour</span>
                        </div>
                    </div>

                    <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                        Court Image Placeholder
                    </div>

                    <div className="prose max-w-none">
                        <h3>About this court</h3>
                        <p>
                            Professional grade badminton court with wooden flooring and proper lighting.
                            Perfect for both practice and matches. Changing rooms and showers available.
                        </p>
                        <h3>Amenities</h3>
                        <ul className="grid grid-cols-2 gap-2 list-none pl-0">
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full" /> Wooden Flooring</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full" /> LED Lighting</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full" /> Air Conditioned</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full" /> Equipment Rental</li>
                        </ul>
                    </div>
                </div>

                {/* Booking Sidebar */}
                <div className="lg:col-span-1">
                    <Card className="sticky top-6">
                        <CardHeader>
                            <CardTitle>Book a Slot</CardTitle>
                            <CardDescription>Select a date and time to book</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Date Picker */}
                            <div className="border rounded-md p-4 flex justify-center">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    className="rounded-md border shadow-none"
                                    disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                                />
                            </div>

                            {/* Slot Selector */}
                            <div>
                                <h3 className="font-medium mb-3 flex items-center gap-2">
                                    <Clock className="w-4 h-4" /> Available Slots
                                </h3>
                                <div className="grid grid-cols-3 gap-2">
                                    {TIME_SLOTS.map((slot) => (
                                        <Button
                                            key={slot.id}
                                            variant={selectedSlot === slot.id ? "default" : "outline"}
                                            className={cn(
                                                "text-xs",
                                                !slot.available && "opacity-50 cursor-not-allowed bg-muted text-muted-foreground hover:bg-muted"
                                            )}
                                            disabled={!slot.available}
                                            onClick={() => setSelectedSlot(slot.id)}
                                        >
                                            {slot.time}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {/* Summary */}
                            {selectedSlot && (
                                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>Date</span>
                                        <span className="font-medium">{date?.toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Time</span>
                                        <span className="font-medium">
                                            {TIME_SLOTS.find(s => s.id === selectedSlot)?.time}
                                        </span>
                                    </div>
                                    <div className="border-t pt-2 flex justify-between font-bold">
                                        <span>Total</span>
                                        <span>$20.00</span>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" size="lg" disabled={!selectedSlot || !date}>
                                Proceed to Pay
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}
