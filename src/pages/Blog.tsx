import Navbar from "../components/Navbar";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const posts = import.meta.glob("@/posts/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
});

export default function Blog() {
    return (
        <div>
            <Navbar />
            <main className="container mx-auto max-w-4xl px-6 py-12 space-y-8">
                <section className="space-y-2 text-center">
                    <h1 className="text-4xl font-bold">Blog</h1>
                    <p className="text-muted-foreground">
                        Thoughts, notes, and projects I’ve been working on.
                    </p>
                </section>

                <Separator />

                <section className="space-y-6">
                    {Object.entries(posts).map(([path, content]) => {
                        const id = path.split("/").pop()?.replace(".md", "") || path;

                        return (
                            <Card key={id}>
                                <CardContent className="prose max-w-none">
                                    <MarkdownRenderer content={content as string} />
                                </CardContent>
                            </Card>
                        );
                    })}
                </section>
            </main>
        </div>
    );
}
