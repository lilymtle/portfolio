// import hooks
import { useEffect, useState } from "react";

const useScrollButton = (scrollThreshold: number = 200) => {
    const [showFloatingButton, setShowFloatingButton] = useState<boolean>(false);

    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            setShowFloatingButton(true);
        } else {
            setShowFloatingButton(false);
        };
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return showFloatingButton;
};

export default useScrollButton;