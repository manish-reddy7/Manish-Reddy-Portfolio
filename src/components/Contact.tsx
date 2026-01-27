import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, MapPin, Linkedin, Github, MessageSquare, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "manish7777war@gmail.com",
    href: "mailto:manish7777war@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "9632347779",
    href: "tel:9632347779",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, Karnataka, India",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gonu-manish-reddy-21a311299/",
    color: "hover:text-blue-500 hover:border-blue-500/50",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/manish-reddy7",
    color: "hover:text-gray-400 hover:border-gray-400/50",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:manish7777war@gmail.com",
    color: "hover:text-red-500 hover:border-red-500/50",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const { data: response, error } = await supabase.functions.invoke("send-contact-email", {
        body: data,
      });

      if (error) throw error;

      setIsSuccess(true);
      toast({
        title: "Message sent! 🎉",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });

      (e.target as HTMLFormElement).reset();

      // Reset success state after animation
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Oops! Something went wrong",
        description: error.message || "Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
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
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Let's{" "}
              <span className="gradient-text">Connect</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Have a project in mind or just want to chat? I'm always open to discussing new opportunities
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group block"
                    >
                      <motion.div
                        className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <info.icon className="h-5 w-5" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-xl bg-card border border-border transition-all ${social.color}`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <social.icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Fun Fact */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-border"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <MessageSquare className="h-8 w-8 text-primary mb-3" />
                </motion.div>
                <p className="text-lg font-semibold mb-2">Fun Fact</p>
                <p className="text-muted-foreground">
                  I've led events for 1000+ students and believe that great technology
                  starts with great communication. Let's talk! 🚀
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="space-y-2"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label className="text-sm font-medium">First Name</label>
                    <Input
                      name="firstName"
                      placeholder="John"
                      required
                      maxLength={50}
                      className="bg-card transition-all focus:scale-[1.02]"
                    />
                  </motion.div>
                  <motion.div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input
                      name="lastName"
                      placeholder="Doe"
                      required
                      maxLength={50}
                      className="bg-card transition-all focus:scale-[1.02]"
                    />
                  </motion.div>
                </div>

                <motion.div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    maxLength={100}
                    className="bg-card transition-all focus:scale-[1.02]"
                  />
                </motion.div>

                <motion.div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input
                    name="subject"
                    placeholder="What's this about?"
                    required
                    maxLength={150}
                    className="bg-card transition-all focus:scale-[1.02]"
                  />
                </motion.div>

                <motion.div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project or just say hi!"
                    required
                    rows={5}
                    maxLength={1000}
                    className="bg-card resize-none transition-all focus:scale-[1.02]"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2 relative overflow-hidden"
                    disabled={isSubmitting || isSuccess}
                  >
                    {isSuccess ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="h-4 w-4" />
                        Message Sent!
                      </motion.div>
                    ) : isSubmitting ? (
                      <>
                        <motion.div
                          className="h-4 w-4 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
