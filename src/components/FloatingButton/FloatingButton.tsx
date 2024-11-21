// import styling
import "./FloatingButton.scss";

// import component
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// import hook
import useScrollButton from "../../hooks/useScrollButton";

// import util
import { handleScrollToTop } from "../../utils/handleScrollToTop";

const FloatingButton = () => {
    const showFloatingButton = useScrollButton();

    return (
        <>
            {showFloatingButton && (
                <div
                className="floating-button"
                onClick={handleScrollToTop}>
                    <ArrowUpwardIcon
                        sx={{fontSize: "1rem", color: "#FFFFFF"}} />
                </div>
            )}
        </>
    );
};

export default FloatingButton;