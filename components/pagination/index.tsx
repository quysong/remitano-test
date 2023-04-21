import React, { useState } from "react";
import { PaginationStyled } from "./style";

interface PaginationProps {
  total: number;
  onChangePage: (page: number) => void;
}
const Pagination = ({ total = 6, onChangePage }: PaginationProps) => {
  const [active, setActive] = useState(1);
  const onClick = (page: number) => {
    setActive(page);
    onChangePage(page);
  };
  return (
    <PaginationStyled id="pagination">
      <div className="pagination">
        {[...Array(total)].map((_x, index) => (
          <span
            key={`page-item-${index}`}
            onClick={() => {
              if (active !== index + 1) {
                onClick(index + 1);
              }
            }}
            className={active === index + 1 ? "active" : ""}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </PaginationStyled>
  );
};

export default Pagination;
