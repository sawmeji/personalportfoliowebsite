import { motion } from "motion/react"
import { Card } from "./ui/card"
import { Coffee as CoffeeIcon, Heart, Users, Award } from "lucide-react"

export function Coffee() {
  const coffeeHighlights = [
    {
      icon: CoffeeIcon,
      title: "Specialty Coffee",
      description: "Passionate about sourcing and brewing the finest beans",
    },
    {
      icon: Heart,
      title: "Customer Experience",
      description: "Creating memorable moments one cup at a time",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Fostering connections through shared love of coffee",
    },
    {
      icon: Award,
      title: "Quality Focus",
      description: "Commitment to excellence in every aspect",
    },
  ]

  const coffeeGallery = [
    { label: "Espresso Shot", color: "from-amber-600 to-amber-800" },
    { label: "Latte Art", color: "from-orange-400 to-amber-600" },
    { label: "Coffee Beans", color: "from-stone-600 to-amber-900" },
    { label: "Brewing Process", color: "from-amber-500 to-orange-700" },
  ]

  return (
    <section id="coffee" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Coffee & Entrepreneurship</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Where technology meets the art of coffee
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
              My journey into coffee began as a passion and evolved into a successful business.
              From 2022 to 2025, I owned and operated a specialty coffee café, where I learned
              the importance of quality, consistency, and customer experience.
            </p>
            <p className="text-lg leading-relaxed">
              Running a café taught me valuable lessons about operations, inventory management,
              and customer service—insights that directly influenced my approach to building
              business software. I understand the challenges business owners face because
              I've lived them.
            </p>
            <p className="text-lg leading-relaxed">
              Whether I'm debugging code or dialing in an espresso shot, I bring the same
              attention to detail and commitment to excellence. Both disciplines require
              precision, patience, and a passion for continuous improvement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {coffeeGallery.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-2xl overflow-hidden"
              >
                <div className={`w-full h-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <span className="text-white font-medium text-center px-4">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coffeeHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow border-border/50">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-accent" />
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
