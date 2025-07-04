import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LATEST_BLOG_POSTS } from "@/lib/constants";
import { BlogPost } from "@/lib/types";

export const metadata = {
  title: "Blog | Coding4Dev",
  description: "Articles and tutorials about web development, programming tips, and tech insights.",
};

export default function BlogPage() {
  const categories = [
    "All",
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "Web Development",
    "Career Tips",
  ];

  const allPosts: BlogPost[] = [
    ...LATEST_BLOG_POSTS,
    {
      title: "Getting Started with TypeScript",
      excerpt: "A beginner's guide to using TypeScript in your JavaScript projects. Learn about types, interfaces, and more.",
      date: "2023-09-05",
      slug: "getting-started-typescript",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "TypeScript",
    },
    {
      title: "CSS Grid vs Flexbox",
      excerpt: "Understanding when to use CSS Grid and when to use Flexbox for modern layouts.",
      date: "2023-10-12",
      slug: "css-grid-vs-flexbox",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "CSS",
    },
    {
      title: "Web Performance Optimization",
      excerpt: "Essential techniques to improve your website's loading speed and performance.",
      date: "2023-11-20",
      slug: "web-performance-optimization",
      image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Performance",
    },
  ];

  return (
    <div className="container px-4 md:px-8 py-12 md:py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-[800px]">
          Insights, tutorials, and tips about web development, programming, and technology.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            className="pl-9"
          />
        </div>
      </div>

      <div className="flex gap-2 flex-wrap mb-8">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={index === 0 ? "default" : "outline"}
            size="sm"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allPosts.map((post, index) => (
          <Card key={index} className="overflow-hidden group">
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardContent className="p-5">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
                {post.category && (
                  <>
                    <span>•</span>
                    <Badge variant="secondary">{post.category}</Badge>
                  </>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
              <Button asChild variant="ghost" size="sm" className="group/btn pl-0">
                <Link href={`/blog/${post.slug}`}>
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button size="lg">
          Load More Articles
        </Button>
      </div>
    </div>
  );
}