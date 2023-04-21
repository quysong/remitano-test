import styled from "styled-components";

export const PaginationStyled = styled.div`
  margin: 16px auto;

  .pagination span {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 1px solid #ddd;
    margin: 0 4px;
    cursor: pointer;
  }

  .pagination span.active {
    background-color: #b32d2d;
    color: white;
    border: 1px solid #b32d2d;
  }

  .pagination span:hover:not(.active) {
    background-color: #ddd;
  }
`;
