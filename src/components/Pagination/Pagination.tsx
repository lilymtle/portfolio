// styling
import "./Pagination.scss";

// components 
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationOutlined() {
    return (
        <article className="pagination">
            <Stack spacing={2}>
                <Pagination boundaryCount={1} siblingCount={0} count={10} variant="outlined" />
            </Stack>
        </article>
    );
};