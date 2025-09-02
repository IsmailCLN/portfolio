import Navbar from "../components/Navbar";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
    return (
        <div>
            <Navbar />
            <main className="container mx-auto max-w-3xl px-6 py-12 space-y-8">
                {/* Header */}
                <section className="text-center space-y-2">
                    <h1 className="text-4xl font-bold">Contact Me</h1>
                    <p className="text-muted-foreground">
                        Feel free to reach out for collaborations, questions, or just to say hi.
                    </p>
                </section>

                <Separator />

                {/* Contact Information */}
                <section className="space-y-4">
                    <Card>
                        <CardContent className="space-y-2 text-sm">
                            <h2 className="text-2xl font-semibold">Contact Info</h2>
                            <p>
                                <strong>Email:</strong>{" "}
                                <a
                                    href="mailto:ismailcelen95@gmail.com"
                                    className="underline text-black hover:text-gray-800"
                                >
                                    ismailcelen95@gmail.com
                                </a>
                            </p>
                            <p>
                                <strong>LinkedIn:</strong>{" "}
                                <a
                                    href="https://www.linkedin.com/in/ismailcln/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="underline text-black hover:text-gray-800"
                                >
                                    linkedin.com/in/ismailcln
                                </a>
                            </p>
                            <p>
                                <strong>GitHub:</strong>{" "}
                                <a
                                    href="https://github.com/IsmailCLN"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="underline text-black hover:text-gray-800"
                                >
                                    github.com/IsmailCLN
                                </a>
                            </p>
                        </CardContent>
                    </Card>
                </section>

                <Separator />

                {/* Contact Form */}
                <section className="space-y-4">
                    <Card>
                        <CardContent className="space-y-4">
                            <h2 className="text-2xl font-semibold">Send a Message</h2>

                            {/* 🔹 Formspree form */}
                            <form
                                action={import.meta.env.VITE_FORMSPREE_ENDPOINT}
                                method="POST"
                                className="space-y-4"
                            >
                                <Input name="name" placeholder="Your Name" required />
                                <Input type="email" name="email" placeholder="Your Email" required />
                                <Textarea name="message" placeholder="Your Message..." required />
                                <div className="flex justify-end">
                                    <Button type="submit">Send</Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </section>
            </main>
        </div>
    );
}
