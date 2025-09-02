import Navbar from "./components/Navbar";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto max-w-4xl px-6 py-12 space-y-8">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Welcome!</h1>
          <p className="text-muted-foreground text-lg">
            Hi, I’m Ismail – a Software Engineer with a background in law. I love building
            clean, scalable web applications and exploring the intersection of technology
            and problem solving.
          </p>
        </section>

        <Separator />

        {/* About Me */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <Card>
            <CardHeader>
              <CardTitle>Who I Am</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed space-y-2">
              <p className="pb-2">
                I started my career as a legal advisor, focusing on data privacy and
                compliance, but quickly transitioned into software development where I
                found my true passion.
              </p>
              <p>
                Today, I work on projects involving frontend development, database
                optimization, and backend services in Go. I enjoy tackling performance
                issues, designing modular architectures, and contributing to open-source
                projects.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Skills */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>TypeScript</Badge>
            <Badge>React</Badge>
            <Badge>Go</Badge>
            <Badge>PostgreSQL</Badge>
            <Badge>Python</Badge>
            <Badge>Flask</Badge>
          </div>
        </section>
      </main>
    </div>
  );
}
