function SkillBadge({ name, level }) {
    return (
        <article className="rounded-xl border border-line bg-surface p-4">
            <h3 className="font-semibold text-ink">{name}</h3>
            <div className="my-2 flex gap-1.5">
                {[1, 2, 3, 4, 5].map((dot) => (
                    <span
                        key={dot}
                        className={`size-2.5 rounded-full ${dot <= level ? "bg-accent" : "bg-line"}`}
                    ></span>
                ))}
            </div>
            <p className="text-xs text-muted">Level {level} / 5</p>
        </article>
    );
}

export default SkillBadge;
