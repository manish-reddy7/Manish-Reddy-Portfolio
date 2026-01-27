import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Cloud Platform Intern",
    company: "IBM",
    location: "Remote",
    period: "Jun 2024 – Aug 2024",
    type: "Internship",
    description: [
      "Worked on IBM Cloud infrastructure and services",
      "Developed AI-powered applications using IBM Watson",
      "Implemented cloud-native solutions for enterprise clients",
      "Gained hands-on experience with generative AI technologies",
    ],
    color: "bg-primary",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "Data & Cloud Intern",
    company: "Kynetic",
    location: "Bengaluru, India",
    period: "Jan 2024 – May 2024",
    type: "Internship",
    description: [
      "Analyzed large datasets for business intelligence insights",
      "Built ETL pipelines for data processing and transformation",
      "Collaborated with cross-functional teams on cloud migration",
      "Implemented data visualization dashboards for stakeholders",
    ],
    color: "bg-secondary",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    title: "Cultural Committee Lead",
    company: "Dayananda Sagar University",
    location: "Bengaluru, India",
    period: "Aug 2023 – Present",
    type: "Leadership",
    description: [
      "Led cultural events for 1000+ students across the university",
      "Managed a team of 20+ volunteers for event coordination",
      "Organized tech-cultural fusion events promoting innovation",
      "Improved student engagement by 40% through new initiatives",
    ],
    color: "bg-accent",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    title: "B.E. in Artificial Intelligence & Machine Learning",
    company: "Dayananda Sagar University",
    location: "Bengaluru, India",
    period: "2021 – 2025",
    type: "Education",
    description: [
      "CGPA: 8.66/10 - Consistent academic excellence",
      "Core coursework in ML, Deep Learning, and Cloud Computing",
      "Active member of AI/ML research groups",
      "Participated in multiple hackathons and coding competitions",
    ],
    color: "bg-gradient-to-r from-primary to-secondary",
    gradient: "from-primary/20 via-secondary/20 to-accent/20",
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4"
            >
              Experience & Education
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              My{" "}
              <span className="gradient-text">Journey</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              From classroom to corporate, here's my professional and academic timeline
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <motion.div 
                className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ originY: 0 }}
              />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title + exp.company}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary z-10"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                    whileHover={{ scale: 1.5 }}
                  >
                    {/* Pulse effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary"
                      animate={hoveredIndex === index ? {
                        scale: [1, 2, 2],
                        opacity: [0.5, 0.2, 0],
                      } : {}}
                      transition={{ duration: 1, repeat: hoveredIndex === index ? Infinity : 0 }}
                    />
                  </motion.div>

                  {/* Content Card */}
                  <div
                    className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${
                      index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.03, y: -5 }}
                      className={`relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all overflow-hidden`}
                    >
                      {/* Background gradient on hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0`}
                        animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="relative z-10">
                        {/* Type Badge */}
                        <motion.span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-3 ${exp.color}`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {exp.type}
                        </motion.span>

                        <h3 className="text-lg font-bold mb-1">{exp.title}</h3>
                        <p className="text-primary font-medium mb-2">{exp.company}</p>

                        <div
                          className={`flex flex-wrap gap-3 text-sm text-muted-foreground mb-4 ${
                            index % 2 === 0 ? "md:justify-end" : ""
                          }`}
                        >
                          <motion.span 
                            className="flex items-center gap-1"
                            whileHover={{ x: 3 }}
                          >
                            <Calendar className="h-3 w-3" />
                            {exp.period}
                          </motion.span>
                          <motion.span 
                            className="flex items-center gap-1"
                            whileHover={{ x: 3 }}
                          >
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </motion.span>
                        </div>

                        <ul
                          className={`space-y-2 text-sm text-muted-foreground ${
                            index % 2 === 0 ? "md:text-right" : ""
                          }`}
                        >
                          {exp.description.map((item, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-start gap-2"
                              initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: index * 0.2 + i * 0.1 }}
                            >
                              <motion.span
                                className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 ${
                                  index % 2 === 0 ? "md:order-2" : ""
                                }`}
                                animate={hoveredIndex === index ? { scale: [1, 1.5, 1] } : {}}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                              />
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
