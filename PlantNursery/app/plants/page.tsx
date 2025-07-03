"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, ArrowLeft, Filter } from "lucide-react"

const plants = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    category: "indoor",
    price: "$45",
    image: "/placeholder.svg?height=300&width=300",
    description: "Beautiful split-leaf plant perfect for bright indoor spaces",
    care: "Medium light, weekly watering",
  },
  {
    id: 2,
    name: "Lavender",
    category: "outdoor",
    price: "$25",
    image: "/placeholder.svg?height=300&width=300",
    description: "Fragrant purple flowers, great for gardens and aromatherapy",
    care: "Full sun, drought tolerant",
  },
  {
    id: 3,
    name: "Basil",
    category: "herbs",
    price: "$12",
    image: "/placeholder.svg?height=300&width=300",
    description: "Fresh culinary herb perfect for cooking",
    care: "Bright light, regular watering",
  },
  {
    id: 4,
    name: "Snake Plant",
    category: "indoor",
    price: "$35",
    image: "/placeholder.svg?height=300&width=300",
    description: "Low-maintenance air purifying plant",
    care: "Low light, infrequent watering",
  },
  {
    id: 5,
    name: "Rose Bush",
    category: "outdoor",
    price: "$55",
    image: "/placeholder.svg?height=300&width=300",
    description: "Classic garden rose with beautiful blooms",
    care: "Full sun, regular watering",
  },
  {
    id: 6,
    name: "Rosemary",
    category: "herbs",
    price: "$15",
    image: "/placeholder.svg?height=300&width=300",
    description: "Aromatic herb perfect for Mediterranean cooking",
    care: "Full sun, well-draining soil",
  },
  {
    id: 7,
    name: "Fiddle Leaf Fig",
    category: "indoor",
    price: "$65",
    image: "/placeholder.svg?height=300&width=300",
    description: "Statement plant with large glossy leaves",
    care: "Bright indirect light, weekly watering",
  },
  {
    id: 8,
    name: "Sunflower",
    category: "outdoor",
    price: "$8",
    image: "/placeholder.svg?height=300&width=300",
    description: "Cheerful yellow flowers that follow the sun",
    care: "Full sun, regular watering",
  },
  {
    id: 9,
    name: "Mint",
    category: "herbs",
    price: "$10",
    image: "/placeholder.svg?height=300&width=300",
    description: "Refreshing herb for teas and cocktails",
    care: "Partial shade, moist soil",
  },
]

export default function PlantsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredPlants =
    selectedCategory === "all" ? plants : plants.filter((plant) => plant.category === selectedCategory)

  const categories = [
    { value: "all", label: "All Plants" },
    { value: "indoor", label: "Indoor Plants" },
    { value: "outdoor", label: "Outdoor Plants" },
    { value: "herbs", label: "Herbs" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-green-600" />
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">GreenThumb Nursery</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Our Plant Collection</h1>
          <p className="text-green-600 text-lg">Find the perfect plants for your space</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.value)}
              className={
                selectedCategory === category.value
                  ? "bg-green-600 hover:bg-green-700"
                  : "border-green-600 text-green-600 hover:bg-green-50"
              }
            >
              <Filter className="h-4 w-4 mr-2" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Plants Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlants.map((plant) => (
            <Card key={plant.id} className="overflow-hidden hover:shadow-lg transition-shadow border-green-200">
              <Image
                src={plant.image || "/placeholder.svg"}
                alt={plant.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-green-800">{plant.name}</h3>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    {plant.category}
                  </Badge>
                </div>
                <p className="text-green-600 mb-3">{plant.description}</p>
                <p className="text-sm text-green-500 mb-4">
                  <strong>Care:</strong> {plant.care}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-800">{plant.price}</span>
                  <Button className="bg-green-600 hover:bg-green-700">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPlants.length === 0 && (
          <div className="text-center py-12">
            <p className="text-green-600 text-lg">No plants found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
