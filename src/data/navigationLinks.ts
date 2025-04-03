interface NavigationLink {
    id: number;
    label: string;
    url: string;
};

export const navigationLinks: NavigationLink[] = [
    {
        id: 1,
        label: "Home",
        url: "/blog"
    },
    {
        id: 2,
        label: "About",
        url: "/blog/about"
    },
    {
        id: 3,
        label: "Posts",
        url: "/blog/posts"
    },
    {
        id: 4,
        label: "FAQs",
        url: "/blog/faqs"
    },
    {
        id: 5,
        label: "Contact",
        url: "/blog/contact"
    },
    {
        id: 6,
        label: "Portfolio",
        url: "/"
    }
];