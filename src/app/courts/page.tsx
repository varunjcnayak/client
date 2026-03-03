import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Filter, SlidersHorizontal } from "lucide-react";

export default function CourtsPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const sportFilter = typeof searchParams.sport === 'string' ? searchParams.sport : null;

    // Mock data - in a real app this would come from the database based on filters
    const courts = [
        { id: 1, name: "Smash Arena Premium", sport: "badminton", location: "Downtown, City Center", price: 25, image: "bg-blue-500/10" },
        { id: 2, name: "City Tennis Club", sport: "tennis", location: "Westside Park", price: 40, image: "bg-green-500/10" },
        { id: 3, name: "Metro Squash Center", sport: "squash", location: "Financial District", price: 30, image: "bg-orange-500/10" },
        { id: 4, name: "Community Badminton Hall", sport: "badminton", location: "North Hills", price: 15, image: "bg-blue-500/10" },
        { id: 5, name: "Elite Tennis Academy", sport: "tennis", location: "South Beach", price: 55, image: "bg-green-500/10" },
        { id: 6, name: "Downtown Squash", sport: "squash", location: "City Center", price: 35, image: "bg-orange-500/10" },
    ];

    const filteredCourts = sportFilter
        ? courts.filter(court => court.sport === sportFilter)
        : courts;

    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            {/* Header */}
            <header className="sticky top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold shadow-lg shadow-primary/20">
                                C
                            </div>
                            <span className="font-bold text-xl tracking-tight">CourtBook</span>
                        </Link>
                    </div>
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                        <Link href="/courts" className="text-primary font-semibold">Browse Courts</Link>
                        <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link href="/login">
                            <Button variant="ghost" className="font-medium">Log in</Button>
                        </Link>
                        <Link href="/signup">
                            <Button className="font-medium shadow-md shadow-primary/20">Sign up</Button>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight mb-2">
                            {sportFilter ? `${sportFilter.charAt(0).toUpperCase() + sportFilter.slice(1)} Courts` : 'All Courts'}
                        </h1>
                        <p className="text-muted-foreground">
                            Showing {filteredCourts.length} available venues
                        </p>
                    </div>

                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <div className="relative flex-1 md:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input placeholder="Search courts..." className="pl-9" />
                        </div>
                        <Button variant="outline" size="icon">
                            <SlidersHorizontal className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Filters Sidebar */}
                    <aside className="hidden md:block space-y-8">
                        <div>
                            <h3 className="font-semibold mb-4 flex items-center gap-2">
                                <Filter className="w-4 h-4" /> Filters
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-medium mb-2">Sport</h4>
                                    <div className="space-y-2">
                                        {['Badminton', 'Tennis', 'Squash'].map(sport => (
                                            <Link
                                                key={sport}
                                                href={`/courts?sport=${sport.toLowerCase()}`}
                                                className={`block text-sm ${sportFilter === sport.toLowerCase() ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                                            >
                                                {sport}
                                            </Link>
                                        ))}
                                        <Link
                                            href="/courts"
                                            className={`block text-sm ${!sportFilter ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                                        >
                                            All Sports
                                        </Link>
                                    </div>
                                </div>

                                <div className="h-px bg-border my-4"></div>

                                <div>
                                    <h4 className="text-sm font-medium mb-2">Price Range</h4>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" className="rounded border-input" /> Under $20/hr
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" className="rounded border-input" /> $20 - $50/hr
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" className="rounded border-input" /> $50+/hr
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Court Grid */}
                    <div className="md:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCourts.map((court) => (
                            <Link href={`/courts/${court.id}`} key={court.id} className="group">
                                <div className="rounded-xl border bg-card overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                    <div className={`aspect-video ${court.image} relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-muted-foreground/5 group-hover:scale-105 transition-transform duration-500"></div>
                                        <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm text-xs font-bold px-2 py-1 rounded shadow-sm">
                                            ${court.price}/hr
                                        </div>
                                        <div className="absolute bottom-3 left-3">
                                            <span className="bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                                                {court.sport}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-5 flex flex-col flex-1">
                                        <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors line-clamp-1">
                                            {court.name}
                                        </h3>
                                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                                            <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                                            <span className="truncate">{court.location}</span>
                                        </div>

                                        <div className="mt-auto pt-4 border-t flex items-center justify-between">
                                            <span className="text-xs font-medium text-muted-foreground">Available Today</span>
                                            <span className="text-sm font-semibold text-primary flex items-center">
                                                Book <ArrowRight className="w-3 h-3 ml-1" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}

                        {filteredCourts.length === 0 && (
                            <div className="col-span-full py-12 text-center text-muted-foreground">
                                <p>No courts found matching your criteria.</p>
                                <Link href="/courts">
                                    <Button variant="link" className="mt-2">Clear filters</Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
