"use client"

import Link from "next/link"
import { ArrowRight, Compass, Map, PlusCircle, Sailboat, Wind } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  // Sample data for demonstration
  const recentTrips = [
    {
      id: 1,
      name: "Greek Islands Adventure",
      destination: "Cyclades, Greece",
      startDate: "2025-06-15",
      endDate: "2025-06-28",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      name: "Caribbean Cruise",
      destination: "British Virgin Islands",
      startDate: "2025-07-10",
      endDate: "2025-07-24",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      name: "Mediterranean Exploration",
      destination: "Amalfi Coast, Italy",
      startDate: "2025-08-05",
      endDate: "2025-08-19",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sailboat className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SailPlanner</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-primary">
              Dashboard
            </Link>
            <Link href="/trips" className="text-sm font-medium">
              My Trips
            </Link>
            <Link href="/maps" className="text-sm font-medium">
              Maps
            </Link>
            <Link href="/weather" className="text-sm font-medium">
              Weather
            </Link>
            <Link href="/resources" className="text-sm font-medium">
              Resources
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Plan Your Perfect Sailing Adventure
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Create detailed itineraries, track weather conditions, and manage all aspects of your sailing trip
                    in one place.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1.5">
                    Create New Trip <PlusCircle className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Explore Features
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Sailing boat on open water"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Everything You Need for Smooth Sailing
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Our comprehensive tools help you plan, organize, and enjoy your sailing trips with confidence.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 mt-8">
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Map className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Route Planning</CardTitle>
                  <CardDescription>
                    Create detailed sailing routes with waypoints, distances, and estimated travel times.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Wind className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Weather Forecasts</CardTitle>
                  <CardDescription>
                    Access real-time weather data and forecasts for your sailing destinations.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Compass className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Itinerary Builder</CardTitle>
                  <CardDescription>
                    Organize your daily activities, marina bookings, and points of interest.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Recent Trips</h2>
                <p className="max-w-[900px] text-muted-foreground">
                  Continue planning or view your recent sailing adventures.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-8">
              {recentTrips.map((trip) => (
                <Card key={trip.id} className="overflow-hidden">
                  <img
                    src={trip.image || "/placeholder.svg"}
                    alt={trip.name}
                    className="aspect-video w-full object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{trip.name}</CardTitle>
                    <CardDescription>{trip.destination}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/trips/${trip.id}`}>
                        View Trip <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/trips">View All Trips</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Sailboat className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold">SailPlanner</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} SailPlanner. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
