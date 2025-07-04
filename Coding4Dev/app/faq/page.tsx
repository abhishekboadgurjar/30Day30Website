import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "FAQ | Coding4Dev",
  description: "Frequently asked questions about our courses, tutorials, and learning resources.",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What makes Coding4Dev different from other platforms?",
      answer: "Coding4Dev focuses on practical, project-based learning with real-world applications. Our tutorials are comprehensive yet easy to follow, and we maintain an active community for support and networking.",
    },
    {
      question: "Are the tutorials suitable for beginners?",
      answer: "Yes! We have content for all skill levels, from complete beginners to advanced developers. Our tutorials are clearly marked with difficulty levels, and we provide learning paths to guide your journey.",
    },
    {
      question: "How often do you release new content?",
      answer: "We release new tutorials weekly on our YouTube channel and update our courses regularly to keep up with the latest technologies and best practices.",
    },
    {
      question: "Do you offer certificates for course completion?",
      answer: "Yes, upon completing our comprehensive courses, you'll receive a certificate of completion that you can share on your portfolio or LinkedIn profile.",
    },
    {
      question: "Can I download the course materials?",
      answer: "Yes, all course materials, including code samples and project files, are available for download. You can access them through our learning platform once enrolled.",
    },
    {
      question: "Do you offer support for students?",
      answer: "Absolutely! We have a dedicated Discord community where you can ask questions, share projects, and get help from both our team and fellow learners.",
    },
    {
      question: "Are the courses self-paced?",
      answer: "Yes, all our courses are self-paced. You can learn at your own speed and revisit the content as many times as you need.",
    },
    {
      question: "What if I get stuck on a project?",
      answer: "We provide multiple support channels: our Discord community, comment sections on tutorials, and direct email support for course enrollees.",
    },
  ];

  return (
    <div className="container px-4 md:px-8 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our platform, courses, and learning resources.
          </p>
        </div>

        <Accordion type="single" collapsible className="mb-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            Can't find the answer you're looking for? Feel free to reach out to our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/discord">Join Discord</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}