// styling
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./Blog.scss";
import { Header } from "../../components/Header/Header";

export function BlogPage() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>
                    Blog | Lily Le
                </title>
            </Helmet>
        </HelmetProvider>
    );
};