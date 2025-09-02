import Navbar from "../components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function AboutMe() {
    return (
        <div>
            <Navbar />
            <main className="container mx-auto px-6 py-12 max-w-4xl space-y-8">
                {/* Header */}
                <section className="text-center space-y-2">
                    <h1 className="text-4xl font-bold">About Me</h1>
                    <p className="text-muted-foreground">
                        Software Engineer & Legal Advisor with a background in law and computer programming.
                    </p>
                </section>

                <Separator />

                {/* Experience */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Experience</h2>

                    <Card>
                        <CardHeader>
                            <CardTitle>Software Engineer – Hayadasoft</CardTitle>
                            <p className="text-sm text-muted-foreground">Dec 2023 – Present | Izmir, Turkiye</p>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm">
                            <p>
                                Developed and maintained web interfaces using HTML, CSS, JS, and Bootstrap with clean structure and reusable components.
                            </p>
                            <p>
                                Designed optimized SQL queries across MSSQL and PostgreSQL. Enhanced UI/UX responsiveness with mobile-first principles.
                            </p>
                            <p>
                                Implemented WebSocket-based real-time messaging with backend integrations (Delphi, C++).
                            </p>
                            <p>
                                Built a modular user management and authorization system in Go with REST APIs and dynamic UI rendering.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Legal Advisor – BA Legal Software</CardTitle>
                            <p className="text-sm text-muted-foreground">Jan 2022 – Aug 2023 | Izmir, Turkiye</p>
                        </CardHeader>
                        <CardContent className="text-sm">
                            Provided legal guidance on KVKK, GDPR, and labor law compliance, drafting policies and aligning workflows.
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Legal Advisor – Onar Law Firm</CardTitle>
                            <p className="text-sm text-muted-foreground">Dec 2020 – Dec 2021 | Izmir, Turkiye</p>
                        </CardHeader>
                        <CardContent className="text-sm">
                            Advised clients on data privacy and ISO 27001 compliance.
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Legal Intern – VERBSIS Legal Compliance</CardTitle>
                            <p className="text-sm text-muted-foreground">Jan 2019 – Aug 2023 | Izmir, Turkiye</p>
                        </CardHeader>
                        <CardContent className="text-sm">
                            Assisted in legal research, contract review, and compliance related to data protection and public law.
                        </CardContent>
                    </Card>
                </section>

                <Separator />

                {/* Education */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Education</h2>

                    <Card>
                        <CardHeader>
                            <CardTitle>Computer Programming – Anadolu University</CardTitle>
                            <p className="text-sm text-muted-foreground">2022 – 2024 | Eskisehir, Turkiye</p>
                        </CardHeader>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Faculty of Law – Anadolu University</CardTitle>
                            <p className="text-sm text-muted-foreground">2014 – 2019 | Eskisehir, Turkiye</p>
                        </CardHeader>
                    </Card>
                </section>

                <Separator />

                {/* Skills */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        <Badge>JavaScript</Badge>
                        <Badge>TypeScript</Badge>
                        <Badge>Go</Badge>
                        <Badge>Python</Badge>
                        <Badge>Flask</Badge>
                        <Badge>MSSQL</Badge>
                        <Badge>PostgreSQL</Badge>
                        <Badge>MySQL</Badge>
                        <Badge>SQLite</Badge>
                        <Badge>HTML</Badge>
                        <Badge>CSS</Badge>
                        <Badge>Bootstrap</Badge>
                    </div>
                </section>

                <Separator />

                {/* Projects */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Projects</h2>
                    <Card>
                        <CardHeader>
                            <CardTitle>Tapir – Go-based API Test Runner (Open Source)</CardTitle>
                            <p className="text-sm text-muted-foreground">
                                GitHub: <a className="underline" href="https://github.com/IsmailCLN/tapir" target="_blank" rel="noreferrer">
                                    github.com/IsmailCLN/tapir
                                </a>
                            </p>
                        </CardHeader>
                        <CardContent className="text-sm space-y-2">
                            <p>Provides a fast, script-less way to define and execute REST API checks in YAML.</p>
                            <p>
                                Includes assertion registry, TUI (Bubble Tea/Lipgloss), Markdown export, and token injection across steps.
                            </p>
                            <p>
                                Helps reduce manual Postman/cURL steps into declarative specs with immediate feedback.
                            </p>
                        </CardContent>
                    </Card>
                </section>
            </main>
        </div>
    );
}
