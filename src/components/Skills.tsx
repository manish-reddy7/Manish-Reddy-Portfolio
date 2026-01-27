import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Brain, Code, Users, Database, Terminal, Palette, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    color: "from-primary to-primary/50",
    bgColor: "bg-primary/10",
    textColor: "text-primary",
    skills: ["AWS", "IBM Cloud", "Oracle OCI", "Generative AI", "Cloud Functions", "S3"],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "from-secondary to-secondary/50",
    bgColor: "bg-secondary/10",
    textColor: "text-secondary",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "TensorFlow", "PyTorch"],
  },
  {
    title: "Development",
    icon: Code,
    color: "from-accent to-accent/50",
    bgColor: "bg-accent/10",
    textColor: "text-accent-foreground",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "React", "SQL"],
  },
  {
    title: "Data & Databases",
    icon: Database,
    color: "from-emerald-500 to-emerald-500/50",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-600 dark:text-emerald-400",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Data Analysis", "Pandas"],
  },
  {
    title: "DevOps & Tools",
    icon: Terminal,
    color: "from-orange-500 to-orange-500/50",
    bgColor: "bg-orange-500/10",
    textColor: "text-orange-600 dark:text-orange-400",
    skills: ["Git", "Docker", "Linux", "REST APIs", "CI/CD", "Kubernetes"],
  },
  {
    title: "Leadership",
    icon: Users,
    color: "from-pink-500 to-pink-500/50",
    bgColor: "bg-pink-500/10",
    textColor: "text-pink-600 dark:text-pink-400",
    skills: ["Team Management", "Event Coordination", "Public Speaking", "Mentoring", "Agile", "JIRA"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      }
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
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
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              Skills & Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Technologies I{" "}
              <span className="gradient-text">Work With</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              From cloud infrastructure to AI models, here's my technical toolkit
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <motion.div 
                    className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color}`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <category.icon className="h-5 w-5 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                {/* Skills Grid */}
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      variants={skillVariants}
                      transition={{ delay: categoryIndex * 0.05 + skillIndex * 0.03 }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -2,
                      }}
                      className={`px-3 py-1.5 rounded-lg ${category.bgColor} ${category.textColor} text-sm font-medium cursor-default transition-all duration-200 hover:shadow-md`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Decorative Element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                Always learning and exploring new technologies
              </span>
              <Palette className="h-4 w-4 text-secondary" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
