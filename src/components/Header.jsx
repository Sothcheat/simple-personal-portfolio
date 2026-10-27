function Header() {
    return (
        <header className="sticky top-0 z-10 border-b border-line bg-surface/90 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
                <a href="#" className="font-display text-lg font-bold text-ink">
                    Sothcheat Bunna
                </a>
                <nav className="flex gap-6 text-sm font-medium text-body">
                    <a href="#skills" className="hover:text-ink">
                        Skills
                    </a>
                    <a href="#projects" className="hover:text-ink">
                        Projects
                    </a>
                    <a href="#contact" className="hover:text-ink">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
