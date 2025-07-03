import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileText, Headphones, Video, BookOpen } from "lucide-react"

const resources = [
  {
    title: "Essential Vocabulary Lists",
    description: "1000+ most common words in 12 languages with pronunciation guides",
    icon: FileText,
    downloadCount: "2.3k",
    fileType: "PDF",
  },
  {
    title: "Grammar Quick Reference",
    description: "Comprehensive grammar guides for beginners to advanced learners",
    icon: BookOpen,
    downloadCount: "1.8k",
    fileType: "PDF",
  },
  {
    title: "Pronunciation Audio Guides",
    description: "Native speaker recordings for proper pronunciation practice",
    icon: Headphones,
    downloadCount: "3.1k",
    fileType: "MP3",
  },
  {
    title: "Conversation Starters",
    description: "100 conversation topics to practice speaking with confidence",
    icon: Video,
    downloadCount: "1.5k",
    fileType: "PDF",
  },
  {
    title: "Cultural Context Guide",
    description: "Understanding cultural nuances in different languages",
    icon: FileText,
    downloadCount: "987",
    fileType: "PDF",
  },
  {
    title: "Language Learning Planner",
    description: "30-day study plan template to track your progress",
    icon: BookOpen,
    downloadCount: "2.7k",
    fileType: "PDF",
  },
]

export function FreeResources() {
  return (
    <section id="resources" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Free Learning Resources</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download our comprehensive collection of language learning materials to kickstart your journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <resource.icon className="h-8 w-8 text-primary" />
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{resource.fileType}</span>
                </div>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{resource.downloadCount} downloads</span>
                  <Button size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want access to premium resources and personalized feedback?</p>
          <Button size="lg" asChild>
            <a href="#packages">View Lesson Packages</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
