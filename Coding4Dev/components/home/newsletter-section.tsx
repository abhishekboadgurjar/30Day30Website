"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email) {
      setError("Please enter your email");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-8">
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-background to-purple-500/20" />
          
          {/* Content */}
          <div className="relative px-6 py-12 md:p-12 text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-6">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Stay Updated with Coding4Dev
            </h2>
            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto mb-8">
              Get the latest tutorials, articles, and resources delivered straight to your inbox.
              No spam, unsubscribe anytime.
            </p>
            
            {isSuccess ? (
              <div className="bg-green-500/10 text-green-500 p-4 rounded-lg inline-block">
                Thanks for subscribing! Please check your email to confirm.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-10 bg-background"
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="h-10 px-8"
                  >
                    {isSubmitting ? (
                      "Subscribing..."
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
                {error && (
                  <p className="text-sm text-red-500 mt-2">{error}</p>
                )}
              </form>
            )}
            
            <p className="text-xs text-muted-foreground mt-6">
              By subscribing, you agree to our <Link href="/privacy">Privacy Policy</Link> and 
              consent to receive updates from Coding4Dev.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="underline underline-offset-4 hover:text-primary">
      {children}
    </a>
  );
}