import { motion } from "motion/react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Github, ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Gym Tracker System",
      description: "Comprehensive fitness tracking application with member management, workout logging, and progress analytics.",
      image: "Gym Management Dashboard",
      technologies: ["Spring Boot", "REST API", "MySQL", "Authentication"],
      github: "#",
      demo: "#",
    },
    {
      title: "Restaurant POS System",
      description: "Full-featured point-of-sale system with inventory management, order processing, and real-time reporting.",
      image: "POS Interface",
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "Pharmacy Management System",
      description: "Healthcare management solution with patient records, prescription tracking, and inventory control.",
      image: "Pharmacy Dashboard",
      technologies: ["Spring Boot", "Angular", "MySQL", "REST API"],
      github: "#",
      demo: "#",
    },
    {
      title: "Education Management System",
      description: "Student information system with enrollment, attendance, grading, and parent communication features.",
      image: "Education Platform",
      technologies: ["Java", "React", "Spring Boot", "Notifications"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Enterprise solutions built with modern technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 group">
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                    <span className="text-muted-foreground">{project.image}</span>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-2">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="flex-1">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
