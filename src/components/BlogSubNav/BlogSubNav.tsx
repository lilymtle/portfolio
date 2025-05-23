// styling
import "./BlogSubNav.scss";

import { useEffect, useState } from "react";
import { sanityClient } from "../../sanity/sanity";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

export function BlogSubNav(): JSX.Element {
const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const query = `*[_type == "category"]{ title}`;
                const data = await sanityClient.fetch(query);
                const categoryTitles = data.map((category: any) => category.title);
                const sortedCategories = categoryTitles.sort((a: string, b: string) =>
                    a.localeCompare(b)
                );
                setCategories(sortedCategories);
            } catch (error) {
                console.error("Error fetching categories:", error);
            };
        };
        fetchCategories();
    }, []);

    return (
        <div className="blog__sub-nav-container">
            <nav className="blog__sub-nav">
                <p className="blog__sub-nav-label">Browse:</p>

                <ul className="blog__sub-nav-list">
                    {categories.map((category) => (
                        <li key={category} className="blog__sub-nav-list-item">
                            <Link
                                className="blog__sub-nav-link"
                                to={`/blog/category/${category}`}
                            >
                                {capitalizeFirstLetter(category)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};