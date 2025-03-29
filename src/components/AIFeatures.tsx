
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, GraduationCap, Lightbulb, User } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  icon: React.ElementType;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Predictive analytics and decision support systems",
    excerpt: "Case study of farmers who combined modern technology with traditional knowledge to dramatically improve their harvests.",
    date: "June 15, 2023",
    author: "Dr. Ananya Singh",
    category: "Success Stories",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1470&auto=format&fit=crop",
    icon: Lightbulb
  },
  {
    id: 2,
    title: "Crop Disease and Health Detection",
    excerpt: "How smartphone-based masterclasses are transforming agricultural practices in remote villages across India.",
    date: "July 3, 2023",
    author: "Rajiv Kapoor",
    category: "Digital Learning",
    image: "https://img.freepik.com/premium-photo/smart-farming-digital-technology-agriculture-app_1016675-2304.jpg?uid=R187627718&ga=GA1.1.856026252.1735303750&semt=ais_hybrid",
    icon: GraduationCap
  },
  {
    id: 3,
    title: "Automated Weed Control Systems",
    excerpt: "The inspiring story of how a generational farmer embraced modern techniques through video-based education.",
    date: "August 12, 2023",
    author: "Meera Patel",
    category: "Farmer Stories",
    image: "https://img.freepik.com/premium-photo/autonomous-agriculture-drone-flying-analyze-agricultural-plot_84831-1720.jpg?uid=R187627718&ga=GA1.1.856026252.1735303750&semt=ais_hybrid",
    icon: User
  }
];

const AIFeatures = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-kisan-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-kisan-100 rounded-full opacity-30 blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-kisan-100 rounded-full opacity-40 blur-3xl -ml-40 -mb-40"></div>
      
      <div className="container relative z-10">
        <div className="mb-16 text-center animate-on-scroll">
          <span className="inline-block px-4 py-1.5 bg-kisan-100 text-kisan-700 rounded-full text-sm font-medium mb-4">AI in Agriculture </span>
          <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-kisan-700 to-kisan-900">AI Revolutionizing Agriculture Efficiency</h2>
          <p className="section-subtitle max-w-3xl mx-auto">AI in Pest and Disease Detection – Early identification and prevention for healthier crops.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="group overflow-hidden border-none shadow-lg shadow-kisan-100/20 hover:shadow-xl hover:shadow-kisan-200/30 transition-all duration-500 h-full flex flex-col bg-white backdrop-blur-sm bg-white/80 animate-on-scroll" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-56 overflow-hidden rounded-t-lg relative">
                <div className="absolute inset-0 bg-gradient-to-t from-kisan-900/80 via-kisan-900/40 to-transparent z-10 group-hover:opacity-90 transition-opacity duration-500" />
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
               
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="line-clamp-2 text-xl font-bold group-hover:text-kisan-600 transition-colors duration-300">
                    {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow pt-0">
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>
              
              <CardFooter className="pt-0 pb-6">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-kisan-600 hover:text-kisan-700 hover:bg-kisan-100/50 group/btn pl-0"
                >
                  <span className="relative overflow-hidden">
                    <span className="flex items-center gap-1">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-kisan-500 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></span>
                  </span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default AIFeatures;
