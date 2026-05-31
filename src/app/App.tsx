import { ThemeProvider } from "./components/theme-provider"
import { Navigation } from "./components/navigation"
import { Hero } from "./components/hero"
import { About } from "./components/about"
import { Skills } from "./components/skills"
import { Experience } from "./components/experience"
import { Projects } from "./components/projects"
import { Coffee } from "./components/coffee"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"
import { ScrollToTop } from "./components/scroll-to-top"
import { Toaster } from "./components/ui/sonner"

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="overflow-x-hidden">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Coffee />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
        <Toaster />
      </div>
    </ThemeProvider>
  )
}