import { ArrowUpRight } from "lucide-react";
import { Mail } from "lucide-react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import { profile, skills, projects, socials } from "./data";
import Section from "./components/Section";
import SkillList from "./components/SkillList";
import ProjectList from "./components/ProjectList";

function App() {
    return (
        <>
            <Header />
            <main>
                <Profile profile={profile} />
                <Section id="skills" title="Skills">
                    <SkillList skills={skills} />
                </Section>
                <Section id="projects" title="Projects">
                    <ProjectList projects={projects} />
                </Section>
            </main>

            <footer id="contact" className="mt-12 bg-ink text-white">
                <div className="mx-auto max-w-5xl px-6 py-14">
                    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                        <div>
                            <h2 className="font-display text-3xl font-bold">
                                Let's build something
                            </h2>
                            <a
                                href="mailto:ohmylucifer@gmail.com"
                                className="mt-4 inline-flex items-center gap-2 text-lg font-medium text-accent-light hover:underline"
                            >
                                <Mail size={18} />
                                ohmylucifer@gmail.com
                            </a>
                        </div>
                        <div className="flex gap-3">
                            <a
                                href={socials.github}
                                className="inline-flex items-center gap-1.5 rounded-lg border border-line-dark px-4 py-2 text-sm font-semibold hover:bg-line-dark"
                            >
                                GitHub
                                <ArrowUpRight size={14} />
                            </a>
                            <a
                                href={socials.linkedin}
                                className="inline-flex items-center gap-1.5 rounded-lg border border-line-dark px-4 py-2 text-sm font-semibold hover:bg-line-dark"
                            >
                                LinkedIn
                                <ArrowUpRight size={14} />
                            </a>
                        </div>
                    </div>
                    <p className="mt-10 border-t border-line-dark pt-6 text-sm text-subtle">
                        &copy; 2026 Sothcheat Bunna • Built with React
                    </p>
                </div>
            </footer>
        </>
    );
}

export default App;
