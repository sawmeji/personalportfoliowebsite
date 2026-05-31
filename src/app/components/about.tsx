import { motion } from "motion/react"
import { Card } from "./ui/card"
import { Code, Coffee, Briefcase, Award } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Software Engineering",
      description: "3+ years building enterprise applications",
    },
    {
      icon: Briefcase,
      title: "Business Systems",
      description: "POS, inventory, and management solutions",
    },
    {
      icon: Coffee,
      title: "Coffee Entrepreneur",
      description: "Café owner and specialty coffee expert",
    },
    {
      icon: Award,
      title: "Full Stack",
      description: "Java, Spring Boot, React, and Angular",
    },
  ]

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate technologist who bridges the digital and physical worlds
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed">
              With over 3 years of experience as a Java Developer, I've specialized in building
              robust POS systems, inventory management solutions, and business applications that
              drive operational efficiency.
            </p>
            <p className="text-lg leading-relaxed">
              My journey in technology is complemented by my passion for coffee entrepreneurship.
              Running a café has taught me valuable lessons about user experience, customer service,
              and the importance of attention to detail—principles I bring to every line of code I write.
            </p>
            <p className="text-lg leading-relaxed">
              I believe in creating technology that solves real problems while maintaining
              elegance and simplicity. Whether it's crafting a Spring Boot API or pulling
              the perfect espresso shot, excellence is in the details.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-muted border border-border">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-muted-foreground">Career Journey Timeline</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow border-border/50">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
