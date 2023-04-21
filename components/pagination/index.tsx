import React from "react";
import { PaginationStyled } from "./style";

interface PaginationProps {
  active: number;
  total: number;
}
const Pagination = ({ active = 1, total = 6 }: PaginationProps) => {
  return (
    <PaginationStyled>
      <div className="pagination">
        <a href="#">&laquo;</a>
        {[...Array(total)].map((_x, index) => (
          <a href="#" className={active === index ? "active" : ""}>
            {index + 1}
          </a>
        ))}
        <a href="#">&raquo;</a>
      </div>
    </PaginationStyled>
  );
};

export default Pagination;
