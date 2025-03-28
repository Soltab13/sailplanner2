"use client"

import Link from "next/link"
import { PlusCircle, Sailboat } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function TripsPage() {
  // Sample data for demonstration
  const trips = [
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
            <Link href="/" className="flex items-center gap-2">
              <Sailboat className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">SailPlanner</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium">
              Dashboard
            </Link>
            <Link href="/trips" className="text-sm font-medium text-primary">
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
      <main className="flex-1 py-6 md:py-10">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">My Trips</h1>
              <p className="text-muted-foreground">Manage and plan your sailing adventures.</p>
            </div>
            <Button asChild>
              <Link href="/trips/create">
                <PlusCircle className="mr-2 h-4 w-4" />
                Create New Trip
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trips.map((trip) => (
              <Card key={trip.id} className="overflow-hidden">
                <img
                  src={trip.image}
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
                      View Trip
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
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