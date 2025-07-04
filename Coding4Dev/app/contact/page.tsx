import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Contact | Coding4Dev",
  description: "Get in touch with us for any questions about our courses, tutorials, or collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-8 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
            Have questions about our courses? Want to collaborate? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">contact@coding4dev.com</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">San Francisco, CA</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help?" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={6}
                />
              </div>

              <Button size="lg" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="rounded-lg border bg-card/50 p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="text-muted-foreground mb-6">
            Connect with fellow developers and stay updated with our latest content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">Discord Community</Button>
            <Button variant="outline">YouTube Channel</Button>
          </div>
        </div>
      </div>
    </div>
  );
}