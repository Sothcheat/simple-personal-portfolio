function Section({ id, title, children }) {
    return (
        <section id={id} className="mx-auto max-w-5xl scroll-mt-16 px-6 py-12">
            <h2 className="mb-6 font-display text-3xl font-bold text-ink">{title}</h2>
            {children}
        </section>
    );
}

export default Section;
