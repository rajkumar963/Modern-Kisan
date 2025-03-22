
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Star, Tag } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  category: string;
  image: string;
}

const farmProducts: Product[] = [
  {
    id: 1,
    name: "Mini Tractor 30HP",
    description: "Compact and powerful mini tractor ideal for small to medium farms with versatile attachments.",
    price: 325000,
    rating: 4.8,
    reviews: 124,
    category: "Equipment",
    image: "https://images.unsplash.com/photo-1598508918941-5b42f21afd8e?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Solar Powered Water Pump",
    description: "Energy-efficient solar water pump with no electricity costs, perfect for remote areas.",
    price: 45000,
    rating: 4.6,
    reviews: 89,
    category: "Irrigation",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1558&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Premium Organic Fertilizer (50kg)",
    description: "100% organic fertilizer that improves soil health and increases crop yields naturally.",
    price: 1200,
    rating: 4.9,
    reviews: 215,
    category: "Supplies",
    image: "https://images.unsplash.com/photo-1585537884213-c7cf86961ec2?q=80&w=1374&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Drone Crop Sprayer",
    description: "Automated drone for precise pesticide and fertilizer application with extended coverage.",
    price: 85000,
    rating: 4.7,
    reviews: 56,
    category: "Technology",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1472&auto=format&fit=crop"
  }
];

const Marketplace = () => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    });
  };

  return (
    <section className="section-padding bg-background">
      <div className="container">
        <h2 className="section-title">Farm Equipment Marketplace</h2>
        <p className="section-subtitle">Discover quality farming equipment, tools, and supplies at competitive prices</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {farmProducts.map((product) => (
            <Card key={product.id} className="hover-lift overflow-hidden h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="fill-amber-500 h-4 w-4" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                </div>
                <CardTitle className="text-lg mt-2">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pb-2">
                <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                <div className="mt-4 flex items-center gap-2">
                  <Tag className="h-4 w-4 text-kisan-500" />
                  <span className="text-lg font-bold text-kisan-700">{formatPrice(product.price)}</span>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button className="w-full bg-kisan-500 hover:bg-kisan-600">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Button className="bg-kisan-500 hover:bg-kisan-600">
            View All Products <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
