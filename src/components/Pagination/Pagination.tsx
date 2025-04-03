// styling
import "./Pagination.scss";

// components 
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface PaginationProps {
    count: number;
    page: number;
    onChange: (page: number) => void;
};

export default function PaginationOutlined({ count, page, onChange }: PaginationProps) {
    return (
        <article className="pagination">
            <Stack spacing={2}>
                <Pagination 
                    boundaryCount={1} 
                    siblingCount={0}
                    count={count} 
                    page={page}
                    onChange={(_, value) => onChange(value)}
                    variant="outlined"
                />
            </Stack>
        </article>
    );
};