import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, ArrowRight, Trophy, Activity, Dumbbell } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold shadow-lg shadow-primary/20">
              C
            </div>
            <span className="font-bold text-xl tracking-tight">CourtBook</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <Link href="/courts" className="hover:text-primary transition-colors">Browse Courts</Link>
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

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Live Availability in Your Area
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 animate-in fade-in slide-in-from-bottom-6 duration-700">
              Book Your Game. <br />
              <span className="text-primary">Own the Court.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              The premium destination for finding and booking badminton, tennis, and squash courts. Instant confirmation, zero hassle.
            </p>

            <div className="max-w-xl mx-auto bg-card/50 backdrop-blur-sm p-2 rounded-full shadow-2xl border flex items-center gap-2 pl-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Find courts nearby..."
                className="border-0 shadow-none focus-visible:ring-0 bg-transparent text-base h-12"
              />
              <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/25">
                Search
              </Button>
            </div>
          </div>
        </section>

        {/* Interactive Sports Selection */}
        <section className="py-20 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Choose Your Sport</h2>
            <p className="text-muted-foreground">Select a category to find the perfect court for your game.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Badminton", icon: Trophy, color: "text-blue-500", bg: "bg-blue-500/10", desc: "Indoor wooden & synthetic courts" },
              { name: "Tennis", icon: Activity, color: "text-green-500", bg: "bg-green-500/10", desc: "Clay, grass, and hard courts" },
              { name: "Squash", icon: Dumbbell, color: "text-orange-500", bg: "bg-orange-500/10", desc: "Professional glass-back courts" }
            ].map((sport) => (
              <Link href={`/courts?sport=${sport.name.toLowerCase()}`} key={sport.name} className="group">
                <div className="relative h-full p-8 rounded-3xl border bg-card hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 ${sport.bg} rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110`}></div>

                  <div className={`w-14 h-14 ${sport.bg} ${sport.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <sport.icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{sport.name}</h3>
                  <p className="text-muted-foreground mb-6">{sport.desc}</p>

                  <div className="flex items-center text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Browse Courts <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Courts */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">Trending Courts</h2>
                <p className="text-muted-foreground">Top-rated venues booked by players this week.</p>
              </div>
              <Link href="/courts">
                <Button variant="outline" className="hidden md:flex">View All Courts</Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group rounded-2xl border bg-card overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    {/* Placeholder Image Effect */}
                    <div className="absolute inset-0 bg-muted-foreground/10 group-hover:scale-105 transition-transform duration-500"></div>

                    <div className="absolute bottom-4 left-4 z-20 text-white">
                      <div className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded mb-2 w-fit">
                        Badminton
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors mb-1">
                          Smash Arena Premium
                        </h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3 mr-1" /> Downtown, City Center
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">$25</div>
                        <div className="text-xs text-muted-foreground">per hour</div>
                      </div>
                    </div>
                    <Button className="w-full font-medium group-hover:bg-primary/90">Book Now</Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link href="/courts">
                <Button variant="outline" className="w-full">View All Courts</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-16 bg-card">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                C
              </div>
              <span className="font-bold text-xl">CourtBook</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Empowering athletes to find their space. The easiest way to book sports courts in your city.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Platform</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/courts" className="hover:text-foreground transition-colors">Browse Courts</Link></li>
              <li><Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link href="/partners" className="hover:text-foreground transition-colors">List Your Court</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} CourtBook. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
