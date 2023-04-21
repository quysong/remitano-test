import styled from "styled-components";

export const PaginationStyled = styled.div`
  margin: 16px auto;

  .pagination a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 1px solid #ddd;
    margin: 0 4px;
  }

  .pagination a.active {
    background-color: #b32d2d;
    color: white;
    border: 1px solid #b32d2d;
  }

  .pagination a:hover:not(.active) {
    background-color: #ddd;
  }
`;
