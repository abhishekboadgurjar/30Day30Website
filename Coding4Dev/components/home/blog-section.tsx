import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LATEST_BLOG_POSTS } from "@/lib/constants";

export function BlogSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-muted-foreground max-w-[600px]">
              Dive deeper into web development concepts with our in-depth articles and tutorials.
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0 group">
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {LATEST_BLOG_POSTS.map((post, index) => (
            <Card key={index} className="overflow-hidden group transition-all hover:shadow-md">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-5">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <CalendarDays className="mr-1 h-3.5 w-3.5" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                </div>
                <h3 className="font-semibold text-xl mb-2 line-clamp-2">{post.title}</h3>
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
      </div>
    </section>
  );
}