import { Image } from "lucide-react";
import { ImageOff } from "lucide-react";
import { Star } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

function ProjectCard({ title, description, image, tech, isFeatured, link }) {
    return (
        <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface">
            <div
                className={`relative flex h-40 flex-col items-center justify-center gap-2 text-muted ${
                    image ? "bg-line" : "border-b border-dashed border-line-strong bg-chip"
                }`}
            >
                {image ? <Image size={20} /> : <ImageOff size={20} />}
                <p className="font-mono text-xs">
                    {image ? image.split("/").pop() : "placeholder.png (default)"}
                </p>
                {/* covers the placeholder once the screenshot exists, hides itself if the file is missing */}
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="absolute inset-0 size-full object-cover"
                    />
                ) : null}
                {isFeatured ? (
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-featured-bg px-2.5 py-1">
                        <Star size={12} strokeWidth={0} className="fill-featured-icon" />
                        <span className="text-xs font-semibold text-featured-text">Featured</span>
                    </div>
                ) : null}
            </div>
            <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                    {tech.map((t) => {
                        return (
                            <span
                                key={t}
                                className="rounded-md bg-chip px-2 py-1 font-mono text-xs text-ink-soft"
                            >
                                {t}
                            </span>
                        );
                    })}
                </div>
                {link ? (
                    <a
                        href={link}
                        className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-accent hover:text-accent-hover"
                    >
                        Live demo
                        <ArrowUpRight size={14} />
                    </a>
                ) : null}
            </div>
        </article>
    );
}

export default ProjectCard;
