import React from "react";
import { Check, Award, Users, Clock } from "lucide-react";
import AnimatedText from "../ui/AnimatedText";
import { useInView } from "../hooks/useInView";

const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Projects Completed", value: "200+" },
  { label: "Client Satisfaction", value: "98%" },
  { label: "Team Members", value: "25+" },
];

const AboutSection = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <AnimatedText
              text="We Build Digital Experiences That People Love"
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
            />
            <p className="text-slate-600 mb-6">
              Digital Technologies is a premier web development agency dedicated
              to creating exceptional digital experiences. With a team of
              talented designers, developers, and strategists, we deliver
              innovative solutions that help businesses thrive in the digital
              landscape.
            </p>
            <p className="text-slate-600 mb-8">
              Founded in 2025, we've helped businesses of all sizes establish
              powerful online presences. Our approach combines cutting-edge
              technology with strategic thinking to create websites that not
              only look great but also drive tangible business results.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "User-centered design approach",
                "Custom solutions tailored to your business needs",
                "Optimized for performance and SEO",
                "Ongoing support and maintenance",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.5s ease, transform 0.5s ease`,
                    transitionDelay: `${0.5 + index * 0.1}s`,
                  }}
                >
                  <Check
                    className="text-green-500 mr-3 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.5s ease",
                transitionDelay: "0.9s",
              }}
            >
              Start a Project
            </a>
          </div>

          <div
            className={`relative transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            {/* Main image */}
            <div className="rounded-xl overflow-hidden shadow-xl border-8 border-white relative z-20">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Digital Technologies Team"
                className="w-full h-auto"
              />
            </div>

            {/* Floating stats cards */}
            <div
              className="absolute top-20 -left-10 bg-white p-4 rounded-lg shadow-lg z-30 max-w-[160px] transition-all duration-700 transform"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: "0.6s",
              }}
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <Award className="text-purple-600" size={16} />
                </div>
                <span className="text-sm font-medium text-slate-700">
                  Award Winning
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Recognized for excellence in web development
              </p>
            </div>

            <div
              className="absolute bottom-20 -right-10 bg-white p-4 rounded-lg shadow-lg z-30 max-w-[160px] transition-all duration-700 transform"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: "0.8s",
              }}
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center mr-3">
                  <Users className="text-sky-600" size={16} />
                </div>
                <span className="text-sm font-medium text-slate-700">
                  Client Focused
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Your success is our top priority
              </p>
            </div>

            {/* Stats grid */}
            <div
              className="grid grid-cols-2 gap-4 mt-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.5s ease",
                transitionDelay: "1s",
              }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                  style={{
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transition: "transform 0.5s ease",
                    transitionDelay: `${1 + index * 0.1}s`,
                  }}
                >
                  <div className="text-2xl font-bold text-slate-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
