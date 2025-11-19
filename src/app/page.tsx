import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
              C
            </div>
            <span className="font-bold text-xl">CourtBook</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/courts" className="hover:text-primary">Browse Courts</Link>
            <Link href="/about" className="hover:text-primary">About</Link>
            <Link href="/contact" className="hover:text-primary">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Book Your Perfect Court <br className="hidden md:block" />
              <span className="text-primary">In Seconds</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Find and book badminton, tennis, and squash courts near you.
              Real-time availability, instant confirmation, and seamless payments.
            </p>

            <div className="max-w-md mx-auto bg-card p-2 rounded-full shadow-lg border flex items-center gap-2 pl-6">
              <Search className="w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by location or court name..."
                className="border-0 shadow-none focus-visible:ring-0 bg-transparent"
              />
              <Button className="rounded-full px-8">Search</Button>
            </div>
          </div>
        </section>

        {/* Featured Courts (Placeholder) */}
        <section className="py-20 container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold">Featured Courts</h2>
            <Link href="/courts">
              <Button variant="outline">View All</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group rounded-xl border bg-card overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-video bg-muted relative">
                  {/* Placeholder Image */}
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    Court Image {i}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        Smash Arena {i}
                      </h3>
                      <p className="text-sm text-muted-foreground">Downtown, City Center</p>
                    </div>
                    <div className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">
                      $20/hr
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button className="w-full">Book Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-primary-foreground font-bold text-xs">
                C
              </div>
              <span className="font-bold">CourtBook</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The easiest way to find and book sports courts in your area.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/courts">Browse Courts</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/partners">For Court Owners</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
