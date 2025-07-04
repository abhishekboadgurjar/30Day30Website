import {
  Code,
  Database,
  Globe,
  Layers,
  Laptop,
  MonitorSmartphone,
  Server,
  Zap,
} from "lucide-react";
import { FEATURED_TOPICS } from "@/lib/constants";

// Map of icon names to icon components
const iconMap = {
  Code: Code,
  Database: Database,
  Layers: Layers,
  Laptop: Laptop,
  Globe: Globe,
  Server: Server,
  MonitorSmartphone: MonitorSmartphone,
  Zap: Zap,
};

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What You'll Learn
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-[800px]">
            Master modern web development with our comprehensive tutorials and
            hands-on projects. From fundamentals to advanced concepts, we've got
            you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {FEATURED_TOPICS.map((topic, index) => {
            // Dynamically get icon component based on name
            const IconComponent =
              iconMap[topic.icon as keyof typeof iconMap] || Code;

            return (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg border bg-card p-6 transition-all hover:shadow-md"
              >
                <div className="mb-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                <p className="text-muted-foreground">{topic.description}</p>

                {/* Decorative gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>

        <div className="mt-16 md:mt-24">
          <div className="rounded-lg border bg-card/50 p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Why Learn with Coding4Dev?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Zap className="h-3.5 w-3.5 text-blue-500" />
                    </div>
                    <div>
                      <strong className="font-medium">
                        Practical Projects
                      </strong>
                      <p className="text-muted-foreground mt-1">
                        Build real-world applications that you can add to your
                        portfolio.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-purple-500/10 flex items-center justify-center">
                      <Zap className="h-3.5 w-3.5 text-purple-500" />
                    </div>
                    <div>
                      <strong className="font-medium">
                        In-Depth Tutorials
                      </strong>
                      <p className="text-muted-foreground mt-1">
                        Step-by-step guides that break down complex concepts
                        into manageable chunks.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Zap className="h-3.5 w-3.5 text-green-500" />
                    </div>
                    <div>
                      <strong className="font-medium">
                        Modern Technologies
                      </strong>
                      <p className="text-muted-foreground mt-1">
                        Learn the latest frameworks and tools used in the
                        industry.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-orange-500/10 flex items-center justify-center">
                      <Zap className="h-3.5 w-3.5 text-orange-500" />
                    </div>
                    <div>
                      <strong className="font-medium">Growing Community</strong>
                      <p className="text-muted-foreground mt-1">
                        Connect with other developers and get support when you
                        need it.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="relative">
                <div className="aspect-video overflow-hidden rounded-lg border relative">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/iBFkoji7yLM"
                    title="Coding4Dev YouTube Videos"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
