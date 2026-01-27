import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Folder, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Legal RAG Assistant (LexAI)",
    description:
      "Built a RAG assistant for legal document analysis with Streamlit. Upload PDFs, build semantic indexes with Azure OpenAI, and get context-aware answers to legal queries.",
    tech: ["Streamlit", "Python", "Azure OpenAI", "FAISS", "RAG"],
    category: "AI",
    github: "https://github.com/manish-reddy7/legal-rag-assistant",
    demo: "#",
    impact: "Automated legal document analysis",
    gradient: "from-blue-600/20 to-indigo-600/20",
    image: "/legal-rag-assistant.png",
  },
  {
    title: "Maternal Health Risk Prediction App",
    description:
      "Developed an end-to-end ML application predicting maternal health risks using clinical data. Features a Random Forest model, Flask backend, and interactive frontend.",
    tech: ["Python", "Flask", "HTML/JS", "Random Forest", "ML"],
    category: "AI",
    github: "https://github.com/manish-reddy7/maternal_health_risk_prediction_app/tree/main",
    demo: "#",
    impact: "Real-time risk assessment",
    gradient: "from-red-500/20 to-pink-500/20",
    image: "/maternal-health-app.png",
  },
  // {
  //   title: "AI-Powered Cloud Application",
  //   description:
  //     "Developed and deployed an intelligent application on IBM Cloud leveraging generative AI capabilities for automated content generation and analysis.",
  //   tech: ["IBM Cloud", "Python", "Generative AI", "REST API"],
  //   category: "AI",
  //   github: "https://github.com/manish-reddy7/ai-cloud-app",
  //   demo: "#",
  //   impact: "Reduced manual processing time by 60%",
  //   gradient: "from-violet-500/20 to-purple-500/20",
  //   image: "/placeholder.svg",
  // },
  // {
  //   title: "AWS Infrastructure Automation",
  //   description:
  //     "Built scalable cloud infrastructure using AWS services including EC2, S3, Lambda, and CloudFormation for enterprise-grade deployments.",
  //   tech: ["AWS", "CloudFormation", "Lambda", "S3"],
  //   category: "Cloud",
  //   github: "https://github.com/manish-reddy7/aws-infra-automation",
  //   demo: "#",
  //   impact: "Automated deployment pipeline for 10+ services",
  //   gradient: "from-orange-500/20 to-amber-500/20",
  //   image: "/placeholder.svg",
  // },
  // {
  //   title: "Machine Learning Pipeline",
  //   description:
  //     "Designed and implemented end-to-end ML pipeline for predictive analytics, from data preprocessing to model deployment.",
  //   tech: ["Python", "TensorFlow", "Scikit-learn", "Docker"],
  //   category: "AI",
  //   github: "https://github.com/manish-reddy7/ml-pipeline",
  //   demo: "#",
  //   impact: "Achieved 92% prediction accuracy",
  //   gradient: "from-cyan-500/20 to-blue-500/20",
  //   image: "/placeholder.svg",
  // },
  // {
  //   title: "Cultural Event Management System",
  //   description:
  //     "Led the development of a comprehensive event management platform for DSU cultural events, handling registrations for 1000+ attendees.",
  //   tech: ["React", "Node.js", "MongoDB", "AWS"],
  //   category: "Web",
  //   github: "https://github.com/manish-reddy7/event-management-system",
  //   demo: "#",
  //   impact: "Managed 1000+ registrations seamlessly",
  //   gradient: "from-green-500/20 to-emerald-500/20",
  //   image: "/placeholder.svg",
  // },
  // {
  //   title: "Oracle Cloud Analytics Dashboard",
  //   description:
  //     "Created interactive analytics dashboard using Oracle Cloud Infrastructure for real-time data visualization and insights.",
  //   tech: ["Oracle OCI", "SQL", "Python", "Analytics"],
  //   category: "Cloud",
  //   github: "https://github.com/manish-reddy7/oracle-analytics",
  //   demo: "#",
  //   impact: "Provided insights for 50+ metrics",
  //   gradient: "from-red-500/20 to-pink-500/20",
  //   image: "/placeholder.svg",
  // },
  // {
  //   title: "Computer Vision Application",
  //   description:
  //     "Developed image recognition system using deep learning for automated quality inspection in manufacturing processes.",
  //   tech: ["Python", "OpenCV", "TensorFlow", "Flask"],
  //   category: "AI",
  //   github: "https://github.com/manish-reddy7/computer-vision-app",
  //   demo: "#",
  //   impact: "98% accuracy in defect detection",
  //   gradient: "from-indigo-500/20 to-violet-500/20",
  //   image: "/placeholder.svg",
  // },
];

const categories = ["All", "AI", "Cloud", "Web"];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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

  return (
    <section id="projects" className="py-20 md:py-32 overflow-hidden">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4"
            >
              <Sparkles className="h-4 w-4" />
              My Projects
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Featured{" "}
              <span className="gradient-text">Work</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              A collection of projects showcasing my expertise in AI, cloud computing, and web development
            </motion.p>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {categories.map((category) => (
                <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant={activeCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category)}
                    className="relative overflow-hidden"
                  >
                    {activeCategory === category && (
                      <motion.div
                        layoutId="activeCategory"
                        className="absolute inset-0 bg-primary"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{category}</span>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                layout
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Glow effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} blur-xl`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 0.5 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative rounded-2xl bg-card border border-border hover:border-primary/50 transition-all h-full overflow-hidden flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <motion.a
                        href={project.github}
                        className="p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        className="p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className="p-2 rounded-lg bg-primary/10"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <Folder className="h-5 w-5 text-primary" />
                      </motion.div>
                    </div>

                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                      {project.description}
                    </p>

                    {/* Impact Badge */}
                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                        <motion.span
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          📈
                        </motion.span>
                        {project.impact}
                      </span>
                    </motion.div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-2 py-1 rounded-md bg-muted text-xs font-mono cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
