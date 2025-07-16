import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Award, BookOpen, Heart, CheckCircle, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: <CheckCircle size={24} className="text-teal-500" />,
      title: "Practical Excellence",
      description: "We prioritize hands-on, real-world coding experience over theoretical knowledge alone."
    },
    {
      icon: <Users size={24} className="text-teal-500" />,
      title: "Community Learning",
      description: "We believe in the power of community to accelerate learning and inspire creativity."
    },
    {
      icon: <Globe size={24} className="text-teal-500" />,
      title: "Inclusive Education",
      description: "We're committed to making quality coding education accessible to everyone."
    },
    {
      icon: <Heart size={24} className="text-teal-500" />,
      title: "Student Success",
      description: "Our students' success is our success. We're dedicated to supporting your journey."
    },
  ];

  const team = [
    {
      name: "Rahul Sharma",
      role: "Founder & Lead Instructor",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "With over 15 years of industry experience, Rahul founded Sheriyans with a mission to make quality coding education accessible to everyone."
    },
    {
      name: "Priya Patel",
      role: "Head of Curriculum",
      image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Priya brings 10 years of software engineering experience to design our industry-relevant, hands-on curriculum."
    },
    {
      name: "Aditya Kumar",
      role: "Senior Web Development Instructor",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "A full-stack developer specializing in modern JavaScript frameworks with a passion for teaching the next generation of developers."
    },
    {
      name: "Sneha Gupta",
      role: "Career Services Director",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Dedicated to helping students transition into tech careers through resume building, interview prep, and industry connections."
    },
  ];

  return (
    <>
      {/* Header Section */}
      <section className="relative bg-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Sheriyans Coding School</h1>
            <p className="text-lg text-indigo-100">
              Learn about our mission, values, and the team behind Sheriyans Coding School.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white" ref={missionRef}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Sheriyans Coding School was founded in 2015 with a simple mission: to create a coding education experience that focuses on practical skills and real-world applications, not just theory.
                </p>
                <p>
                  What started as a small weekend workshop with just 5 students has grown into a comprehensive coding school with thousands of graduates working at top tech companies worldwide.
                </p>
                <p>
                  Our founder, Rahul Sharma, came from a background in software engineering where he saw firsthand the gap between traditional computer science education and the skills actually needed in the industry. This inspired him to create a new kind of coding school.
                </p>
                <p>
                  Today, Sheriyans is known for its hands-on approach, supportive community, and a curriculum that evolves alongside the fast-changing tech industry. We're proud of our 97% job placement rate and the success stories of our students.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/7369/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Sheriyans classroom" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">Our First Classroom (2015)</h3>
                    <p>Where it all began - our weekend workshops that sparked a coding revolution.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-gray-50" ref={valuesRef}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Our Mission & Values
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              At Sheriyans, we're guided by a clear mission and a set of core values that inform everything we do.
            </motion.p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center">
                  <BookOpen size={40} className="text-indigo-600" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To empower individuals with the coding skills, problem-solving abilities, and technical confidence needed to thrive in the digital economy. We believe everyone should have access to quality tech education that leads to fulfilling careers and opportunities to shape the future.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="mb-4 inline-block p-3 bg-teal-100 rounded-lg">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white" ref={teamRef}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Meet Our Team
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our passionate educators and industry experts are committed to your success.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="h-60 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">{member.name}</h3>
                  <p className="text-indigo-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Coding Community</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Become part of a community that's passionate about coding, learning, and growing together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#" 
              className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Browse Courses
            </a>
            <a 
              href="#" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Meet Our Instructors
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;