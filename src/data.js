// data.js — all the content for the portfolio lives here.
// Replace the example values with your own info.
// Images can be full URLs, or files in /public/images used as "/images/..." paths.

export const profile = {
    name: "Sothcheat Bunna",
    role: "Junior Front-End Developer",
    location: "Phnom Penh, Cambodia",
    avatar: "https://github.com/Sothcheat.png",
    bio: "I'm learning React by building small projects. I enjoy turning designs into clean, responsive web pages.",
};

// level: 1 (just started) → 5 (very comfortable)
export const skills = [
    { id: 1, name: "HTML", level: 5 },
    { id: 2, name: "CSS", level: 4 },
    { id: 3, name: "JavaScript", level: 3 },
    { id: 4, name: "React", level: 2 },
    { id: 5, name: "Git & GitHub", level: 3 },
    { id: 6, name: "Figma", level: 2 },
];

// Test cases built in on purpose:
// - project 3 has NO image  → should show the default placeholder image
// - project 4 has NO link   → the "Live demo" button should not appear
export const projects = [
    {
        id: 1,
        title: "Travel Journal",
        description:
            "A list of places I want to visit, rendered from an array of data with reusable entry components.",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
        tech: ["React", "CSS", "Props"],
        isFeatured: true,
        link: "https://example.com/travel-journal",
    },
    {
        id: 2,
        title: "Personal Portfolio",
        description: "This website! Built with React components, props and a single data file.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
        tech: ["React", "Vite", "CSS"],
        isFeatured: true,
        link: "https://example.com/portfolio",
    },
    {
        id: 3,
        title: "Digital Business Card",
        description: "A small one-page business card with my contact info and social links.",
        // no image on purpose
        tech: ["HTML", "CSS"],
        isFeatured: false,
        link: "https://example.com/business-card",
    },
    {
        id: 4,
        title: "React Facts Page",
        description: "My first React page — a static list of fun facts about React.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
        tech: ["React", "JSX"],
        isFeatured: false,
        // no link on purpose
    },
];

export const socials = {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    email: "you@example.com",
};
