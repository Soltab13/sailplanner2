"use client"

import Link from "next/link"
import { ArrowLeft, CalendarIcon, Sailboat } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"

export default function CreateTripPage() {
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
      <main className="flex-1 py-6 md:py-10">
        <div className="container px-4 md:px-6">
          <div className="mb-6 flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/trips">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Trips
              </Link>
            </Button>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Create New Trip</h1>
            <p className="text-muted-foreground">Plan your next sailing adventure with all the details.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Trip Details</CardTitle>
                  <CardDescription>Basic information about your sailing trip.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="trip-name">Trip Name</Label>
                    <Input id="trip-name" placeholder="e.g., Greek Islands Adventure" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="destination">Destination</Label>
                    <Input id="destination" placeholder="e.g., Cyclades, Greece" />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Start Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <span>Pick a date</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label>End Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <span>Pick a date</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Trip Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your sailing trip, goals, and highlights..."
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Vessel Information</CardTitle>
                  <CardDescription>Details about the boat you'll be sailing.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="vessel-name">Vessel Name</Label>
                    <Input id="vessel-name" placeholder="e.g., Sea Breeze" />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="vessel-type">Vessel Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sailboat">Sailboat</SelectItem>
                          <SelectItem value="catamaran">Catamaran</SelectItem>
                          <SelectItem value="yacht">Motor Yacht</SelectItem>
                          <SelectItem value="gulet">Gulet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vessel-length">Length (ft)</Label>
                      <Input id="vessel-length" type="number" placeholder="e.g., 42" />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="cabins">Cabins</Label>
                      <Input id="cabins" type="number" placeholder="e.g., 3" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="capacity">Capacity</Label>
                      <Input id="capacity" type="number" placeholder="e.g., 6" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="charter-company">Charter Company (optional)</Label>
                    <Input id="charter-company" placeholder="e.g., Mediterranean Charters" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Route Planning</CardTitle>
                  <CardDescription>Plan your sailing route and stops.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Starting Point</Label>
                    <Input placeholder="e.g., Athens (Alimos Marina)" />
                  </div>
                  <div className="space-y-2">
                    <Label>Ending Point</Label>
                    <Input placeholder="e.g., Athens (Alimos Marina)" />
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Planned Stops</Label>
                      <Button variant="outline" size="sm">
                        Add Stop
                      </Button>
                    </div>
                    <div className="rounded-md border">
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground">
                          No stops added yet. Click "Add Stop" to begin planning your route.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Crew Members</CardTitle>
                  <CardDescription>Add people joining you on this sailing trip.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Crew List</Label>
                      <Button variant="outline" size="sm">
                        Add Crew
                      </Button>
                    </div>
                    <div className="rounded-md border">
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground">
                          No crew members added yet. Click "Add Crew" to add people to your trip.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Additional Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="weather-alerts" className="h-4 w-4 rounded border-gray-300" />
                    <Label htmlFor="weather-alerts">Enable weather alerts</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="share-trip" className="h-4 w-4 rounded border-gray-300" />
                    <Label htmlFor="share-trip">Share trip with crew members</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="public-trip" className="h-4 w-4 rounded border-gray-300" />
                    <Label htmlFor="public-trip">Make trip public</Label>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end gap-4">
                <Button variant="outline">Save as Draft</Button>
                <Button>Create Trip</Button>
              </div>
            </div>
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