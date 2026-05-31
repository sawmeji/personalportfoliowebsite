import { motion } from "motion/react"
import { Card } from "./ui/card"
import { Briefcase, Code, Coffee as CoffeeIcon } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      icon: Code,
      title: "Java Developer",
      period: "2021 - 2024",
      description: "Developed comprehensive POS and inventory management systems",
      achievements: [
        "Built enterprise-grade POS systems serving multiple business verticals",
        "Integrated third-party APIs for payment processing and data synchronization",
        "Architected REST APIs using Spring Boot and MySQL",
        "Optimized database queries improving system performance by 40%",
      ],
    },
    {
      icon: Briefcase,
      title: "UI Developer",
      period: "2023",
      description: "Created responsive and intuitive user interfaces",
      achievements: [
        "Developed modern web interfaces using React and Material UI",
        "Implemented responsive designs for desktop, tablet, and mobile",
        "Collaborated with design teams to translate Figma mockups into code",
        "Improved application load times through code optimization",
      ],
    },
    {
      icon: CoffeeIcon,
      title: "Coffee Business Owner",
      period: "2022 - 2025",
      description: "Managed café operations and customer experience",
      achievements: [
        "Successfully launched and operated a specialty coffee business",
        "Managed daily operations, inventory, and customer service",
        "Developed business processes and operational workflows",
        "Built strong customer relationships and community presence",
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A journey through technology and entrepreneurship
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "" : "md:grid-flow-dense"
                }`}
              >
                <div className={index % 2 === 0 ? "md:text-right" : "md:col-start-2"}>
                  <Card className="p-6 hover:shadow-lg transition-shadow border-border/50">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <exp.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>

                <div className="absolute left-8 md:left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
