import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Briefcase, Heart } from "lucide-react";
import profileImage from "@/assets/profile.png";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "B.E. in Artificial Intelligence & Machine Learning at Dayananda Sagar University",
  },
  {
    icon: Briefcase,
    title: "Experience",
    description: "IBM Cloud Intern | Kynetic Intern | DSU Cultural Lead",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Bengaluru, Karnataka, India",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Building AI solutions that bridge technology with real-world impact",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Building Tomorrow's AI,{" "}
              <span className="gradient-text">Today</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <img 
                  src={profileImage} 
                  alt="Manish Reddy" 
                  className="w-full aspect-square rounded-full object-cover"
                />
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium"
                >
                  AI/ML Engineer
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium"
                >
                  Cloud Enthusiast
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <strong className="text-foreground">Manish Reddy</strong> — an AI/ML Engineering student 
                and cloud enthusiast who bridges technology with impact. From deploying AI-powered 
                applications on IBM Cloud to leading cultural events for 1000+ attendees, I thrive at 
                the intersection of code and creativity.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing my B.E. at Dayananda Sagar University with a stellar CGPA of 8.66, 
                I've gained hands-on experience through internships at IBM and Kynetic, where I worked 
                on cloud infrastructure, AI solutions, and data-driven projects.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me leading tech communities, mentoring peers, or 
                exploring the latest in AI research. I believe in building technology that makes a 
                difference.
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="p-4 rounded-xl bg-card border border-border"
                  >
                    <item.icon className="h-5 w-5 text-primary mb-2" />
                    <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
