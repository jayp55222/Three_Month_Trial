import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const blogPosts = [
  {
    image: "https://placehold.co/600x400/1e293b/a5f3fc?text=Blog+Image",
    category: "ELECTRONIC",
    date: "MAR 10, 2025",
    title: "What is Next Generation Audio for your Home",
  },
  {
    image: "https://placehold.co/600x400/0f172a/94a3b8?text=Blog+Image",
    category: "ELECTRONIC",
    date: "MAR 8, 2025",
    title: "Why is He Laughing? VR is Very Popular",
  },
  {
    image: "https://placehold.co/600x400/334155/e2e8f0?text=Blog+Image",
    category: "ELECTRONIC",
    date: "MAR 6, 2025",
    title: "Electronic is Awesome. How can we use this for life?",
  },
];

const Section9 = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-center text-4xl font-semibold text-gray-800 mb-12">Our Blog</h1>

        <div className="flex flex-wrap -mx-4">
          {blogPosts.map((post, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center text-sm font-medium text-gray-500 mb-2">
                    <span className="text-blue-500 mr-2 uppercase">{post.category}</span>
                    <span>/</span>
                    <span className="ml-2">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section9;
