import { MapPin } from "lucide-react";
import { UserRound } from "lucide-react";

function Profile({ profile }) {
    return (
        <section className="border-b border-line">
            <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-16 md:flex-row md:items-center md:justify-between md:py-24">
                <div>
                    <h1 className="font-display text-5xl font-bold tracking-tight text-ink">
                        {profile.name}
                    </h1>
                    <p className="mt-3 text-xl font-medium text-ink-soft">{profile.role}</p>
                    <p className="mt-5 max-w-[55ch] text-lg leading-relaxed text-body">
                        {profile.bio}
                    </p>
                    <a
                        href="https://maps.app.goo.gl/Ryu5rASkLA4cEp9K9"
                        className="mt-5 inline-flex items-center gap-2 text-sm text-muted hover:text-body"
                    >
                        <MapPin size={14} />
                        {profile.location}
                    </a>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#projects"
                            className="rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-ink/90"
                        >
                            View projects
                        </a>
                        <a
                            href="#contact"
                            className="rounded-lg border border-line-strong bg-surface px-5 py-2.5 text-sm font-semibold text-ink hover:bg-chip"
                        >
                            Contact me
                        </a>
                    </div>
                </div>
                <div className="relative flex aspect-4/5 w-full max-w-xs shrink-0 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-dashed border-line-strong bg-surface">
                    <UserRound size={40} strokeWidth={1.5} className="text-muted" />
                    <p className="text-sm text-muted">Your photo here</p>
                    <code className="font-mono text-xs text-muted">{profile.avatar}</code>
                    {/* covers the placeholder once the photo exists, hides itself if the file is missing */}
                    <img
                        src={profile.avatar}
                        alt={`Profile picture of ${profile.name}`}
                        className="absolute inset-0 size-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default Profile;
