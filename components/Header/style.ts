import styled from "styled-components";

export const HeaderBlock = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: space-between;

  border-bottom: 4px solid black;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

export const Logo = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 8px;
  :hover {
    cursor: pointer;
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 24px;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
`;
