import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, MapPin, Calendar, Settings, LogOut } from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex bg-muted/30">
            {/* Sidebar */}
            <aside className="w-64 bg-card border-r hidden md:flex flex-col">
                <div className="h-16 flex items-center px-6 border-b">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold mr-2">
                        A
                    </div>
                    <span className="font-bold text-lg">Admin Panel</span>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <Link href="/admin">
                        <Button variant="ghost" className="w-full justify-start gap-2">
                            <LayoutDashboard className="w-4 h-4" />
                            Dashboard
                        </Button>
                    </Link>
                    <Link href="/admin/courts">
                        <Button variant="ghost" className="w-full justify-start gap-2">
                            <MapPin className="w-4 h-4" />
                            Courts
                        </Button>
                    </Link>
                    <Link href="/admin/bookings">
                        <Button variant="ghost" className="w-full justify-start gap-2">
                            <Calendar className="w-4 h-4" />
                            Bookings
                        </Button>
                    </Link>
                    <Link href="/admin/settings">
                        <Button variant="ghost" className="w-full justify-start gap-2">
                            <Settings className="w-4 h-4" />
                            Settings
                        </Button>
                    </Link>
                </nav>

                <div className="p-4 border-t">
                    <Button variant="ghost" className="w-full justify-start gap-2 text-destructive hover:text-destructive hover:bg-destructive/10">
                        <LogOut className="w-4 h-4" />
                        Logout
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col">
                <header className="h-16 border-b bg-card flex items-center justify-between px-6 md:hidden">
                    <span className="font-bold">Admin Panel</span>
                    {/* Mobile menu trigger would go here */}
                </header>
                <div className="flex-1 p-6 overflow-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
